<script>
  const experiences = [
    {
      logo: "/youtube-logo.png",
      href: "https://www.youtube.com/@FanicAnimations",
      years: "2012–Present",
      title: "YouTube Creator",
      company: "FanicAnimations",
      details: [
        "Produced 3D/2D animations and game dev videos with 5M+ views.",
        "Managed full pipeline: scripting, animating, editing, publishing.",
        "Collaborated on community creative projects worldwide."
      ]
    },
    {
      logo: "/veryo-logo.png",
      href: "https://www.apesrevenge.com/",
      years: "2025–Present",
      title: "Student Summer Internship",
      company: "Veryo Studios",
      details: [
        "Supported Unity-based tools, pipelines, and feature prototypes in a live production environment."
      ]
    },
    {
      logo: "/meteku-logo.png",
      href: "https://meteku-ai.com",
      years: "2024–2025",
      title: "Software Engineer Intern",
      company: "MetekuAI",
      details: [
        "Led UX/UI mockup design, managed user profile databases, and integrated user data into internal systems via SQL and API workflows."
      ]
    },
    {
      logo: "/idf-logo.png",
      href: "#",
      years: "2018–2023",
      title: "Military Service",
      company: "IDF (J6 & C4I Corps)",
      details: [
        {
          years: "2022–2023",
          title: "Project Manager & Video Specialist",
          company: "J6 & Cyber Defense Directorate",
          bullets: [
            "Directed and edited promotional films, designed motion graphics.",
            "Established a professional studio with advanced filming equipment.",
            "Led training sessions for team members and ensured high-quality deliverables."
          ]
        },
        {
          years: "2021–2022",
          title: "Personalized Learning Development Team Leader",
          company: "IDF School for C4I Corps",
          bullets: [
            "Led a 15-member multimedia team, rebranded the unit, and optimized content production workflows."
          ]
        },
        {
          years: "2018–2021",
          title: "Animator, Multimedia Producer",
          company: "IDF School for C4I Corps",
          bullets: [
            "Produced animations, promotional videos, and interactive e-learning materials."
          ]
        }
      ]
    }
  ];
</script>

<section class="max-w-4xl mx-auto px-4 py-16 min-h-[60vh] animate-fade-in bg-bg text-text">
  <h1 class="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight font-rubik text-primary">Experience</h1>
  <ul class="space-y-6 text-lg mb-10 text-highlight">
    {#each experiences as exp}
      <li class="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
<a
  href={exp.href}
  target="_blank"
  rel="noopener noreferrer"
  class="w-9 h-9 flex items-center justify-center rounded-full overflow-hidden bg-white shadow-md hover:shadow-lg transition-transform duration-300"
>
  <img
    src={exp.logo}
    alt="{exp.company} logo"
    class="w-6 h-6 object-contain"
  />
</a>

        <div class="flex-1 space-y-2">
          <div class="flex flex-wrap items-center gap-2 text-lg md:text-xl">
            <span class="font-mono text-info font-semibold">{exp.years}</span>
            <span class="font-bold text-primary">{exp.title}</span>
            <span class="font-medium text-gray-700">| {exp.company}</span>
          </div>

          {#if typeof exp.details[0] === 'string'}
            <ul class="list-disc list-inside text-text-muted text-base space-y-1">
              {#each exp.details as line}
                <li>{@html line}</li>
              {/each}
            </ul>
          {:else}
            <div class="space-y-4">
              {#each exp.details as role}
                <div class="space-y-1">
                  <div class="text-base md:text-lg text-gray-800 dark:text-gray-100 space-x-1">
                    <span class="font-mono font-semibold text-info">{role.years}</span>
                    <span class="font-bold text-primary">{role.title}</span>
                    <span class="font-medium text-gray-700">| {role.company}</span>
                  </div>
                  <ul class="list-disc list-inside text-text-muted text-base space-y-1">
                    {#each role.bullets as bullet}
                      <li>{bullet}</li>
                    {/each}
                  </ul>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</section>
<section class="max-w-4xl mx-auto px-4 py-16 animate-fade-in bg-bg text-text">
  <h1 class="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight font-rubik text-primary">Skills</h1>

  <div class="grid gap-8 md:grid-cols-2">
    <!-- Languages -->
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg">
      <h2 class="text-xl font-bold mb-4 text-primary">Languages</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">C#</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">C++</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">C</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">JavaScript</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Python</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">HTML/CSS</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">SQL</div>
      </div>
    </div>

    <!-- Tools & Platforms -->
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg">
      <h2 class="text-xl font-bold mb-4 text-primary">Tools & Platforms</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Unity</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Unreal Engine</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Git & GitHub</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Postman</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Node.js</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Express</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">AppWarp</div>
      </div>
    </div>

    <!-- Creative Software -->
    <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 shadow-lg md:col-span-2">
      <h2 class="text-xl font-bold mb-4 text-primary">Creative Software</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Adobe Suite</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Blender</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Source Filmmaker</div>
        <div class="px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold text-center">Cinema4D</div>
      </div>
    </div>
  </div>
</section>
