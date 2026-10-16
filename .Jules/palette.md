## 2026-08-26 - Icon Button Accessibility and Tooltips
**Learning:** Icon-only buttons often lack tooltips ('title' attribute) and visible focus states, confusing sighted users trying to discover functionality and keyboard users trying to navigate the page. This is particularly problematic when flexible button components don't fall back to accessible text defaults if their label prop is empty.
**Action:** When working on icon-only buttons or buttons that can be configured to just show an icon, always ensure 'title' and 'aria-label' attributes are provided with fallback strings, and always add 'focus-visible' utility classes to guarantee focus indication.

## 2023-10-16 - Search Input Clear Buttons and Accessibility
**Learning:** Adding a clear button (like an 'X' icon) to an existing search input wrapped in a `<label>` creates an accessibility issue where the `<label>` contains multiple interactive elements (the input and the button), which leads to invalid HTML and confusing screen reader behavior.
**Action:** When adding interactive elements alongside an input within a wrapper, convert the wrapper from a `<label>` to a `<div>` and apply an explicit `aria-label` directly to the `<input>` element instead. Also use `focus-within` on the new `<div>` wrapper to maintain the focus ring style that visually connects the components.
