# acscicomp.com — Professional Landing Page

Personal and professional landing page for **Adolfo J. Cardozo S.**,
scientific computing engineer and independent researcher.

🌐 **Live site:** [acscicomp.com](https://acscicomp.com)
📁 **Open source portfolio:** [acscicomp.com/portfolio_acdeveloper/](https://acscicomp.com/portfolio_acdeveloper/)

## Tech stack

- HTML5 / CSS3 / Vanilla JavaScript — no build step, no dependencies
- EN / ES bilingual — `data-i18n` pattern, language persisted in `localStorage`
- Dark / light theme — OS-level detection and manual override, persisted in `localStorage`
- Responsive layout — mobile (portrait & landscape), tablet, desktop
- Hosted on GitHub Pages with custom domain via Cloudflare DNS

## Repository structure

```
acdeveloper-sci.github.io/
├── index.html               — main page (HTML only, no inline CSS or JS)
├── CNAME                    — custom domain configuration for GitHub Pages
├── LICENSE                  — MIT open source license
└── assets/
    ├── css/
    │   └── main.css         — all styles, dark/light theme tokens
    ├── js/
    │   ├── theme-init.js    — runs in <head>: applies saved theme and language before first paint
    │   └── main.js          — i18n system, theme toggle, mobile menu, typewriter, scroll reveal
    └── img/
        ├── logo-acscicomp.svg   — original logo (Adolfo J. Cardozo S.)
        └── logo-acscicomp.png   — raster fallback
```

## License

MIT — see [LICENSE](LICENSE) for details.