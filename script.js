
window.onload = function() {

    setTimeout(function() {
        // Add fade-out effect to loading screen
        document.getElementById("loading").classList.add("fade-out");

        // Wait for the fade-out to complete, then show the content
        setTimeout(function() {
            document.getElementById("loading").style.display = "none"; // Hide loading screen
            document.getElementById("content").style.display = "block"; // Show main content
            document.getElementById("content").classList.add("fade-in"); // Fade in content
        }, 1000); // Wait for the fade-out transition (1s)
        
    }, 3100); // 3100ms = 3.1 seconds
};