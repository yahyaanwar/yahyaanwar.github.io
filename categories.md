---
layout: page
title: Pages by Categories
active: categories
---

<section>
<article>
<h1>{{ page.title }}</h1>
<div class="flex flex-half">
{% for tag in site.categories %}
{% assign category_name = tag | first %}
<div id="{{ category_name | slugify }}">
<h3>{{ category_name | capitalize }}</h3>
<ul>
  {% for post in site.categories[category_name] %}
  <li>
  <a href="{{ post.url }}">{{ post.title | capitalize }}</a>
  <time class="time" datetime="{{ post.date }}">({{ post.date | date_to_string }})</time>
  </li>
  {% endfor %}
</ul>
</div>
{% endfor %}
</div>
</article>
</section>
