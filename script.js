window.onload = () => {
    const searchIcon = document.getElementById('search-icon');
    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');

    searchIcon.onclick = () => {
        // Handle user search logic here
        alert('Open search page for number input');
    };

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = messageInput.value;
            if (message) {
                // Simulate sending a message to the chat box
                chatBox.innerHTML += `<p>${message}</p>`;
                messageInput.value = ''; // clear input
            }
        }
    });

    document.getElementById('image-upload').onclick = () => {
        // Logic to open file upload dialog
        alert('Open file upload dialog');
    };

    document.getElementById('add-person').onclick = () => {
        // Logic to add new person to the conversation
        alert('Add a person to the conversation');
    };

    document.getElementById('groups-icon').onclick = () => {
        // Logic to create group chat
        alert('Open group creation page');
    };
};

// Function to generate random guest phone number
function generateGuestNumber() {
    const randomDigits = Math.floor(Math.random() * 10000000000).toString();
    return `Guest${randomDigits}`;
}
