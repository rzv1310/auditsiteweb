
1. Ajustez înălțimea disponibilă pentru panoul din dreapta pe desktop în `src/styles.css`, eliminând limita prea agresivă `min(54vh, 500px)` de pe `hero-panel`, `hero-side` și `hero-frame` și înlocuind-o cu un `clamp(...)` mai înalt, astfel încât caseta auditului să aibă suficient spațiu vertical.

2. Păstrez alinierea cerută anterior:
   - marginea de sus a casetei auditului la nivelul H1
   - baza listei de criterii la nivelul butonului CTA
   dar fără să forțez cardul într-o înălțime prea mică.

3. Fac cardul auditului să umple corect coloana dreaptă fără tăiere:
   - păstrez `display: flex` / `flex-direction: column`
   - las lista de criterii să ocupe restul spațiului în mod natural
   - evit orice `transform: scale(...)` care poate ascunde conținutul.

4. Verific și finisez densitatea internă doar cât e nevoie, fără să schimb designul:
   - mici ajustări la `padding-block`, spațiul dintre header și listă, și gap-ul dintre criterii
   - fără să reintroduc pătratele/decorul eliminat sau chenarele de progres.

5. Păstrez comportamentul mobil deja cerut:
   - cardul rămâne lat, aproape pe toată lățimea ecranului
   - modificările principale se aplică doar pe breakpoint-ul desktop (`min-width: 1024px`).

Detalii tehnice:
- Fișier vizat: `src/styles.css`
- Selectori principali: `.hero-stack`, `.hero-panel`, `.hero-side`, `.hero-frame`, `.hero-side .audit-preview-card`, `.hero-side .audit-metrics`
- Cauza probabilă actuală: caseta auditului este obligată să încapă într-o coloană desktop cu înălțime maximă prea mică, ceea ce taie ultimul criteriu.
- Rezultatul urmărit: toate cele 10 criterii vizibile complet pe desktop, fără clipping sus/jos, cu aceeași compoziție vizuală generală.
