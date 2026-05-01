# Prompts útils per treballar amb Codex

## Entendre el projecte

```txt
Llegeix AGENTS.md, PLAN.md i els fitxers de docs/. Després fes un resum de l'arquitectura actual del projecte i proposa un ordre de treball per implementar la nova web de Yogaia sense tocar encara el codi.
```

## Implementar una pàgina

```txt
Implementa la pàgina [NOM] utilitzant el contingut de content/[FITXER].md. Mantén fidelitat al text, separa contingut i components si el projecte ho permet, aplica SEO bàsic i accessibilitat. No inventis dades.
```

## Crear components

```txt
Crea components reutilitzables per a Hero, SectionIntro, FeatureCard, PricingCard, TeacherCard, Accordion i CTAButton segons docs/COMPONENTS_AND_FUNCTIONAL_SPEC.md. No canviïs encara les pàgines existents; prepara només els components.
```

## Revisar una pàgina

```txt
Revisa aquesta pàgina comparant-la amb el contingut de content/[FITXER].md i les instruccions d'AGENTS.md. Detecta omissions, invencions, errors lingüístics i problemes d’accessibilitat. Proposa un diff mínim.
```

## Formularis

```txt
Implementa el formulari de preinscripció de [200 h / 300 h] segons docs/COMPONENTS_AND_FUNCTIONAL_SPEC.md i content/[formulari].md. No mostris cap IBAN. Inclou validació bàsica, acceptació legal i missatge de confirmació.
```

## SEO

```txt
Afegeix metadata SEO per a les pàgines implementades segons docs/SEO_ACCESSIBILITY_GUIDE.md. Mantén un únic H1 per pàgina i alt texts descriptius.
```

## ExecPlan per feina gran

```txt
Abans d'implementar aquesta funcionalitat, crea un ExecPlan breu dins PLAN.md: objectiu, fitxers a tocar, passos, riscos i criteris de validació. Espera la meva aprovació abans de fer canvis.
```
