---
name: lanre-design
description: Use this skill to generate well-branded interfaces and assets for Lanre, the design system for Lanre's Birthday Adventure (a winding-road memory game: themed worlds, mystery levels with mixed media, identity reveals, gemstones, discoveries, plus the phone-first contributor flow) and for casual exploration games in general, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files (tokens/, guidelines/, components/, ui_kits/).
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view, link `styles.css` for tokens and fonts, and either use the compiled component bundle or load `tools/ds-loader.js` to transpile `components/**/*.jsx` in-browser. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Project non-negotiables (see readme "PROJECT LAYER"): Babe's surfaces never show score/rank/tier text, the gemstone only; mystery surfaces never carry sender name, portrait, gem, filenames or hidden DOM data; media never autoplays or auto-advances and completion is an explicit Continue; "Just tell me" is always offered: affection is never gated behind a correct guess; use world tokens via data-world; fixture names only, never invented quiz facts or letter text.

Non-negotiables when designing in Lanre: every pressable is a bevel (solid 700-tone bottom edge, presses down 4px); text on the world is outlined display type; icons are GameIcon glyphs (Phosphor FILL + outline), never emoji; gold CTA with dark text; panels are centred cream/wood cards with a chunky banner, ribbon or wooden-sign header straddling the top edge; illustrations get striped placeholder slots, never hand-drawn SVG.
