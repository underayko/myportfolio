<!-- src/components/Footer.svelte -->
<script>
    export let year = new Date().getFullYear();
</script>

<footer class="bg-[#04060f] text-white text-center p-4 mt-auto">
    <div class="container mx-auto">
        <p class="font-playfair">&copy; {year} My Portfolio. All rights reserved.</p>
    </div>
</footer>
