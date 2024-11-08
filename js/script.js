document.addEventListener('DOMContentLoaded', function() {
    const clientWrappers = document.querySelectorAll('.client_wrapper');
    const totalCount = clientWrappers.length;
    const currentIndexText = document.getElementById('currentIndex');
    const totalCountText = document.getElementById('totalCount');
    const pillContainer = document.querySelector('.pill_indicators');
    let currentIndex = 0;
    let autoSlideInterval;

    totalCountText.textContent = totalCount;

    for (let i = 0; i < totalCount; i++) {
        const pill = document.createElement('div');
        pill.classList.add('pill');
        if (i === 0) pill.classList.add('active');
        pillContainer.appendChild(pill);
    }
    const pills = document.querySelectorAll('.pill');

    function updateSlider() {
        clientWrappers.forEach((wrapper, index) => {
            wrapper.classList.remove('active');
            if (index === currentIndex) {
                wrapper.classList.add('active');
            }
        });

        pills.forEach((pill, index) => {
            pill.classList.remove('active');
            if (index === currentIndex) {
                pill.classList.add('active');
            }
        });

        currentIndexText.textContent = currentIndex + 1;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCount;
        updateSlider();
    }

    document.getElementById('next').addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 10000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    clientWrappers[currentIndex].classList.add('active');
    startAutoSlide();
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.space_buttons button');
    const imageGroups = document.querySelectorAll('.image_group');
    const leftArrow = document.querySelector('.left_arrow');
    const rightArrow = document.querySelector('.right_arrow');
    const carouselImages = document.querySelector('.carousel_images');
    const images = document.querySelectorAll('.image_group img');
    let currentIndex = 0;
    let scrollAmount = images[0].clientWidth + 10;

    const observerOptions = {
        root: carouselImages,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const group = entry.target.closest('.image_group');
                const groupIndex = Array.from(imageGroups).indexOf(group);

                if (groupIndex !== -1) {
                    const isLastImage = entry.target === group.querySelector('img:last-child');
                    const isFirstImage = entry.target === group.querySelector('img:first-child');

                    if (isFirstImage || isLastImage) {
                        currentIndex = groupIndex;
                        updateButtonStyles();
                    }
                }
            }
        });
    }, observerOptions);

    imageGroups.forEach(group => {
        const firstImage = group.querySelector('img:first-child');
        const lastImage = group.querySelector('img:last-child');
        if (firstImage) observer.observe(firstImage);
        if (lastImage) observer.observe(lastImage);
    });

    rightArrow.addEventListener('click', () => {
        carouselImages.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    leftArrow.addEventListener('click', () => {
        carouselImages.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            const group = imageGroups[currentIndex];
            carouselImages.scrollTo({
                left: group.offsetLeft,
                behavior: 'smooth'
            });
            updateButtonStyles();
        });
    });

    function updateButtonStyles() {
        buttons.forEach((button, index) => {
            button.style.backgroundColor = index === currentIndex ? '#526563' : '#F9FAFB';
            button.style.color = index === currentIndex ? '#FFF' : '#526563';
        });
    }

    updateButtonStyles();
});
