<script>
  import Portfolio from '$lib/Portfolio.svelte';
  import Education from '$lib/Education.svelte';
  import Experience from '$lib/Experience.svelte';
  let section = 'portfolio';
  let prevSection = 'portfolio';
  let animDirection = 'fade';
  const projects = [
    {
      title: "🎬 3D Animation – Valve Contest",
      video: "https://www.youtube.com/embed/W1XlC5d6QOc",
      description: "Directed a short for Valve’s contest. 5.5M+ views. Led global team of animators and sound designers.",
      links: []
    },
    {
      title: "🌀 Unity – Shadow Flash Remake",
      video: "https://www.youtube.com/embed/fnn-7_LrGhE",
      description: "Remake of a 2005 Flash platformer using Zenject, SOLID principles, and state-driven systems.",
      links: []
    },
    {
      title: "💥 Game Jam – GrandMamad",
      video: "https://www.youtube.com/embed/PBpZdkoUbys",
      description: "30-hour jam survival game. Collect comfort items, avoid stress, reach the shelter. WebGL & mobile ready.",
      links: [
        { text: "Play on itch.io", href: "https://thefanic.itch.io/grandmamad" }
      ]
    },
    {
      title: "🎮 3D Modeling – Nintendo Switch",
      video: "https://www.youtube.com/embed/qYjCkL5Xdjw",
      description: "Cinema4D Switch model textured & ported into Unity Mario Party clone. Asset used in IDF projects & YouTube.",
      links: []
    },
    {
      title: "🎨 2D Animation",
      video: "https://www.youtube.com/embed/oZVL09LC4v4",
      description: "Cut-out style 2D animation in After Effects. Character movement, stylized transitions, and client work.",
      links: []
    }
  ];

  function setSection(newSection) {
    if (newSection === section) return;
    prevSection = section;
    animDirection = newSection === 'portfolio' ? 'fade' : (newSection === 'education' ? 'slide-left' : 'slide-right');
    section = newSection;
  }
</script>

<nav class="bg-white shadow mb-10 sticky top-0 z-10">
  <div class="max-w-6xl mx-auto px-4 py-3 flex gap-6 text-indigo-600 font-medium justify-center">
    <button class="hover:underline focus:underline focus:outline-none" on:click={() => setSection('portfolio')} aria-current={section === 'portfolio'}>Portfolio</button>
    <button class="hover:underline focus:underline focus:outline-none" on:click={() => setSection('education')} aria-current={section === 'education'}>Education</button>
    <button class="hover:underline focus:underline focus:outline-none" on:click={() => setSection('experience')} aria-current={section === 'experience'}>Experience</button>
  </div>
</nav>

<div class="relative min-h-[60vh]">
  {#if section === 'portfolio'}
    <div class="animate-fade-in">
      <Portfolio {projects} />
    </div>
  {:else if section === 'education'}
    <div class="animate-slide-in-left">
      <Education />
    </div>
  {:else if section === 'experience'}
    <div class="animate-slide-in-right">
      <Experience />
    </div>
  {/if}
</div>

<style>
  .animate-fade-in {
    animation: fadeIn 0.5s;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: none; }
  }
  .animate-slide-in-left {
    animation: slideInLeft 0.5s;
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: none; }
  }
  .animate-slide-in-right {
    animation: slideInRight 0.5s;
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: none; }
  }
</style>
