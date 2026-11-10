---
layout: page
title: Documents
permalink: /documents/
subtitle: Brochures, product information, and other resources from Boundless Tallawah Software.
---

<div class="grid gap-6 md:grid-cols-2">
  {% for document in site.data.documents %}
    <article class="rounded-xl border border-surface-container-high bg-white p-8 editorial-shadow">
      <span class="material-symbols-outlined text-brand-green" aria-hidden="true">description</span>
      <h2 class="mt-4 text-2xl font-bold text-primary">{{ document.title }}</h2>
      <p class="mt-3 text-on-surface-variant">{{ document.description }}</p>
      <div class="mt-6 flex flex-wrap gap-4">
        <a class="rounded bg-primary px-5 py-2.5 font-medium text-white transition-colors hover:bg-primary-container" href="{{ document.file | relative_url }}" target="_blank" rel="noopener noreferrer">View brochure</a>
        <a class="rounded border border-primary px-5 py-2.5 font-medium text-primary transition-colors hover:bg-surface-container" href="{{ document.file | relative_url }}" download>Download</a>
      </div>
    </article>
  {% endfor %}
</div>
