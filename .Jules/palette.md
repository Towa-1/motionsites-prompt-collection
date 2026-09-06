## 2026-08-26 - Icon Button Accessibility and Tooltips
**Learning:** Icon-only buttons often lack tooltips ('title' attribute) and visible focus states, confusing sighted users trying to discover functionality and keyboard users trying to navigate the page. This is particularly problematic when flexible button components don't fall back to accessible text defaults if their label prop is empty.
**Action:** When working on icon-only buttons or buttons that can be configured to just show an icon, always ensure 'title' and 'aria-label' attributes are provided with fallback strings, and always add 'focus-visible' utility classes to guarantee focus indication.

## 2024-05-18 - Search Inputs and Filter Chips Accessibility
**Learning:** Search inputs often lack a quick way to clear the input, leading to frustration. Custom filter chips built with generic buttons are often missing `aria-pressed` to announce their selected state to screen reader users, and both often miss clear keyboard focus indicators.
**Action:** Always provide a clear button for search inputs that is accessible. Make sure that filter chips behave like toggle buttons by providing an `aria-pressed` attribute reflecting their active state. Guarantee all interactive elements have visible focus indication.
