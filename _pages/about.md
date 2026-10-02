---
permalink: /
title: "Shengye Tao"
author_profile: true
lang: en
translation_key: home
nav_key: home
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <h1 data-scroll-title>Shengye Tao</h1>
  <p class="home-subtitle">Undergraduate in Mathematics &amp; AI, BIMSA</p>
  <p>
    I work on learning theory, quantitative trading, cognitive augmentation, and AI agents / harnesses.
    I aim to turn theoretical questions, experimental workflows, and real-world tasks into reproducible,
    evaluable, and continuously improvable research and engineering systems.
  </p>
  <p class="home-actions">
    <a class="btn btn--primary" href="https://github.com/RanchoTao">GitHub</a>
    <a class="btn" href="{{ '/notes/' | relative_url }}">Notes</a>
    <a class="btn" href="{{ '/cv/' | relative_url }}">CV</a>
  </p>
</section>

## Current Roles

<div class="work-grid">
  <article class="work-card">
    <p class="work-status">Sep 2026 – Present</p>
    <h3>Research Assistant</h3>
    <p>Beijing Institute of Mathematical Sciences and Applications (BIMSA)</p>
  </article>
  <article class="work-card">
    <p class="work-status">Sep 2026 – Present</p>
    <h3>Assistant</h3>
    <p>Renmin University of China–Westlake University Joint Institute for Future Humanity</p>
  </article>
  <article class="work-card">
    <p class="work-status">Oct 2025 – Present</p>
    <h3>Undergraduate in Mathematics &amp; AI</h3>
    <p>Beijing Institute of Mathematical Sciences and Applications (BIMSA)</p>
  </article>
</div>

## Research & Engineering

<div class="work-grid">
  <article class="work-card research-card">
    <h3>Learning Theory</h3>
    <p class="work-title">Persistent Depth Ordering amid Shifting Block-Bypass Responses in Language Model Pretraining</p>
    <p class="artifact-links"><a href="https://arxiv.org/abs/2610.01165">arXiv:2610.01165</a> · <a href="https://arxiv.org/pdf/2610.01165">PDF</a></p>
  </article>
  <article class="work-card research-card">
    <h3>Quantitative Trading</h3>
    <p class="work-title">Ripple Quant</p>
    <p><a href="https://github.com/RanchoTao/Ripple-Quant">GitHub</a></p>
  </article>
  <article class="work-card research-card">
    <h3>Cognitive Transformation</h3>
    <p class="work-title">Visual Deadline</p>
    <p>An external cognitive system for long-term goals, deadlines, and attention management.</p>
    <p class="artifact-links"><a href="https://visualdeadline.com">Website</a> · <a href="https://github.com/RanchoTao/Visual-Deadline">GitHub</a></p>
  </article>
</div>

{% assign english_posts = site.posts | where: "lang", "en" %}
<section class="notes-section" aria-labelledby="recent-notes-title">
  <div class="notes-section__header">
    <h2 id="recent-notes-title">Recent Notes</h2>
    <a class="notes-section__all" href="{{ '/notes/' | relative_url }}">View all notes →</a>
  </div>
  {% if english_posts.size > 0 %}
    <div class="post-card-grid">
      {% for post in english_posts limit:3 %}
        {% include post-card.html post=post %}
      {% endfor %}
    </div>
  {% else %}
    <p>New English research notes are on the way.</p>
  {% endif %}
</section>

## Experience

<div class="activity-list">
  <article class="activity-item">
    <p class="activity-meta">Oct 2026 · Academic Visit</p>
    <h3>National University of Singapore</h3>
  </article>
  <article class="activity-item">
    <p class="activity-meta">Sep 2026 · Participant</p>
    <h3>HiYouth Hackathon</h3>
    <p>Worked in a short-cycle AI product-development setting and continued iterating on the resulting prototype.</p>
  </article>
  <article class="activity-item">
    <p class="activity-meta">Jul 2026 · Participant</p>
    <h3>Peking University Machine Learning Workshop</h3>
    <p>Participated in academic talks and discussions on machine learning, research practice, and future directions.</p>
  </article>
  <article class="activity-item">
    <p class="activity-meta">Jun 2026 · Participant</p>
    <h3>Tsinghua Qiuzhen / YMSC AI Summer School</h3>
    <p>Attended lectures and discussions on generative models, diffusion models, and mathematical perspectives on modern AI.</p>
  </article>
</div>
