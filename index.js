// ========================tech list==================
const techs = ['HTML', 'CSS', 'MongoDB', 'JavaScript', 'ExpressJS', 'Tailwind CSS', 'ReactJS', 'Python', 'NodeJS'];

const descTechs = document.querySelectorAll('.tech');

descTechs.forEach(function(value, key){
    value.textContent = techs[key];
});
// =======================social links====================
const socialLinks = ['https://www.linkedin.com/in/abhay-tomar-262a33250/', 'https://github.com/abhaytomar01/', 'https://www.instagram.com/abhaytomar01/', 'https://twitter.com/abhaytomar_01'];

const socialIcons = document.querySelectorAll('.social-links a');

socialIcons.forEach(function(value, key) {
    value.href = socialLinks[key];
})

// ====================Mousehover section==============================

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// let spots = [];
// let hue = 0;

// const mouse = {
//     x: undefined,
//     y: undefined
// }
// canvas.addEventListener('mousemove', function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;
//     for (let i = 0; i < 3; i++){
//         spots.push(new Particle());
//     }
// });

// class Particle{
//     constructor(){
//         this.x = mouse.x;
//         this.y = mouse.y;
//         this.size = Math.random() * 2 + 0.5;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;
//         this.color = '#4fdfff';
//     }
//     update(){
//         this.x += this.speedX;
//         this.y += this.speedY;
//         if (this.size > 0.1) this.size -= 0.03;
//     }
//     draw(){
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//     }
// };

// function handleParticle(){
//     for (let i = 0; i < spots.length; i++){
//         spots[i].update();
//         spots[i].draw();
//         for (let j = i; j < spots.length; j++){
//             const dx = spots[i].x - spots[j].x;
//             const dy = spots[i].y - spots[j].y;
//             const distance = Math.sqrt(dx * dx + dy * dy);
//             if ( distance < 90){
//                 ctx.beginPath();
//                 ctx.strokeStyle = spots[i].color;
//                 ctx.lineWidth = spots[i].size / 10;
//                 ctx.moveTo(spots[i].x,  spots[i].y);
//                 ctx.lineTo(spots[i].x, spots[i].y);
//                 ctx.stroke();
//             }
//         }
//         if(spots[i].size <= 0.3){
//             spots.splice(i,1); i--;
//         }
//     }
// };

// function animate(){
//     ctx.clearRect(0,0, canvas.width, canvas.height);
//     handleParticle();
//     hue++;
//     requestAnimationFrame(animate);
// };

// window.addEventListener('resize', function(){
//     canvas.width = this.innerWidth;
//     canvas.height = this.innerHeight;
//     init();
// });
// window.addEventListener('mouseout', function(){
//     mouse.x = undefined;
//     mouse.y = undefined;
// });

// animate();

// ---------------- CURSOR -------------------------

var main = document.querySelector('#main');
    var cursor = document.querySelector('#cursor');
     
     main,addEventListener('mousemove', function(dets){
        gsap.to(cursor, {
            x:dets.x,
            y:dets.y,
            duration:1,
            ease:"circ"
        })
     });

// ====================projects section==============================

const projects = [
    {
        projectImageUrl: './assets/gym.png',
        projectName: 'The Fitness Club',
        projectDescription: "HTML Frontend Project. The Fitness Club, a part of this esteemed legacy, has expanded its presence across various cities, aiming to empower individuals to achieve their fitness goals, regardless of their fitness levels or aspirations.",
        projectStack: ['HTML', 'CSS', 'JavaScript', 'Media query']
    },
    {
        projectImageUrl: './assets/Travel.png',
        projectName: "Book My Trip",
        projectDescription: "bookmytrip is a well-known travel guidebook publisher that offers a wide range of travel guides, maps, and other travel-related resources.",
        projectStack: ['HTML', 'CSS', 'JS', 'Media query']
    },
    {
        projectImageUrl: './assets/SimpleNoteTakingImg.png',
        projectName: 'Simple Note Taking App',
        projectDescription: 'A Simple Note Taking App, involves implementing a set of core features to ensure it is useful and user-friendly. User can Create Note, Delete Note, Search Note, and use Toggle Mode',
        projectStack: ['HTML', 'CSS', 'JavaScript', 'React JS']

    },
    // {
    //     projectImageUrl: 'https://user-images.githubusercontent.com/77793810/122582987-67230a00-d076-11eb-8079-a43185265951.PNG',
    //     projectName: 'ONN Bikes Clone',
    //     projectDescription: "This project showcases my frontend skills of building a  E-commerce web's UI along with making it responsive.By using this website you can book a bike anytime anywhere. With the very user-friendly interface, it will take hardly 5 minutes. And tada! you got your bike.",
    //     projectStack: ['JavaScript', 'Bootstrap', 'CSS', 'VS Code']
    // }
    
];

let totalProjectStack = [];
for(const project of projects) {
    totalProjectStack.push(...project.projectStack)
}

const projectImages = document.querySelectorAll('.project-image img');
const projectNames = document.querySelectorAll('.project-name');
const projectDetail = document.querySelectorAll('.about-project');
const projectStacks = document.querySelectorAll('.tech-p');

projectImages.forEach(function(value, key) {
    value.src = projects[key].projectImageUrl;
});

projectNames.forEach(function(value, key) {
    value.textContent = projects[key].projectName;
});

projectDetail.forEach(function(value, key) {
    value.textContent = projects[key].projectDescription;
});

projectStacks.forEach(function(value, key) {
    value.textContent = totalProjectStack[key];
})

// =======================navbar========================
const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const navItemsOpen = document.querySelector('.nav-items-open');
const writeClose = document.querySelector('.write i');
const submitTestimonial = document.querySelector('.submit');

openBtn.addEventListener('click', function() {
    navItemsOpen.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

closeBtn.addEventListener('click', function() {
    navItemsOpen.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

document.querySelectorAll('.item-open').forEach(link => {
    link.addEventListener('click', function() {
        navItemsOpen.style.display = 'none';
        openBtn.style.display = 'inline-block';
        closeBtn.style.display = 'none';
    })
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 80
        }
    }
});
/*==================== FORM SUBMIT ====================*/
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
  
    //button animation
    document.getElementById("email-submit").innerText = "Sending...";
  
    if (
      document.getElementById("name").value != "" &&
      document.getElementById("email").value != "" &&
      document.getElementById("message").value != ""
    ) {
      let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };
  
      const serviceID = "service_a2ox7tt";
      const templateID = "template_rtewoxe";
  
      emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
  
          document.getElementById("email-submit").innerHTML = `
            Send message
            <i class="uil uil-message button__icon"></i>`;
  
          alert("Your message send susscessfully!");
        })
        .catch((err) => {
          document.getElementById("email-submit").innerHTML = `
            Send message
            <i class="uil uil-message button__icon"></i>`;
          console.log(err);
        });
    } else {
      alert("Please fill out all the fields");
    }
  });


ScrollReveal(
    { reset: true,
       distance: '60px',
       duration: 2000,
       delay: 400 
    }
);

ScrollReveal().reveal('.home-para, .contact-head', {delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.about-description, .project-image', {delay: 100, origin: 'left'});
ScrollReveal().reveal('.home-name, .mail, .contact-message', {delay: 200, origin: 'bottom'});
ScrollReveal().reveal('.home-designation, .contact a', {delay: 300, origin: 'bottom'});
ScrollReveal().reveal('.home-features, .about-profile, .project-details', {delay: 100, origin: 'right'});
ScrollReveal().reveal('.social-links, .swiper-wrapper', {delay: 100, origin: 'top'});