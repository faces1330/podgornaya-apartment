// Мобильное меню
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');

// Открытие мобильного меню
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

// Закрытие мобильного меню
if (mobileNavClose) {
    mobileNavClose.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Закрытие меню при клике на ссылку
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Плавная прокрутка
document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Закрываем мобильное меню
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
        
        // Прокрутка
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Остальной код остается прежним...
function openBookingModal() {
    document.getElementById('booking-modal').style.display = 'block';
}

function closeBookingModal() {
    document.getElementById('booking-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('booking-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});
