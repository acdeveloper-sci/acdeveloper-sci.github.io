document.documentElement.classList.add('js');
const root = document.documentElement;

/* ── Language EN / ES ─────────────────────────────────────────── */
const ES = {
  "skip":           "Saltar al contenido",
  "nav.services":   "Servicios",
  "nav.projects":   "Proyectos",
  "nav.about":      "Acerca de",
  "nav.contact":    "Contacto",
  "nav.portfolio":  "Portafolio",
  "nav.hire":       "Contrátame ↗",
  "tag.sc":         "Computación Científica",
  "tag.cv":         "Visión por Computador",
  "tag.gis":        "SIG e Hidrología",
  "hero.sub":       "Ingeniero en computación científica e investigador independiente con casi cinco décadas en la intersección entre las ciencias físicas y el código. Construyo herramientas que hacen computables los problemas difíciles.",
  "hero.cta1":      "Contrátame en Fiverr ↗",
  "hero.cta2":      "Ver proyectos",
  "srv.eyebrow":    "Lo que hago",
  "srv.title":      "Servicios",
  "srv.intro":      "Desarrollo integral para flujos de trabajo científicos e ingeniería — desde datos crudos y modelos físicos hasta sistemas Python desplegables.",
  "srv.1t":         "Modelado Numérico y Simulación",
  "srv.1p":         "Modelos de proceso integrados, estocásticos y deterministas, construidos a partir de ecuaciones de base física y validados con conjuntos de datos reales.",
  "srv.2t":         "SIG y Análisis Espacial",
  "srv.2p":         "Pipelines de datos espaciales, delimitación de cuencas hidrográficas, análisis de terreno y herramientas de cartografía personalizadas integrando capas ráster y vectoriales.",
  "srv.3t":         "Visión por Computador",
  "srv.3p":         "Análisis de video en tiempo real, estimación de pose, detección de objetos y pipelines de CV personalizados ejecutados en hardware local.",
  "srv.4t":         "IA y Aprendizaje Automático",
  "srv.4p":         "Modelos predictivos, estimación de parámetros basada en datos e integraciones de IA adaptadas a dominios científicos e ingenieriles.",
  "srv.5t":         "APIs Backend y Automatización",
  "srv.5p":         "Backends Python, scripts de procesamiento de datos, APIs REST y herramientas de automatización que conectan modelos con entradas y salidas del mundo real.",
  "srv.6t":         "Visualización de Datos",
  "srv.6p":         "Paneles interactivos, mapas espaciales y figuras listas para publicación que comunican con claridad los resultados de modelos complejos.",
  "srv.7t":         "Modernización de Código Heredado",
  "srv.7p":         "Refactorización y modernización de bases de código científico en Fortran, C/C++ y Python heredado. Migración a arquitecturas modernas, APIs REST y librerías desplegables sin perder fidelidad numérica.",
  "proj.eyebrow":   "Código abierto y demos",
  "proj.title":     "Proyectos",
  "proj.intro":     "Una selección de trabajo público. Más repositorios en",
  "proj.1meta":     "Python · Código Abierto · PyPI",
  "proj.1p":        "Formateador de código fuente Fortran para bases de código científicas e ingeniería. Disponible en PyPI para instalación directa.",
  "proj.2meta":     "Python · Código Abierto · En revisión",
  "proj.2p":        "Herramienta de inspección de entornos y análisis de dependencias para proyectos Python. Actualmente en desarrollo activo.",
  "proj.3meta":     "Juego · JavaScript · En vivo",
  "proj.3p":        "El clásico Snake implementado como juego de navegador independiente. Ligero, sin dependencias, desplegado en un subdominio propio.",
  "proj.portfolio": "Ver portafolio completo de código abierto →",
  "about.eyebrow":  "Trayectoria",
  "about.title":    "Acerca de",
  "about.p1":       "Soy ingeniero civil, investigador doctoral y consultor freelance radicado en Colombia, con casi cinco décadas de trabajo continuo en la intersección entre las ciencias físicas y el código. No soy un ingeniero que aprendió a programar, ni un programador que sabe algo de hidráulica — he desarrollado modelos matemáticos de transporte de sedimentos cohesivos <em>y</em> los he implementado en Fortran de alto rendimiento <em>y</em> los he ejecutado en clústeres HPC. Esa profundidad en ambos lados es genuinamente poco común.",
  "about.p2":       "Con el tiempo me he expandido hacia la visión por computador, el análisis de datos asistido por IA, la modernización de código heredado y el desarrollo backend en Python. Trabajo en inglés y español, tomando de uno a tres proyectos concurrentes para que cada cliente reciba atención real.",
  "about.p3":       "Trato la ambigüedad como un pasivo profesional: defino el alcance con cuidado, comunico con claridad la complejidad y los límites desde el inicio, y solo me comprometo con lo que puedo entregar bien.",
  "about.p4":       "Miembro de IAHR desde 2010. Revisor par activo del <em>Journal of Hydroinformatics</em> (IWA Publishing / IAHR). Miembro del NVIDIA Developer Program desde 2019.",
  "about.stat1":    "Décadas de práctica",
  "about.stat2":    "Bilingüe",
  "about.stat3":    "Proyectos a la vez",
  "about.stack":    "Stack principal",
  "c.eyebrow":      "Ponte en contacto",
  "c.title":        "Trabajemos juntos",
  "c.sub":          "¿Tienes un proyecto en mente? Estoy disponible para trabajo freelance. Contáctame en Fiverr o directamente por correo.",
  "c.fiverr.title": "Fiverr",
  "c.fiverr.sub":   "Contrátame para un proyecto",
  "c.email":        "Correo",
  "footer.top":     "Volver arriba ↑",
};

const META = {
  en: {
    title: document.title,
    desc:  document.querySelector('meta[name="description"]').content,
    theme: 'Toggle dark/light mode',
    menu:  'Open menu'
  },
  es: {
    title: "Adolfo J. Cardozo S. — Computación Científica e IA | AC Scientific Computing",
    desc:  "Ingeniero en computación científica e investigador independiente con casi cinco décadas de experiencia. Modelado numérico, visión por computador, SIG, hidrología e IA. Radicado en Colombia.",
    theme: 'Cambiar tema claro/oscuro',
    menu:  'Abrir menú'
  }
};

const i18nNodes = document.querySelectorAll('[data-i18n]');
i18nNodes.forEach(el => { el.dataset.en = el.innerHTML; });

function applyLang(lang) {
  i18nNodes.forEach(el => {
    const key = el.dataset.i18n;
    el.innerHTML = (lang === 'es' && ES[key]) ? ES[key] : el.dataset.en;
  });
  root.setAttribute('lang', lang);
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').content = META[lang].desc;
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.querySelectorAll('[data-l]').forEach(s => {
      s.innerHTML = s.dataset.l === lang
        ? '<b>' + s.dataset.l.toUpperCase() + '</b>'
        : s.dataset.l.toUpperCase();
    });
  }
  document.getElementById('theme-toggle').setAttribute('aria-label', META[lang].theme);
  document.getElementById('hamburger').setAttribute('aria-label', META[lang].menu);
}

if (window.LANG_SWITCH_ENABLED) {
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.disabled = false;
    langBtn.title = '';
    langBtn.setAttribute('aria-label', 'Change language / Cambiar idioma');
    langBtn.addEventListener('click', () => {
      const next = root.getAttribute('lang') === 'es' ? 'en' : 'es';
      try { localStorage.setItem('acscicomp-lang', next); } catch (e) {}
      applyLang(next);
    });
  }
  let savedLang = null;
  try { savedLang = localStorage.getItem('acscicomp-lang'); } catch (e) {}
  applyLang(savedLang || root.getAttribute('lang') || 'en');
}

/* ── Theme toggle ─────────────────────────────────────────────── */
const themeBtn = document.getElementById('theme-toggle');
const STORAGE_KEY = 'acscicomp-theme';
const systemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

let savedTheme = null;
try { savedTheme = localStorage.getItem(STORAGE_KEY); } catch (e) {}
applyTheme(savedTheme || systemTheme());

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  applyTheme(next);
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  let s = null; try { s = localStorage.getItem(STORAGE_KEY); } catch (err) {}
  if (!s) applyTheme(e.matches ? 'dark' : 'light');
});

/* ── Mobile hamburger ─────────────────────────────────────────── */
const burger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  burger.textContent = open ? '✕' : '☰';
});
navLinks.addEventListener('click', e => {
  if (e.target.closest('a')) {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.textContent = '☰';
  }
});

/* ── Typewriter ───────────────────────────────────────────────── */
const lines = [
  'python simulate.py --model HEC-RAS --basin rio_otun',
  'cv2.VideoCapture(0) | detect_pose() | overlay()',
  'geopandas.read_file("watershed.shp").dissolve()',
  'FastAPI().include_router(hydro_router)',
];
const tw = document.getElementById('typewriter');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  tw.textContent = lines[0];
} else {
  let li = 0, ci = 0, deleting = false;
  (function type() {
    const line = lines[li];
    if (!deleting) {
      tw.textContent = line.slice(0, ++ci);
      if (ci === line.length) { deleting = true; return setTimeout(type, 2200); }
      setTimeout(type, 42);
    } else {
      tw.textContent = line.slice(0, --ci);
      if (ci === 0) { deleting = false; li = (li + 1) % lines.length; return setTimeout(type, 400); }
      setTimeout(type, 18);
    }
  })();
}

/* ── Scroll reveal ────────────────────────────────────────────── */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}
