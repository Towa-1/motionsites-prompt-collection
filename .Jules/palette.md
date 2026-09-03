## 2026-08-26 - Icon Button Accessibility and Tooltips
**Learning:** Icon-only buttons often lack tooltips ('title' attribute) and visible focus states, confusing sighted users trying to discover functionality and keyboard users trying to navigate the page. This is particularly problematic when flexible button components don't fall back to accessible text defaults if their label prop is empty.
**Action:** When working on icon-only buttons or buttons that can be configured to just show an icon, always ensure 'title' and 'aria-label' attributes are provided with fallback strings, and always add 'focus-visible' utility classes to guarantee focus indication.
## 2026-09-03 - Invisible Focus States on Inputs within Labels
**Learning:** When using custom `<label>` elements as a visual container wrapping an `<input>`, the input's default focus outline can be visually hidden or look broken. Using `focus-within:ring-X` on the wrapping `<label>` correctly surfaces the focus state for keyboard users navigating to the input.
**Action:** Always check the focus states of inputs wrapped in styled labels. Apply `focus-within` utilities to the parent label to provide clear visual feedback.
