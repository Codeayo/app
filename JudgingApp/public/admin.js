const API_URL = 'http://localhost:3000/api';

// Optional: Require login for admin dashboard
function checkAuth() {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = "login.html";
  }
}
checkAuth();

function getAuthHeaders() {
  return {
    'Content-Type': 'application/json'
  };
}

// ================== EVENTS ==================

const addEventBtn = document.getElementById("addEventBtn");
const eventForm = document.getElementById("eventForm");
const saveEventBtn = document.getElementById("saveEventBtn");
const cancelEventBtn = document.getElementById("cancelEventBtn");

if (addEventBtn) {
  addEventBtn.addEventListener("click", () => eventForm.style.display = "block");
}
if (cancelEventBtn) {
  cancelEventBtn.addEventListener("click", () => eventForm.style.display = "none");
}
if (saveEventBtn) {
  saveEventBtn.addEventListener("click", async () => {
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;

    try {
      const res = await fetch(`${API_URL}/events`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ name, date })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create event');

      alert(`✅ ${data.message}`);
      eventForm.reset();
      eventForm.style.display = "none";
    } catch (err) {
      alert(err.message);
    }
  });
}

// ================== JUDGES ==================

const addJudgeBtn = document.getElementById("addJudgeBtn");
const judgeForm = document.getElementById("judgeForm");
const saveJudgeBtn = document.getElementById("saveJudgeBtn");
const cancelJudgeBtn = document.getElementById("cancelJudgeBtn");

if (addJudgeBtn) {
  addJudgeBtn.addEventListener("click", () => judgeForm.style.display = "block");
}
if (cancelJudgeBtn) {
  cancelJudgeBtn.addEventListener("click", () => judgeForm.style.display = "none");
}
if (saveJudgeBtn) {
  saveJudgeBtn.addEventListener("click", async () => {
    const id = document.getElementById("judgeId").value;
    const password = document.getElementById("judgePassword").value;

    try {
      const res = await fetch(`${API_URL}/judges`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ id, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create judge');

      alert("✅ Judge created successfully!");
      judgeForm.reset();
      judgeForm.style.display = "none";
    } catch (err) {
      alert(err.message);
    }
  });
}

// ================== PROJECTS ==================

const addProjectBtn = document.getElementById("addProjectBtn");
const projectForm = document.getElementById("projectForm");
const saveProjectBtn = document.getElementById("saveProjectBtn");
const cancelProjectBtn = document.getElementById("cancelProjectBtn");

if (addProjectBtn) {
  addProjectBtn.addEventListener("click", () => projectForm.style.display = "block");
}
if (cancelProjectBtn) {
  cancelProjectBtn.addEventListener("click", () => projectForm.style.display = "none");
}
if (saveProjectBtn) {
  saveProjectBtn.addEventListener("click", async () => {
    const title = document.getElementById("projectName").value;
    const description = document.getElementById("projectDesc").value;
    const event_id = document.getElementById("eventId").value;
    const user_id = document.getElementById("projectUserId").value; // admin can assign student manually

    try {
      const res = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ title, description, event_id, user_id })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create project');

      alert("✅ Project created successfully!");
      projectForm.reset();
      projectForm.style.display = "none";
    } catch (err) {
      alert(err.message);
    }
  });
}
