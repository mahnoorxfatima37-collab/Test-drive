
let selectedStyle = "Not selected";
let savedOutfits = [];

function showScreen(screenId) {

    // Hide all screens
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.add("hidden");
    });

    // Display selected screen
    document.getElementById(screenId).classList.remove("hidden");

    // Update profile information
    document.getElementById("profileStyle").textContent =
        selectedStyle;

    window.scrollTo(0, 0);
}

// Select a fashion personality
function selectStyle(style) {
    selectedStyle = style;

    document.getElementById("styleResult").textContent =
        style;

    document.getElementById("profileStyle").textContent =
        style;
}

// Save an outfit
function saveOutfit(outfit) {

    if (!savedOutfits.includes(outfit)) {
        savedOutfits.push(outfit);
    }

    updateSavedList();

    alert(outfit + " has been saved!");
}

// Display saved outfits
function updateSavedList() {

    const list = document.getElementById("savedList");

    if (savedOutfits.length === 0) {
        list.innerHTML = "<p>No saved outfits yet.</p>";
        return;
    }

    list.innerHTML = savedOutfits.map(outfit => `
        <div class="saved-item">
            <p>${outfit}</p>
            <button onclick="removeOutfit('${outfit}')">
                Remove
            </button>
        </div>
    `).join("");
}

// Remove saved outfit
function removeOutfit(outfit) {

    savedOutfits = savedOutfits.filter(
        item => item !== outfit
    );

    updateSavedList();
}

// Start app on Home screen
showScreen("home");
