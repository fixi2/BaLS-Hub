const ChatMessage = require('../models/ChatMessage');

// This is a simplified version. A real-world scenario would involve a more complex NLP/NLU service.
function getBotResponseText(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('pricing') || lowerCaseMessage.includes('price')) {
        return 'You can find our pricing details on the /pricing page. We have Basic, Pro, and Enterprise plans.';
    }
    if (lowerCaseMessage.includes('feature')) {
        return 'We have many features including CLI analysis, API integration, and CI/CD support. Check out the /features page for more!';
    }
    if (lowerCaseMessage.includes('download') || lowerCaseMessage.includes('install')) {
        return 'You can download the installer from our /download page. It supports Windows, Mac, and Linux.';
    }
    if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('support')) {
        return 'I can help with basic questions. If you need to speak with a human, please use the live chat feature.';
    }
    return "I'm not sure how to answer that. Can you try rephrasing?";
}


exports.getBotResponse = async (req, res) => {
    const { message, chatSessionId } = req.body;

    if (!message || !chatSessionId) {
        return res.status(400).json({ msg: 'Message and chatSessionId are required' });
    }

    try {
        // 1. Save user message
        const userMsg = new ChatMessage({
            chatSessionId,
            sender: 'user',
            message
        });
        await userMsg.save();

        // 2. Get bot response
        const botMessageText = getBotResponseText(message);
        
        // 3. Save bot message
        const botMsg = new ChatMessage({
            chatSessionId,
            sender: 'bot',
            message: botMessageText
        });
        await botMsg.save();
        
        // 4. Send response back
        res.json({ response: botMessageText });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}; 