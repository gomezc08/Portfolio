document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.scroll-section');
    const dots = document.querySelectorAll('.scroll-dot');
    
    // Update active dot on scroll
    const scrollContainer = document.querySelector('.page-scroll-container');
    scrollContainer.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollContainer.scrollTop >= (sectionTop - sectionHeight/3)) {
                current = index;
            }
        });
        
        dots.forEach(dot => dot.classList.remove('active'));
        dots[current].classList.add('active');
    });
    
    // Click on dots to navigate
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Optional: Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const currentIndex = Array.from(dots).findIndex(dot => 
            dot.classList.contains('active')
        );
        
        if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
        else if (e.key === 'ArrowUp' && currentIndex > 0) {
            sections[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
        }
    });
});