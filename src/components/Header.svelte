<!-- src/components/Header.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';

    export const title = "My Portfolio"; 

    let headerClass = ""; // Class to manage header background

    function scrollToSection(event: MouseEvent, sectionId: string): void {
        event.preventDefault(); 
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' }); 
        }
    }

    function scrollToTop(event: MouseEvent): void {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function checkScroll() {
        const sections = ['about', 'skills', 'projects', 'contact'];
        const windowHeight = window.innerHeight;

        // Check if any of the sections are in view
        const inView = sections.some(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                return rect.top <= windowHeight && rect.bottom >= 0;
            }
            return false;
        });

        // Update header class based on visibility
        // Make the header transparent when at the top of the page and change to blue when scrolling down
        headerClass = window.scrollY === 0 ? "" : inView ? "bg-[#04060f]" : "";
    }

    onMount(() => {
        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    });
</script>

<header class={`text-white p-2 flex items-center justify-between fixed w-full z-10 transition-colors ${headerClass}`}>
    <button type="button" class="text-gold text-2xl font-bold mt-2 ml-8 cursor-pointer" on:click={scrollToTop}>
        ELPZ
    </button>
    
    <nav class="flex items-center pr-4 space-x-10 right-10 mr-10 mt-2">
        <a href="#about" on:click={(e) => scrollToSection(e, 'about')} class="text-gold hover:scale-110 transition-transform text-sm">About</a>
        <a href="#projects" on:click={(e) => scrollToSection(e, 'projects')} class="text-gold hover:scale-110 transition-transform text-sm">Projects</a>
        <a href="#contact" on:click={(e) => scrollToSection(e, 'contact')} class="text-gold hover:scale-110 transition-transform text-sm">Contact</a>
    </nav>
</header>

<style>
    nav a {
        transition: transform 0.3s;
    }
</style>
