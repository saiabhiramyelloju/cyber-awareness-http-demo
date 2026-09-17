const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Classroom demo only: nothing is sent to a server.
  result.classList.remove("hidden");
  result.innerHTML = `
    <strong>Demo login accepted</strong><br>
    Fake username: <code>${escapeHtml(username)}</code><br>
    Fake password: <code>${escapeHtml(password)}</code><br><br>
    This static GitHub Pages version does not transmit credentials anywhere.
  `;
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}
