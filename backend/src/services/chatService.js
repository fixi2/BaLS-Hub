const WebSocket = require('ws');
const ChatMessage = require('../models/ChatMessage');
const { v4: uuidv4 } = require('uuid');

function initializeChat(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    const chatSessionId = uuidv4();
    console.log('Client connected to chat');

    // Send a welcome message from the bot
    const welcomeMessage = {
      chatSessionId,
      sender: 'bot',
      message: 'Hello! How can I help you today? You can ask me about pricing, features, or downloads.',
    };
    ws.send(JSON.stringify(welcomeMessage));
    saveMessage(welcomeMessage);

    ws.on('message', (message) => {
      console.log(`Received message: ${message}`);
      
      const parsedMessage = JSON.parse(message);
      const userMessage = {
        chatSessionId,
        sender: 'user',
        message: parsedMessage.message,
        // In a real app, you'd associate this with a logged-in user if available
      };
      saveMessage(userMessage);

      // Simple bot logic
      const botResponse = getBotResponse(parsedMessage.message);
      const botMessage = {
        chatSessionId,
        sender: 'bot',
        message: botResponse,
      };

      // Broadcast user message and bot response to all clients (for simplicity)
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(userMessage));
          setTimeout(() => client.send(JSON.stringify(botMessage)), 1000); // Simulate bot "thinking"
        }
      });
      
      saveMessage(botMessage);
    });

    ws.on('close', () => {
      console.log('Client disconnected from chat');
    });
  });
}

async function saveMessage(msg) {
  try {
    const chatMessage = new ChatMessage(msg);
    await chatMessage.save();
  } catch (err) {
    console.error('Failed to save chat message:', err);
  }
}

function getBotResponse(userMessage) {
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
        return 'I can help with basic questions. If you need to speak with a human, please type "connect to operator".';
    }
    if (lowerCaseMessage.includes('connect to operator')) {
        return 'Connecting you to an operator... Please wait.';
        // Here you would implement logic to hand over to a human operator queue.
    }
    return "I'm not sure how to answer that. Can you try rephrasing? You can also ask to 'connect to operator'.";
}


module.exports = { initializeChat }; 