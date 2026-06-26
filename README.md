# boundless-tallawah-software.github.io

Main website for Boundless Tallawah Software — Engineering digital resilience with Caribbean soul.

## Design System: Digital Atelier

This site uses a custom **Digital Atelier** design system that combines corporate professionalism with Caribbean regional character.

### Key Design Elements

**Color Palette:**
- **Navy** (#00113a, #002366) - Primary brand color for authority and trust
- **Gold** (#FFD100) - Secondary accent for CTAs and highlights
- **Green** (#009639) - Tertiary accent for active states and emphasis
- Warm neutral surfaces (#f8f9fa, #ffffff)

**Typography:**
- **Literata** (serif) - Headlines and display text for editorial authority
- **Hanken Grotesk** (sans-serif) - Body text, labels, and UI elements

**Technical Stack:**
- Jekyll 4.3+ (static site generator)
- Tailwind CSS via CDN (utility-first styling)
- Custom layouts and includes (no theme dependency)
- Material Symbols for icons

### Development

```bash
# Install dependencies
bundle install

# Run development server with live reload
bundle exec jekyll serve --livereload

# Build for production
bundle exec jekyll build
```

The site will be available at `http://localhost:4000`

### Project Structure

```
├── _includes/          # Reusable HTML components
│   ├── head.html      # Tailwind config and fonts
│   ├── navigation.html # Top navigation bar
│   ├── footer.html    # Site footer
│   ├── hero.html      # Homepage hero section
│   ├── about-section.html
│   ├── services-grid.html
│   ├── cta-horizon.html
│   └── fab.html       # Floating action button
├── _layouts/          # Page templates
│   ├── default.html   # Base layout with nav/footer
│   ├── home.html      # Homepage layout
│   └── page.html      # Standard page layout
├── assets/
│   ├── css/
│   │   └── style.scss # Additional custom styles
│   ├── images/        # Site images and logo
│   └── js/            # Custom JavaScript
├── _config.yml        # Jekyll configuration
├── index.md           # Homepage (uses home layout)
└── about.md           # About page

```

### Design Credits

- Design System: Digital Atelier
- Fonts: Literata (serif), Hanken Grotesk (sans-serif)
- Icons: Material Symbols
- Framework: Tailwind CSS

---

We serve the Caribbean. We build web applications, usable in office or when mobile, to custom fit business needs and the local environment. Human friendly interactions that allow for offline use cases.

## Local development

```bash
bundle config set --local path 'vendor/bundle'
bundle install
bundle exec jekyll build
```
