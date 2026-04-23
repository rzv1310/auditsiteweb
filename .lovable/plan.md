
Obiectiv: înlocuirea animației actuale a punctelor luminoase din secțiunea „Traseul unui vizitator pe un site neoptimizat” cu o abordare robustă, care măsoară pozițiile reale ale bulinelor și animă markerul roșu exact între centrele lor, pe toată lungimea, indiferent de înălțimea fiecărui item.

1. Refac structura secțiunii „journey”
- Păstrez lista cu cele 4 etape, dar schimb sistemul de animație din „câte un dot pe fiecare segment” într-un singur overlay animat pentru întreaga coloană de buline.
- Fiecare bulină numerotată va primi ref/identificare pentru a-i putea calcula poziția reală în DOM.
- Linia verticală dintre buline va fi desenată ca un rail continuu, separat de markerul roșu animat.

2. Înlocuiesc animația CSS segmentată cu o animație bazată pe coordonate reale
- Elimin dependența de `.journey-line-dot`, `nth-child`, delay-uri fixe și keyframe-ul care încearcă să ghicească distanța prin `100%`.
- Adaug logică în `src/routes/index.tsx` care:
  - măsoară centrul fiecărei buline;
  - calculează distanțele reale 1→2, 2→3, 3→4;
  - poziționează un singur marker roșu absolut pe aceeași axă verticală;
  - îl animă între coordonate reale, astfel încât să parcurgă 100% din traseu.

3. Fac animația rezistentă la responsive și la înălțimi variabile
- Recalculez pozițiile la:
  - schimbarea tabului;
  - resize de viewport;
  - schimbări de layout pe mobil / desktop.
- Folosesc `ResizeObserver` + listener de resize pentru a evita situațiile în care markerul rămâne calibrat pe o înălțime veche.
- Mă asigur că animația pornește doar după ce pozițiile reale au fost măsurate.

4. Sincronizez perfect mișcarea 1→2→3→4
- Setez un ciclu unic de animație cu 3 segmente consecutive egale sau proporționale cu distanța reală.
- Markerul va merge:
  - din centrul bulinei 1 în centrul bulinei 2,
  - apoi 2→3,
  - apoi 3→4,
  - apoi revine discret la început și reia bucla.
- Dacă una dintre distanțe este mai mare, timpul acelui segment va fi ajustat proporțional, ca viteza vizuală să rămână constantă.

5. Curăț stilurile existente care interferează
- Simplific sau elimin stilurile curente pentru:
  - `.journey-line-dot`
  - delay-urile `nth-child`
  - keyframes-ul `journey-dot-travel`
  - hack-urile cu `min-height`, `margin-bottom` și calc-uri pe gap, care nu garantează distanța reală.
- Păstrez aspectul vizual dorit:
  - linie neutră/subtilă;
  - punct roșu luminos cu glow;
  - aceeași estetică actuală.

6. Verific compatibilitatea cu accesibilitatea și motion preferences
- În `prefers-reduced-motion`, opresc deplasarea markerului și las doar rail-ul static plus bulinele numerotate.
- Mă asigur că overlay-ul animat este `aria-hidden` și nu afectează conținutul textual sau ordinea de focus.

Fișiere vizate
- `src/routes/index.tsx`
  - introduc refs pentru buline;
  - adaug container overlay pentru traseu;
  - mut logica de calcul și animație.
- `src/styles.css`
  - refac stilurile pentru rail și markerul roșu;
  - elimin animația CSS segmentată actuală;
  - adaug fallback pentru reduced motion.

Detalii tehnice
- Abordarea nouă nu se mai bazează pe înălțimi CSS estimate, ci pe măsurători reale din DOM.
- Pozițiile markerului vor fi calculate din `getBoundingClientRect()` relativ la containerul listei/tabului activ.
- Animația poate fi făcută fie:
  - cu `requestAnimationFrame` pentru control fin al poziției și sincronizării, fie
  - cu CSS variables actualizate din React și o animație pe `transform`.
- Recomandarea principală: un singur marker animat pe overlay, nu câte un dot per segment. Asta elimină complet problema actuală în care punctul nu traversează toată lungimea dintre buline.
