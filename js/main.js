/**
 * Syre Diamond Autos - Main JavaScript
 */

(function() {
    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
        
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-navigation');
        
        if (menuToggle && mainNav) {
            menuToggle.addEventListener('click', function() {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                
                if (isExpanded) {
                    mainNav.style.display = 'none';
                } else {
                    mainNav.style.display = 'flex';
                    mainNav.style.flexDirection = 'column';
                    mainNav.style.position = 'absolute';
                    mainNav.style.top = '70px';
                    mainNav.style.left = '0';
                    mainNav.style.right = '0';
                    mainNav.style.background = 'white';
                    mainNav.style.padding = '1rem';
                    mainNav.style.boxShadow = 'var(--shadow-lg)';
                    mainNav.style.gap = '1rem';
                }
            });
        }

        // Search Tab Switching
        const searchTabs = document.querySelectorAll('.search-tab');
        const tabContents = document.querySelectorAll('.search-tab-content');
        
        searchTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const targetTab = this.dataset.tab;
                
                searchTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                tabContents.forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById('tab-' + targetTab).style.display = 'block';
            });
        });

        // Price Filter Buttons
        const priceFilterBtns = document.querySelectorAll('.price-filter-btn');
        const minPriceInput = document.getElementById('min_price');
        const maxPriceInput = document.getElementById('max_price');
        
        priceFilterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                priceFilterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                if (minPriceInput) minPriceInput.value = this.dataset.min || '';
                if (maxPriceInput) maxPriceInput.value = this.dataset.max || '';
            });
        });

        // Smooth Scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId !== '#' && targetId !== '') {
                    const target = document.querySelector(targetId);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Header scroll effect
        const header = document.querySelector('.site-header');
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.style.boxShadow = 'var(--shadow-md)';
                } else {
                    header.style.boxShadow = 'none';
                }
            });
        }

        // Form submission handling for Netlify
        const forms = document.querySelectorAll('form[data-netlify]');
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                // Netlify handles this automatically
                // Just let the default submission work
            });
        });

        console.log('🚗 Syre Diamond Autos loaded successfully');
    });

})();
