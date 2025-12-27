# Ignition Forward - Changelog

## [2024-12-26] Strategic Diagnostic Page (Hidden)

### Overview

Created a new **Strategic Diagnostic** offering page as a hidden/unlisted page for direct prospect sharing.

**URL**: `/strategic-diagnostic`

**Position**: Entry point for Organization Track buyers who want validation before committing to larger engagements.

### Page Sections

| Section | Content |
|---------|----------|
| **Hero** | "Map where AI creates leverage—and where it doesn't" + $15K-$25K pricing |
| **Problem** | Three failure modes: Wrong Use Case, Data Not Ready, No Clear Success Criteria |
| **Deliverables** | 6 outputs: AI Opportunity Map, Data Readiness Assessment, Prioritization Matrix, Quick Wins, Roadmap, Investment Framework |
| **Timeline** | 3-week process: Discovery → Analysis → Synthesis |
| **Differentiators** | Operators not consultants, Actionable not academic, No vendor lock-in |
| **Fit Criteria** | Good fit / Not a fit indicators |
| **Pricing** | Essentials ($15K/2wk) vs Complete ($25K/3wk) |
| **Next Paths** | Implement Internally, Forward Deployed (credit), Fractional AI (credit) |
| **FAQ** | 5 common questions |
| **CTA** | Schedule a Diagnostic Call |

### Key Features

- **Hidden from navigation**: Not linked from menu, footer, or any internal pages
- **Noindex**: Set to `noindex` for search engines
- **Credit policy**: Diagnostic investment applies to future engagements
- **Standalone value**: Roadmap useful even if prospect doesn't continue with Ignition Forward

### Files Created
- `client/src/pages/StrategicDiagnostic.tsx`

### Files Modified
- `client/src/App.tsx` (added route)

---

## [2024-12-26] Service Description Enhancements

### Changes Made

**Added specificity to service descriptions** to signal proper discovery before building:

| Service | Addition | Rationale |
|---------|----------|----------|
| **Fractional AI Officer** | "Use case prioritization by business impact" | Shows we prioritize by ROI, not technical novelty |
| **Forward Deployed** | "Data readiness assessment included" | Signals we don't skip discovery |

**Updated Service Pages**:
- FractionalAI.tsx: Added "Use Case Prioritization" as first deliverable
- ForwardDeployed.tsx: Added "Data readiness assessment" to Discovery & Design phase

### Files Modified
- `client/src/pages/Home.tsx`
- `client/src/pages/FractionalAI.tsx`
- `client/src/pages/ForwardDeployed.tsx`

---

## [2024-12-26] Two Paths Forward Structure

### Changes Made

**Restructured "How We Help" Section**
- **Before**: Three equal service cards (Edge, Fractional AI Officer, Forward Deployed)
- **After**: Two clear tracks with nested service options

**New Structure**:

| Track | Target Audience | Services |
|-------|-----------------|----------|
| **Executive Track** | Individual Leaders | EDGE Program (9 Hours • 1:1) |
| **Organization Track** | Companies & Teams | Fractional AI Officer ($15-30K/mo) + Forward Deployed (6-8 Weeks) |

**Copy Changes**:
- Section label: "THREE WAYS TO WORK WITH US" → "HOW WE WORK"
- Headline: "Choose Your Path Forward" → "Two Paths Forward"
- Added intro paragraph: "Whether you're an executive seeking personal AI fluency or an organization ready to transform operations — we have a path designed for where you are."

**Design Changes**:
- Executive Track: Navy badge, subtle border
- Organization Track: Gold badge, gold border with shadow (visual emphasis)
- Service cards nested within each track with time/price indicators

### Rationale
- Clearer self-selection: Visitors immediately know which path is for them
- Better information hierarchy: Track → Service → Details
- Matches reference design patterns that tested well

### Files Modified
- `client/src/pages/Home.tsx`

---

## [2024-12-26] Homepage Copy Improvements

### Changes Made

**1. "Operators Who've Been in the Seat" Headline**
- **Before**: "Operators, Not Consultants"
- **After**: "Operators Who've Been in the Seat"
- **Rationale**: More empathetic framing. Shifts from "what we're not" to "what we understand." Creates emotional resonance with buyers who want advisors who've felt the weight of their decisions.
- **Location**: Home.tsx, "What Makes Us Different" section

**2. Maguire Differentiator Line**
- **Added**: "CRM tracks what happened. Maguire makes you better at what's next."
- **Rationale**: Killer positioning line that differentiates Maguire from existing CRM tools. Answers "what's different?" instantly. Positions as complementary, not replacement.
- **Location**: Home.tsx, Maguire section, below the description

**3. Andrew Moss Quote**
- **Added**: Full quote block with attribution
  > "We don't just advise. We build. Maguire is proof — 232 iterations, 18 months of development, running our own sales operation."
  > — Andrew Moss, Managing Partner
- **Rationale**: Named attribution builds trust. Quote focuses on AI product (Maguire), maintaining AI positioning while adding credibility. Shows founder involvement in product development.
- **Location**: Home.tsx, Maguire section, below the metrics

### Design Decisions

- **Kept "Applied AI" label**: Did not add "Strategic Advisory" — the current label is sharper and more differentiated.
- **Kept metrics on About page**: $800M exits, $4.5B revenues stay on About page, not homepage, to maintain AI-specific positioning.
- **Deferred "Two Paths Forward" restructure**: More significant rework; consider for future iteration.

### Files Modified
- `client/src/pages/Home.tsx`

### Impact Assessment

| Change | Buyer Impact | Investor Impact | AI-Specific? |
|--------|--------------|-----------------|--------------|
| Operators headline | High (empathy) | Medium (operator pedigree) | Contextual ✓ |
| Maguire differentiator | Very High (product clarity) | High (product thinking) | ✓ Yes |
| Andrew quote | High (trust + attribution) | High (founder involvement) | ✓ Yes |

---

## Previous Updates

### [2024-12-26] Motion Language Refinement
- Removed all shimmer/glow effects
- Tightened animations to 120-240ms with consistent cubic-bezier(0.2, 0, 0, 1) easing
- Updated scroll reveals to be tight/precise (12px Y offset + blur-to-sharp)
- Reduced stagger delays from 100-200ms to 40-80ms

### [2024-12-26] Image Rollback
- Rolled back from abstract system diagrams to original flowing wave imagery
- User preferred the elegant gold particle/wave aesthetic over stark technical diagrams
