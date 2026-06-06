# Security Policy

## Supported versions

Only the latest tagged release receives security fixes.

| Version | Supported |
| ------- | --------- |
| latest  | ✅         |
| older   | ❌         |

## Reporting a vulnerability

**Do not open a public GitHub issue for security bugs.**

Report vulnerabilities via one of:

1. **GitHub private vulnerability disclosure** - use the "Report a vulnerability" button on the Security tab of this repository.
2. **Email** - contact the maintainer through their [GitHub profile](https://github.com/germondai).

### Response SLA

- **Acknowledge** within 48 hours
- **Patch for critical issues** within 7 days
- **Patch for moderate issues** within 30 days

## Scope

Issues considered in scope:

- XSS via unsanitized MDX content or config values rendered in the browser
- Dependency vulnerabilities with a known CVE (report via Dependabot or the disclosure process above)
- Docker image escape or privilege escalation
- Directory traversal if using custom avatar URLs or cover image paths

Out of scope:

- Issues in forks or self-hosted deployments modified from the upstream source
- Social engineering attacks
- Denial-of-service against a self-hosted instance (the operator controls their own infra)
- Bugs in content authored by the site owner in their own MDX posts
