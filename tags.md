---
layout: page
title: Pages by Tags
active: tags
---

<section>
  <article>
    <h1>{{ page.title }}</h1>
    <div class="flex flex-half">
      {% for tag in site.tags %}
      {% assign tag_name = tag | first %}
      <div id="{{ tag_name | slugify }}">
        <h3>{{ tag_name | capitalize }}</h3>
        <ul>
          {% for post in site.tags[tag_name] %}
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
