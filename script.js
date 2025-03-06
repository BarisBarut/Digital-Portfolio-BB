document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const blogPost = this.closest('.blog-post');
            const summary = blogPost.querySelector('.blog-summary');
            const fullContent = blogPost.querySelector('.blog-full');
            
            if (fullContent.style.display === 'none') {
                summary.style.display = 'none';
                fullContent.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                summary.style.display = 'block';
                fullContent.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
    // Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    
    // Exit if chatbot elements don't exist on this page
    if (!chatMessages || !userInput || !sendButton) return;

    // Network-related responses dictionary
    const responses = {
        "reset router": "To reset your router, follow these steps:\n1. Locate the reset button (usually a small hole on the back)\n2. Press and hold for 10 seconds using a paperclip\n3. Wait for the lights to flash\n4. Router will restart with default settings",
        
        "wifi password": "To change your WiFi password:\n1. Log into your router's admin panel (typically 192.168.1.1 or 192.168.0.1)\n2. Look for Wireless or WiFi settings\n3. Find the Security or Password section\n4. Enter your new password\n5. Save your settings",
        
        "slow internet": "If you're experiencing slow internet, try these troubleshooting steps:\n1. Restart your router and modem\n2. Check for interference from other devices\n3. Try connecting via Ethernet to test if it's a WiFi issue\n4. Contact your ISP if the problem persists",
        
        "connect device": "To connect a new device to your network:\n1. Go to WiFi settings on your device\n2. Select your network name (SSID)\n3. Enter your WiFi password\n4. If using Ethernet, simply connect an Ethernet cable between your device and router",
        
        "default login": "Most routers have the following default credentials:\n- Username: admin\n- Password: admin or password\n\nCheck the bottom of your router for specific information, as it varies by manufacturer.",
        
        "setup network": "To set up a basic home network:\n1. Connect your modem to the internet outlet\n2. Connect your router to the modem\n3. Power on both devices (modem first)\n4. Follow your router's setup instructions to configure WiFi",
        
        "ip address": "To find your IP address:\n- Windows: Open Command Prompt and type 'ipconfig'\n- Mac: Go to System Preferences > Network\n- Linux: Open Terminal and type 'ifconfig' or 'ip addr'\n\nYour local IP typically starts with 192.168.",
        
        "port forwarding": "To set up port forwarding:\n1. Access your router's admin interface\n2. Find Port Forwarding settings (sometimes under Advanced)\n3. Create a new rule with the port number, protocol (TCP/UDP), and the local IP of your device\n4. Save your settings",
        
        "guest network": "To set up a guest network:\n1. Access your router's admin interface\n2. Look for Guest Network settings\n3. Enable the guest network feature\n4. Set a network name and password\n5. Consider limiting bandwidth and access to your main network",
        
        "hello": "Hello! I'm NetBot. How can I help you with your networking needs today?",
        "hi": "Hi there! How can I assist with your networking questions?",
        "help": "I can help with various networking topics including router setup, WiFi troubleshooting, password changes, and network configuration. What do you need help with?"
    };

    // Default response for unknown queries
    const defaultResponse = "I don't have information on that specific topic. I can help with: resetting routers, changing WiFi passwords, troubleshooting slow internet, connecting devices, finding default logins, setting up networks, finding IP addresses, configuring port forwarding, or setting up guest networks.";

    // Function to get response based on user input
    function getResponse(input) {
        input = input.toLowerCase().trim();
        
        // Check for matching keywords in our responses
        for (const key in responses) {
            if (input.includes(key)) {
                return responses[key];
            }
        }
        
        // Return default response if no match
        return defaultResponse;
    }

    // Function to add a message to the chat window
    function addMessage(message, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user' : 'bot');
        
        // Handle line breaks in responses
        message = message.replace(/\n/g, '<br>');
        messageDiv.innerHTML = message;
        
        chatMessages.appendChild(messageDiv);
        
        // Auto-scroll to the bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Function to handle user input
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addMessage(message, true);
        
        // Clear input field
        userInput.value = '';
        
        // Simulate thinking time (optional)
        setTimeout(() => {
            // Get and display bot response
            const botResponse = getResponse(message);
            addMessage(botResponse, false);
        }, 500);
    }

    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});

});
