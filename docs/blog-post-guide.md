# Blog post guide

## Create a post

Add a Markdown file to `_posts/`. Its filename must use Jekyll's
`YYYY-MM-DD-short-slug.md` format, for example:

```text
_posts/2026-07-25-digital-life.md
```

Start it with front matter like this:

```yaml
---
title: "What Makes a Digital System Alive?"
date: 2026-07-25
categories:
  - Research Notes
excerpt: "Toward a minimal formal definition of digital life."
header:
  teaser: /images/posts/digital-life-cover.webp
---
```

`excerpt` is recommended for a carefully written card summary. If it is omitted,
Jekyll's generated excerpt is used. The theme defaults enable the article layout,
author profile, and calculated reading time automatically.

## Cover images

Store local cover files in `images/posts/` and reference them with a root-relative
path as shown above. Use a 16:9 image (1600 × 900 px is a useful working size),
compress it before committing, and prefer WebP for photographic or rendered
images. A descriptive image is best, but avoid putting essential information only
inside the image.

The card chooses `header.teaser` first, then `image`, then
`images/posts/default-cover.svg`. Posts without a cover therefore remain complete
and do not show a broken-image placeholder.

## Preview locally

Install the repository's Ruby dependencies once, then run:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/blog/`. Drafts remain unpublished unless the server is
started with `bundle exec jekyll serve --drafts`.
