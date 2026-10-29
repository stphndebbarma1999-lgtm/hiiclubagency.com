# hiiclubagency.com — SEO and content implementation handover

Prepared 29 October 2026 on local branch `seo-content-overhaul`, which is based on `origin/add-website-files` (PR #1, the `public_html` export).
**Nothing has been pushed, uploaded or deployed.** No forms were submitted, and no DNS, hosting or Ahrefs settings were changed.

Status labels used below:
- **Implemented and locally tested**
- **Awaiting deployment**
- **Awaiting external verification**
- **Blocked by missing evidence**
- **Not applicable**

---

## 1. What was inspected first

| Check | Finding |
|---|---|
| Repo layout | `main` holds only `README.md`. The site lives on the unmerged branch `add-website-files`: static HTML/CSS/JS plus a Hostinger `default.php` placeholder. There is no build step and no CMS, and none was added. |
| Repo vs production | The Ahrefs Site Audit raw HTML of `https://hiiclubagency.com/` (crawl of 23 Oct 2026) is byte-identical to the repo's `index.html`, apart from a trailing newline. |
| Analytics / verification | No analytics, tag manager or verification `<meta>` tags exist in the repo or in the crawled live HTML. GSC must therefore be verified by DNS or by a file not exported to the repo. Nothing was removed. |
| `.htaccess` | Not in the repo, yet live HTTP→HTTPS redirects exist. This means a server-side `.htaccess` (or an hPanel setting) exists that was not exported. **Back it up before deploying** (see §8). |
| Live / competitor access | This session's network policy blocked hiiclubagency.com, hiiclubofficial.com, oms.hiiclub.live, theamigas.com and bestcallingapps.site. Live checks used Ahrefs Site Audit data; competitor checks used your inspection notes. |

---

## 2. Changed files

| File | Change | Status |
|---|---|---|
| `index.html` | Rewritten content. Title and H1 kept. Login/OMS section added. FAQs cut from 20 to 6. Schema consolidated. | Implemented and locally tested; awaiting deployment |
| `join-as-agency.html` | New title and H1. Practical application guide with an on-page contents list. | Implemented and locally tested; awaiting deployment |
| `join-as-host.html` | Host-specific requirements, steps, verification, earnings and support. | Implemented and locally tested; awaiting deployment |
| `blog.html` | Rebuilt as a guide hub. All 12 cards are real links. `CollectionPage` + `ItemList` schema. Nav label changed to "Guides". | Implemented and locally tested; awaiting deployment |
| `about-us.html` | Honest operator, scope and app-relationship content. `AboutPage` schema. | Implemented and locally tested; awaiting deployment |
| `contact-us.html` | WhatsApp number shown as visible text with a button. What to send and what not to send. Scope. `ContactPage` schema. | Implemented and locally tested; awaiting deployment |
| `safe-hiiclub-registration.html` | **New** article: "How to Check a Hiiclub Registration Link Before You Apply". `BlogPosting` schema. | Implemented and locally tested; awaiting deployment |
| `404.html` | **New** `noindex` 404 page with root-relative links, so it works at any URL depth. | Implemented and locally tested; awaiting deployment |
| `.htaccess` | **New**. One-hop 301s for www, http and `/index.html`. Real 404. Blocks `docs/`, `.git`, `README.md`. | Tested on local Apache 2.4; awaiting deployment and a merge with the server's existing file |
| `sitemap.xml` | 7 canonical URLs (new article added) with genuine `lastmod` values. Ignored `changefreq`/`priority` removed. | Implemented and locally tested |
| `style.css` | Font loaded via `<link>` instead of `@import`. Hidden mobile menu removed from keyboard focus. Focus styles and skip link. Promo popup CSS moved in and scoped. Overflow fixes. Small content helpers. | Implemented and locally tested |
| `script.js` | FAQ `aria-expanded`. Escape closes the menu. Active link for `/`. Promo popup close bug fixed. | Implemented and locally tested |
| `docs/SEO-HANDOVER.md` | This file. **Do not upload** (it also returns 404 via `.htaccess` if uploaded). | — |

Unchanged: `hero.png`, `logo.png`, `favicon.png`, `robots.txt`, `site.webmanifest`, `browserconfig.xml`, `default.php`.

---

## 3. Final metadata and keyword-to-page map

| URL | Title | Meta description | H1 |
|---|---|---|---|
| `/` | Hiiclub Agency Registration \| Join Hiiclub Agency *(unchanged)* | Explore Hiiclub agency registration and host onboarding. Find application guidance, existing-agency login help, and WhatsApp support. | Hiiclub Agency Registration *(unchanged)* |
| `/join-as-agency.html` | Hiiclub Agency Application \| Steps & Requirements | Learn how to apply for a Hiiclub agency, what information to prepare, and where to get help with onboarding, policy questions, and account access. | Start a Hiiclub Agency: Application and Onboarding |
| `/join-as-host.html` | Hiiclub Host Registration \| Requirements & Support | Review the Hiiclub host application process, verified requirements, onboarding steps, and support options before submitting your details. | Hiiclub Host Registration |
| `/blog.html` | Hiiclub Guides \| Registration, Login & Support | Find practical Hiiclub resources for agency applications, host registration, existing-account access, and support. | Hiiclub Registration and Support Guides |
| `/safe-hiiclub-registration.html` | Check a Hiiclub Registration Link Before You Apply | How to check a Hiiclub agency or host registration link, spot fake fees and OTP requests, and protect your account before you share any details. | How to Check a Hiiclub Registration Link Before You Apply |
| `/about-us.html` | About Hiiclub Agency \| Registration Support | Learn what this Hiiclub registration support website does, how our team assists applicants, and how to contact us. | About Our Hiiclub Registration Support |
| `/contact-us.html` | Contact Hiiclub Agency \| WhatsApp Support | Contact our team on WhatsApp for Hiiclub agency applications, host onboarding, and registration support questions. | Contact Hiiclub Agency Support |

The previous duplicate H1 ("Hiiclub Agency Registration" on both `/` and `/join-as-agency.html`) is resolved. The homepage keeps it.

**Keyword-to-page map.** Queries are from the GSC export, India, 1 Aug–27 Oct 2026. Hiiu queries are excluded.

| Intent | Example queries (clicks / impressions) | Primary page | Supporting section |
|---|---|---|---|
| Agency brand / registration | hiiclub agency (314/1096), hiclub agency (221/730), hi club agency (80/396), high club agency (32/107), hii club agency (18/97), hiiclub agency registration (15/47), hi club agency registration (10/57) | `/` | `/join-as-agency.html` (detailed steps) |
| Existing agency login / OMS | hiiclub agency login (114/314), hiclub agency login (62/535), hi club agency login (41/216), hiiclub login (20/323), hiclub login (2/26), hiiclub oms (3/1122) | `/#agency-login` | Guides hub card, contact page |
| Agency application detail | (long-tail; no separate GSC rows) | `/join-as-agency.html` | — |
| Host registration | (low volume in export) | `/join-as-host.html` | `/#agency-vs-host` |
| Brand / app navigational | hiiclub (29/1302), hiclub (26/703), hii club (12/380), hi club (2/328), hiiclub app, hiiclub live, hiiclub chat | `/` | Not targeted beyond clear navigation. These are often searches for the app itself. |
| "Official website" | hiiclub official website (5/51) | `/` | Content states plainly that this is **not** the official website |
| "Hiiclub pro" | hiiclub pro (2/147), hiiclub pro login (2/57) | — | **Not targeted.** No evidence about what "Hiiclub Pro" is. See §7. |

Spelling variants (hiclub, hi club, hii club, high club) are not stuffed into copy, and no pages were created for them.

---

## 4. Competitor topic comparison (hiiclubofficial.com)

The competitor pages could not be fetched in this session (network policy). Its column is based on your inspection notes: it covers commission classes, dashboard use, payout workflow and practical questions more explicitly. No competitor text, figures, codes, numbers, imagery or testimonials were used.

| User question | Our previous answer | Competitor's coverage (per your notes) | Verified source | Improvement implemented |
|---|---|---|---|---|
| How are agency commissions calculated? | Generic "performance-based, scales with team" | Explicit commission classes/levels | **None available** | Explains what to confirm (basis, levels, settlement, fees). No figures published. *Blocked by missing evidence* for actual rates. |
| How and when are agencies paid? | "Contact us for settlement timelines" | Payout workflow described | **None available** | Withdrawal, settlement, fee and verification checklist on the agency page and the homepage. Figures still need verifying. |
| How do I use the agency dashboard / OMS? | Not covered | Dashboard use covered | GSC demand only. Registration form domain `oms.hiiclub.live` comes from your own CTA. | Homepage login/OMS section. Dashboard how-to **not** written because there was no verified material (no doorway page). |
| Where do existing agencies log in? | Not covered | — | **No verified login URL** | Honest login help, no credential collection, WhatsApp route. *Awaiting external verification* for the login URL. |
| What do I need to apply? | "Basic personal details, smartphone" | Practical requirements | Your CTA destinations | Requirements written as non-numeric preparation steps. 18+ is stated as **our** policy (see §7). |
| What happens after I apply? | "Approval… short period" | — | — | No promise of approval or timing. Explains the duplicate-application risk and what to keep. |
| Agency vs host? | Spread across sections | Separate pages | — | Side-by-side comparison on `/#agency-vs-host`. |
| Is this site official? | Implied ("official agency partner") | — | — | Clear independent-site statement on every page (footer), the homepage, About and FAQs. |

---

## 5. Before/after examples

**Homepage hero copy**
- Before: "Join Hiiclub Agency and build your own host network… we help you get started with a simple process."
- After: "Find the right Hiiclub registration route, understand what to prepare, and get onboarding guidance from our team. Choose agency registration or host registration to continue."
- Added below the two buttons: "Already registered? Find agency login help." → `#agency-login`

**Unsupported claims removed**

| Before | After |
|---|---|
| "Thousands of agency partners choose Hiiclub Agency…" | Removed (no evidence) |
| "Register as an official Hiiclub Agency partner" / "official agency partner" | "independent registration support website" |
| "build a stable and growing income stream" / "full control over your results" (host) | "Earnings follow the app's current rules… not a salary and not guaranteed" |
| "Once verified, your agency registration is approved" | "The platform decides… we cannot guarantee approval or a timeline" |
| "Our team has extensive experience in the Hiiclub ecosystem" (About) | Removed (no evidence) |
| "areaServed: Worldwide" (schema) vs "India" (visible) | Both say India |

**Application CTAs now match their instructions**
- Agency: previously the button went to `oms.hiiclub.live` while the steps said "contact us on WhatsApp to register". Now the button is labelled "Open agency application", the steps describe the external form, and WhatsApp is a separate "Ask a question" route.
- Host: previously the button went to `theamigas.com` while the steps described WhatsApp onboarding. Same fix.
- Both referral parameters are **preserved exactly**: `parent_invite_code=w0RUL8` and `union_invite_code=w0RUL8`.

**Blog**
- Before: 10 cards with no links (`<article>` only), promising guides that did not exist.
- After: 12 linked cards, all pointing at real sections or the one new real article. No "coming soon" pages.

**Technical**

| Before | After |
|---|---|
| `<img src="hero.png" width="900" height="540">` (actual 1190×1536) | `width="1190" height="1536"` |
| `<img src="logo.png" width="160" height="50">` (actual 1024×1024) | `width="42" height="42"` (footer 38×38) |
| `<a href="index.html">Home</a>` on every page (fed the `/index.html` duplicate) | `<a href="/">` |
| Promo popup close: `document.querySelector('.popup-close')` matched the WhatsApp popup's button, so the promo could not be closed, and its global `.popup-close` CSS overrode the other popup | Scoped `.bap-close`. Closing stops it for the session. Original timing kept otherwise. |
| Hidden mobile menu: links stayed keyboard-focusable while invisible | `visibility: hidden` when closed; Escape closes it |
| FAQ buttons never updated `aria-expanded` | Updated on toggle; answers linked with `aria-controls` / `aria-labelledby` |

---

## 6. Technical items (TECH-001 to TECH-005)

| ID | Result | Status |
|---|---|---|
| TECH-001 Duplicate URL variants | **Saved crawl:** `https://www.*` pages and `/index.html` returned 200 with non-www canonicals; `http://www` went to `https://www` (two hops). **New `.htaccess`:** every www, http and `/index.html` variant now 301s to its final `https://hiiclubagency.com` URL **in one hop**. Path and query string are preserved (e.g. `http://www…/index.html?utm_source=x` → `https://hiiclubagency.com/?utm_source=x`). Missing URLs return **404** (not redirected home). The index rule matches `THE_REQUEST`, so there is no loop with `DirectoryIndex`. | Tested on local Apache 2.4 (60-case matrix); awaiting deployment and a live re-test |
| TECH-002 Indexing signals | Self-canonicals kept on all 7 indexable pages. `og:url` and the sitemap match. Internal Home links go to `/`. No page canonicalises to another. | Implemented and locally tested |
| TECH-003 Sitemap/robots | Sitemap: 7 canonical 200 URLs, `lastmod` 2026-10-29 (**update it to the real upload date** if you deploy later). `robots.txt` unchanged (allow all + sitemap). No robots/noindex used for duplicates. | Implemented and locally tested |
| TECH-004 Structured data | One `@graph` per page with a shared `Organization` `@id` and consistent phone `+91-9233262700`. Home: `WebSite`, `WebPage`, `Service` (India), `FAQPage`. Agency/Host: `WebPage`, `FAQPage`. Guides: `CollectionPage` + `ItemList` (12). Article: `BlogPosting` (author/publisher = the site organisation; date matches the visible byline). About: `AboutPage`. Contact: `ContactPage`, `FAQPage`. FAQ schema is generated from the same data as the visible FAQs, and a test confirms they match exactly. No ratings, reviews, invented authors or invented dates. FAQ rich results are currently limited by Google to certain sites, so none are expected. | Implemented and locally tested; awaiting Rich Results Test after deploy |
| TECH-005 Links / usability / performance | All internal links and `#anchors` resolve (tested). Skip link, focus outlines, keyboard-safe menu. Corrected image dimensions. Hero image not lazy-loaded and given `fetchpriority="high"`. Font moved from CSS `@import` to `<link>` with preconnect (removes one request-chain step). Promo popup CSS/JS de-duplicated into shared files. | Implemented and locally tested |
| Old audit summary (1 error / 3 warnings / 4 notices) | The Ahrefs issues API (first 100 rows) showed only one non-zero row: "Article page missing Article schema" (1 URL, `/blog.html`). The remaining counts could not be reconciled from the rows retrieved. | **Unresolved** — re-run Site Audit after deployment |
| `default.php` | Hostinger placeholder page, live at `/default.php` (200, unlinked). Not changed. | Recommend deleting it from the server |

**On `/blog.html` and the Ahrefs notice:** the page is now a real hub (`CollectionPage`). It is deliberately **not** marked as an Article. If Ahrefs still flags it, that is an expected false positive, not a defect.

---

## 7. Remaining verification tasks, blockers and owner decisions

| # | Item | Status | What is needed |
|---|---|---|---|
| 1 | **Agency login / OMS URL** | Blocked by missing evidence | Confirm the genuine existing-agency sign-in URL (it may or may not be on `oms.hiiclub.live`). Once confirmed from an official source, add it as an external link in `/#agency-login`. **No URL was invented.** |
| 2 | **Host route `theamigas.com`** | Awaiting external verification | Confirm `https://www.theamigas.com/agency-anchor-invite?union_invite_code=w0RUL8` is the current genuine Hiiclub host invitation page. Copy describes it neutrally as "an external page". |
| 3 | **Agency route `oms.hiiclub.live/h5/agency-register`** | Awaiting external verification | Confirm it is still the current form. Copy calls it "the Hiiclub agency system", based on the domain. |
| 4 | Invite-code disclosure | Owner confirmation | The agency, host and About pages state that links carry "our invite code" and that the platform records our agency as the referrer. This is inferred from the `parent_invite_code` / `union_invite_code` parameters. Confirm, or adjust the wording. |
| 5 | 18+ requirement | Owner confirmation | Stated as our own policy ("We only assist adult applicants"). If the app's official minimum age is higher, use the higher figure. |
| 6 | Commission rates, levels, settlement days, minimum withdrawal, fees, payout dates, registration fee | Blocked by missing evidence | Provide current official policy material or owner-approved documentation. Until then the copy explains what to confirm and publishes no figures. |
| 7 | Operator identity | Owner decision | No legal entity, address or experience claims were published. If you want a registered business name on About/schema, supply documentation. |
| 8 | Support hours | Owner decision | Not published. Copy says "as soon as we can; no 24/7 or guaranteed response time". |
| 9 | Languages | Owner decision | Schema keeps "English" (as before). Add Hindi or others only if supported. |
| 10 | "Hiiclub Pro" queries | Not applicable for now | No evidence about what it is; not targeted. |
| 11 | Article date | Before deploy | `safe-hiiclub-registration.html` shows and marks up 29 Oct 2026. If you publish later, change both the visible date and `datePublished`/`dateModified`. |
| 12 | Promo popup cadence | Owner decision | Unchanged: first at 2 s, then every 10 s. It now closes properly. Consider showing it once per visit, because a recurring overlay on mobile hurts usability. |
| 13 | Analytics / CTA tracking | Not applicable (no analytics installed) | CTAs carry `data-cta` attributes (`agency-apply-external`, `host-apply-external`, `login-help-whatsapp`, `whatsapp-float`, `contact-whatsapp`, …). If you add GA4/GTM later, one click trigger on `[data-cta]` separates agency-application, host-application, WhatsApp-support and login-help clicks. A click is not a completed registration. No tags were added. |
| 14 | Hosting `.htaccess` | Before deploy | See §8. |

---

## 8. Deployment and rollback

### Deploy (Hostinger, File Manager or FTP)
1. **Back up first.** Download the whole current `public_html`, **including the existing `.htaccess`** (enable "show hidden files").
2. Open the existing `.htaccess`. If it has blocks not in the new file (for example `# BEGIN LSCACHE`, hPanel "Force HTTPS" rules, PHP handlers), paste them into the new file:
   - Hostinger/LiteSpeed blocks go **above** the `<IfModule mod_rewrite.c>` section.
   - **Remove any old www/HTTPS redirect rules**, so the new one-hop rules are the only ones.
   - If hPanel's "Force HTTPS" toggle is on, it may add its own rule. Keep only one HTTPS rule.
3. Upload these files to `public_html`, overwriting where they already exist:
   `index.html, join-as-agency.html, join-as-host.html, blog.html, about-us.html, contact-us.html, safe-hiiclub-registration.html, 404.html, style.css, script.js, sitemap.xml, .htaccess`
   **Do not upload:** `docs/`, `README.md`, `.git/`.
4. Purge the Hostinger/LiteSpeed cache, and the CDN cache if enabled.
5. Optionally delete `default.php` from the server.

### Verify immediately after upload
```
curl -sI http://www.hiiclubagency.com/              # expect 301 → https://hiiclubagency.com/ (one hop)
curl -sI https://www.hiiclubagency.com/blog.html    # expect 301 → https://hiiclubagency.com/blog.html
curl -sI "https://hiiclubagency.com/index.html?x=1" # expect 301 → https://hiiclubagency.com/?x=1
curl -sI https://hiiclubagency.com/                 # expect 200
curl -sI https://hiiclubagency.com/nope.html        # expect 404 (not a redirect)
curl -sI https://hiiclubagency.com/safe-hiiclub-registration.html  # expect 200
```
Also: open each page on a phone, tap both application buttons (**look at the destination, do not submit**), tap WhatsApp, and open the menu.

**If any request loops** (`ERR_TOO_MANY_REDIRECTS`), the host terminates TLS before Apache. Re-upload the backed-up `.htaccess` (instant rollback), then report the response headers.

### Rollback
- **Fastest:** re-upload the `public_html` backup from step 1, including the old `.htaccess`, then purge the cache.
- **From git:** every original file is on branch `add-website-files` (commit `9583a85`), e.g. `git checkout 9583a85 -- index.html`.
- Per-page rollback (e.g. only `index.html` if homepage clicks drop) works with the new `style.css`/`script.js`, which keep all old classes, with one caveat. The new `style.css` no longer `@import`s the Nunito font; each new page loads it in its `<head>`. A restored old page must have this line added before `<link rel="stylesheet" href="style.css">`, or it falls back to the system font:
  `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap">`

---

## 9. Post-deployment measurement

1. **GSC → URL Inspection** for `/`, `/join-as-agency.html`, `/join-as-host.html`, `/blog.html`, `/safe-hiiclub-registration.html`. Request indexing, then check the Google-selected canonical equals the declared canonical.
2. **GSC → Sitemaps:** resubmit `https://hiiclubagency.com/sitemap.xml`. Check "Success" and 7 discovered URLs.
3. **Rich Results Test / Schema validator** on `/`, `/blog.html` and the article.
4. **Comparison windows.** Allow at least 4–6 weeks after the deploy date. Compare equal-length periods (e.g. 28 days before vs 28 days after, same weekdays), India, web.
   - **Registration intent:** filter queries containing `agency` but not `login`/`oms`. Watch homepage clicks and CTR for `hiiclub agency`, `hiclub agency`, `hi club agency`, `* registration`.
   - **Existing-user intent:** filter queries containing `login` or `oms`. Watch CTR on `hiiclub oms` (1122 impressions, 0.27% CTR), `hiclub agency login` (535 impressions, 11.6% CTR) and `hiiclub login`.
   - Treat the homepage as the change to watch: about half its words (repeated cards, 14 duplicate FAQs) were removed. **If** branded agency clicks fall noticeably across two comparable periods, restore the old `index.html` per §8.
5. **Ahrefs Site Audit:** re-crawl project 10470668 and confirm the www and `/index.html` variants now show 301, not 200.
6. Recrawling and ranking changes are neither immediate nor guaranteed. Low CTR on navigational queries (e.g. `hiiclub oms`) may reflect users wanting the app's own portal.

### Ahrefs rank-tracking list (prepared, **not added**; no account settings changed)
Location: India. Competitor: `hiiclubofficial.com`. Exclude all Hiiu terms.

```
hiiclub agency
hiclub agency
hi club agency
hii club agency
high club agency
hiiclub agency registration
hi club agency registration
hiiclub agency login
hiclub agency login
hi club agency login
hiiclub login
hiclub login
hiiclub oms
hiiclub host registration
hiiclub agency application
hiiclub agency commission
hiiclub official website
hiiclub
hiclub
hiiclub app
```
Suggested tags: `registration`, `login-oms`, `host`, `brand-app`.

---

## 10. Tests run (local, 29 Oct 2026)

| Test | Result |
|---|---|
| `html-validate` 8.x (recommended preset; inline-style rule off) on all 8 HTML files | Pass, 0 errors (84 initial findings fixed: button `type`, native elements) |
| JSON-LD parse on all pages | Pass |
| Visible FAQ ⇔ FAQPage JSON-LD exact match (home 6, agency 6, host 6, contact 4) | Pass |
| Internal links + `#anchor` targets (all pages, incl. 404 root-relative links) | Pass, 0 broken |
| Canonical = `og:url` = sitemap `<loc>`; one H1 per page; title 30–65 chars; description 70–160 chars | Pass |
| Phone format consistency (`+91 9233262700` text, `wa.me/919233262700`, schema `+91-9233262700`) | Pass |
| Phrase scan (Hiiu, "thousands", "official partner", guaranteed approval/income, 24/7, stable income) | Only negations/warnings remain (e.g. "nobody can guarantee approval") |
| Apache 2.4 + mod_rewrite + mod_ssl local vhost, 60-case redirect matrix (http/https × www/non-www × 15 paths) | Pass: every variant reaches its final URL in one 301, queries preserved, missing pages 404, `docs/`, `.git`, `README.md` 404 |
| Playwright Chromium at 320 / 375 / 768 / 1366 px, 8 URLs | No horizontal overflow (after fixing 2 found at ≤375 px), no JS errors, layout shift 0 locally (Google Fonts blocked in sandbox, so real-world CLS may differ slightly) |
| Keyboard: skip link first, hidden menu not focusable, menu opens, Escape closes and returns focus | Pass |
| FAQ `aria-expanded` toggles; hero "login help" link scrolls to section | Pass |
| Channel popup opens and closes; promo popup appears, its close button works, stays closed after 11 s | Pass |

**Not tested here:**
- The real Hostinger server (the redirect rules must be re-checked live).
- Real-device performance and Core Web Vitals.
- Destination pages of the external links (network blocked).

No performance scores are claimed.

---

## 11. Design refresh (29 Oct 2026, second pass)

- **Homepage H1 changed** to one `<h1 class="hero-title">` containing two block spans: "Hiiclub Agency" / "Join as an Agency or Host". The title tag is unchanged.
- **Homepage meta description:** "Explore Hiiclub agency registration, host applications and agency login guidance. Find clear steps and get WhatsApp support from our team."
- **Homepage structure:** hero, then five compact sections — route (`#agency-vs-host`), steps, login help (`#agency-login`), and 5 FAQs (schema updated to match) — then the footer. The breadcrumb bar and the large closing CTA were removed from the homepage only. Visible `<main>` text is about 430 words.
- **Font:** Manrope variable (Fontsource 5.3.0), self-hosted at `fonts/manrope-latin-wght-normal.woff2` (25 KB, latin subset, `font-display: swap`, preloaded). The licence is in `fonts/Manrope-OFL.txt`. Google Fonts (Nunito) has been removed.
- **`style.css` rewritten:**
  - one accent (#E0184A), a near-black text colour, a spacing scale, and a 1120px container;
  - 48px buttons, subtle borders and shadows;
  - no gradient text, blobs or glass effects;
  - emoji icons removed from pages.
- **Hero image:** added `hero-760.webp` (57 KB) through `srcset`. `hero.png` is kept for the larger size and for social sharing. Not lazy-loaded.
- **Inner pages:** same styling. Copy, URLs, referral parameters, requirements and schema are unchanged, apart from the removed emoji icons.
- **Deploy:** upload the same file list as §8, **plus** `hero-760.webp` and the `fonts/` folder.
