import { useEffect } from 'react';

const useScrollAnimation = () => {
    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    // Make it visible immediately after play state triggers to avoid flash
                    entry.target.style.opacity = '1';
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of element is visible
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Get all elements with animate classes
        const elementsToAnimate = document.querySelectorAll('.animate-fade-in, .animate-slide-up');

        // Initial setup: pause animations and make opaque items transparent
        elementsToAnimate.forEach((el) => {
            if (el.className.includes('animate-slide-up')) {
                el.style.opacity = '0';
            }
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });

        return () => {
            elementsToAnimate.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useScrollAnimation;
