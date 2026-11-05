---
layout: default
title: Profile
permalink: /profile/
subtitle: Nkosi Dilworth – Owner & Principal at Boundless Tallawah Software & Partner at Blue Horizons Partners
description: A profile page showcasing Nkosi Dilworth’s 22+ years of software engineering, architecture, and leadership across the Caribbean, Africa, and international markets.
---

<style>
  @media (min-width: 768px) {
    .profile-timeline article:nth-child(odd) > div { grid-column: 1; }
    .profile-timeline article:nth-child(even) > div { grid-column: 2; }
  }
  .profile-accordion summary::-webkit-details-marker { display: none; }
  .profile-accordion summary { list-style: none; }
  .profile-accordion summary::marker { content: ''; }
</style>
<div class="-mt-40 pt-40 max-w-7xl mx-auto">

  <!-- Hero -->
  <section class="bg-primary text-white overflow-hidden rounded-3xl md:rounded-4xl px-8 py-16 md:py-20">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 lg:pr-12">
        <span class="inline-block text-brand-green font-bold tracking-[0.2em] uppercase text-xs mb-6">The Architect</span>
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">Nkosi Dilworth</h1>
        <p class="text-xs font-bold tracking-[0.2em] uppercase text-brand-green mb-3">Owner & Principal</p>
        <p class="text-3xl md:text-4xl font-bold text-brand-gold mb-8">Boundless Tallawah Software</p>
        <p class="text-base md:text-lg text-white/70 mb-10">Also Partner at Blue Horizons Partners</p>
        <a href="{{ site.data.profile.linkedin_url }}" class="inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-gold transition-colors" target="_blank" rel="noopener noreferrer">
          View on LinkedIn <span class="material-symbols-outlined text-base">arrow_outward</span>
        </a>
      </div>
      <div class="lg:col-span-5 relative">
        <div class="absolute -inset-3 bg-brand-gold/15 rounded-3xl blur-2xl"></div>
        <img src="{{ site.data.profile.headshot | relative_url }}" alt="Nkosi Dilworth" class="relative w-full max-w-md mx-auto aspect-square object-cover rounded-3xl border-4 border-white/10 shadow-2xl">
        <div class="absolute -bottom-5 -left-2 md:left-2 bg-brand-gold text-primary px-4 py-3 rounded-xl shadow-lg">
          <p class="text-xs font-bold tracking-[0.16em] uppercase">Systems · Software · Strategy</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Introduction -->
  <section class="grid grid-cols-1 lg:grid-cols-12 gap-10 py-20">
    <div class="lg:col-span-4">
      <span class="text-brand-green font-bold tracking-[0.2em] uppercase text-xs block mb-4">Profile</span>
      <h2 class="text-4xl font-bold text-primary italic">Engineering impact with soul.</h2>
    </div>
    <div class="lg:col-span-8 space-y-5">
      {% for paragraph in site.data.profile.intro %}
        <p class="text-xl md:text-2xl leading-relaxed text-on-surface-variant">{{ paragraph }}</p>
      {% endfor %}
    </div>
  </section>

  <!-- Stats -->
  <section class="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
    <div class="text-center">
      <p class="text-3xl font-bold text-primary">22+</p>
      <p class="text-sm text-on-surface-variant">Years experience</p>
    </div>
    <div class="text-center">
      <p class="text-3xl font-bold text-primary">11</p>
      <p class="text-sm text-on-surface-variant">Roles</p>
    </div>
    <div class="text-center">
      <p class="text-3xl font-bold text-primary">364</p>
      <p class="text-sm text-on-surface-variant">Connections</p>
    </div>
    <div class="text-center">
      <p class="text-3xl font-bold text-primary">376</p>
      <p class="text-sm text-on-surface-variant">Followers</p>
    </div>
  </section>

  <!-- Expertise -->
  <section class="bg-surface-container-low border-y border-surface-container py-20">
    <div class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
        <div class="lg:col-span-4">
          <span class="text-brand-green font-bold tracking-[0.2em] uppercase text-xs block mb-4">Capabilities</span>
          <h2 class="text-4xl font-bold text-primary italic">Built for the whole journey.</h2>
        </div>
        <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {% for expertise in site.data.profile.expertise %}
            <article class="bg-white p-6 rounded-xl border border-surface-container-high hover:shadow-lg transition-shadow">
              <span class="material-symbols-outlined text-brand-green text-2xl mb-4" aria-hidden="true">{% if forloop.index == 1 %}architecture{% elsif forloop.index == 2 %}code{% elsif forloop.index == 3 %}neurology{% else %}cloud{% endif %}</span>
              <h3 class="text-xl font-bold text-primary mb-2">{{ expertise.label }}</h3>
              <p class="text-on-surface-variant leading-relaxed">{{ expertise.detail }}</p>
            </article>
          {% endfor %}
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Timeline -->
  <section class="py-20">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-brand-green font-bold tracking-[0.2em] uppercase text-xs block mb-4">Career</span>
        <h2 class="text-4xl md:text-5xl font-bold text-primary italic">Two decades of building</h2>
      </div>
      <div class="relative profile-timeline">
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant -translate-x-1/2"></div>
        <div class="space-y-10">
          {% for role in site.data.profile.experience %}
            <article class="relative pl-12 md:grid md:grid-cols-2 md:gap-12 md:pl-0">
              <span class="absolute left-4 md:left-1/2 top-5 w-3 h-3 rounded-full bg-brand-gold ring-4 ring-brand-gold/20 -translate-x-1/2 z-10"></span>
              <div class="bg-white p-6 rounded-xl border border-surface-container-high shadow-sm hover:shadow-lg transition-shadow">
                <p class="text-xs font-bold tracking-[0.16em] uppercase text-brand-green mb-2">{{ role.period }} · {{ role.location }}</p>
                <h3 class="text-xl font-bold text-primary">{{ role.role }}</h3>
                <p class="font-semibold text-on-surface-variant mb-3">{{ role.company }}</p>
                <p class="text-on-surface-variant leading-relaxed mb-4">{{ role.summary }}</p>
                <div class="flex flex-wrap gap-2">
                  {% for h in role.highlights %}
                    <span class="text-xs bg-surface-container-low border border-surface-container px-2.5 py-1 rounded-full">{{ h }}</span>
                  {% endfor %}
                </div>
              </div>
            </article>
          {% endfor %}
        </div>
      </div>
    </div>
  </section>

  <!-- Foundation & Contact -->
  <section class="bg-primary text-white py-20">
    <div class="max-w-7xl mx-auto px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <span class="text-brand-green font-bold tracking-[0.2em] uppercase text-xs block mb-4">Foundation</span>
          <details class="group profile-accordion rounded-xl border border-white/15 bg-white/5 overflow-hidden">
            <summary class="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 list-none">
              <span class="text-3xl md:text-4xl font-bold italic">Education</span>
              <span class="material-symbols-outlined text-brand-gold transition-transform duration-300 group-open:rotate-180" aria-hidden="true">expand_more</span>
            </summary>
            <div class="px-6 pb-6 space-y-4">
              {% for edu in site.data.profile.education %}
                <article class="p-5 rounded-xl border border-white/15 bg-white/5">
                  <p class="text-brand-gold font-semibold mb-1">{{ edu.degree }}</p>
                  <h3 class="text-xl font-bold mb-2">{{ edu.institution }}</h3>
                  <p class="text-white/70 text-sm">{{ edu.period }}{% if edu.detail %} · {{ edu.detail }}{% endif %}</p>
                </article>
              {% endfor %}
            </div>
          </details>
        </div>
        <div>
          <span class="text-brand-green font-bold tracking-[0.2em] uppercase text-xs block mb-4">Contact</span>
          <h2 class="text-4xl font-bold italic mb-8">Let’s build something enduring.</h2>
          <a href="https://ask.boundless-tallawah.com/prospect" target="_blank" rel="noopener noreferrer" class="group block p-6 rounded-xl bg-brand-gold text-primary hover:bg-secondary-fixed transition-colors">
            <p class="text-xs font-bold tracking-[0.2em] uppercase mb-3">Tell us what you need</p>
            <p class="font-headline text-2xl md:text-3xl font-bold italic leading-snug mb-4">Have a bold idea that needs resilient, beautifully engineered technology?</p>
            <span class="inline-flex items-center gap-2 font-semibold">
              Get in touch
              <span class="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>

</div>
