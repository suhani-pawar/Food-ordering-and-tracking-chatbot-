// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Chatbot interaction
document.getElementById('chatbot-icon').addEventListener('click', function() {
    // Create a div to hold the chatbot
    const chatbotDiv = document.createElement('div');
    chatbotDiv.style.position = 'fixed';
    chatbotDiv.style.bottom = '20px';
    chatbotDiv.style.right = '20px';
    chatbotDiv.style.width = '350px';
    chatbotDiv.style.height = '430px';
    chatbotDiv.style.zIndex = '1000';
    chatbotDiv.style.backgroundColor = '#fff';
    chatbotDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    chatbotDiv.style.borderRadius = '8px';
    
    // Set the iframe for the chatbot and the close button
    chatbotDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px;">
            <h4 style="margin: 0;">Chatbot</h4>
            <button id="close-chatbot" style="background: none; border: none; cursor: pointer; font-size: 16px;">&times;</button>
        </div>
        <div style="position: relative; width: 100%; height: calc(100% - 50px);">
            <iframe width="100%" height="100%" allow="microphone;" 
            src="https://console.dialogflow.com/api-client/demo/embedded/2a45979b-af0a-4882-a92e-a5210e75ac88"></iframe>
        
            
        </div>
    `;
    
    // Append the chatbot to the body
    document.body.appendChild(chatbotDiv);
    
    // Close the chatbot when the close button is clicked
    document.getElementById('close-chatbot').addEventListener('click', function() {
        document.body.removeChild(chatbotDiv);
    });
});
