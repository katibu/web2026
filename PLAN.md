# plan.md — Pla de treball · Projecte Claude web2026

> Document viu. Actualitza l'estat de cada tasca a mesura que avances.
> Llegeix sempre `context.md` abans de començar una sessió.
> Última actualització: juny 2026

---

## Estat global del projecte

| Fase                    | Progrés |
|-------------------------|---------|
| Fase 0 — Disseny base   | ✅ Complet |
| Fase 1 — Pàgines base   | 🔄 En curs (1/7) |
| Fase 2 — Formacions     | ⬜ Pendent |
| Fase 3 — Components     | ⬜ Pendent |
| Fase 4 — Producció      | ⬜ Pendent |

---

## Fase 0 — Sistema de disseny i Home v2

### Tasques completades ✅

- [x] **Anàlisi mockup original** (Codex v1 — `index.html` / `index.css` / `index.js`)
- [x] **Sistema de disseny v2** — tokens CSS, tipografia Cormorant Garamond + DM Sans, paleta refinada, botons, radis, ombres → `index-v2.css`
- [x] **Home v2** — Hero editorial amb SVG botànic, header sticky glassmorphism, horaris scroll, seccions split, testimonials, CTA fosc, footer complet → `index-v2.html`
- [x] **JS v2** — Menú mòbil amb drawer + overlay, lang picker accessible, carousel horaris, reveal IntersectionObserver → `index-v2.js`
- [x] **Accessibilitat** — Skip-link, aria-labels, aria-expanded, focus-visible, prefers-reduced-motion
- [x] **context.md** — Document de referència del projecte per a Claude
- [x] **plan.md** — Aquest document

### Decisions de disseny clau (no reobrir)

| Decisió | Valor |
|---------|-------|
| Font display | Cormorant Garamond (italic) |
| Font UI/Body | DM Sans |
| CTA color | `#e9c85d` → hover `#c9786b` |
| Fons base | `#edeae0` (ivori càlid) |
| Accent fosc | `#2c2a24` (footer + CTA panel) |
| Verd molsa | `#7b8e69` |

---

## Fase 1 — Pàgines base institucionals

### 1.1 Home
- [x] HTML + CSS + JS v2 → `index-v2.html`
- [ ] Imatges reals (sala, jardí, pràctica) — **pendent del client**
- [ ] Horaris reals des de BSport o fitxer de dades — **pendent del client**
- [ ] Revisar copy final amb contingut de `content/home-ca.md`

---

### 1.2 Tarifes
**Fitxer de contingut**: `content/tarifes-ca.md`
**Objectiu**: Facilitar la decisió entre quotes, classe puntual i paquets.

Seccions a implementar:
- [ ] Hero amb introducció
- [ ] Quotes mensuals (cards comparatives)
- [ ] Condicions i restriccions
- [ ] Opcions puntuals (classe solta, pack 5, pack 10)
- [ ] Preu empreses (redirigeix a la pàgina empreses)
- [ ] CTAs finals: reservar / contactar

> ⚠️ TODO: Confirmar preus definitius abans de publicar.

---

### 1.3 Inicia't
**Fitxer de contingut**: `content/iniciat-ca.md`
**Objectiu**: Reduir fricció per a persones noves. Pàgina d'acollida.

Seccions a implementar:
- [ ] Hero — missatge d'acollida
- [ ] Per on començar (3–4 passos simples)
- [ ] Classes recomanades per a iniciants
- [ ] Què hi trobaràs (espai, comunitat, pràctica adaptada)
- [ ] FAQ breu (roba, material, reserva)
- [ ] CTA: reservar primera classe

---

### 1.4 Pràctica / Classes
**Fitxer de contingut**: `content/practica-ca.md`
**Objectiu**: Explicar els tipus de pràctica i ajudar a escollir.

Seccions a implementar:
- [ ] Hero — "Una pràctica, diferents maneres d'aprofundir"
- [ ] Hatha Raja Ioga (base del projecte)
- [ ] Ioga Suau
- [ ] Vinyasa
- [ ] Yin Ioga
- [ ] Meditació i Yoga Nidra
- [ ] CTAs: Veure horaris / Reservar classe

---

### 1.5 Equip
**Fitxer de contingut**: `content/equip-ca.md`
**Objectiu**: Generar confiança, mostrar trajectòria i humanitat.

Seccions a implementar:
- [ ] Hero / introducció
- [ ] Grid de fitxes de professors (foto, nom, especialitat, bio breu)
- [ ] Possible filtre per tipus de classe (opcional)

> ⚠️ TODO: Fotos definitives dels professors — pendent del client.

---

### 1.6 Serveis
**Fitxer de contingut**: `content/serveis-ca.md`
**Objectiu**: Presentar fisioteràpia i nutrició com a part de la cura integral.

Seccions a implementar:
- [ ] Introducció — cura i acompanyament
- [ ] Fisioteràpia (descripció, a qui va dirigit, com funciona, CTA cita)
- [ ] Nutrició (descripció, enfocament, CTA cita)
- [ ] CTAs: sol·licitar cita / contactar

> ⚠️ TODO: Confirmar preu de nutrició si falta.

---

### 1.7 Empreses
**Fitxer de contingut**: `content/empreses-ca.md`
**Objectiu**: Captar propostes corporatives, to professional però proper.

Seccions a implementar:
- [ ] Hero
- [ ] Beneficis per a l'equip
- [ ] Propostes: classes regulars, sessions puntuals, retirs
- [ ] Per què el ioga a l'empresa
- [ ] CTAs: demanar proposta / contactar

---

## Fase 2 — Formacions

### 2.1 Pàgina d'entrada a Formacions
**Fitxer de contingut**: `content/formacions-entrada-ca.md`

- [ ] Hero — "Formar-se en ioga a Yogaia"
- [ ] Introducció al model formatiu
- [ ] Card Formació 200 h → link a pàgina específica
- [ ] Card Formació 300 h → link a pàgina específica
- [ ] Missatge de procés sostingut en el temps
- [ ] CTAs d'informació

---

### 2.2 Formació 200 h
**Fitxers de contingut**:
- `content/formacio-200-info-general-ca.md`
- `content/formacio-200-equip-docent-ca.md`
- `content/formulari-preinscripcio-200-ca.md`

- [ ] Hero
- [ ] Informació bàsica (hores, format, dates)
- [ ] Presentació del programa
- [ ] "És per a tu si…" (bloc de perfils)
- [ ] Objectius de la formació
- [ ] Pla d'estudis (acordions per mòdul)
- [ ] Estructura i calendari
- [ ] Certificació (Yoga Alliance o equivalent)
- [ ] Preu i finançament
- [ ] Equip docent
- [ ] Formulari de preinscripció
- [ ] CTAs

> ⚠️ TODO: Confirmar dates 2027, preu definitiu, certificació i equip docent.

---

### 2.3 Formació 300 h
**Fitxers de contingut**:
- `content/formacio-300-info-general-ca.md`
- `content/formacio-300-equip-docent-ca.md`
- `content/formulari-preinscripcio-300-ca.md`

- [ ] Hero
- [ ] Informació bàsica
- [ ] Presentació
- [ ] Requisits (formació prèvia mínima)
- [ ] Objectius
- [ ] "És per a tu si…"
- [ ] Pla d'estudis (acordions)
- [ ] Estructura i calendari
- [ ] Certificació
- [ ] Preu i finançament
- [ ] Testimoni d'alumne
- [ ] Equip docent
- [ ] Formulari de preinscripció
- [ ] CTAs

---

### 2.4 Formularis de preinscripció

**Regla important**: No mostrar l'IBAN a la web. El pagament es facilita per correu un cop confirmada la plaça.

Camps necessaris (tots dos formularis):
- Nom i cognoms
- Correu electrònic
- Telèfon
- Formació prèvia (text lliure o opcions)
- Motivació (text lliure)
- Com ens has conegut
- Acceptació política de privacitat

- [ ] Formulari 200 h → `formulari-preinscripcio-200-ca.md`
- [ ] Formulari 300 h → `formulari-preinscripcio-300-ca.md`
- [ ] Integració: Netlify Forms / Formspree / Hubspot (per definir)

---

## Fase 3 — Components reutilitzables

Una vegada completades les pàgines principals, refactoritzar els patrons repetits en components:

- [ ] `hero.html` — Hero genèric amb variants (text centrat, split, fosc)
- [ ] `card-classe.html` — Targeta de classe (hora, nom, professor, CTA)
- [ ] `card-formacio.html` — Targeta de formació (hores, dates, preu, CTA)
- [ ] `card-professor.html` — Fitxa de professor (foto, bio, especialitat)
- [ ] `acordio.html` — Component d'acordió per a programes
- [ ] `testimonial.html` — Bloc de testimonials (grid o slider)
- [ ] `cta-panel.html` — CTA fosc final de pàgina (reutilitzable)
- [ ] `formulari-contacte.html` — Formulari genèric de contacte

---

## Fase 4 — Preparació per a producció

### SEO i metadades
- [ ] `<title>` i `<meta description>` únics per pàgina
- [ ] Open Graph complet per pàgina (og:title, og:description, og:image)
- [ ] `rel="canonical"` per pàgina
- [ ] Schema.org `LocalBusiness` a l'index
- [ ] Schema.org `BreadcrumbList` a pàgines interiors
- [ ] Sitemap.xml
- [ ] robots.txt

### Accessibilitat — revisió final
- [ ] Contrast ratio WCAG AA verificat (eina externa: Colour Contrast Analyser)
- [ ] Navegació completa per teclat testada
- [ ] Lector de pantalla: VoiceOver (macOS) + NVDA (Windows)
- [ ] Ordre de focus lògic a totes les pàgines

### Rendiment
- [ ] Imatges en format WebP + fallback JPEG
- [ ] `loading="lazy"` a imatges no crítiques
- [ ] Fonts preconnect verificades
- [ ] CSS i JS minificats per a producció
- [ ] Core Web Vitals: LCP < 2.5 s, CLS < 0.1

### Legal i privacitat
- [ ] Pàgina d'avís legal
- [ ] Política de privacitat (RGPD)
- [ ] Política de cookies (si s'usa analytics)
- [ ] Banner de cookies (si escau)

### Integracions pendents de confirmar
| Sistema           | Opció A          | Opció B         | Estat         |
|-------------------|------------------|-----------------|---------------|
| Reserva classes   | BSport           | Calendly        | ⬜ Per definir |
| Formularis web    | Netlify Forms    | Formspree       | ⬜ Per definir |
| Analytics         | Plausible        | Google Analytics 4 | ⬜ Per definir |
| Horaris dinàmics  | API BSport       | Fitxer JSON estàtic | ⬜ Per definir |

---

## Dades pendents del client (bloquejants)

Abans de publicar cal obtenir:

- [ ] Horaris reals de classes (dia, hora, professor, tipus)
- [ ] Preus definitius: quotes, paquets, serveis
- [ ] Dates formacions 2026–2027
- [ ] Fotos definitives: sala, professors, pràctica (preferiblement WebP)
- [ ] Confirmació sobre Yoga Alliance: logo i URL de verificació
- [ ] Adreça exacta i telèfon de contacte per al footer
- [ ] Correu electrònic de contacte públic
- [ ] Confirmar idiomes definitius de la web: CA + ES? CA + ES + EN?
- [ ] Preu de nutrició (si estava pendent de confirmar)

---

## Nomenclatura de fitxers

Tots els fitxers nous segueixen aquest patró:
- `[pagina]-v2.html` — pàgina nova
- `[pagina]-v2.css` — CSS específic de pàgina (si no s'usa el global)
- `index-v2.css` — CSS global compartit entre totes les pàgines ← **font de veritat del disseny**
- No sobreescriure mai els fitxers originals (`index.html`, `index.css`)

---

## Historial de sessions

| Data         | Sessió                              | Resultat                                           |
|--------------|-------------------------------------|----------------------------------------------------|
| Juny 2026    | Anàlisi mockup Codex + proposta v2  | `index-v2.html`, `index-v2.css`, `index-v2.js`     |
| Juny 2026    | Creació projecte Claude web2026     | `context.md`, `plan.md`                            |
