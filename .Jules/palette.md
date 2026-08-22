## 2024-05-16 - Reusable Icon-only Buttons
**Learning:** Reusable button components (`CopyButton`, `DownloadButton`) that conditionally render text (e.g. allowing an empty `label` prop to make them icon-only) often end up creating accessibility issues downstream in places where they are used without text.
**Action:** Always ensure reusable button components have a fallback `aria-label` (and `title` for tooltip visibility) when the visible label text might be empty, and always include `focus-visible` styling.
