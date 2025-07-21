# Cybersecurity Internship Project: Advanced Threat Detection & Web Security

This project was developed as part of a multi-week cybersecurity internship program. It focuses on detecting and mitigating security vulnerabilities, applying secure coding practices, and conducting advanced security audits in web applications using Node.js and DVWA.

---

## Weeks Summary

| Week | Focus Area                                             |
|------|--------------------------------------------------------|
| 4    | Advanced Threat Detection & Web Security Enhancements  |
| 5    | Ethical Hacking & Vulnerability Exploitation           |
| 6    | Security Audits & Final Secure Deployment              |

---

## Week 4 – Threat Detection & API Hardening

### Tasks Completed

- **Fail2Ban** installed and configured to monitor SSH and web login attempts.
- Real-time alerting for failed SSH login attempts via log monitoring.
- API rate limiting implemented using `express-rate-limit`.
- CORS configured to restrict cross-origin access.
- API key authentication added for secure endpoints.
- Security headers enforced using `helmet`.
- **CSP** and **HSTS** headers configured for script and HTTPS enforcement.

### Tech Used

- Node.js + Express
- Fail2Ban (Kali Linux)
- `helmet`, `express-rate-limit`, `cors`

---

## Week 5 – Ethical Hacking & Exploitation

### Tasks Completed

- Reconnaissance using `nmap`, `whatweb`, and browser inspection.
- **SQL Injection** exploited using SQLMap on DVWA.
- SQLi patched using parameterized queries in Node.js.
- **CSRF** vulnerabilities identified with Burp Suite.
- Patched using `csurf` middleware in Node.js.

### Tools Used

- Kali Linux
- SQLMap
- Burp Suite Community
- DVWA (Docker)
- Node.js (`mysql2`, `csurf`, `express`)

### Report

See: [`/report/ethical-hacking-report.md`](./report/ethical-hacking-report.md)

---

## Week 6 – Security Audits & Final Deployment

### Tasks Completed

- OWASP ZAP scan conducted on DVWA
- Nikto scan on localhost
- Lynis system audit on Kali VM
- Checked compliance with OWASP Top 10 risks
- Enabled unattended security updates (`unattended-upgrades`)
- Used `npm audit` and GitHub Dependabot for dependency scanning
- Docker image scanned using Trivy
- Penetration testing using Burp Suite & Metasploit

### Tools Used

- OWASP ZAP
- Nikto
- Lynis
- Burp Suite
- Metasploit
- Trivy (Docker image scan)

---

## How to Run API Locally

```bash
cd nodejs-fixes
npm install
npm start
