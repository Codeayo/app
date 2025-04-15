// ==============================
// JUDGE LOGIN
const judgeLoginForm = document.getElementById("loginForm");
if (judgeLoginForm) {
  judgeLoginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const judgeId = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch("http://localhost:3000/api/judges/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ judgeId, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        document.getElementById("loginError").textContent = data.error || "Login failed.";
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "judge-dashboard.html";
      }
    } catch (err) {
      document.getElementById("loginError").textContent = "Server error. Please try again.";
    }
  });
}

// ==============================
// JUDGE REGISTER
const judgeRegisterForm = document.getElementById("registerForm");
if (judgeRegisterForm) {
  judgeRegisterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const judgeId = document.getElementById("judgeId").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      document.getElementById("passwordError").textContent = "Passwords do not match.";
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/judges/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ judgeId, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        document.getElementById("passwordError").textContent = data.error || "Registration failed.";
      } else {
        alert("Registration successful. Please log in.");
        window.location.href = "judge-login.html";
      }
    } catch (err) {
      document.getElementById("passwordError").textContent = "Server error. Please try again.";
    }
  });
}

// ==============================
// STUDENT LOGIN
const studentLoginForm = document.getElementById("studentLoginForm");
if (studentLoginForm) {
  studentLoginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await fetch("http://localhost:3000/api/student/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        document.getElementById("studentLoginError").textContent = data.error || "Login failed.";
      } else {
        localStorage.setItem("user", JSON.stringify(data));
        window.location.href = "student-dashboard.html";
      }
    } catch (err) {
      document.getElementById("studentLoginError").textContent = "Server error. Please try again.";
    }
  });
}

// ==============================
// STUDENT REGISTER
const studentRegisterForm = document.getElementById("studentRegisterForm");
if (studentRegisterForm) {
  studentRegisterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/student/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        errorMessage.textContent = data.error || "Registration failed.";
      } else {
        alert("Registration successful. You can now log in.");
        window.location.href = "student.html";
      }
    } catch (err) {
      errorMessage.textContent = "Server error. Please try again later.";
    }
  });
}