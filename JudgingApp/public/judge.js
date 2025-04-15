const API_URL = "https://judgingapp-97rm.onrender.com/api";

const searchBtn = document.getElementById("searchBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", async () => {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const eventsList = document.getElementById("eventsList");
    eventsList.innerHTML = "Searching...";

    try {
      const response = await fetch(`${API_URL}/events`);
      const events = await response.json();

      const filtered = events.filter(evt =>
        evt.name.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        eventsList.innerHTML = "<p>No events found.</p>";
        return;
      }

      let html = "<ul>";
      filtered.forEach(evt => {
        html += `
          <li>
            <strong>${evt.name}</strong> - ${evt.description || "No description"}
            <button class="btn btn--secondary" onclick="viewProjects(${evt.id})">View Projects</button>
          </li>
        `;
      });
      html += "</ul>";
      eventsList.innerHTML = html;
    } catch (err) {
      eventsList.innerHTML = "<p>Failed to fetch events.</p>";
    }
  });
}

function viewProjects(eventId) {
  alert("You clicked View Projects for event ID: " + eventId);
}
