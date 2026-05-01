# AGENTS.md — Yogaia Nova Web 2026

Aquest repositori conté o desenvolupa la nova web de Yogaia BCN. Codex ha de llegir aquest fitxer abans de qualsevol tasca i aplicar-lo com a instruccions de projecte.

## Objectiu del projecte

Construir una web clara, elegant i funcional per a Yogaia BCN, una escola de ioga al centre de Barcelona. La web ha de comunicar:

- rigor i profunditat en la pràctica del ioga;
- accessibilitat per a persones noves;
- trajectòria, confiança i proximitat humana;
- les classes regulars, tarifes, formacions, serveis i propostes per a empreses;
- una experiència visual calmada, neta i amb aire.

## Fitxers de context que s'han de consultar

Abans de fer canvis importants, revisa:

- `docs/PROJECT_CONTEXT.md` — context general de Yogaia i criteris de marca.
- `docs/SITE_ARCHITECTURE.md` — arquitectura de pàgines, seccions i objectius.
- `docs/COPY_STYLE_GUIDE.md` — criteris lingüístics, to i terminologia.
- `docs/SEO_ACCESSIBILITY_GUIDE.md` — SEO, accessibilitat i estructura semàntica.
- `docs/COMPONENTS_AND_FUNCTIONAL_SPEC.md` — components i funcionalitats recomanades.
- `docs/CONTENT_SOURCE_INDEX.md` — índex dels continguts originals.
- `content/*.md` — contingut base de cada pàgina.
- `PLAN.md` — pla de desenvolupament i ordre de treball.
- `prompts/CODEX_PROMPTS.md` — prompts útils per donar tasques a Codex.

## Regles de treball

1. No inventis contingut institucional, preus, horaris, dates, professors, certificacions ni condicions.
2. Si falta informació, marca-la com a `TODO` o pregunta abans de consolidar-la.
3. Mantén el català normatiu i el to de Yogaia: proper, profund, clar i professional.
4. Evita un to massa comercial, exagerat o buit.
5. Prioritza una estructura web usable: textos respirats, seccions curtes, CTAs clars i jerarquia visual.
6. Quan creïs components, evita duplicar contingut escrit al codi si es pot separar en fitxers de dades o CMS.
7. Si el projecte és amb React/Next/Framer, crea components reutilitzables i dades estructurades.
8. Fes canvis petits, revisables i coherents.
9. Mantén els noms de rutes, slugs i fitxers en minúscules, sense accents i amb guions.
10. No substitueixis "ioga" per "yoga" en català. La forma preferida és "el ioga", no "l’ioga".
11. Utilitza “asram” i “asrams” en català, no “ashram” ni “àixram”.
12. Utilitza “consignes” o “indicacions”, no “cues”.
13. Utilitza “gluti”, no “glútis”.
14. Utilitza “aferrament”, no “apego”.
15. Evita anglicismes sempre que hi hagi una forma catalana natural.

## ExecPlans

Quan la tasca sigui una funcionalitat important, una migració, una refactorització o la creació d'una pàgina completa, fes servir un pla d'execució. Consulta `PLAN.md` i actualitza'l si la implementació canvia.

## Criteri de qualitat

Una tasca no es considera acabada fins que:

- el contingut és fidel als fitxers de context;
- la pàgina o component és responsive;
- els CTAs són coherents amb l'objectiu de la pàgina;
- la semàntica HTML és correcta;
- no hi ha text inventat ni dades no verificades;
- el resultat es pot mantenir fàcilment.
