$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Yifei Zhou";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "machine learning"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" class="logo"/>
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

const skills = [
    {
        "name": "Python",
        "icon": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "TypeScript",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
    },
    {
        "name": "C++",
        "icon": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        "name": "PHP",
        "icon": "https://img.icons8.com/offices/48/000000/php-logo.png"
    },
    {
        "name": "React",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "Angular",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
    },
    {
        "name": "Flask",
        "icon": "https://www.bairesdev.com/wp-content/uploads/2021/08/Flask-1.svg"
    },
    {
        "name": "Spring Boot",
        "icon": "https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "PostgreSQL",
        "icon": "https://img.icons8.com/color/48/000000/postgreesql.png"
    },
    {
        "name": "Redis",
        "icon": "https://www.tothenew.com/blog/wp-ttn-blog/uploads/2023/09/redis_logo-1.png"
    },
    {
        "name": "REST API",
        "icon": "https://media.licdn.com/dms/image/D4D12AQEeNNHq05k7MA/article-cover_image-shrink_720_1280/0/1687786979245?e=2147483647&v=beta&t=AVc2G-hvHNjTMklQtEt6qlby2l79Bf5dBBkUB5DBRe0"
    },
    {
        "name": "Docker",
        "icon": "https://www.docker.com/wp-content/uploads/2023/05/symbol_blue-docker-logo.png"
    },
    {
        "name": "Azure",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/48px-Microsoft_Azure.svg.png"
    },
    {
        "name": "AWS",
        "icon": "https://img.icons8.com/color/48/000000/amazon-web-services.png"
    },
    {
        "name": "Kubernetes",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/48px-Kubernetes_logo_without_workmark.svg.png"
    },
    {
        "name": "Kafka",
        "icon": "https://svn.apache.org/repos/asf/kafka/site/logos/originals/png/ICON%20-%20White%20on%20Transparent.png"
    },
    {
        "name": "Linux",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/48px-Tux.svg.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
    },
    {
        "name": "TailwindCSS",
        "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        "name": "HTML5",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "PyTorch",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABCjpuMscLQRv3Qn612CuXy7wBF23Xs9AOQ&s"
    },
    {
        "name": "TensorFlow",
        "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iQyYphUHhLEUchqyhIwsRMe0G9aqVFjUaA&s"
    },
];

showSkills(skills);

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });