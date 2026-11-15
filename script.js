$(document).ready(function () {


    /* =========================================
       TYPING EFFECT
    ========================================= */

    const words = [
        "Java Programmer",
        "B.Tech IT Student",
        "Web Developer",
        "AI Explorer",
        "Data Science Enthusiast",
        "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typingEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            $(".typing").text(
                currentWord.substring(0, charIndex + 1)
            );

            charIndex++;

            if (charIndex === currentWord.length) {

                deleting = true;

                setTimeout(typingEffect, 1400);

                return;
            }

        } else {

            $(".typing").text(
                currentWord.substring(0, charIndex - 1)
            );

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {
                    wordIndex = 0;
                }

            }

        }

        setTimeout(
            typingEffect,
            deleting ? 50 : 90
        );
    }

    typingEffect();


    /* =========================================
       SMOOTH NAVIGATION
    ========================================= */

    $('a[href^="#"]').on('click', function (event) {

        const target = $(this.hash);

        if (target.length) {

            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: target.offset().top - 70
                },
                800
            );

        }

    });


    /* =========================================
       SCROLL TOP BUTTON
    ========================================= */

    $(window).scroll(function () {

        if ($(this).scrollTop() > 500) {

            $("#scrollTop").css(
                "display",
                "flex"
            );

        } else {

            $("#scrollTop").hide();

        }

    });


    $("#scrollTop").click(function () {

        $("html, body").animate(
            {
                scrollTop: 0
            },
            800
        );

    });


    /* =========================================
       NAVBAR ACTIVE LINK
    ========================================= */

    $(window).on("scroll", function () {

        let scrollPosition =
            $(window).scrollTop() + 120;

        $("section").each(function () {

            const sectionTop =
                $(this).offset().top;

            const sectionHeight =
                $(this).outerHeight();

            const sectionId =
                $(this).attr("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                $(".nav-link").removeClass("active");

                $('.nav-link[href="#' + sectionId + '"]')
                    .addClass("active");

            }

        });

    });


    /* =========================================
       CONTACT FORM
    ========================================= */

    $("#contactForm").submit(function (e) {

        e.preventDefault();

        alert(
            "✦ Magic message prepared! ✦\n\n" +
            "Connect this form to Formspree, EmailJS, or your backend to receive real messages."
        );

        this.reset();

    });


    /* =========================================
       MAGIC CURSOR GLOW
    ========================================= */

    $(document).mousemove(function (e) {

        const glow = $("<div>");

        glow.css({
            position: "fixed",
            left: e.clientX,
            top: e.clientY,
            width: "5px",
            height: "5px",
            background: "#ff1744",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9999,
            boxShadow: "0 0 15px #ff1744",
            opacity: .7
        });

        $("body").append(glow);

        glow.animate(
            {
                opacity: 0
            },
            400,
            function () {
                $(this).remove();
            }
        );

    });


    /* =========================================
       PROJECT HOVER MAGIC
    ========================================= */

    $(".project-card").hover(

        function () {

            $(this)
                .find(".project-top i")
                .css({
                    transform: "scale(1.15) rotate(8deg)",
                    transition: ".4s"
                });

        },

        function () {

            $(this)
                .find(".project-top i")
                .css({
                    transform: "scale(1) rotate(0deg)"
                });

        }

    );


    /* =========================================
       SKILL PROGRESS ANIMATION
    ========================================= */

    $(".progress-bar").css("width", "0");

    function animateSkills() {

        const skillsTop =
            $("#skills").offset().top;

        const scrollTop =
            $(window).scrollTop();

        const windowHeight =
            $(window).height();

        if (
            scrollTop + windowHeight >
            skillsTop + 100
        ) {

            $(".progress-bar").each(function () {

                const width =
                    $(this).attr("style")
                        .match(/\d+/)[0] + "%";

                $(this).animate(
                    {
                        width: width
                    },
                    1200
                );

            });

            $(window).off("scroll.skill");

        }

    }

    $(window).on("scroll.skill", animateSkills);


    /* =========================================
       MAGIC CLICK PARTICLES
    ========================================= */

    $(document).click(function (e) {

        for (let i = 0; i < 6; i++) {

            const particle = $("<span>");

            particle.css({
                position: "fixed",
                left: e.clientX,
                top: e.clientY,
                width: "5px",
                height: "5px",
                background: "#ff1744",
                borderRadius: "50%",
                pointerEvents: "none",
                zIndex: 9999,
                boxShadow: "0 0 10px #ff1744"
            });

            $("body").append(particle);

            const angle =
                Math.random() * Math.PI * 2;

            const distance =
                Math.random() * 60 + 20;

            const x =
                Math.cos(angle) * distance;

            const y =
                Math.sin(angle) * distance;

            particle.animate(
                {
                    left: e.clientX + x,
                    top: e.clientY + y,
                    opacity: 0
                },
                600,
                function () {
                    $(this).remove();
                }
            );

        }

    });

});
