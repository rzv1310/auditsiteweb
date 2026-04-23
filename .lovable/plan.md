
Obiectiv: uniformizez toate textele care nu sunt heading-uri (nu H1/H2/H3/H4/H5/H6) după aceeași scară responsive pe toată pagina.

1. Introduc o scară tipografică unificată pentru textul de body în `src/styles.css`
- Definesc o valoare standard pentru toate textele normale:
  - mobil: `14.4px` (`0.9rem`)
  - tabletă: între `14px` și `16px`
  - desktop: `clamp(0.933rem, ..., 1.118rem)` astfel încât să rămână aproximativ între `14.93px` și `17.89px`
- Păstrez heading-urile separate, fără să le modific.

2. Aplic această scară pe toate clasele de text non-heading din pagină
- Actualizez selectorii existenți care controlează paragrafe, descrieri, subtitluri, texte din carduri, texte din FAQ, câmpuri și etichete de formular, badge-uri informative și textele descriptive din preview-ul auditului.
- Clasele vizate vor include în principal elemente precum:
  - `.hero-copy`
  - `.journey-item-body`
  - `.feature-title`
  - `.final-deliverable-card-body`
  - `.faq-answer`
  - `.audit-request-subtitle`
  - `.audit-request-label`
  - `.audit-request-input`
  - `.audit-request-consent-copy`
  - `.findings-item-body`
  - și textele descriptive similare din secțiunea hero / findings / form / FAQ / preview audit

3. Păstrez separat textele care nu intră în regula „non-H”
- Nu modific dimensiunile pentru:
  - toate heading-urile reale (`h1`, `h2`, `h3`, etc.)
  - titlurile stilizate care funcționează vizual ca heading-uri, chiar dacă sunt pe `div/span`, dacă trebuie să rămână ierarhia vizuală principală
  - numerele din step circles, score-ul mare din audit, butonul CTA principal și alte elemente de accent care nu sunt body text

4. Curăț excepțiile inconsistente între breakpoint-uri
- Elimin valorile izolate prea mari sau prea mici pentru textul normal, astfel încât aceleași tipuri de conținut să nu sară vizual între mobil, tabletă și desktop.
- Unde există acum valori hardcoded diferite între secțiuni, le aliniez la noua scară comună.

5. Ajustez media queries fără să schimb layout-ul
- Fac modificările în special în:
  - stilurile de bază
  - `@media (min-width: 1024px)` pentru desktop
  - `@media (max-width: 639px)` / stilurile implicite pentru mobil
- Păstrez layout-ul, spacing-ul și compoziția generală a paginii; schimb doar tipografia textelor non-heading.

6. Verificare finală vizuală urmărită
- Mobil: toate textele normale pornesc de la `14.4px`
- Tabletă: textele normale rămân în intervalul `14–16px`
- Desktop: textele normale cresc controlat între `14.93px` și `17.89px`
- Rezultatul final trebuie să arate coerent între secțiuni, fără ca unele paragrafe să pară mai mari decât altele fără motiv.

Detalii tehnice
- Fișier principal: `src/styles.css`
- Abordare recomandată:
  - folosirea unei singure valori/clamp reutilizabile pentru body text
  - apoi maparea claselor existente la această scară
- Dacă apare un element non-heading care trebuie păstrat intenționat mai mare sau mai mic (ex. badge foarte mic sau text utilitar), îl tratez ca excepție explicită, nu ca regulă generală.
