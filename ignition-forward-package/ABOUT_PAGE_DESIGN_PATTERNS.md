# About Page Design Patterns - Extracted from Reference HTML

## Key Design Elements

### 1. Interactive Path Navigation
- Sticky tab navigation with 4 paths: Why We Started, What We've Built, Who We Are, How We Work
- Each tab has icon + title + subtitle label
- Active state: white background, gold bottom border, gold subtitle
- Content switches with fadeSlideIn animation

### 2. Hero Section
- Navy background with gold gradient overlay (135deg, transparent to gold 8% opacity)
- Gold label text (uppercase, 12px, letter-spacing: 3px)
- DM Serif Display title (56px) with gold span highlights
- Segment dots: gold 8px circles with gray text
- Bouncing arrow prompt animation

### 3. Card Styles

**Why Cards (Problem Cards)**
- Gray-50 background, gray-200 border, 16px radius
- Navy icon box (48px, 12px radius)
- Hover: gold border, shadow
- Highlight variant: navy gradient background, gold icon, gold title

**Proof Cards (Stats)**
- White background, centered text
- DM Serif Display numbers (36px)
- Hover: translateY(-4px), gold border, large shadow

**System Cards (Dark Feature Cards)**
- Navy background, 20px radius
- Gold radial gradient in corner
- Badge: gold text on gold/20% background
- Stats row at bottom with gold values

**Principle Cards (Numbered)**
- White background, gray border
- Large serif number (48px, gray-200)
- Gold top line on hover (scaleX animation)
- Highlight variant: navy background, gold number/title

**Founder Cards**
- Two-part: navy header + gray-50 body
- Avatar: gold gradient circle with initials
- Credential tags: white with border, highlight variant navy with gold text
- Stats grid: 2x2 with serif numbers

### 4. Section Layouts

**Two-Column Grid (Why Section)**
- 1fr 1fr with 80px gap
- Story text on left, cards on right

**Five-Column Stats Grid**
- repeat(5, 1fr) with 20px gap
- Responsive: 3 cols at 1024px, 2 cols at 768px

**Three-Column Systems Grid**
- repeat(3, 1fr) with 32px gap
- Responsive: 1 col at 1024px

### 5. Quote Block
- Navy background, 16px radius, 40px padding
- Large decorative quote mark (120px, gold 15% opacity)
- Italic text, gold author name

### 6. Expertise Spectrum (Navy Section)
- Navy background, 24px radius, 60px padding
- 5-column grid of expertise pillars
- Gold icon boxes, hover: gold background, translateY(-4px)

### 7. Flywheel Visual
- Horizontal flow: Build → Use → Deploy → Learn → Repeat
- Gold bordered nodes with arrows
- Responsive: vertical at 768px

### 8. GP Use Cases Box
- White background, 2px gold border, 20px radius
- Icon + title header
- 3-column grid of use cases

### 9. Team Extension Card
- Gray-50 background, 20px radius
- Member highlight: white card inside with avatar

### 10. CTA Section
- Navy background, centered
- DM Serif Display title (40px)
- Gold button with hover lift and shadow

## Typography
- Body: DM Sans (400, 500, 600, 700)
- Display: DM Serif Display (400)
- Labels: 11-12px, uppercase, letter-spacing 1-3px
- Section titles: 36px serif
- Hero title: 56px serif

## Colors
- Navy: #1A2332
- Navy-light: #242f42
- Navy-dark: #141b27
- Gold: #C9A962
- Gold-light: #d4bb7a
- Gold-dark: #b8954d
- Gray-50 to Gray-700 scale

## Animations
- fadeSlideIn: opacity 0→1, translateY 20px→0, 0.5s ease
- bounce: translateY 0→6px, 2s infinite
- Card hover: translateY(-4px), 0.3s ease
- Gold line reveal: scaleX 0→1, 0.3s ease
