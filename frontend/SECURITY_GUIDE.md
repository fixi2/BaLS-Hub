# Secure HTML Rendering Guide

This project uses `dompurify` to prevent XSS attacks when rendering HTML content from the backend (e.g., blog posts, documentation).

## Usage

When you create a component to display user-generated or CMS-managed content, you **must** sanitize it with `DOMPurify` before rendering it with `dangerouslySetInnerHTML`.

### Example: Blog Post Page

Here's how to correctly implement a component that renders a blog post's content:

```tsx
// app/blog/[slug]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

interface Post {
  title: string;
  content: string; // This content might contain malicious HTML
}

// Assume this function fetches the post data from your API
async function getPostBySlug(slug: string): Promise<Post> {
  // const res = await fetch(`/api/posts/${slug}`);
  // const post = await res.json();
  // For demonstration:
  const post = {
    title: 'Example Post',
    content: '<h1>Hello!</h1><p>This is some content.</p><script>alert("XSS Attack!");</script>',
  };
  return post;
}


export default function PostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [sanitizedContent, setSanitizedContent] = useState('');

  useEffect(() => {
    getPostBySlug(params.slug).then(fetchedPost => {
      setPost(fetchedPost);
      // Sanitize the content ONLY on the client-side
      setSanitizedContent(DOMPurify.sanitize(fetchedPost.content));
    });
  }, [params.slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </article>
  );
}

### Key Points

1.  **Always Sanitize:** Never pass raw HTML from your API directly to `dangerouslySetInnerHTML`.
2.  **Client-Side Only:** `DOMPurify` requires a `window` object, so it can only run on the client side. Use it inside a `useEffect` hook or in a component marked with `'use client'`.

By following this pattern, you ensure that any malicious scripts or tags are removed before the content is rendered in the browser, protecting your users.

---

## Global API Client for Secure Session Management

This project includes a global Axios client in `lib/api.ts` that should be used for all requests to the backend.

### Why?

-   **Automatic Token Injection:** It automatically attaches the `x-auth-token` header to every request.
-   **Global 401 Handling:** It intercepts all API responses. If it detects a `401 Unauthorized` error (e.g., your token has expired), it will automatically clear the session from `localStorage` and redirect you to the login page. This prevents users from being "stuck" in a logged-out state.

### Usage

Instead of using `fetch` or a default `axios` instance, import and use the custom `api` client:

```tsx
import api from '@/lib/api';

// Example of fetching posts in an admin panel
async function getPosts() {
  try {
    const res = await api.get('/posts');
    return res.data;
  } catch (error) {
    // The 401 error will be handled globally, but you can handle other errors here.
    console.error("Failed to fetch posts:", error);
  }
}
```

By consistently using this client, you ensure that session management is robust and secure across the application. 