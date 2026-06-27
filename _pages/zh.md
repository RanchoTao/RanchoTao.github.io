---
permalink: /zh/
title: "陶圣叶"
author_profile: true
---

<section class="home-hero">
  <p class="home-kicker">数学与人工智能 · 学习理论 · 系统研究</p>
  <h1>陶圣叶</h1>
  <p class="home-subtitle">数学与人工智能方向本科生，BIMSA</p>
  <p>
    我目前在北京雁栖湖应用数学研究院数学与人工智能方向学习，关注学习理论、强化学习、量化系统、数字生命、世界模型与认知改造。
    我希望把抽象问题转化为可以复现、测试和持续迭代的系统、笔记、原型与论文。
  </p>
  <p class="home-actions">
    <a class="btn btn--primary" href="https://github.com/RanchoTao">GitHub</a>
    <a class="btn" href="{{ '/' | relative_url }}">English</a>
    <a class="btn" href="{{ '/blog/' | relative_url }}">文章</a>
    <a class="btn" href="{{ '/CV.pdf' | relative_url }}">简历</a>
  </p>
</section>

## 研究兴趣

<div class="interest-grid">
  <div>学习理论与序贯决策</div>
  <div>数字生命与最小形式系统</div>
  <div>世界模型与认知改造</div>
  <div>量化系统与市场结构</div>
  <div>人机协作与思维工具</div>
</div>

## 代表作品

<div class="work-grid">
  <article class="work-card">
    <p class="work-status">持续开发中</p>
    <h3>Visual Deadline</h3>
    <p>一个用于可视化任务压力、截止日期、注意力负载与长期目标的认知调度系统。</p>
    <p><a href="https://github.com/RanchoTao/VD">GitHub</a></p>
  </article>
  <article class="work-card">
    <p class="work-status">草稿</p>
    <h3>MarketManifold</h3>
    <p>基于相关性、距离、MDS、PCA 与聚类的市场结构可视化项目。</p>
  </article>
  <article class="work-card">
    <p class="work-status">笔记</p>
    <h3>数字生命最小模型</h3>
    <p>围绕边界维持、内生价值、跨时间身份与环境耦合的形式化探索。</p>
  </article>
  <article class="work-card">
    <p class="work-status">笔记</p>
    <h3>学习理论阅读地图</h3>
    <p>围绕 bandit、online learning、reinforcement learning 及其数学基础整理的结构化笔记。</p>
  </article>
</div>

## 近期文章

{% if site.posts.size > 0 %}
<ul class="post-list-compact">
  {% for post in site.posts limit:5 %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> <span>{{ post.date | date: "%Y-%m-%d" }}</span></li>
  {% endfor %}
</ul>
{% else %}
<p>后续会在这里整理公开笔记与阶段性论文草稿。</p>
{% endif %}
