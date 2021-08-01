ACTIVE_PROJECTS = [
    {
        name: "BRUTAL",
        image: "assets/brutal.png",
        description: "🏢 An operating system inspired by brutalist design that combines the ideals of UNIX from the 1970s with modern technology and engineering. Inspired by brutalist design, BRUTAL combines the ideals of UNIX from the 1970s with modern technology and engineering.",
        github: "https://github.com/skiftOS/skift",
        technologies: ["C", "Make", "Stivale2", "QEMU"],
    },
    {
        name: "skiftOS",
        image: "assets/skift.png",
        description: "🥑 A hobby operating system built from scratch in modern C++. Featuring a reactive UI library and a strong emphasis on user experience.",
        github: "https://github.com/skiftOS/skift",
        technologies: ["C++", "Make", "Stivale2", "QEMU"],
    }
];

UNMAINTAINED_PROJECTS = [
    {
        name: "Faceter",
        image: "assets/faceter.png",
        description: "A social media platform.",
        github: "https://github.com/julien-lepers/faceter",
        technologies: ["HTML", "CSS", "JavaScript", "Preact", "HTM", "PHP", "SQL"],

    },
    {
        name: "Hevadea",
        image: "assets/hevadea.png",
        description: "A game about exploring a randomly generated world.",
        github: "https://github.com/terra-monax/hevadea-monogame",
        technologies: ["C#", ".NET", "MonoGame"],
    },
    {
        name: "Four In a Row",
        image: "assets/four-row.png",
        description: "A quiz game.",
        github: "https://github.com/NicolasVanBossuyt/four-in-a-row",
        technologies: ["Java", "JavaFX", "GSON", "OpenAL"],
    },
    {
        name: "Udfore",
        image: "assets/udfore.svg",
        description: "A new programming language.",
        github: "https://github.com/skiftOS/udfore",
        technologies: ["C", "Make"],
    },
    {
        name: "shop.c",
        image: "assets/shop.png",
        description: "A shop management system.",
        github: "https://github.com/NicolasVanBossuyt/shop.c",
        technologies: ["C", "Make"],
    },
    {
        name: "Solar Power Rush",
        image: "assets/power-rush.png",
        description: "A game about shooting stuff in space.",
        github: "https://github.com/NicolasVanBossuyt/solar-power-rush-jam",
        technologies: ["Lua", "Love2D"],
    },
    {
        name: "Defend The Crystal",
        image: "assets/defend-crystal.png",
        description: "It's all in the name.",
        github: "https://github.com/NicolasVanBossuyt/defend-the-crystal",
        technologies: ["Lua", "Love2D"],
    },
];

function µ(selector) {
    return document.querySelector(selector);
}

function renderTechno(project) {
    let result = "";

    project.technologies.forEach(techno => {
        result += `<span>${techno}</span>`
    })

    return result;
}

ACTIVE_PROJECTS.forEach(project => {
    µ("#projects").innerHTML += `
        <div class="project big-spacer">
            <img class="project-image spacer" src="${project.image}"></img>

            <div class="project-name">${project.name}</div>
            <div class="project-description spacer">${project.description}</div>
            <span class="project-techno">${renderTechno(project)}</span>
            <span class="project-github"><a href="${project.github}">GitHub</a></span>
        </div>
    `;
});

UNMAINTAINED_PROJECTS.forEach(project => {
    µ("#projects").innerHTML += `
        <div class="project big-spacer">
            <img class="project-image spacer" src="${project.image}"></img>

            <div class="project-name">${project.name}</div>
            <div class="project-description spacer">${project.description}</div>
            <span class="project-techno">${renderTechno(project)}</span>
            <span class="project-github"><a href="${project.github}">GitHub</a></span>
        </div>
    `;
});
