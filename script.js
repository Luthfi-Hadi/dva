const correctName = ["Diva", "diva", "Cay", "cay"];

function checkName() {
    const enteredName = document.getElementById('nameInput').value.trim().toLowerCase();
    const errorMessage = document.getElementById('errorMessage');
    const accessForm = document.getElementById('accessForm');
    const specialMessage = document.getElementById('specialMessage');
    const song = document.getElementById('song');
    const body = document.body; // Get the body element

    if (correctName.includes(enteredName)) {
        accessForm.style.display = 'none';
        specialMessage.style.display = 'block';

        // Change the background image
        body.style.backgroundImage = "url('Pictures/Untitled design (2).png')";
        body.style.backgroundSize = "cover"; // Cover the whole background
        body.style.backgroundPosition = "center"; // Center the image

        // Reset animation
        specialMessage.classList.remove('fadeIn');
        void specialMessage.offsetWidth; // Trigger reflow
        specialMessage.classList.add('fadeIn');

        song.play();
    } else {
        errorMessage.textContent = "Sorry, this private message is not for you.";
    }
}