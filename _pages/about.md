---
permalink: /
title: "Shengye Tao"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <p class="home-kicker">Mathematics & AI · Learning theory · Systems research</p>
  <h1>Shengye Tao</h1>
  <p class="home-subtitle">Undergraduate in Mathematics &amp; AI at BIMSA</p>
  <p>
    I am interested in learning theory, sequential decision-making, quantitative systems, digital life,
    world models, and human-computer workflows. I build small reproducible systems and research
    prototypes to turn abstract questions into testable structures.
  </p>
  <p class="home-actions">
    <a class="btn btn--primary" href="https://github.com/RanchoTao">GitHub</a>
    <a class="btn" href="{{ '/CV.pdf' | relative_url }}">CV</a>
    <a class="btn" href="{{ '/blog/' | relative_url }}">Posts</a>
    <a class="btn" href="{{ '/zh/' | relative_url }}">中文</a>
  </p>
</section>

## Research Interests

<div class="interest-grid">
  <div>Learning Theory &amp; Sequential Decision-Making</div>
  <div>Digital Life &amp; Minimal Formal Systems</div>
  <div>World Models &amp; Cognitive Transformation</div>
  <div>Quantitative Systems &amp; Market Structure</div>
  <div>Human-Computer Workflows</div>
</div>

## Selected Work

<div class="work-grid">
  <article class="work-card">
    <p class="work-status">Work in progress</p>
    <h3>Visual Deadline</h3>
    <p>A cognitive scheduling system for visualizing task pressure, deadlines, attention load, and long-term goals.</p>
    <p><a href="https://github.com/RanchoTao/VD">GitHub</a></p>
  </article>
  <article class="work-card">
    <p class="work-status">Draft</p>
    <h3>MarketManifold</h3>
    <p>A market structure visualization project based on correlation, distance, MDS, PCA, and clustering.</p>
  </article>
  <article class="work-card">
    <p class="work-status">Notes</p>
    <h3>Digital Life Minimal Model</h3>
    <p>A formal exploration of boundary maintenance, endogenous value, persistent identity, and environment coupling in digital systems.</p>
  </article>
  <article class="work-card">
    <p class="work-status">Notes</p>
    <h3>Learning Theory Reading Map</h3>
    <p>Structured notes and reading paths for bandits, online learning, reinforcement learning, and related mathematical foundations.</p>
  </article>
</div>

## Recent Posts

{% if site.posts.size > 0 %}
<ul class="post-list-compact">
  {% for post in site.posts limit:5 %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span>{{ post.date | date: "%Y-%m-%d" }}</span></li>
  {% endfor %}
</ul>
{% else %}
<p>Working papers and notes will be listed here.</p>
{% endif %}

## Academic Profile

I am transitioning from a student of existing ideas to a researcher-builder who turns abstract questions into reproducible systems, notes, prototypes, and papers. See <a href="{{ '/academic/' | relative_url }}">Academic</a> for education, research interests, notes, and CV.
