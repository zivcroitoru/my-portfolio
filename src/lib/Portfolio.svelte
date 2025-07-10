<script>
  export let projects = [];
</script>

<!-- Hero Section -->
<section class="bg-darkblue text-white px-4 py-16 min-h-[60vh] font-rubik">

  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
    <!-- Left: Name & About -->
    <div>
      <h1 class="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight font-rubik text-primary">Ziv Croitoru</h1>
      <h2 class="text-3xl md:text-5xl font-medium text-white/80 mb-6">
        Game Developer • Animator • Software Engineer
      </h2>
      <p class="text-lg text-blue-100 max-w-xl leading-relaxed">
        Software Engineering and Game Development student with 10+ years of experience in filmmaking, animation, and design. Creator of the animation channel Fanic (132K+ subscribers, 50M+ views). Finalist in multiple international animation contests.
      </p>
    </div>

    <!-- Right: Image Placeholder -->
    <div class="w-full h-80 md:h-[28rem] bg-white/10 rounded-2xl border-2 border-white/20 flex items-center justify-center text-white/50 text-xl">
      Your Photo Here
    </div>

  </div>
</section>

<!-- Projects Section -->
<section class="bg-darkblue px-4 py-24 text-white font-rubik">
  <div class="max-w-6xl mx-auto">
    <div class="grid gap-16">
      {#each projects as p}
        <div class="group grid md:grid-cols-2 gap-8 items-start bg-white/5 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-white/10">
          
          <!-- Left: Project Info -->
          <div>
            <h2 class="text-3xl font-bold mb-3 group-hover:text-white transition">{p.title}</h2>
            <p class="text-white/80 mb-4">{p.description}</p>

            {#if p.links.length}
              <div class="flex flex-wrap gap-2 mt-4">
                {#each p.links as link}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.text}
                    class="bg-white/10 hover:bg-white/20 text-blue-100 text-sm font-semibold py-1.5 px-4 rounded-full transition"
                  >
                    {link.text}
                  </a>
                {/each}
              </div>
            {/if}
          </div>

          <!-- Right: Project Video -->
          <div class="aspect-video w-full transition-transform duration-300 group-hover:scale-[1.01]">
            <iframe
              class="w-full h-full rounded-xl border border-blue-900"
              src={p.video}
              title={p.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          
        </div>
      {/each}
    </div>
  </div>
</section>
