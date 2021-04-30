---
layout: page
title: Posts List
active: posts
---

<h1>{{ page.title }}</h1>
{% for post in site.posts %}
<section>
  <small style="color: #aaa">{{ post.categories }}</small>
  <time class="time f-right" datetime="{{ post.date }}">({{ post.date | date_to_string }})</time>
  <a href="{{ post.url }}">
    <h3>{{ post.title }}</h3>
  </a>
  <p>{{ post.description }}</p>
  Tags:
  <ul class="tags">
    {% for tag in post.tags %}
    <li><a href="/tags/#{{ tag | slugify }}">{{tag | capitalize}}</a></li>
    {% endfor %}
  </ul>
</section>
{% endfor %}
