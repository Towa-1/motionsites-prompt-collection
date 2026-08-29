## 2026-08-26 - Icon Button Accessibility and Tooltips
**Learning:** Icon-only buttons often lack tooltips ('title' attribute) and visible focus states, confusing sighted users trying to discover functionality and keyboard users trying to navigate the page. This is particularly problematic when flexible button components don't fall back to accessible text defaults if their label prop is empty.
**Action:** When working on icon-only buttons or buttons that can be configured to just show an icon, always ensure 'title' and 'aria-label' attributes are provided with fallback strings, and always add 'focus-visible' utility classes to guarantee focus indication.

## 2024-02-14 - Empty States and Form Focus Visibility
**Learning:** Complex form wrappers (like a label containing an input and a button) often mask native focus outlines because `outline-none` is applied to the input itself. Additionally, missing empty states (e.g., when a search yields 0 results) lead to poor user experience, making the app feel broken rather than informative.
**Action:** Use Tailwind's `focus-within:ring-*` on form wrapper elements to ensure the entire control appears focused when its children are interacted with. Always provide helpful empty states with actionable "Clear" buttons when rendering list views dependent on user input.
