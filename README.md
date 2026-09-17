# HTTP MITM / Wireshark Classroom Demo

A deliberately insecure **HTTP** login page for a controlled cybersecurity awareness demonstration.

## Safety
Use only on systems and networks you own or have explicit permission to test. Use fake credentials such as:

- Username: `demo_student`
- Password: `CyberDemo123`

Do not enter real credentials.

## Run

### Windows / Linux / macOS

```bash
python -m venv .venv
# Linux/macOS
source .venv/bin/activate
# Windows PowerShell
# .venv\\Scripts\\Activate.ps1

pip install -r requirements.txt
python app.py
```

Open:

```text
http://127.0.0.1:8080
```

For a second machine on the same isolated lab network, use the host machine's LAN IP, for example:

```text
http://192.168.1.50:8080
```

## Wireshark demo

1. Start Wireshark on the machine that is authorized to capture the lab traffic.
2. Select the correct network interface.
3. Use a capture filter appropriate to your lab, or simply capture and then filter with:

```text
http
```

4. Submit the demo login.
5. Find the HTTP POST request to `/login`.
6. Use **Follow → HTTP Stream** (or inspect the packet details) to show the form fields.
7. You should see the fake values in plaintext because the request is HTTP, not HTTPS.

## Teaching point

Repeat the same demonstration over HTTPS in a separate controlled lab and show that passive packet capture does not expose the password as plaintext.
