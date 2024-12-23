const chatbotResponses = {
    "What services do you offer?": "I offer services in web design, development, social media management, graphic design, trading insights, and Web3 solutions.",
    "Can I see examples of your work?": "Sure! Check out my portfolio section to see examples of my web design, graphic design, and social media projects.",
    "How can I contact you?": "You can reach me via the contact form on the website or through LinkedIn, Facebook, X, and Instagram.",
    "Do you collaborate on projects?": "Yes, I'm open to collaborations! Feel free to get in touch through the contact form or social media.",
    "What are your rates?": "My rates depend on the project scope. Please contact me with project details for a customized quote.",
    "How can I stay updated with your work?": "You can subscribe to my newsletter for updates on new projects and services!"
};

const sendButton = document.getElementById('chatbox-send');
const input = document.getElementById('chatbox-input');
const chatboxMessages = document.querySelector('.chatbox-messages');

const sendMessage = () => {
    const userInput = input.value.trim();

    if (userInput) {
        chatboxMessages.innerHTML += `<div class="chat-message user-message">${userInput}</div>`;
        const response = chatbotResponses[userInput] || "Sorry, I don't have an answer for that yet.";
        
        setTimeout(() => {
            chatboxMessages.innerHTML += `<div class="chat-message bot-message">${response}</div>`;
            chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        }, 1000);

        input.value = '';
    }
};

sendButton.addEventListener('click', sendMessage);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
