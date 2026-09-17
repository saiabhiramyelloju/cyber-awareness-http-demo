# Cyber Awareness — Static Login Demo

A simple HTML/CSS/JS login page for classroom cyber-awareness demonstrations.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, and `script.js`.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select the `main` branch and `/root`.
6. Save and open the generated GitHub Pages URL.

## Important

GitHub Pages normally serves the site over HTTPS. This static version does **not** send login credentials to a server.

The included credentials are fictional:
- Username: `demo_student`
- Password: `CyberDemo123`

For a real HTTP-vs-HTTPS Wireshark demonstration where credentials are intentionally visible in a packet capture, run a local training server on an isolated/authorized network rather than exposing an insecure login page to the public Internet.
