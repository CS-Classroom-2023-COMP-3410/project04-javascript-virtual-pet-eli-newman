// Pet status variables
let hunger = 50;
let happiness = 50;
let energy = 50;

// Load saved data from localStorage
function loadPet() {
    if (localStorage.getItem('hunger')) {
        hunger = parseInt(localStorage.getItem('hunger'));
        happiness = parseInt(localStorage.getItem('happiness'));
        energy = parseInt(localStorage.getItem('energy'));
    }
    updateDisplay();
}

// Save data to localStorage
function savePet() {
    localStorage.setItem('hunger', hunger);
    localStorage.setItem('happiness', happiness);
    localStorage.setItem('energy', energy);
}

// Update the display
function updateDisplay() {
    document.getElementById('hunger').textContent = hunger;
    document.getElementById('happiness').textContent = happiness;
    document.getElementById('energy').textContent = energy;
    
    // Update mood and pet color based on status
    let pet = document.getElementById('pet');
    let mood = document.getElementById('mood');
    
    if (hunger < 20 || happiness < 20 || energy < 20) {
        mood.textContent = 'Mood: Sad';
        pet.style.backgroundColor = '#FF6B6B';
    } else if (hunger > 70 && happiness > 70 && energy > 70) {
        mood.textContent = 'Mood: Very Happy';
        pet.style.backgroundColor = '#90EE90';
    } else {
        mood.textContent = 'Mood: Okay';
        pet.style.backgroundColor = '#FFD93D';
    }
    
    savePet();
}

// Feed the pet
function feed() {
    hunger = Math.min(100, hunger + 20);
    energy = Math.max(0, energy - 5);
    updateDisplay();
}

// Play with the pet
function play() {
    happiness = Math.min(100, happiness + 20);
    hunger = Math.max(0, hunger - 10);
    energy = Math.max(0, energy - 10);
    updateDisplay();
}

// Put pet to sleep
function sleep() {
    energy = Math.min(100, energy + 30);
    hunger = Math.max(0, hunger - 10);
    updateDisplay();
}

// Decrease stats over time
function decreaseStats() {
    hunger = Math.max(0, hunger - 3);
    happiness = Math.max(0, happiness - 2);
    energy = Math.max(0, energy - 2);
    updateDisplay();
}

// Event listeners for buttons
document.getElementById('feedBtn').addEventListener('click', feed);
document.getElementById('playBtn').addEventListener('click', play);
document.getElementById('sleepBtn').addEventListener('click', sleep);

// Load pet on page load
loadPet();

// Decrease stats every 5 seconds
setInterval(decreaseStats, 5000);
