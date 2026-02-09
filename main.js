async function sendMessage() {
    const input = document.getElementById('userInput');
    const messageContainer = document.getElementById('messages');
    
    if (!input.value.trim()) return;

    // Add user message to UI
    messageContainer.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;
    
    const prompt = input.value;
    input.value = '';

    // Mock AI response (Replace with your actual API call)
    setTimeout(() => {
        messageContainer.innerHTML += `<p style="color: #6366f1;"><strong>AI:</strong> This is a sample response to "${prompt}". Integrate an API key to get real answers.</p>`;
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }, 1000);
}
