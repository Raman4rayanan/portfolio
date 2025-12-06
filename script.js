document.addEventListener("DOMContentLoaded", () => {
    /* =============================
       GENERIC MODAL HELPERS
    ==============================*/
    const openModal = (modal) => {
        if (!modal) return;
        modal.style.display = "flex";
        // allow layout, then add class for animation
        requestAnimationFrame(() => {
            modal.classList.add("active");
        });
    };

    const closeModal = (modal, delay = 400) => {
        if (!modal) return;
        modal.classList.remove("active");
        setTimeout(() => {
            modal.style.display = "none";
        }, delay);
    };

    /* =============================
       ABOUT MODAL
    ==============================*/
    const aboutModal = document.getElementById("about-modal");
    const aboutBtns = document.querySelectorAll(".about-btn");
    const aboutClose = document.querySelector(".about-close");

    const closeAbout = () => closeModal(aboutModal);

    aboutBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(aboutModal);
        });
    });

    if (aboutClose) {
        aboutClose.addEventListener("click", closeAbout);
    }

    /* =============================
       SKILLS MODAL
    ==============================*/
    const skillsModal = document.getElementById("skills-modal");
    const skillsBtns = document.querySelectorAll(".skills-btn");
    const closeSkillsBtn = document.querySelector(".close-skills");

    const closeSkillsModal = () => closeModal(skillsModal);

    skillsBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(skillsModal);
        });
    });

    if (closeSkillsBtn) {
        closeSkillsBtn.addEventListener("click", closeSkillsModal);
    }

    /* =============================
       PROJECTS MODAL
    ==============================*/
    const projectsModal = document.getElementById("projects-modal");
    const projectsBtns = document.querySelectorAll(".projects-btn");
    const closeProjectsBtn = document.querySelector(".close-projects");

    const closeProjectsModal = () => closeModal(projectsModal, 500);

    projectsBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(projectsModal);
        });
    });

    if (closeProjectsBtn) {
        closeProjectsBtn.addEventListener("click", closeProjectsModal);
    }

    /* =============================
       CERTIFICATES MODAL
    ==============================*/
    const certModal = document.getElementById("cert-modal");
    const certBtns = document.querySelectorAll(".cert-btn");
    const certClose = document.querySelector(".close-cert");

    const closeCertModal = () => closeModal(certModal);

    certBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(certModal);
        });
    });

    if (certClose) {
        certClose.addEventListener("click", closeCertModal);
    }

    /* =============================
       CONTACT MODAL
    ==============================*/
    const contactModal = document.getElementById("contact-modal");
    const contactBtns = document.querySelectorAll(".contact-btn");
    const contactClose = document.querySelector(".close-contact");

    const closeContactModal = () => closeModal(contactModal);

    contactBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(contactModal);
        });
    });

    if (contactClose) {
        contactClose.addEventListener("click", closeContactModal);
    }

    /* =============================
       CLICK OUTSIDE TO CLOSE
    ==============================*/
    window.addEventListener("click", (e) => {
        if (e.target === aboutModal) closeAbout();
        if (e.target === skillsModal) closeSkillsModal();
        if (e.target === projectsModal) closeProjectsModal();
        if (e.target === certModal) closeCertModal();
        if (e.target === contactModal) closeContactModal();
    });

    /* =============================
       ESC KEY CLOSES ANY MODAL
    ==============================*/
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (aboutModal.classList.contains("active")) closeAbout();
            if (skillsModal.classList.contains("active")) closeSkillsModal();
            if (projectsModal.classList.contains("active")) closeProjectsModal();
            if (certModal.classList.contains("active")) closeCertModal();
            if (contactModal.classList.contains("active")) closeContactModal();
        }
    });

    /* =============================
       MOBILE MENU
    ==============================*/
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navLinkEls = document.querySelectorAll(".nav-link");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });

        navLinkEls.forEach((link) => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }

    /* =============================
       CUSTOM CURSOR
    ==============================*/
    const cursor = document.querySelector(".cursor");
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });

        const hoverTargets = document.querySelectorAll(
            "a, button, .project-item, .skill-bar-item, .cert-card, .contact-link-item"
        );

        hoverTargets.forEach((el) => {
            el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
            el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
        });
    }

    /* =============================
       PARTICLES JS
    ==============================*/
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#00f2ff" },
                shape: { type: "circle" },
                opacity: { value: 0.5 },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    color: "#00f2ff",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "window",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: { opacity: 1 }
                    },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }

    /* =============================
       VANILLA TILT
    ==============================*/
    if (typeof VanillaTilt !== "undefined") {
        VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
            max: 15,
            speed: 300,
            glare: true,
            "max-glare": 0.2
        });
    }

    /* =============================
       SKILLS HOVER BARS
    ==============================*/
    document.querySelectorAll(".skill-bar-item").forEach((item) => {
        const fill = item.querySelector(".hover-bar .fill");
        const percent = item.dataset.percent || "0";

        item.addEventListener("mouseenter", () => {
            if (!fill) return;
            fill.style.height = percent + "%";
            fill.style.opacity = 1;
        });

        item.addEventListener("mouseleave", () => {
            if (!fill) return;
            fill.style.height = "0%";
            fill.style.opacity = 0;
        });
    });

    /* =============================
       CONTACT – COPY EMAIL
    ==============================*/
    const copyBtn = document.getElementById("copy-email-btn");
    const copySuccess = document.getElementById("copy-success");

    if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
            const email = copyBtn.dataset.email || "";
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(email);
                } else {
                    // fallback
                    const tempInput = document.createElement("input");
                    tempInput.value = email;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand("copy");
                    document.body.removeChild(tempInput);
                }

                if (copySuccess) {
                    copySuccess.classList.add("visible");
                    setTimeout(() => copySuccess.classList.remove("visible"), 1500);
                }
            } catch (err) {
                console.error("Failed to copy email:", err);
            }
        });
    }

    /* =============================
       CONTACT FORM → EMAILJS
    ==============================*/
    const contactForm = document.getElementById("contact-form");
    const budgetInput = document.getElementById("budget-input");
    const budgetPills = document.querySelectorAll(".budget-pill");
    const contactButton = contactForm
        ? contactForm.querySelector(".contact-cta")
        : null;

    // Budget pill click behaviour
    if (budgetPills && budgetPills.length > 0 && budgetInput) {
        budgetPills.forEach((pill) => {
            pill.addEventListener("click", () => {
                const value = pill.dataset.budget || pill.textContent.trim();
                budgetInput.value = value;

                // visual active state
                budgetPills.forEach((p) => p.classList.remove("active"));
                pill.classList.add("active");
            });
        });
    }

    // Form submit → send email
    if (contactForm && typeof emailjs !== "undefined") {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // default budget if none selected
            if (budgetInput && !budgetInput.value) {
                budgetInput.value = "Not specified";
            }

            if (contactButton) {
                contactButton.disabled = true;
                contactButton.textContent = "Sending...";
            }

            emailjs
                .sendForm(
                    "service_xz7qww4",      // SERVICE ID
                    "template_8hmkxzb",     // TEMPLATE ID
                    "#contact-form",        // form selector
                    "foRWLVM4f10xgL-2a"     // PUBLIC KEY
                )
                .then(() => {
                    alert("Thanks! Your message has been sent.");
                    contactForm.reset();
                    if (budgetInput) budgetInput.value = "";
                    budgetPills.forEach((p) => p.classList.remove("active"));
                })
                .catch((error) => {
                    console.error("EmailJS error:", error);
                    alert("Oops, something went wrong: " + (error.text || "Please try again."));
                })
                .finally(() => {
                    if (contactButton) {
                        contactButton.disabled = false;
                        contactButton.textContent = "DISCUSS THE PROJECT →";
                    }
                });
        });
    } else if (!contactForm) {
        console.error("contact-form not found in DOM.");
    } else {
        console.error("EmailJS library not loaded.");
    }
});
