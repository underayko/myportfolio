<script>
    import coverPhoto from '../images/portfolioCover.jpg';
    import catPhoto from '../images/cat.jpeg';
    import unfoldImage from '../images/unfold.jfif'; // Import the new image
    import blogImage from '../images/blog.png'

    const projects = [
        {
            title: "Unfold",
            description: "A Portfolio template for students.",
            link: "https://example.com/project-one",
            image: unfoldImage, // Add the image property
        },
        {
            title: "Blog",
            description: "A blog website for everyone.",
            link: "https://example.com/project-one",
            image: blogImage, // Add the image property
        },
    ];
</script>

<section class="bg-[#f5f5f5] py-0" id="cover">
    <div class="mx-0">
        <!-- Cover Photo Section -->
        <div class="relative mb-0 w-full h-[90vh]">
            <img src={coverPhoto} alt="Cover Photo" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 flex flex-col justify-center items-start pl-8 sm:pl-16 md:pl-32 lg:pl-64 text-white">
                <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold font-raleway text-[#04060f]">NIS CORPUZ</h1>
                <p class="mt-1 text-base sm:text-lg md:text-xl font-sans">I am a <span class="text-[#04060f]">BSIT</span> student, passionate about developing</p>
                <p class="text-base sm:text-lg md:text-xl font-sans">innovative solutions. Welcome to my <span class="text-[#04060f]">portfolio</span>!</p>
            </div>
        </div>

       <!-- About Section -->
<section id="about" class="bg-gradient-to-r  py-10">
    <div class="mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#04060f] mb-4 text-center font-playfair">About Me</h2>
        <div class="flex flex-col sm:flex-row items-center justify-center">
            <img src={catPhoto} alt="My Cat" class="w-32 h-32 rounded-full border-4 border-[#04060f] shadow-lg mr-4" />
            <div class="max-w-2xl p-4">
                <p class="text-lg font-sans mb-4 text-gray-800">
                    I am a dedicated BSIT student with a passion for technology and innovation. My journey has led me to explore various aspects of software development, including web and mobile applications. I thrive on challenges and enjoy creating solutions that enhance user experiences.
                </p>
                <p class="text-lg font-sans text-gray-800">
                    When I'm not coding, I love sketching and spending time with my cat Orin, who inspires my creativity.
                </p>
            </div>
        </div>
    </div>
</section>


        <!-- Skills Section -->
        <section id="skills" class="py-10">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl text-center font-bold text-[#04060f] mb-10 font-playfair">My Skills</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="bg-[#04060f] text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans">
                        <h3 class="text-xl font-semibold">Microsoft</h3>
                    </div>
                    <div class="bg-[#04060f] text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans">
                        <h3 class="text-xl font-semibold">Picture Editing</h3>
                    </div>
                    <div class="bg-[#04060f] text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans">
                        <h3 class="text-xl font-semibold">Video Editing</h3>
                    </div>
                    <div class="bg-[#04060f] text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans">
                        <h3 class="text-xl font-semibold">Sketching</h3>
                    </div>
                    <div class="bg-[#04060f] text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans">
                        <h3 class="text-xl font-semibold">Coding</h3>
                    </div>
                    <div class="bg-[#04060f] text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans">
                        <h3 class="text-xl font-semibold">Illustrations</h3>
                    </div>
                    <div class="bg-[#04060f] text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans">
                        <h3 class="text-xl font-semibold">Lettering</h3>
                    </div>
                    <div class="bg-[#04060f] text-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans">
                        <h3 class="text-xl font-semibold">Cyber Security</h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="bg-[#f5f5f5] py-10">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl text-center font-bold text-[#04060f] mb-10 font-playfair">My Projects</h2>
                <div class="flex justify-center gap-8">
                    {#each projects as project}
                        <div class="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 font-sans w-full max-w-md">
                            <h3 class="text-xl font-semibold text-[#04060f] font-playfair">{project.title}</h3>
                            {#if project.image} <!-- Check if the project has an image -->
                                <img src={project.image} alt={project.title} class="w-full h-auto mb-4 rounded" />
                            {/if}
                            <p class="text-gray-600 my-2">{project.description}</p>
                            <a href={project.link} target="_blank" class="text-blue-600 hover:underline">View Project</a>
                        </div>
                    {/each}
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="bg-[#f5f5f5] py-10 text-center">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-[#04060f] mb-4 font-playfair">Contact Me</h2>
                <p class="text-lg font-sans">Feel free to reach out for collaboration or inquiries!</p>
                <p class="text-lg font-sans">Email: <a href="mailto:202210168@gordoncollege.edu.ph" class="text-blue-600">202210168@gordoncollege.edu.ph</a></p>
            </div>
        </section>
    </div>
</section>
