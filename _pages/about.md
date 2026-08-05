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
  <p class="home-kicker">Mathematics & AI · Learning theory · Systems research</p>
  <h1 data-scroll-title>Shengye Tao</h1>
  <p class="home-subtitle">Undergraduate in Mathematics &amp; AI at BIMSA</p>
  <p>
    I am interested in learning theory, sequential decision-making, quantitative systems, digital life,
    and world models. I build small reproducible systems and research prototypes to turn abstract
    questions into testable structures.
  </p>
  <p class="home-actions">
    <a class="btn btn--primary" href="https://github.com/RanchoTao">GitHub</a>
    <a class="btn" href="{{ '/CV.pdf' | relative_url }}">CV</a>
    <a class="btn" href="{{ '/notes/' | relative_url }}">Notes</a>
  </p>
</section>

## Research Interests

<div class="interest-grid">
  <div>Learning Theory &amp; Sequential Decision-Making</div>
  <div>Digital Life &amp; Minimal Formal Systems</div>
  <div>World Models &amp; Cognitive Transformation</div>
  <div>Quantitative Systems &amp; Market Structure</div>
</div>

## Selected Work

<div class="work-grid">
  <article class="work-card">
    <p class="work-status">Product</p>
    <h3>Visual Deadline</h3>
    <p>A cognitive scheduling system for visualizing task pressure, deadlines, attention load, and long-term goals.</p>
    <p><a href="https://github.com/RanchoTao/Visual-Deadline">GitHub</a></p>
  </article>
  <article class="work-card">
    <p class="work-status">Open knowledge base</p>
    <h3>BIMSA MathAI</h3>
    <p>An unofficial open knowledge base and course archive for learners in the BIMSA Mathematics and AI program.</p>
    <p><a href="https://ranchotao.com/BIMSA-MathAI/">Visit website</a></p>
  </article>
  <article class="work-card">
    <p class="work-status">Knowledge atlas</p>
    <h3>Math · CS · AI Atlas</h3>
    <p>A multiscale knowledge graph and learning-route system spanning pure mathematics, computer science, and artificial intelligence.</p>
    <p><a href="https://ranchotao.com/Math-CS-AI/">Visit website</a></p>
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

## Recent Activities

<div class="activity-list">
  <article class="activity-item">
    <p class="activity-meta">2025.11 – Now · Undergraduate Student</p>
    <h3>BIMSA Math &amp; AI Program</h3>
    <p>Joined the Mathematics &amp; AI undergraduate program at BIMSA, focusing on mathematical foundations, artificial intelligence, and research-oriented training.</p>
  </article>
  <article class="activity-item">
    <p class="activity-meta">2026.06 · Participant</p>
    <h3>Tsinghua Qiuzhen / YMSC AI Summer School</h3>
    <p>Attended lectures and discussions on generative models, diffusion models, and mathematical perspectives on modern AI.</p>
  </article>
  <article class="activity-item">
    <p class="activity-meta">2026.07 · Participant</p>
    <h3>Peking University Machine Learning Workshop</h3>
    <p>Participated in academic talks and discussions on machine learning, research practices, and possible future research directions.</p>
  </article>
</div>

## Academic Profile

I am transitioning from a student of existing ideas to a researcher-builder who turns abstract questions into reproducible systems, notes, prototypes, and papers. See <a href="{{ '/research/' | relative_url }}">Research</a> for education, research interests, notes, and CV.
