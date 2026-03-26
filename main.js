// ── Cursor: dot snaps instantly, ring follows via CSS transition ──
      const cur  = document.getElementById('cur');
      const ring = document.getElementById('cur-ring');

      document.addEventListener('mousemove', e => {
        cur.style.transform  = `translate(${e.clientX - 3.5}px, ${e.clientY - 3.5}px)`;
        ring.style.transform = `translate(${e.clientX - 13}px, ${e.clientY - 13}px)`;
      });

      document.querySelectorAll('a, button, .sg-chip, .echip, .ptag, .ach-item').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('big'));
        el.addEventListener('mouseleave', () => ring.classList.remove('big'));
      });

      // ── Reveal on scroll (unobserves after firing — no double-observe) ──
      const rvObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            rvObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08 });
      document.querySelectorAll('.rv').forEach(el => rvObs.observe(el));

      // ── Active nav highlight ──
      const navLinks   = document.querySelectorAll('.nav-link[data-s]');
      const sectionIds = ['summary','stack','capabilities','projects','experience','achievements','education','contact'];

      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              navLinks.forEach(l => l.classList.remove('active'));
              const active = document.querySelector(`.nav-link[data-s="${id}"]`);
              if (active) active.classList.add('active');
            }
          });
        }, { threshold: 0.35 }).observe(el);
      });