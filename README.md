# Simple banner slider

## Low Complexity — ~8 hours

- Auto-rotating banner slider
- Single visible slide at a time
- Images rendered in DOM for stable switching
- Fixed container height (layout stability)
- Minimal configuration (items, height, sizes)

## Medium Complexity — ~16 hours

- Dots / indicators
- Basic controls (next / previous)
- Controlled image loading strategy (preload first slides)
- Stable autoplay timing (no drift on slow networks)
- Edge case handling:
  - empty list
  - single slide
- Accessibility-friendly visibility handling (`aria-hidden`)
- Clean, reusable component API

## High Complexity — ~24 hours

- Keyboard navigation
- Reduced motion support (`prefers-reduced-motion`)
- Pause on interaction and page visibility change
- Configurable autoplay behavior
- Polished controls and indicators UI
- Advanced performance tuning for hero banners
- Production-level edge case handling
