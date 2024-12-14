document.addEventListener('DOMContentLoaded', function () {
    // Carousel
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const nextBtn = document.querySelector('.carousel-control.next');
    const prevBtn = document.querySelector('.carousel-control.prev');
    let index = 0;

    function showSlide(i) {
        index = (i + items.length) % items.length;
        carousel.style.transform = `translateX(${-index * 100}%)`;
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    nextBtn.addEventListener('click', () => showSlide(index + 1));
    prevBtn.addEventListener('click', () => showSlide(index - 1));

    setInterval(() => {
        showSlide(index + 1);
    }, 5000);

    // Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const body = this.nextElementSibling;
            body.classList.toggle('active');
        });
    });

    // Tabs
    const tabItems = document.querySelectorAll('.tab-item');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabItems.forEach(item => {
        item.addEventListener('click', function () {
            tabItems.forEach(i => i.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            this.classList.add('active');
            document.querySelector(this.dataset.tabTarget).classList.add('active');
        });
    });
});

