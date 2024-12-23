// JavaScript for Hamkin Portfolio

// Chatbox toggle functionality
function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    chatbox.style.display = chatbox.style.display === 'flex' ? 'none' : 'flex';
}

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! We will get back to you shortly.');
        contactForm.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Subscribe form submission
const subscribeForm = document.getElementById('subscribe-form');
subscribeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = subscribeForm.email.value;

    if (email) {
        alert('Thank you for subscribing! You will receive the latest updates.');
        subscribeForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Chatbox form submission
const chatboxForm = document.getElementById('chatbox-form');
const chatboxMessages = document.querySelector('.chatbox-messages');
chatboxForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.getElementById('chatbox-input');
    const userMessage = input.value.trim();

    if (userMessage) {
        displayMessage(userMessage, 'user-message');

        // Ask the bot a specific question based on user input
        setTimeout(() => {
            handleUserMessage(userMessage);
        }, 1000);

        input.value = '';
    } else {
        alert('Please type your question.');
    }
});

function displayMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(type);
    messageDiv.textContent = message;
    chatboxMessages.appendChild(messageDiv);
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight; // Auto-scroll to the latest message
}

function handleUserMessage(message) {
    const lowerCaseMessage = message.toLowerCase();
    let botResponse = '';

    if (lowerCaseMessage.includes('services')) {
        botResponse = 'We offer the following services: Web Design, Trading, Graphic Design, and Social Media Management. Which one would you like to learn more about?';
    } else if (lowerCaseMessage.includes('portfolio')) {
        botResponse = 'You can check out our portfolio featuring Web Design, Graphic Design, Trading Insights, and Web3 Projects. What would you like to see?';
    } else if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('reach')) {
        botResponse = 'Feel free to reach out via the contact form above or through email.';
    } else if (lowerCaseMessage.includes('subscribe')) {
        botResponse = 'You can subscribe to our updates through the form in the footer of the page.';
    } else {
        botResponse = 'Thank you for your message! How can I assist you further?';
    }

    displayMessage(botResponse, 'bot-message');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Toggle the chatbox visibility
function toggleChatbox() {
    const chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
        chatbox.style.display = "flex";
    } else {
        chatbox.style.display = "none";
    }
}

// Send message function
function sendMessage(event) {
    event.preventDefault(); // Prevent form submission

    const inputField = document.getElementById("chatbox-input");
    const messageText = inputField.value.trim();

    if (messageText === "") return; // Don't send empty messages

    // Add user message to chatbox
    addMessage("You: " + messageText, "user");

    // Clear input field
    inputField.value = "";

    // Simulate a response from the chatbot after a delay
    setTimeout(() => {
        addMessage("Bot: Thanks for reaching out! How can I assist you?", "bot");
    }, 1000);
}

// Add message to the chatbox
function addMessage(message, sender) {
    const messageContainer = document.getElementById("chatbox-messages");

    // Create a new message element
    const messageElement = document.createElement("p");
    messageElement.textContent = message;

    // Apply styling based on the sender
    if (sender === "user") {
        messageElement.style.backgroundColor = "#ff6600";
        messageElement.style.color = "#fff";
    } else {
        messageElement.style.backgroundColor = "#e2e2e2";
        messageElement.style.color = "#000";
    }

    // Append the new message to the chatbox
    messageContainer.appendChild(messageElement);

    // Scroll to the latest message
    messageContainer.scrollTop = messageContainer.scrollHeight;
}
