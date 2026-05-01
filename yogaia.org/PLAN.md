# PLAN.md — Pla de desenvolupament Nova Web Yogaia 2026

Aquest document serveix com a pla viu per treballar amb Codex.

## 1. Objectiu

Crear o adaptar el codi de la nova web de Yogaia BCN a partir del contingut validat en català. La web ha de ser modular, clara i escalable, preparada per incorporar més endavant traduccions, tallers, botiga, horaris i integracions.

## 2. Pàgines prioritàries

### Fase 1 — Base institucional
- Home
- Tarifes
- Inicia’t
- Pràctica / Classes
- Equip
- Serveis
- Empreses

### Fase 2 — Formacions
- Formacions — pàgina d’entrada
- Formació 200 h — informació general
- Formació 200 h — equip docent
- Formulari de preinscripció 200 h
- Formació 300 h — informació general
- Formació 300 h — equip docent
- Formulari de preinscripció 300 h

### Fase 3 — Sistemes reutilitzables
- Components de Hero
- Cards de serveis/classes/formacions
- Acordions de programes i calendaris
- CTAs
- Formularis
- Fitxes de professorat
- Blocs testimonials
- Blocs d’imatge
- SEO metadata per pàgina

## 3. Ordre recomanat de treball

1. Crear estructura de dades de contingut.
2. Crear layout general i sistema visual.
3. Implementar Home.
4. Implementar pàgines informatives principals.
5. Implementar formacions amb acordions i formularis.
6. Revisar SEO, accessibilitat i responsive.
7. Fer revisió de contingut i consistència terminològica.
8. Preparar traduccions o estructura multilingüe si cal.

## 4. Arquitectura de contingut recomanada

Si el projecte ho permet, separar contingut i components:

```txt
src/
  content/
    ca/
      home.ts
      tarifes.ts
      iniciat.ts
      practica.ts
      formacions.ts
      formacio-200.ts
      formacio-300.ts
      equip.ts
      serveis.ts
      empreses.ts
  components/
    sections/
    cards/
    forms/
    layout/
  app/ o pages/
```

Si el projecte és Framer amb components de codi, prioritzar components petits i configurables.

## 5. Regles per a formularis

Els formularis de preinscripció no han de mostrar l’IBAN a la web. El pagament es facilita després de revisar la sol·licitud i confirmar la disponibilitat de plaça.

Formularis prioritaris:

- Preinscripció Formació 200 h
- Preinscripció Formació 300 h
- Contacte general
- Sol·licitud proposta empreses
- Reserva cita serveis

## 6. Dades pendents de verificar

Abans de publicar cal confirmar:

- Horaris reals de classes.
- Enllaços definitius de BSport, formularis o Calendly.
- Política de privacitat.
- Preus definitius de serveis de nutrició si falta import.
- Dates definitives 2027 de formacions.
- Si Yoga Alliance s'ha de mostrar com a certificació final amb logo/enllaç.
- Imatges definitives i textos alternatius.
- Idiomes finals de la web.

## 7. Criteri d’implementació

Codex ha de preferir:

- components reutilitzables;
- noms clars;
- estructura responsive;
- HTML semàntic;
- accessibilitat bàsica;
- textos no incrustats de manera difícil de mantenir;
- canvis petits i revisables.
