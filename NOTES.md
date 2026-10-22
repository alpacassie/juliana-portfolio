# Juliana Zappitell portfolio — Claude version

A static site with no build step. To preview it locally, run:

    python3 -m http.server 5190 -d juliana-portfolio-claude

Then open http://localhost:5190.

- `index.html` contains the intro, Work, testimonial, Services, About and Contact sections
- `work/*.html` holds the case studies: Oura, Magnus Medical, dermatology practice, Chris Conner, Memory Air
- `assets/styles.css` holds all styles

## Where the content came from
- Netlify portfolio (imaginative-pothos-124647.netlify.app): case studies, metrics, services, contact links, testimonial
- Canva deck: About bio (yoga teacher, health coach, BA Psychology, 4+ years), tools, Oura early results (26 articles, 0→30 citations, 5x), dermatology #1 skin-cancer blog, Memory Air repurposing, CPG email flow
- Notion: my connector couldn't open the page, so nothing from Notion is used

## Writing vs. editing
- **Wrote** (filled lime pill) means Juliana drafted the copy
- **Edited** (outlined pill) means she reviewed and approved drafts written by others. The three Magnus Medical blog posts are the only edited pieces.

## Placeholders to fill (dashed boxes on the site)
- Engagement options / availability
- Role titles: Magnus Medical, Memory Air, Chris Conner
- Dates for each project (Oura start date)
- Oura: aggregate citation results and a link to an example article
- Magnus: a link to a specific LinkedIn post she wrote
- Dermatology: practice name if it can be shared; links to the acne and skin-cancer blogs
- Chris Conner: analytics source and date range
- Memory Air: results
- CPG email flow: client, flow type, results

## Worth confirming with Juliana
- Oura: the Netlify site says aggregate results are still pending (60–90 day window), while the Canva deck gives specific early wins. Both are shown, and the early wins are labeled "Early results".
- Canva says she "wrote net-new SEO/GEO content" for dermatology. Netlify frames the same work as strategy and Map Pack.

## Images (assets/images/)
Juliana's headshot and all five client images are in. They were cropped from screenshots the user saved to the Desktop. Before launch, confirm permission to use them:
- oura.jpg: a third-party pin credited "@ayholistics"
- magnus-medical.jpg: SAINT brand graphic
- dermatology.jpg: a skin-analysis imaging session
- chris-conner.jpg: the studio logo
- memory-air.jpg: product shot from memoryair.com
- juliana.jpg: Juliana's headshot

## Link preview card
`og/card.html` is the source for `assets/og.jpg` (1200×630), the image shown when the link is shared. To re-render it after editing, run this from the project folder:

    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=6000 --screenshot=og.png "file://$PWD/og/card.html"

Then convert og.png to assets/og.jpg. The `og/` folder isn't deployed.
