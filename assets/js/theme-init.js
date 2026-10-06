/* Runs in <head>, before first paint.
   Same storage keys as portfolio, so choices carry over. */

/* Language switch: enabled */
window.LANG_SWITCH_ENABLED = true;

(function () {
  try {
    var t = localStorage.getItem('acscicomp-theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
    if (window.LANG_SWITCH_ENABLED) {
      var l = localStorage.getItem('acscicomp-lang');
      if (l) document.documentElement.setAttribute('lang', l);
    }
  } catch (e) {}
})();
