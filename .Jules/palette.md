## 2026-08-26 - Icon Button Accessibility and Tooltips
**Learning:** Icon-only buttons often lack tooltips ('title' attribute) and visible focus states, confusing sighted users trying to discover functionality and keyboard users trying to navigate the page. This is particularly problematic when flexible button components don't fall back to accessible text defaults if their label prop is empty.
**Action:** When working on icon-only buttons or buttons that can be configured to just show an icon, always ensure 'title' and 'aria-label' attributes are provided with fallback strings, and always add 'focus-visible' utility classes to guarantee focus indication.
## 2026-10-05 - Focus Accessibility on Custom Inputs
**Learning:** When using custom inputs where the native input element has `outline-none`, it's critical to apply `focus-within` styles to the parent wrapper so keyboard users still see a focus indicator.
**Action:** Always add `focus-within:ring-2 focus-within:ring-[color]` to the wrapping container of a borderless input.
