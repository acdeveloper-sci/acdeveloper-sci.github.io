/* ── Theme toggle ─────────────────────────────────── */
    const root = document.documentElement;
    const btn  = document.getElementById('theme-toggle');
    const STORAGE_KEY = 'acscicomp-theme';

    function getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
      btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }

    function initTheme() {
      const saved = localStorage.getItem(STORAGE_KEY);
      applyTheme(saved || getSystemTheme());
    }

    btn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || getSystemTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });

    initTheme();

    /* ── Typewriter ──────────────────────────────────── */
    const lines = [
      'python simulate.py --model HEC-RAS --basin rio_otun',
      'cv2.VideoCapture(0) | detect_pose() | overlay()',
      'geopandas.read_file("watershed.shp").dissolve()',
      'FastAPI().include_router(hydro_router)',
    ];
    let li = 0, ci = 0, deleting = false;
    const tw = document.getElementById('typewriter');

    function type() {
      const line = lines[li];
      if (!deleting) {
        ci++;
        tw.textContent = line.slice(0, ci);
        if (ci === line.length) { deleting = true; setTimeout(type, 2200); return; }
        setTimeout(type, 42);
      } else {
        ci--;
        tw.textContent = line.slice(0, ci);
        if (ci === 0) { deleting = false; li = (li + 1) % lines.length; setTimeout(type, 400); return; }
        setTimeout(type, 18);
      }
    }
    setTimeout(type, 800);

    /* ── Scroll reveal ───────────────────────────────── */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* ── Mobile hamburger (simple toggle) ────────────── */
    document.getElementById('hamburger').addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '56px';
      links.style.left = '0'; links.style.right = '0';
      links.style.background = 'var(--nav-bg)';
      links.style.padding = '1rem 2rem 1.5rem';
      links.style.borderBottom = '1px solid var(--border)';
      links.style.backdropFilter = 'blur(12px)';
    });