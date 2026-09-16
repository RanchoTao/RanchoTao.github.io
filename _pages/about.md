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
    <h3>Research Assistant Intern</h3>
    <p>Beijing Institute of Mathematical Sciences and Applications (BIMSA)</p>
    <p>Research on stochastic processes, machine learning, and data-driven modeling.</p>
  </article>
  <article class="work-card">
    <p class="work-status">Sep 2026 – Present</p>
    <h3>Youth Assistant</h3>
    <p>Renmin University of China–Westlake University Joint Institute for Future Humanity</p>
    <p>Supporting research, projects, and youth collaboration.</p>
  </article>
  <article class="work-card">
    <p class="work-status">Undergraduate</p>
    <h3>Mathematics &amp; AI</h3>
    <p>BIMSA Mathematics &amp; AI training program</p>
    <p>Ongoing mathematical, AI, and research-oriented training.</p>
  </article>
</div>

## Research & Engineering Interests

<div class="interest-grid">
  <div>Learning Theory &amp; Model Behavior</div>
  <div>Quantitative Trading &amp; Sequential Decision-Making</div>
  <div>Cognitive Augmentation &amp; Human–AI Collaboration</div>
  <div>AI Agents / Research Harnesses</div>
</div>

## Selected Work

<div class="work-grid">
  <article class="work-card">
    <p class="work-status">Cognitive augmentation</p>
    <h3>Visual Deadline</h3>
    <p>A visual system for long-horizon planning, task pressure, deadlines, and attention management.</p>
    <p><a href="https://github.com/RanchoTao/Visual-Deadline">GitHub</a></p>
  </article>
  <article class="work-card">
    <p class="work-status">Research harness</p>
    <h3>RanchoAutoResearch</h3>
    <p>Experiments in research automation across literature, experiments, code, auditing, and writing.</p>
    <p><a href="https://github.com/RanchoTao/RanchoAutoResearch">GitHub</a></p>
  </article>
  <article class="work-card">
    <p class="work-status">Quant research</p>
    <h3>MarketManifold</h3>
    <p>A research project exploring market structure through correlations, distances, dimensionality reduction, and clustering.</p>
    <p><a href="https://github.com/RanchoTao/MarketManifold">GitHub</a></p>
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

## Academic Profile

I am building a long-term workflow that connects theory, experimental validation, and system implementation. See <a href="{{ '/research/' | relative_url }}">Research</a>, <a href="{{ '/projects/' | relative_url }}">Projects</a>, and my current <a href="{{ '/cv/' | relative_url }}">CV</a>.
