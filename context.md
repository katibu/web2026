# context.md — Projecte Claude: web2026 / Yogaia BCN

> Document de referència per a totes les sessions de treball amb Claude.
> Actualitzat: juny 2026

---

## 1. Qui és Yogaia BCN

Escola de ioga al cor de l'Eixample de Barcelona, amb més de 10 anys d'experiència. Ofereix classes regulars, formacions de professorat (200 h i 300 h), tallers, fisioteràpia, nutrició i propostes per a empreses.

**Posicionament**: Rigor, profunditat i proximitat humana. No és un gimnàs ni un centre de benestar superficial.

**Pràctica base**: Hatha Raja Ioga, inspirat en Sri Dharma Mittra i Sri Andrei Ram Om. Integra cos, respiració, atenció i energia.

**L'espai**:
- +400 m² al cor de l'Eixample
- Sala principal: 150 m² en forma de L al voltant d'un jardí interior
- Sala petita: 24 m²
- Entrada diàfana amb grades, botiga i vestidors amb dutxes

---

## 2. Repositori i estructura de fitxers

**Repo GitHub**: `https://github.com/katibu/web2026.git`
**Directori principal del projecte**: `yogaia.org/`

```
web2026/
└── yogaia.org/
    ├── index.html             ← Mockup original (Codex v1)
    ├── index.css              ← CSS original
    ├── index.js               ← JS original
    ├── index-v2.html          ← Nova proposta (Claude v2) ← ACTIU
    ├── index-v2.css           ← CSS v2 (sistema de disseny nou)
    ├── index-v2.js            ← JS v2 (millores accessibilitat)
    ├── index-pre.html         ← Versió pre-Codex de referència
    ├── PLAN.md                ← Pla de desenvolupament (actualitzar)
    ├── AGENTS.md              ← Regles per a Codex (no modificar)
    ├── README.md              ← Readme del repo
    ├── logoYogaia-negre-transparent-600x600.png
    ├── practica-ioga-yogaia-barcelona.png
    ├── content/               ← Contingut en català per pàgina
    │   ├── home-ca.md
    │   ├── tarifes-ca.md
    │   ├── iniciat-ca.md
    │   ├── practica-ca.md
    │   ├── serveis-ca.md
    │   ├── equip-ca.md
    │   ├── empreses-ca.md
    │   ├── formacions-entrada-ca.md
    │   ├── formacio-200-info-general-ca.md
    │   ├── formacio-200-equip-docent-ca.md
    │   ├── formacio-300-info-general-ca.md
    │   ├── formacio-300-equip-docent-ca.md
    │   ├── formulari-preinscripcio-200-ca.md
    │   └── formulari-preinscripcio-300-ca.md
    ├── docs/                  ← Guies de projecte (no modificar sense motiu)
    │   ├── PROJECT_CONTEXT.md
    │   ├── SITE_ARCHITECTURE.md
    │   ├── COPY_STYLE_GUIDE.md
    │   ├── SEO_ACCESSIBILITY_GUIDE.md
    │   ├── COMPONENTS_AND_FUNCTIONAL_SPEC.md
    │   └── CONTENT_SOURCE_INDEX.md
    └── prompts/
        └── CODEX_PROMPTS.md
```

---

## 3. Sistema de disseny — v2 (actiu)

### Tipografia
| Rol           | Font                    | Ús                          |
|---------------|-------------------------|-----------------------------|
| Display/Title | Cormorant Garamond      | h1, h2, h3, blockquotes     |
| Body/UI       | DM Sans                 | cos de text, botons, labels |

### Paleta de colors (CSS variables)
```css
--bg:             #edeae0   /* ivori càlid — fons base */
--surface:        #f6f3ea   /* seccions alternes clares */
--surface-card:   #faf8f3   /* targetes i panells */
--surface-alt:    #e4dfcf   /* seccions amb fons lleugerament fosc */
--surface-dark:   #2c2a24   /* bloc CTA fosc + footer */

--text:           #1a1815   /* negre càlid */
--text-soft:      #6a6057   /* text secundari */
--text-muted:     #9a9087   /* text terciari, metadades */
--text-on-dark:   #f0ede4   /* text sobre fons fosc */

--sage:           #7b8e69   /* verd molsa (decoració) */
--sage-deep:      #4e6340   /* verd fosc (acents títols) */
--sage-light:     rgba(123,142,105,0.12)

--amber:          #d4a843   /* daurat (punts eyebrow, quotes) */
--amber-glow:     rgba(212,168,67,0.18)

--cta:            #e9c85d   /* daurat CTA — identitat de marca */
--cta-hover:      #c9786b   /* terracota hover */
--cta-text:       #1a1815   /* text sobre CTA daurat */

--line:           #d4ccba   /* línies i vores */
--line-soft:      rgba(212,204,186,0.5)
```

### Botons
| Classe          | Ús                              |
|-----------------|---------------------------------|
| `.btn-primary`  | Acció principal (daurat CTA)    |
| `.btn-secondary`| Accions secundàries (outline)   |
| `.btn-ghost`    | Enllaços textuals amb fletxa    |

### Radis i ombres
- Cards: `--r-lg: 24px`
- CTA panel: `--r-xl: 36px`
- Pills/Eyebrow: `--r-full: 999px`
- Ombra cards: `--shadow-md: 0 12px 40px rgba(26,24,21,0.09)`

---

## 4. Pàgines planificades

### Fase 1 — Base institucional (prioritat ara)
| Pàgina       | Fitxer contingut            | Estat     |
|--------------|-----------------------------|-----------|
| Home         | `content/home-ca.md`        | ✅ v2 fet  |
| Tarifes      | `content/tarifes-ca.md`     | ⬜ pendent |
| Inicia't     | `content/iniciat-ca.md`     | ⬜ pendent |
| Pràctica     | `content/practica-ca.md`    | ⬜ pendent |
| Equip        | `content/equip-ca.md`       | ⬜ pendent |
| Serveis      | `content/serveis-ca.md`     | ⬜ pendent |
| Empreses     | `content/empreses-ca.md`    | ⬜ pendent |

### Fase 2 — Formacions
| Pàgina                    | Fitxer contingut                          | Estat     |
|---------------------------|-------------------------------------------|-----------|
| Formacions (entrada)      | `content/formacions-entrada-ca.md`        | ⬜ pendent |
| Formació 200 h            | `content/formacio-200-info-general-ca.md` | ⬜ pendent |
| Formació 200 h — equip    | `content/formacio-200-equip-docent-ca.md` | ⬜ pendent |
| Formulari preinscripció 200 h | `content/formulari-preinscripcio-200-ca.md` | ⬜ pendent |
| Formació 300 h            | `content/formacio-300-info-general-ca.md` | ⬜ pendent |
| Formació 300 h — equip    | `content/formacio-300-equip-docent-ca.md` | ⬜ pendent |
| Formulari preinscripció 300 h | `content/formulari-preinscripcio-300-ca.md` | ⬜ pendent |

### Fase 3 — Components reutilitzables
- Hero (variants)
- Cards de classes, formacions, professors
- Acordions (programes i calendaris)
- Formularis de contacte i preinscripció
- Bloc de testimonials
- Footer definitiu

---

## 5. Regles lingüístiques i de to

**Idioma base**: Català normatiu.

**Termes específics del projecte**:
- `ioga` (no `yoga` en català) · `el ioga` (no `l'ioga`)
- `asram` / `asrams` (no `ashram`)
- `gluti` (no `glútis`)
- `consignes` o `indicacions` (no `cues`)
- `aferrament` (no `apego`)
- `escalfament` (no `calentament`)
- No substituir mai anglicismes per la forma catalana si n'hi ha una de natural

**Termes sànscrits** (mantenir diacrítics): āsana, prāṇāyāma, sādhana, haṭha, rāja, Yoga Nidra, Maha Sādhana...

**To**: Proper, profund, professional, clar. Sense exageracions de màrqueting ni espiritualitat grandiloqüent.

**Regla de contingut**: NO inventar horaris, preus, dates, professors, certificacions ni condicions. Si no hi ha dada, marcar com a `TODO`.

---

## 6. Accessibilitat i SEO

**Objectiu**: WCAG 2.1 AA com a mínim.

**Implementat a v2**:
- Skip-to-content link (`.skip-link`)
- `aria-label` a totes les seccions de navegació
- `aria-expanded` / `aria-controls` al menú mòbil i lang picker
- `role="contentinfo"`, `role="banner"`, `role="list"`
- `tabindex="-1"` al `<main>` per gestió de focus
- Focus visible amb `outline: 2px solid var(--amber)`
- `@media (prefers-reduced-motion: reduce)` complet
- Atributs `lang` a links d'idioma
- Textos alternatius descriptius a totes les imatges

**Pendent per a producció**:
- Contrast ratio verificat amb eina externa (Colour Contrast Analyser)
- `rel="canonical"` per pàgina
- Metadades Open Graph completes per pàgina
- Schema.org per a LocalBusiness i BreadcrumbList
- Sitemap.xml i robots.txt

---

## 7. Integracions pendents de confirmar

| Sistema              | Estat        | Notes                                |
|----------------------|--------------|--------------------------------------|
| Reserva de classes   | ⬜ per definir | BSport o Calendly                    |
| Formulari contacte   | ⬜ per definir | Netlify Forms / Formspree / Hubspot |
| Horaris dinàmics     | ⬜ per definir | API BSport o dades estàtiques        |
| Google Analytics     | ⬜ per definir | GA4 o Plausible (privacitat)         |
| Política de privacitat | ⬜ per definir | Pàgina legal necessària              |

---

## 8. Dades pendents de verificar (PLAN.md)

Abans de publicar cal confirmar:
- Horaris reals de classes
- Preus definitius de tarifes i serveis
- Dates definitives formacions 2027
- Si Yoga Alliance apareix com a certificació amb logo/link
- Imatges definitives i textos alternatius
- Idiomes finals de la web (CA / ES / EN?)
- Política de privacitat i avís legal
- Adreça exacta i dades de contacte al footer

---

## 9. Decisions de disseny preses

| Decisió                              | Raó                                                       |
|--------------------------------------|-----------------------------------------------------------|
| Cormorant Garamond per a títols      | Editorial, elegant, propi del wellness de qualitat        |
| DM Sans per a body/UI                | Llegible, modern, neutre sense ser genèric                |
| Paleta càlida original mantinguda    | Identitat de marca existent; refinada, no substituïda     |
| CTA daurat `#e9c85d`                 | Identitat visual de Yogaia — no canviar                   |
| Footer fosc `#2c2a24`                | Contrast i dignitat visual; trenca la monotonia càlida    |
| Hero amb SVG botànic inline          | No depèn d'imatges externes; atmosfera sense recursos     |
| Reveal per IntersectionObserver      | Animació accessible, es desactiva amb prefers-reduced-motion |
| `index-v2.*` com a fitxers nous      | No sobreescriure v1 per poder comparar                    |

---

## 10. Com treballar en cada sessió

1. Llegir el fitxer de contingut corresponent a `content/[pagina]-ca.md`
2. Consultar `docs/SITE_ARCHITECTURE.md` per a l'estructura de seccions
3. Aplicar el sistema de disseny definit a §3 d'aquest document
4. Respectar les regles lingüístiques de §5
5. Marcar TODOs clars per a dades no verificades
6. Actualitzar la taula d'estat de §4 quan es completi una pàgina
7. Afegir les pàgines noves com a `[pagina]-v2.html` i el seu CSS específic o compartit
