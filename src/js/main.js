// Mobile Menu

    const toggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    toggleBtn.addEventListener('click', () => {
    if(mobileMenu.classList.contains("hidden")){
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');

    }else{
        mobileMenu.classList.remove('flex');
        mobileMenu.classList.add('hidden');
    }
    
});


// change color heart

const hearts = document.querySelectorAll(".heartIcon");

hearts.forEach(heartIcon => {
    heartIcon.addEventListener("click", () => {
        if (heartIcon.classList.contains("text-red-500")) {
            heartIcon.classList.remove("text-red-500");
            heartIcon.classList.add("text-gray-600");
        } else {
            heartIcon.classList.remove("text-gray-600");
            heartIcon.classList.add("text-red-500");
        }
    });
});


// check stars
const cards = document.querySelectorAll(".star");

cards.forEach(card => {
    const stars = card.querySelectorAll(".stars i");

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add("fas");
                    s.classList.remove("far");
                } else {
                    s.classList.add("far");
                    s.classList.remove("fas");
                }
            });
        });
    });
});


// scrollBtn

const scrollBtn = document.getElementById('scrollBtn');

    window.addEventListener('scroll', () => {
    if (window.scrollY < 1400) {
        scrollBtn.classList.add('hidden');
    } else {
        scrollBtn.classList.remove('hidden');
    }
});