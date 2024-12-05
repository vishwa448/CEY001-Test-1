document.addEventListener('DOMContentLoaded', async() => {
  console.log('Home page loaded');

    //  after html is loaded (after page is loaded)
  createProfileCard(await fetchProfileData()); 
});

class ProfileCard {
  constructor(name, bio) {
    this.name = name;
    this.bio = bio;
    this.cardElement = null; // To store the dynamically created DOM element
    this.timeoutId = null; // To keep track of the timeout for status change
  }

  render(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with ID "${containerId}" not found.`);
    }

    // Template for the profile card
    const template = `
      <div class="profile-card">
        <h2>${this.name}</h2>
        <p>${this.bio}</p>
        <span class="status-dot"></span>
      </div>
    `;

    // Injecting the template into the DOM
    const wrapper = document.createElement("div");
    wrapper.innerHTML = template.trim();
    this.cardElement = wrapper.firstChild; // Save reference to the card element
    container.appendChild(this.cardElement);

    return this; // Return the instance for chaining
  }

  status(statusValue) {
    if (!this.cardElement) {
      throw new Error("The card has not been rendered yet.");
    }

    const statusDot = this.cardElement.querySelector(".status-dot");
    if (!statusDot) {
      throw new Error("Status dot element not found in the card.");
    }

    // Reset any existing status classes
    statusDot.className = "status-dot";

    // Add new status class based on statusValue
    const validStatuses = ["online", "offline", "idle"];
    if (validStatuses.includes(statusValue)) {
      statusDot.classList.add(statusValue);
    } else {
      throw new Error(`Invalid status: "${statusValue}". Use "online", "offline", or "idle".`);
    }
  }

  setStatusTimeout(statusValue, delay) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); // Clear any existing timeout to prevent conflicts
    }

    this.timeoutId = setTimeout(() => {
      this.status(statusValue);
    }, delay);
  }
}


 // Example Usage
 const userData = [
  { name: "Janith", bio: "A short bio", initialStatus: "online" },
  { name: "Amara", bio: "Another bio", initialStatus: "idle" },
  { name: "Sanjeewa", bio: "Loves coding", initialStatus: "offline" },
];

// Render cards and set initial statuses
const profiles = userData.map(user => {
  const profile = new ProfileCard(user.name, user.bio).render("containerId");
  profile.status(user.initialStatus);
  return profile;
});

// Set up automatic status changes with timeouts
profiles[0].setStatusTimeout("offline", 5000); // Change to "offline" after 5 seconds
profiles[1].setStatusTimeout("online", 7000); // Change to "online" after 7 seconds
profiles[2].setStatusTimeout("idle", 10000); // Change to "idle" after 10 seconds