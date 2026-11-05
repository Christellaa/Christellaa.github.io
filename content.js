const content = {
    en: {
        intro: {
            title: "Systems - DevOps - Cloud - Cybersecurity",
            subtitle: "Networking - Linux - Infrastructure Automation",
            education: "42 Paris - Expert en Architecture Informatique (RNCP Level 7)",
        },

        about: {
            title: "About Me",
            desc: [
                "I am currently pursuing the RNCP Level 7 qualification in Computer Architecture at 42 Paris, with a specialization covering DevOps, cloud infrastructure, networking, Linux systems and cybersecurity.",
                "I am particularly interested in understanding how computer systems work, from their internal workings to the design of distributed infrastructure. I enjoy exploring how to design, automate and secure technical environments, with a focus on reliability, efficiency and infrastructure management.",
                "I also explore artificial intelligence through personal projects. Outside technology, I enjoy learning languages and playing guitar and piano."
            ]
        },

        skills: {
            title: "Technical Skills",
            categories: [
                {
                    icon: "assets/container.svg",
                    name: "DevOps and Containerization",
                    skills: [
                        "Docker",
                        "Docker Compose",
                        "Kubernetes (K3s, K3d)",
                        "Linux"
                    ]
                },
                {
                    icon: "assets/git-branch.svg",
                    name: "GitOps and CI/CD",
                    skills: [
                        "ArgoCD",
                        "GitLab CI/CD",
                        "Helm"
                    ]
                },
                {
                    icon: "assets/chart-no-axes-combined.svg",
                    name: "Monitoring and Observability",
                    skills: [
                        "Grafana",
                        "Prometheus",
                        "ELK Stack"
                    ]
                },
                {
                    icon: "assets/shield-check.svg",
                    name: "Security",
                    skills: [
                        "SSL/TLS",
                        "2FA",
                        "OAuth",
                        "Hashing",
                        "Vault",
                        "JWT"
                    ]
                },
                {
                    icon: "assets/network.svg",
                    name: "Networking",
                    skills: [
                        "BGP",
                        "EVPN",
                        "VXLAN",
                        "GNS3",
                        "Wireshark"
                    ]
                },
                {
                    icon: "assets/terminal.svg",
                    name: "Scripting and Automation",
                    skills: [
                        "Bash"
                    ]
                }
            ]
        },

        projects: {
            title: "Projects",
            items: [
                {
                    name: "Inception",
                    desc: "Deployment of a multi-container infrastructure using Docker Compose, with isolated services and persistent storage.",
                    highlights: [
                        "Containerized WordPress, Nginx and MariaDB services.",
                        "Configured service isolation and persistent data storage.",
                        "Set up communication between services within a Docker network."
                    ],
                    tags: ["Docker", "Docker Compose", "Linux", "Infrastructure"],
                    repo: "https://github.com/Christellaa/Inception.git"
                },
                {
                    name: "Transcendence",
                    desc: "Development of a multiplayer web application featuring two-factor authentication, secure session management and application monitoring.",
                    highlights: [
                        "Implemented OAuth authentication, two-factor authentication and JWT.",
                        "Used SQLite for data persistence.",
                        "Worked with Docker and application monitoring (Grafana,  Prometheus, and ELK Stack)."
                    ],
                    tags: ["Security", "Monitoring", "Grafana", "Prometheus", "ELK Stack (Elasticsearch, Logstash, Kibana)"],
                    repo: "https://github.com/Christellaa/ft_transcendence.git"
                },
                {
                    name: "Inception of Things",
                    desc: "Deployment and management of Kubernetes clusters using K3s and K3d, with automated application deployment through GitOps and ArgoCD.",
                    highlights: [
                        "Set up Kubernetes environments using K3s and K3d.",
                        "Worked with Helm to deploy and manage applications.",
                        "Configured GitOps workflows using ArgoCD.",
                        "Integrated GitLab into the deployment workflow."
                    ],
                    tags: ["Kubernetes (K3s, K3d)", "Helm", "ArgoCD", "GitLab", "GitOps"],
                    repo: "https://github.com/Christellaa/InceptionOfThings.git"
                },
                {
                    name: "BADASS",
                    desc: "Implementation of a network topology in GNS3 using BGP, EVPN and VXLAN. Network traffic and protocol exchanges analyzed with Wireshark.",
                    highlights: [
                        "Configured BGP routing.",
                        "Implemented EVPN and VXLAN.",
                        "Analyzed network traffic and protocol exchanges using Wireshark."
                    ],
                    tags: ["Networking", "BGP", "EVPN", "VXLAN", "GNS3", "Wireshark"],
                    repo: "https://github.com/Christellaa/BADASS.git"
                }
            ]
        },

        certif: {
            title: "Certifications",
            statuses: {
                "in-progress": "In preparation",
                "obtained": "Obtained"
            },
            items: [
                {
                    name: "Cloud Digital Leader",
                    provider: "Google Cloud",
                    status: "in-progress",
                },
                {
                    name: "Generative AI Leader",
                    provider: "Google Cloud",
                    status: "in-progress"
                },
                {
                    name: "Associate Cloud Engineer",
                    provider: "Google Cloud",
                    status: "in-progress"
                }
            ]
        },

        footer: {
            links: [
                {
                    name: "LinkedIn",
                    icon: "assets/InBug-Black.svg",
                    url: "https://www.linkedin.com/in/christella-desousa"
                },
                {
                    name: "GitHub",
                    icon: "assets/github.svg",
                    url: "https://github.com/Christellaa"
                },
                {
                    name: "Email",
                    icon: "assets/mail.svg",
                    url: "mailto:desousa.christella@proton.me"
                },
                {
                    name: "Explore my other 42 projects",
                    icon: "assets/folder-git-2.svg",
                    url: "https://github.com/Christellaa/42Paris_Projects"
                }
            ]
        }
    },

    fr: {
        intro: {
            title: "Systèmes - DevOps - Cloud - Cybersécurité",
            subtitle: "Réseaux - Linux - Automatisation des infrastructures",
            education: "42 Paris - Expert en Architecture Informatique (RNCP niveau 7)",
        },

        about: {
            title: "À propos",
            desc: [
                "Je prépare actuellement le titre RNCP de niveau 7 Expert en Architecture Informatique à 42 Paris, avec une spécialisation couvrant le DevOps, les infrastructures cloud, les systèmes Linux et la cybersécurité.",
                "Je m'intéresse particulièrement au fonctionnement des systèmes informatiques, de leurs fonctionnement interne à la conception d'infrastructures distribuées. J'aime explorer la conception, l'automatisation et la séccurisation des environnements techniques, avec une attention particulière portée à la fiabilité, à l'efficacité et à la gestion des infrastructures.",
                "J'explore également l'intelligence artificielle à travers des projets personnels. En dehors de la technologie, j'aime apprendre les langues et jouer de la guitare et du piano."
            ]
        },

        skills: {
            title: "Compétences techniques",
            categories: [
                {
                    icon: "assets/container.svg",
                    name: "DevOps et Conteneurisation",
                    skills: [
                        "Docker",
                        "Docker Compose",
                        "Kubernetes (K3s, K3d)",
                        "Linux"
                    ]
                },
                {
                    icon: "assets/git-branch.svg",
                    name: "GitOps et CI/CD",
                    skills: [
                        "ArgoCD",
                        "GitLab CI/CD",
                        "Helm"
                    ]
                },
                {
                    icon: "assets/chart-no-axes-combined.svg",
                    name: "Monitoring et Observabilité",
                    skills: [
                        "Grafana",
                        "Prometheus",
                        "ELK Stack"
                    ]
                },
                {
                    icon: "assets/shield-check.svg",
                    name: "Sécurité",
                    skills: [
                        "SSL/TLS",
                        "2FA",
                        "OAuth",
                        "Hashing",
                        "Vault",
                        "JWT"
                    ]
                },
                {
                    icon: "assets/network.svg",
                    name: "Réseaux",
                    skills: [
                        "BGP",
                        "EVPN",
                        "VXLAN",
                        "GNS3",
                        "Wireshark"
                    ]
                },
                {
                    icon: "assets/terminal.svg",
                    name: "Scripting et Automatisation",
                    skills: [
                        "Bash"
                    ]
                }
            ]
        },

        projects: {
            title: "Projets",
            items: [
                {
                    name: "Inception",
                    desc: "Déploiement d'une infrastructure multi-conteneurs avec Docker Compose, reposant sur des services isolés et un stockage  persistant.",
                    highlights: [
                        "Conteneurisation de WordPress, Nginx et MariaDB.",
                        "Configuration de l'isolation des services et du stockage persistant des données.",
                        "Mise en place de la communication entre les services au sein d'un réseau Docker."
                    ],
                    tags: ["Docker", "Docker Compose", "Linux", "Infrastructure"],
                    repo: "https://github.com/Christellaa/Inception.git"
                },
                {
                    name: "Transcendence",
                    desc: "Développement d'une application web multijoueur intégrant une authentification à deux facteurs, une gestion sécurisée des sessions et du monitoring applicatif.",
                    highlights: [
                        "Mise en place de l'authentification OAuth, de l'authentification à deux facteurs et des JWT.",
                        "Utilisation de SQLite pour la persistance des données.",
                        "Utilisation de Docker et mise en place du monitoring applicatif (Grafana,  Prometheus, et ELK Stack)."
                    ],
                    tags: ["Sécurité", "Monitoring", "Grafana", "Prometheus", "ELK Stack (Elasticsearch, Logstash, Kibana)"],
                    repo: "https://github.com/Christellaa/ft_transcendence.git"
                },
                {
                    name: "Inception of Things",
                    desc: "Déploiement et gestion de clusters Kubernetes avec K3s et K3d, associés à l'automatisation des déploiements applicatifs avec GitOps et ArgoCD.",
                    highlights: [
                        "Mise en place d'environnements Kubernetes avec K3s et K3d.",
                        "Utilisation de Helm pour déployer et gérer les applications.",
                        "Configuration  de workflows GitOps avec ArgoCD.",
                        "Intégration de GitLab dans le processus de déploiement."
                    ],
                    tags: ["Kubernetes (K3s, K3d)", "Helm", "ArgoCD", "GitLab", "GitOps"],
                    repo: "https://github.com/Christellaa/InceptionOfThings.git"
                },
                {
                    name: "BADASS",
                    desc: "Mise en oeuvre d'une topologie réseaux dans GNS3 utilisant BGP, EVPN et VXLAN. Analyse du trafic réseau et des échanges protocolaires avec Wireshark.",
                    highlights: [
                        "Configuration du routage BGP.",
                        "Mise en oeuvre d'EVPN et de VXLAN.",
                        "Analyse du trafic réseau et des échanges protocolaires avec Wireshark."
                    ],
                    tags: ["Réseaux", "BGP", "EVPN", "VXLAN", "GNS3", "Wireshark"],
                    repo: "https://github.com/Christellaa/BADASS.git"
                }
            ]
        },

        certif: {
            title: "Certifications",
            statuses: {
                "in-progress": "En préparation",
                "obtained": "Obtenue"
            },
            items: [
                {
                    name: "Cloud Digital Leader",
                    provider: "Google Cloud",
                    status: "in-progress",
                },
                {
                    name: "Generative AI Leader",
                    provider: "Google Cloud",
                    status: "in-progress"
                },
                {
                    name: "Associate Cloud Engineer",
                    provider: "Google Cloud",
                    status: "in-progress"
                }
            ]
        },

        footer: {
            links: [
                {
                    name: "LinkedIn",
                    icon: "assets/InBug-Black.svg",
                    url: "https://www.linkedin.com/in/christella-desousa"
                },
                {
                    name: "GitHub",
                    icon: "assets/github.svg",
                    url: "https://github.com/Christellaa"
                },
                {
                    name: "Email",
                    icon: "assets/mail.svg",
                    url: "mailto:desousa.christella@proton.me"
                },
                {
                    name: "Voir mes autres projets à 42",
                    icon: "assets/folder-git-2.svg",
                    url: "https://github.com/Christellaa/42Paris_Projects"
                }
            ]
        }
    }
};

/////////////////////////
// Rendering functions //
/////////////////////////

function renderAbout(paragraphs) {
    const container = document.getElementById("about-desc");
    const fragment = document.createDocumentFragment();

    paragraphs.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        fragment.appendChild(p);
    });

    container.replaceChildren(fragment);
}

function renderSkills(data) {
    const container = document.getElementById("skills-container");
    const fragment = document.createDocumentFragment();

    data.categories.forEach(category => {
        const card = document.createElement("article");
        card.className = "skill-card";

        const icon = document.createElement("img");
        icon.className = "card-icon";
        icon.src = category.icon;
        icon.alt = "";
        icon.setAttribute("aria-hidden", "true");

        const content = document.createElement("div");
        content.className = "card-content";

        const title = document.createElement("h3");
        title.textContent = category.name;

        const skills = document.createElement("p");
        skills.textContent = category.skills.join(", ");

        content.append(title, skills);
        card.append(icon, content);
        fragment.appendChild(card);
    });

    container.replaceChildren(fragment);
}

function renderProjects(data) {
    const container = document.getElementById("projects-container");
    const fragment = document.createDocumentFragment();

    data.items.forEach(project => {
        const card = document.createElement("a");
        card.className = "project-card";
        card.href = project.repo;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        const title = document.createElement("h3");
        title.textContent = project.name;

        const desc = document.createElement("p");
        desc.textContent = project.desc;

        const highlights = document.createElement("ul");
        highlights.className = "project-highlights";

        project.highlights.forEach(highlight => {
            const item = document.createElement("li");

            const arrow = document.createElement("img");
            arrow.src = "assets/chevron-right.svg";
            arrow.alt = "";
            arrow.className = "highlight-icon";
            arrow.setAttribute("aria-hidden", "true");

            const text = document.createElement("span");
            text.textContent = highlight;

            item.append(arrow, text);
            highlights.appendChild(item);
        });

        const tags = document.createElement("div");
        tags.className = "project-tags";

        project.tags.forEach(tag => {
            const badge = document.createElement("span");
            badge.className = "tag";
            badge.textContent = tag;
            tags.appendChild(badge);
        });

        const arrowContainer = document.createElement("span");
        arrowContainer.className = "project-arrow";

        const arrow = document.createElement("img");
        arrow.src = "assets/external-link.svg";
        arrow.alt  = "";
        arrow.className = "icon";

        arrowContainer.appendChild(arrow);

        card.append(title, desc, highlights, tags, arrowContainer);
        fragment.appendChild(card);
    });

    container.replaceChildren(fragment);
}

function renderCertif(data) {
    const container = document.getElementById("certif-container");
    const fragment = document.createDocumentFragment();

    data.items.forEach(certif => {
        const row = document.createElement("div");
        row.className = "certif-item";

        const info = document.createElement("div");
        info.className = "certif-info";

        const name = document.createElement("strong");
        name.textContent = certif.name;

        const provider = document.createElement("small");
        provider.textContent = certif.provider;
        
        const status = document.createElement("span");
        status.className = `certif-status ${certif.status}`;
        status.textContent = data.statuses[certif.status] ?? certif.status;

        info.append(name, provider);
        row.append(info, status);
        fragment.appendChild(row);
    });

    container.replaceChildren(fragment);
}

function renderFooter(data) {
    const container = document.getElementById("footer-links");
    const fragment = document.createDocumentFragment();

    data.links.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.className = "footer-link";
        anchor.setAttribute("aria-label", link.name);
        if (!link.url.startsWith("mailto:")) {
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
        }

        const icon = document.createElement("img");
        icon.src = link.icon;
        icon.alt = "";
        icon.className = "footer-icon";
        icon.setAttribute("aria-hidden", "true");

        const text = document.createElement("span");
        text.textContent = link.name;

        anchor.append(icon, text);
        fragment.appendChild(anchor);
    });

    container.replaceChildren(fragment);
}

////////////////////////
// Langage Management //
////////////////////////

// let currentLang = 'en';

function showLang(lang) {
    // currentLang = lang;
    const data = content[lang];

    if (!data) {
        console.warn(`No content available for language: ${lang}`);
        return;
    }

    document.documentElement.lang = lang;

    document.getElementById('intro-title').textContent = data.intro.title;
    document.getElementById('intro-subtitle').textContent = data.intro.subtitle;
    document.getElementById('intro-education').textContent = data.intro.education;

    document.getElementById('about-title').textContent = data.about.title;

    document.getElementById('skills-title').textContent = data.skills.title;
    document.getElementById('projects-title').textContent = data.projects.title;
    document.getElementById('certif-title').textContent = data.certif.title;

    renderAbout(data.about.desc);
    renderSkills(data.skills);
    renderProjects(data.projects);
    renderCertif(data.certif);
    renderFooter(data.footer);

    document.querySelectorAll("[data-lang]").forEach(button => {
        const active = button.dataset.lang === lang;

        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("[data-lang]").forEach(button => {
        button.addEventListener("click", () => showLang(button.dataset.lang));
    });

    showLang("en");
});
