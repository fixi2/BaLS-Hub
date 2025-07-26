"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Send,
  Bot,
  User,
  MessageCircle,
  Clock,
  Users,
  HelpCircle,
  Bug,
  CreditCard,
  Settings,
  Phone,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot" | "support"
  timestamp: Date
  type?: "text" | "quick-reply" | "system"
}

export default function LiveChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm BaLS Bot, your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
      type: "text",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isConnectedToSupport, setIsConnectedToSupport] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [supportQueuePosition, setSupportQueuePosition] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickReplies = [
    {
      icon: <Bug className="h-4 w-4" />,
      text: "Report a Bug",
      message: "I found a bug in BaLS Hub",
    },
    {
      icon: <HelpCircle className="h-4 w-4" />,
      text: "How to Use",
      message: "How do I use BaLS Hub?",
    },
    {
      icon: <CreditCard className="h-4 w-4" />,
      text: "Billing Question",
      message: "I have a question about billing",
    },
    {
      icon: <Settings className="h-4 w-4" />,
      text: "Technical Issue",
      message: "I'm having technical problems",
    },
  ]

  const botResponses: { [key: string]: string } = {
    "I found a bug in BaLS Hub":
      "I'm sorry to hear you found a bug! Can you please describe what happened? Include details like:\n\n• What were you trying to do?\n• What actually happened?\n• Your operating system\n• BaLS Hub version\n\nThis will help our team fix it quickly!",
    "How do I use BaLS Hub?":
      "Great question! Here's how to get started with BaLS Hub:\n\n1. **Install**: Download and install BaLS Hub\n2. **Open Project**: Click 'Open Project' and select your code folder\n3. **Configure**: Choose your scan settings\n4. **Scan**: Click 'Start Scan' to analyze your code\n5. **Review**: Check the results and fix any issues\n\nWould you like detailed help with any of these steps?",
    "I have a question about billing":
      "I can help with billing questions! Here are some common topics:\n\n• **Subscription plans**: Basic (Free), Pro ($29/month), Enterprise (Custom)\n• **Payment methods**: We accept all major credit cards\n• **Billing cycle**: Monthly or annual options\n• **Refunds**: 30-day money-back guarantee\n\nWhat specific billing question do you have?",
    "I'm having technical problems":
      "Sorry you're experiencing technical issues! Let me help troubleshoot:\n\n**Common solutions:**\n• Restart BaLS Hub\n• Check for updates\n• Verify system requirements\n• Clear cache and temporary files\n\nWhat specific problem are you encountering? The more details you provide, the better I can help!",
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const sendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse =
        botResponses[content] ||
        "I understand your question. Let me connect you with a human support agent who can provide more detailed assistance."

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date(),
        type: "text",
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)

      // If no specific bot response, suggest connecting to support
      if (!botResponses[content]) {
        setTimeout(() => {
          const supportSuggestion: Message = {
            id: (Date.now() + 2).toString(),
            content: "Would you like me to connect you with a human support agent for more personalized help?",
            sender: "bot",
            timestamp: new Date(),
            type: "quick-reply",
          }
          setMessages((prev) => [...prev, supportSuggestion])
        }, 1000)
      }
    }, 1500)
  }

  const connectToSupport = () => {
    setSupportQueuePosition(3) // Simulate queue position

    const systemMessage: Message = {
      id: Date.now().toString(),
      content: "Connecting you to a human support agent. You are #3 in queue. Estimated wait time: 2-3 minutes.",
      sender: "bot",
      timestamp: new Date(),
      type: "system",
    }

    setMessages((prev) => [...prev, systemMessage])

    // Simulate queue updates
    setTimeout(() => {
      setSupportQueuePosition(2)
      const updateMessage: Message = {
        id: Date.now().toString(),
        content: "You are now #2 in queue. Thank you for your patience!",
        sender: "bot",
        timestamp: new Date(),
        type: "system",
      }
      setMessages((prev) => [...prev, updateMessage])
    }, 30000) // 30 seconds

    setTimeout(() => {
      setSupportQueuePosition(1)
      const updateMessage: Message = {
        id: Date.now().toString(),
        content: "You're next! A support agent will be with you shortly.",
        sender: "bot",
        timestamp: new Date(),
        type: "system",
      }
      setMessages((prev) => [...prev, updateMessage])
    }, 60000) // 1 minute

    setTimeout(() => {
      setIsConnectedToSupport(true)
      setSupportQueuePosition(null)
      const supportMessage: Message = {
        id: Date.now().toString(),
        content: "Hi! I'm Sarah from BaLS Hub support. I see you were chatting with our bot. How can I help you today?",
        sender: "support",
        timestamp: new Date(),
        type: "text",
      }
      setMessages((prev) => [...prev, supportMessage])
    }, 90000) // 1.5 minutes
  }

  const handleQuickReply = (reply: (typeof quickReplies)[0]) => {
    sendMessage(reply.message)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto p-4 pt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Live Chat Support
          </h1>
          <p className="text-gray-300 text-lg">Get instant help from our AI assistant or connect with human support</p>
        </div>

        <Card className="bg-gray-800 border-gray-700 h-[600px] flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b border-gray-700 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {isConnectedToSupport ? (
                    <>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-green-600 text-white">S</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-white text-sm">Sarah - Support Agent</CardTitle>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-green-400">Online</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-blue-600 text-white">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-white text-sm">BaLS Bot</CardTitle>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-green-400">AI Assistant</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {supportQueuePosition && (
                  <Badge variant="outline" className="border-yellow-600 text-yellow-400">
                    <Clock className="h-3 w-3 mr-1" />
                    Queue: #{supportQueuePosition}
                  </Badge>
                )}
                {!isConnectedToSupport && (
                  <Button
                    onClick={connectToSupport}
                    size="sm"
                    variant="outline"
                    className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    Connect to Human
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender !== "user" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback
                      className={`${
                        message.sender === "bot"
                          ? "bg-blue-600"
                          : message.sender === "support"
                            ? "bg-green-600"
                            : "bg-gray-600"
                      } text-white`}
                    >
                      {message.sender === "bot" ? (
                        <Bot className="h-4 w-4" />
                      ) : message.sender === "support" ? (
                        "S"
                      ) : (
                        "!"
                      )}
                    </AvatarFallback>
                  </Avatar>
                )}

                <div className={`max-w-[70%] ${message.sender === "user" ? "order-first" : ""}`}>
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white ml-auto"
                        : message.type === "system"
                          ? "bg-yellow-900/20 border border-yellow-700 text-yellow-300"
                          : "bg-gray-700 text-white"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                </div>

                {message.sender === "user" && (
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-gray-600 text-white">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8 mt-1">
                  <AvatarFallback className={`${isConnectedToSupport ? "bg-green-600" : "bg-blue-600"} text-white`}>
                    {isConnectedToSupport ? "S" : <Bot className="h-4 w-4" />}
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gray-700 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Quick Replies */}
          {!isConnectedToSupport && messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-sm text-gray-400 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    {reply.icon}
                    <span className="ml-1">{reply.text}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Message Input */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={isConnectedToSupport ? "Type your message to support..." : "Type your message..."}
                className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    sendMessage(inputMessage)
                  }
                }}
              />
              <Button
                onClick={() => sendMessage(inputMessage)}
                disabled={!inputMessage.trim()}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Support Info */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">AI Assistant</h3>
              <p className="text-sm text-gray-400">Instant answers 24/7</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Human Support</h3>
              <p className="text-sm text-gray-400">Expert help when needed</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="font-semibold text-white mb-1">Response Time</h3>
              <p className="text-sm text-gray-400">Usually under 2 minutes</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
