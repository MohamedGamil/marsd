# Marsd Business Analysis

## Executive Summary

Marsd is a multi-variant, intelligence-oriented monitoring product that combines live news aggregation, geospatial visualization, AI-assisted synthesis, and typed API access into a single operating surface. Based on the current codebase and README, the product is no longer just a map with feeds; it behaves like a lightweight situational awareness platform for users who need fast cross-domain context.

The strongest directly evidenced product thesis is:

> **Give a user one place to monitor, interpret, and share high-signal global developments by fusing news, map layers, market data, infrastructure data, and AI summaries.**

That thesis is visible in several places:

- `src/config/variant-meta.ts` positions the product as an “AI-Driven Global Monitoring & Insights” dashboard and defines four specialized variants: `full`, `tech`, `finance`, and `happy`.
- `src/config/panels.ts` exposes a very large panel-based surface area spanning live news, AI insights, country instability, market intelligence, webcams, service status, climate, displacement, and more.
- `src/App.ts` assembles a unified application shell with panel persistence, variant switching behavior, bootstrap hydration, refresh scheduling, country briefs, and desktop-specific runtime logic.
- `README.md` describes the product as an AI-powered real-time dashboard and documents a mature multi-platform architecture: web, PWA, desktop, relay, and programmatic API.

From a product-management perspective, Marsd appears to be evolving toward a **specialized, modular intelligence workspace** with four GTM entry points:

1. **Geopolitical / OSINT monitoring** (`full`)
2. **Tech and AI ecosystem monitoring** (`tech`)
3. **Financial / macro / market monitoring** (`finance`)
4. **Positive-news / progress monitoring** (`happy`)

This is not a narrow consumer app. The implemented breadth, operational complexity, and emphasis on reliability indicate a product optimized primarily for **power users, analysts, researchers, journalists, and always-on monitoring use cases**.

## Scope and Evidence Basis

This analysis is grounded in the repository’s current code and documentation, primarily:

- `README.md`
- `docs/analysis/architecture.md`
- `docs/analysis/features.md`
- `docs/ARCHITECTURE.md`
- `docs/DATA_SOURCES.md`
- `docs/AI_INTELLIGENCE.md`
- `src/App.ts`
- `src/config/panels.ts`
- `src/config/map-layer-definitions.ts`
- `src/config/variant-meta.ts`
- `src/app/search-manager.ts`
- `src/app/country-intel.ts`
- `src/app/refresh-scheduler.ts`
- desktop docs such as `docs/DESKTOP_APP.md`

Where something is **directly evidenced**, this document says so. Where something is a **product inference**, it is labeled as inference.

## Product Purpose and Positioning

## What the product is

Direct evidence suggests Marsd is positioned as a **real-time global monitoring and intelligence dashboard**.

Evidence:

- `variant-meta.ts` explicitly uses descriptors like “Global Monitoring & Insights,” “OSINT Tool,” “Tech Dashboard,” “Market Tracker,” and “Positive News Dashboard.”
- `README.md` emphasizes real-time monitoring, AI synthesis, multi-signal correlation, and map-driven exploration.
- `src/config/panels.ts` reveals that the product is organized as a configurable intelligence console rather than a single-feed experience.

## What problem it solves

Marsd solves the fragmentation problem faced by users who need to answer questions like:

- What is happening right now?
- Where is it happening?
- How serious is it?
- What infrastructure, markets, or countries are affected?
- Which signals corroborate each other?
- Can I brief someone else quickly from the same system?

In product terms, Marsd reduces the switching cost between:

- headline scanning,
- map exploration,
- market/risk context,
- source-level validation,
- country-level briefing,
- and sharing/export.

## Positioning statement

A concise positioning statement, inferred from code and docs:

> Marsd is a cross-domain situational-awareness platform for analysts and high-context users who need live, map-based, AI-assisted monitoring across geopolitics, technology, finance, and global progress.

## Category fit

Marsd sits at the intersection of several product categories:

- OSINT dashboard
- news aggregation and monitoring
- geospatial intelligence visualization
- analyst workstation / decision-support tool
- verticalized monitoring products (tech, finance, positive news)
- developer-facing data platform via typed APIs

That multi-category nature is a strength, but also a positioning challenge: the product is powerful, though not yet sharply simplified for one buyer persona.

## Target Users and Personas

The codebase does not include explicit user research artifacts or a defined ICP document. The personas below are inferred from feature design, terminology, and platform choices.

## Primary persona: Geopolitical / OSINT analyst

**Evidence:**

- Full variant panel set includes `AI Insights`, `AI Strategic Posture`, `Country Instability`, `Strategic Risk Overview`, `Live Intelligence`, `Telegram Intel`, `Israel Sirens`, `Airline Intelligence`, `UCDP Conflict Events`, `Displacement`, `Security Advisories`, and `Infrastructure Cascade`.
- Map layers include conflicts, hotspots, military aircraft, naval activity, sanctions, protests, undersea cables, outages, climate anomalies, GPS jamming, and more.
- Country brief and story export flows are implemented in `src/app/country-intel.ts`.

**Likely jobs-to-be-done:**

- Maintain live awareness across regions.
- Identify emerging hotspots faster than general media workflows allow.
- Build a brief on a country or event quickly.
- Cross-check signals across news, map layers, and structured data.

## Primary persona: Newsroom researcher / independent journalist

**Evidence:**

- Live news aggregation is central across variants.
- Source credibility, propaganda-risk handling, and alerting are described in README.
- Story export, OG images, sharing, and PDF/print support are documented.

**Likely jobs-to-be-done:**

- Track breaking situations.
- Pull context and corroboration quickly.
- Turn monitoring output into shareable artifacts or a brief.

## Secondary persona: Tech industry watcher / investor / founder

**Evidence:**

- `tech` variant includes AI labs, startups, VC, layoffs, cloud, GitHub, Product Hunt, service status, events, tech readiness, and datacenter/cloud-region map layers.
- Search supports tech companies, AI labs, startup ecosystems, tech HQs, accelerators, datacenters, and cables (`src/app/search-manager.ts`).

**Likely jobs-to-be-done:**

- Track AI and startup ecosystems globally.
- Monitor industry shifts, infrastructure concentration, and service reliability.
- Identify strategic regions, clusters, or ecosystem signals.

## Secondary persona: Macro / finance monitor

**Evidence:**

- `finance` variant metadata references stock exchanges, central banks, commodities, forex, crypto, economic indicators, and sector heatmaps.
- Full and finance variants expose market and macro panels such as `markets`, `commodities`, `economic`, `trade-policy`, `supply-chain`, `macro-signals`, `stablecoins`, `etf-flows`, and `gulf-economies`.

**Likely jobs-to-be-done:**

- Watch macro and geopolitical developments together.
- Understand market-moving events in geographic context.
- Scan for supply-chain, trade-policy, and energy risks.

## Secondary persona: Always-on monitor / command-center user

**Evidence:**

- Desktop app, PWA, TV mode, live webcam grids, world clock, adaptive refresh, and installable surfaces are all documented.
- `docs/DESKTOP_APP.md` emphasizes native packaging, local sidecar, keychain storage, and continuous operation characteristics.

**Likely jobs-to-be-done:**

- Run the dashboard on a large screen continuously.
- Keep a persistent monitoring environment with minimal babysitting.
- Operate in lower-trust or lower-connectivity environments using local/desktop capabilities.

## Tertiary persona: Positive-news / civic-progress user

**Evidence:**

- `happy` variant exists as a distinct product surface with positive events, kindness, happiness, species recovery, renewables, and humanity counters.

**Inference:**

This variant may target a broader or more consumer-friendly audience than the rest of the product, but the codebase overall still feels optimized for enthusiasts/power users rather than mass-market casual users.

## Core User Jobs

Across variants, the most defensible core jobs are:

1. **Monitor** — keep a live pulse on a domain.
2. **Locate** — understand where events are occurring.
3. **Interpret** — use AI summaries, clustering, and scoring to reduce raw feed overload.
4. **Corroborate** — compare multiple signals before concluding significance.
5. **Investigate** — drill into a country, event, infrastructure asset, or market theme.
6. **Configure** — tailor panels, layers, sources, and variants to a personal workflow.
7. **Share / brief** — export, print, or generate visual story artifacts for downstream communication.
8. **Operate continuously** — run the system on desktop/PWA with resilience and persistence.

## Main Workflows and User Journeys

## 1. Open the dashboard and establish situational awareness

**Direct evidence:**

- `src/App.ts` initializes variant-aware defaults, layer state, panel state, bootstrap data, AI settings, localization, and mobile/desktop behaviors.
- README documents bootstrap hydration and adaptive refresh scheduling.

**Likely journey:**

1. User lands on a variant-specific hostname.
2. App restores or migrates local preferences.
3. Dashboard bootstraps panel data and map state.
4. User scans top panels and map overlays.
5. User notices AI summaries / alerts / clusters / risk panels.

**Product value:** fast time-to-context.

## 2. Search-driven investigation

**Direct evidence:**

- `src/app/search-manager.ts` provides a Cmd+K search modal with source registration for countries, hotspots, conflicts, infrastructure, tech entities, and finance geography.
- README references ~250 country commands and fuzzy-search navigation.

**Likely journey:**

1. User presses Cmd/Ctrl+K.
2. Searches for a country, company, hotspot, or infrastructure asset.
3. Jumps to map, panel, or country brief.
4. Continues investigation in-context.

**Product value:** reduces navigation friction in a broad interface.

## 3. Country intelligence briefing

**Direct evidence:**

- `src/app/country-intel.ts` opens country briefs from map or search.
- It enriches the brief with CII scores, markets, infrastructure, timelines, advisories, related signals, and share/export support.
- It supports story rendering and image export.

**Likely journey:**

1. User clicks a country or searches it.
2. Country brief opens with score, signals, infrastructure, news, and economic context.
3. User exports image / PDF / story artifact.
4. User shares or uses the brief operationally.

**Product value:** turns a broad dashboard into an actionable briefing tool.

## 4. Layer-based map exploration

**Direct evidence:**

- `src/config/map-layer-definitions.ts` defines a shared layer registry across flat and globe renderers.
- `src/config/panels.ts` sets variant-specific default layers.
- README highlights a dual-map engine and dozens of toggleable layers.

**Likely journey:**

1. User toggles layers relevant to the domain.
2. Navigates globe or flat map.
3. Clicks markers / countries / hotspots.
4. Opens related brief, popup, or contextual panel.

**Product value:** spatial pattern detection and geographic reasoning.

## 5. Always-on watchfloor / desktop usage

**Direct evidence:**

- README and `docs/DESKTOP_APP.md` detail Tauri packaging, local sidecar, local secrets, cloud fallback, auto-update, and traffic logs.
- README mentions TV mode, fullscreen video, PWA installability, and adaptive background refresh.

**Likely journey:**

1. User installs desktop app or PWA.
2. Configures credentials/local LLMs if desired.
3. Leaves dashboard open for ongoing monitoring.
4. Uses alert banners, webcams, world clock, and panel cycling.

**Product value:** supports persistent operational monitoring rather than one-off browsing.

## 6. API / integration consumption

**Direct evidence:**

- README documents programmatic access via `api.marsd.app` and proto-first APIs with 22 service domains.
- Generated clients exist in `src/generated/client/...`.

**Inference:**

Marsd is not only an end-user product; it is also quietly becoming a reusable intelligence data platform.

## Full Feature Inventory by Area

This inventory is based on `src/config/panels.ts`, `src/config/map-layer-definitions.ts`, README, and related docs.

## A. Shared platform capabilities

- Multi-variant architecture: `full`, `tech`, `finance`, `happy`
- Shared app shell with persistent local settings (`src/App.ts`)
- Responsive/mobile behavior and mobile-specific layer defaults
- Desktop runtime detection and desktop-only configuration surfaces
- Localization / internationalization
- Analytics and error tracking
- Search / command palette
- Panel reordering, resizing, persistence, and migrations
- PWA installability
- Desktop application packaging and auto-update
- Story export / image export / PDF / print / OG sharing
- Programmatic API access

## B. Core intelligence / monitoring features

- Live news aggregation across many feeds and categories
- AI insights / world brief / deduction workflows
- Breaking-news alerts and banners
- Headline clustering / trend and velocity concepts
- Threat classification pipeline
- Intelligence gap / data freshness surfacing
- Source credibility and propaganda-risk concepts
- Country instability scoring (CII)
- Strategic posture and strategic risk panels
- Focal-point / convergence / multi-signal correlation concepts
- Country brief / deep-dive workflow

## C. Geospatial and map features

- Dual map engine: flat + globe
- Shared layer registry for both renderers
- Layer toggles by variant
- Country click / highlight / fit interactions
- Geographic search entities
- Choropleth risk mapping
- Geopolitical boundary overlays
- Trade route and infrastructure visualization
- Mobile geolocation / timezone-based centering

## D. Geopolitical / OSINT feature area (full variant)

Panels evidenced in `FULL_PANELS` include:

- Global Map
- Live News
- Live Webcams
- AI Insights
- AI Strategic Posture
- Country Instability
- Strategic Risk Overview
- Intel Feed
- Live Intelligence
- Infrastructure Cascade
- World / US / Europe / Middle East regional news
- Predictions
- Commodities
- Markets
- Economic Indicators
- Trade Policy
- Supply Chain
- Financial
- Technology
- Crypto
- Sector Heatmap
- AI/ML
- Layoffs Tracker
- My Monitors
- Fires
- Market Radar
- BTC ETF Tracker
- Stablecoins
- UCDP Conflict Events
- Displacement
- Climate Anomalies
- Population Exposure
- Security Advisories
- Israel Sirens
- Telegram Intel
- Airline Intelligence
- World Clock

Disabled-but-present panels suggest future or unstable areas:

- Africa
- Latin America
- Asia-Pacific
- Energy & Resources
- Government
- Think Tanks
- Gulf Economies
- Global Giving

Associated full-variant map layers include:

- Iran attacks
- hotspots, conflicts
- military aircraft, naval activity, strikes
- bases, nuclear, irradiators, spaceports
- cables, pipelines, datacenters
- AIS / trade / protests / UCDP / displacement / climate / weather / outages / natural disasters / minerals / economic centers / GPS jamming / CII choropleth

## E. Tech feature area (tech variant)

Panels evidenced in `TECH_PANELS` include:

- Global Tech Map
- Tech Headlines
- AI Insights
- AI/ML News
- Technology
- Startups & VC
- VC Insights & Essays
- Global Startup News
- Unicorn Tracker
- Accelerators & Demo Days
- Cybersecurity
- AI Policy & Regulation
- AI Regulation Dashboard
- Layoffs Tracker
- Tech Stocks
- Financial News
- Crypto
- Semiconductors & Hardware
- Cloud & Infrastructure
- Developer Community
- GitHub Trending
- IPO & SPAC
- Tech Predictions
- Funding & VC
- Product Hunt
- Tech Events
- Service Status
- Economic Indicators
- Tech Readiness Index
- Market Radar
- BTC ETF Tracker
- Stablecoins
- Airline Intelligence
- World Clock
- My Monitors

Search sources in `src/app/search-manager.ts` confirm deep tech entity support:

- tech companies
- AI labs
- startup ecosystems
- datacenters
- cables
- tech HQs
- accelerators

Tech map layers include startup hubs, cloud regions, datacenters, cables, outages, tech events, and adjacent operational layers.

## F. Finance feature area (finance variant)

The finance variant is strongly evidenced in `variant-meta.ts`, README, and finance-oriented layer/search definitions. Key areas include:

- markets / exchanges
- financial centers
- central banks
- commodity hubs
- macro signals
- stablecoins
- ETF flows
- trade policy
- supply chain
- economic indicators
- commodities and oil analytics
- prediction markets
- Gulf investment mapping

Search sources support stock exchanges, financial centers, central banks, and commodity hubs.

Finance map layers include:

- stock exchanges
- financial centers
- central banks
- commodity hubs
- Gulf investments
- trade routes
- cables / pipelines / outages / weather / economic centers

Note: the exact `FINANCE_PANELS` object was not reproduced in this analysis pass, but the product surface is amply evidenced through variant metadata, README, search manager sources, and finance layer definitions.

## G. Happy / positive-news feature area (happy variant)

Evidenced by `variant-meta.ts`, README, and layer definitions:

- curated positive news
- global progress tracking
- live humanity counters
- science breakthroughs
- conservation tracker
- renewable energy dashboard
- positive event layers
- kindness / happiness / species recovery / renewable-installations layers

This is the clearest product outlier in the portfolio: same platform, different emotional job.

## H. Media / visual situational awareness

- Live webcam surveillance grid
- region filtering and single-view/grid-view options
- HLS/live stream support
- fullscreen video controls
- desktop embed bridge behavior

This adds a “watchfloor” quality that most dashboards do not have.

## I. Personalization and workflow tooling

- source reduction and locale-based source boosts (`src/App.ts`)
- panel enable/disable and ordering
- map-layer defaults and presets
- monitors / saved monitoring behavior
- theme system and light/dark mode
- variant switching support
- world clock configuration

## J. Desktop / power-user features

From `docs/DESKTOP_APP.md` and README:

- native desktop app with local sidecar
- local keychain secret management
- authenticated localhost sidecar
- cloud fallback
- local RSS proxy
- traffic log and verbose mode
- update checking
- settings window with LLM/API/debug tabs
- local model discovery
- cross-window secret sync

This is an unusually deep desktop story for an open web dashboard.

## Data Sources, Integrations, and Dependencies

## Product data-source model

Marsd is fundamentally a **data fusion product**. Its value depends on combining heterogeneous inputs rather than owning a single proprietary dataset.

## Integration categories evidenced in docs/code

### News and content

- RSS/Atom feeds across many domains and languages
- Telegram channels via relay / MTProto
- YouTube / HLS live streams

### Geopolitical / security / event data

- ACLED
- UCDP
- OREF/Home Front Command
- security advisories
- GPS/GNSS interference inputs
- cyber threat feeds (Feodo, URLhaus, OTX, AbuseIPDB, C2IntelFeeds, ransomware.live per README)
- natural disaster sources such as USGS / GDACS / EONET

### Mobility / transport / tracking

- AIS / AISStream
- OpenSky
- Wingbits
- NOTAM / AviationStack / airport data

### Finance / macro / economic

- Yahoo Finance
- EIA
- FRED
- BIS
- WTO
- Polymarket
- Gulf investment datasets

### AI / model providers

- Ollama / LM Studio
- Groq
- OpenRouter
- browser-local Transformers.js / ONNX runtime

### Infrastructure / platform dependencies

- Vercel Edge Functions
- Railway relay
- Redis / Upstash-style shared caching
- Tauri desktop runtime
- MapLibre / deck.gl / globe.gl / Three.js
- Sentry
- Vercel Analytics

## Strategic implication

The product’s defensibility is currently more about:

- aggregation breadth,
- correlation logic,
- UX integration,
- and operational hardening,

than about proprietary source ownership.

That is viable, but it means reliability, curation quality, and product focus matter a lot.

## Value Proposition and Differentiation

## Core value proposition

Marsd offers **compressed, cross-domain context**.

Instead of asking users to separately visit:

- news sites,
- map tools,
- market dashboards,
- AIS/flight trackers,
- conflict databases,
- AI summarizers,
- and desktop/local ops tools,

Marsd brings them together in one opinionated workspace.

## Main differentiation themes

### 1. Multi-signal fusion, not single-stream browsing

Marsd’s docs repeatedly emphasize convergence, correlation, focal points, strategic posture, and instability scoring. That indicates the product is trying to move above “feed reader” territory into “signal synthesis.”

### 2. Geospatial-first experience

The dual map engine and extensive layer catalog make location a first-class primitive, not a decorative feature.

### 3. Variant strategy from one codebase

The same platform is repackaged for four adjacent markets with hostname-based runtime specialization. That is efficient product leverage and opens multiple acquisition surfaces.

### 4. Strong power-user / desktop posture

The desktop sidecar, local credentials, local model support, and operational resilience are much deeper than typical dashboard competitors.

### 5. Shareability and briefing output

Country stories, image export, print/PDF, OG cards, and social sharing mean the product can feed downstream communication workflows, not just passive monitoring.

## Potential differentiation statement

> Marsd differentiates by combining analyst-style cross-signal reasoning, map-based context, and local/desktop operational resilience in a single modular platform.

## Operational, Reliability, and Trust Considerations

This codebase is unusually explicit about reliability and trust, which is a real product asset.

## Strengths directly evidenced

- adaptive refresh scheduling (`src/app/refresh-scheduler.ts`)
- stale-on-error behavior and negative caching (README, desktop docs)
- in-flight deduplication and backpressure handling (README)
- data freshness / intelligence gap surfacing (README)
- source credibility weighting and propaganda risk treatment (README)
- desktop token-authenticated sidecar and OS keychain storage (`docs/DESKTOP_APP.md`)
- SSRF protection, CORS allowlists, bot protection, and IPC hardening (README)
- Sentry noise filtering and environment-aware observability (`src/main.ts`)

## Why this matters product-wise

For this category, trust is not only about privacy. It is also about:

- whether missing data is visible,
- whether stale data is labeled,
- whether source quality is legible,
- and whether the system fails gracefully during real events.

Marsd appears materially stronger here than many “cool dashboard” projects.

## Risks within this same area

- The system depends on many upstreams with different failure modes and terms of service.
- Product complexity can make trust harder for new users, because they may not understand which insights are model-generated vs feed-derived vs inferred.
- Broad AI usage requires careful framing to avoid overclaiming analytical certainty.

## Monetization and Packaging Hypotheses

There is no explicit pricing or subscription model in the current repository. README’s “Support the Project” section currently points to stars, sharing, contribution, and issue reporting rather than paid plans.

So the following is inference, not documented business fact.

## Most plausible monetization paths

### 1. Open-core / hosted pro

This is the most natural path.

Evidence supporting feasibility:

- open-source repo and public app
- typed APIs
- desktop runtime with secret management
- feature-gating infrastructure already exists in runtime config / secrets / desktop readiness concepts

Possible paid features:

- higher-rate alerts / push notifications
- saved workspaces / team collaboration
- premium source packs
- enterprise SSO / audit / admin controls
- SLA-backed hosted desktop or managed deployments
- API usage tiers

### 2. API platform monetization

Because the project already exposes `api.marsd.app` and documents 22 service domains, a developer/data-consumption SKU is plausible.

### 3. Desktop / analyst edition

The desktop app with local sidecar and secure credential handling could support a premium “pro analyst” packaging angle, especially for privacy-sensitive users.

### 4. Vertical editions

The current variant model could become packaging:

- geopolitical intelligence
- tech ecosystem intelligence
- finance / macro intelligence
- positive-news / education / media

## What is not yet evidenced

- billing flows
- accounts / identity / teams
- seat management
- plan enforcement
- workspace sync
- paid entitlements

So monetization appears **strategically available but not yet productized** in the current frontend.

## Risks, Gaps, and Strategic Concerns

## 1. Product breadth may exceed immediate clarity

Marsd has a lot of power, but the surface area is very large. The product can plausibly be seen as:

- OSINT tool
- media dashboard
- macro monitor
- tech tracker
- desktop app platform
- API platform
- positive-news project

That breadth is impressive, but it makes first-time comprehension harder.

## 2. The product may be optimized for builders more than buyers

The README and architecture are extremely rich technically. That is great for contributors and power users, but the buyer story is less explicit than the implementation story.

## 3. Variant portfolio coherence risk

`happy` is strategically interesting but sits farther from the core seriousness of the other variants. It may broaden reach, but it may also dilute the main brand unless intentionally framed as a separate emotional use case.

## 4. Insight explainability risk

The product uses AI summaries, deductions, classifications, and scoring. If explanations, provenance, and confidence cues are not prominent enough in the UI, some users may either over-trust or under-trust the output.

## 5. Operational burden risk

The architecture spans Vercel, Railway, Redis/cache layers, desktop sidecar logic, browser ML, many upstream APIs, and multiple app variants. That is powerful but expensive in maintenance and QA.

## 6. Onboarding / activation risk

For new users, the ideal first action is not obvious:

- should they scan the map?
- read live news?
- use Cmd+K?
- open country briefs?
- configure sources?
- install desktop?

A product this capable needs stronger guided activation than a simple dashboard does.

## Strategic Recommendations

## 1. Sharpen the primary wedge

Recommendation: explicitly define the primary commercial wedge as one of:

- **Geopolitical intelligence workstation**, or
- **Real-time situational awareness platform**.

Then treat the other variants as adjacent editions, not equal peers in messaging.

Why: the product currently has many strengths, but the top-line story should be simpler than the implementation.

## 2. Separate “analysis” from “monitoring” in the UX story

Marsd serves both quick scanning and deep briefing. These are related but distinct jobs.

Recommendation:

- make the monitoring mode obvious and ambient,
- make the investigation/brief mode explicit and premium-feeling.

The country brief system is the strongest candidate for a flagship “analysis output” workflow.

## 3. Build clearer persona-led onboarding paths

Suggested landing journeys:

- “I want to monitor global risk”
- “I want to track AI and startups”
- “I want macro + market context”
- “I want a calmer positive-news view”

And within each:

- default panel set,
- suggested layers,
- suggested searches/commands,
- example workflows.

## 4. Productize trust and provenance more aggressively

Recommendation:

- make “why am I seeing this?” prominent,
- show source counts / freshness / confidence / AI provenance inline,
- let users drill from a score to its contributing evidence.

The repository already contains much of the underlying logic; the product opportunity is to expose it more explicitly.

## 5. Decide whether the API is a feature or a business line

The proto-first API surface is substantial. A strategic decision should be made:

- If it is just a support feature, keep it lightweight.
- If it is a business line, market it clearly, document use cases, and package it.

Right now it looks more powerful than its product framing suggests.

## 6. Rationalize the portfolio brand

Recommendation:

- keep a master platform brand,
- but present variants as editions with explicit user-value narratives,
- especially decide whether `happy` should remain under the same master narrative or evolve into a more independent brand expression.

## Suggested Roadmap / Opportunities

These are PM recommendations based on the current product, not promises from the codebase.

## Near-term opportunities

### A. Guided onboarding and first-run templates

- preset workspaces by persona
- guided “watchlist” / “monitor pack” setup
- default tours for search, country briefs, and map layers

### B. Provenance-first insight UX

- explain score composition inline
- show confidence/provenance chips on AI output
- add “evidence trail” drilldowns from alerts and summaries

### C. Saved investigations / persistent workspaces

- named dashboards
- saved country packs
- pinned searches / pinned map states
- reusable analyst layouts

### D. Alerts and notification productization

README already lists push notifications as not yet done. This is a high-leverage next step.

Potential forms:

- threshold alerts
- country watch alerts
- topic/entity alerts
- convergence alerts
- daily brief digests

## Medium-term opportunities

### E. Team / collaboration layer

Not evidenced today, but highly compatible with the product:

- shared workspaces
- team annotations
- handoff notes
- shared monitors and alert routing

### F. Commercial API offering

- authenticated tiers
- usage dashboards
- API docs optimized for external consumption
- SDK examples by use case

### G. Enterprise / secure deployment packaging

- self-hosted deployment path
- admin controls
- auditability
- stricter offline/local mode messaging

## Longer-term opportunities

### H. Decision-support workflows

Move from “see the world” toward “help me make a call”:

- scenario tracking
- watchlist escalation workflows
- compare countries / sectors / theaters
- recurring brief generation

### I. Stronger proprietary value layer

To improve defensibility over time, the product should keep investing in:

- better scoring frameworks
- unique curated datasets
- entity/country memory and analyst workflows
- differentiated workflow UX, not just source aggregation

## Summary Assessment

Marsd is already a substantial product, not just a frontend experiment.

### What is clearly true from the codebase

- It is multi-variant and intentionally portfolio-shaped.
- It is map-centric, panel-centric, and intelligence-oriented.
- It has deep power-user capability, especially around country briefs, local desktop operation, and data-source breadth.
- It takes reliability, resilience, and trust signaling seriously.
- It is architected as both a user-facing dashboard and an emerging data/API platform.

### What is most likely true by inference

- The product’s strongest commercial opportunity is with analyst and monitoring-heavy users, not broad casual audiences.
- The biggest challenge is not capability but clarity: messaging, onboarding, and packaging likely trail implementation depth.
- The country brief / cross-signal / desktop-local combination is one of the most strategically differentiated areas and should probably be treated as the flagship product story.

### Bottom line

Marsd’s current product identity is best understood as:

> **A modular, AI-assisted situational awareness platform that turns fragmented global signals into navigable, map-based, shareable intelligence workflows.**

That is strong. The next major step is to make the value proposition as legible as the architecture already is.
