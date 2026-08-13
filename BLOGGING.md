# Adding a blog post

1. Inside `blogs/`, copy `blog-template.html` and rename it, for example `rtos-priority-inversion.html`.
2. Replace the template title, summary, publication date, tags, and article body.
3. In `blogs/index.html`, copy one `.post-card` block and update:
   - `data-date` using `YYYY-MM-DD` so the newest post sorts first.
   - `data-tags` with one or more comma-separated tag IDs.
   - The visible date, title, summary, labels, and both article links.

Available sidebar tag IDs:

- `interview-prep`
- `computer-architecture`
- `operating-systems`
- `rtos`
- `machine-learning`
- `embedded-systems`

Example:

```html
<article class="post-card" data-tags="rtos,embedded-systems" data-date="2026-08-13">
  <!-- date and post content -->
</article>
```

A post can belong to multiple topics. The sidebar filtering is handled automatically by `blog.js`.
