// Initialize Lucide Icons
        lucide.createIcons();

        // ====================================
        // 1. Localization Data & Logic
        // ====================================
        const localizationStrings = {
            en: {
                // ... (other English translations)
                'Features': 'Features',
                'Credibility': 'Credibility',
                'Teachers': 'Teachers',
                'Reviews': 'Reviews',
                'FAQ': 'FAQ',
                'Contact': 'Contact',
                'hero-headline': 'Achieving Excellence with PAS Coaching.',
                'hero-subheadline': 'Coaching for Classes 6 to 10 for guaranteed success.',
                'Eye-Catcher': 'New student will get 1 chapter free class for all subjects.',
                'Enroll CTA': 'Enroll Now',
                'features-title': 'Our Core Features for Guaranteed Success.',
                'Syllabus Key': '6 Months Syllabus Completion',
                'Practice Key': 'Practice Class with Practical Examples',
                'Problem Key': 'Problem Solving Class',
                'Exam Key': 'Practice Exam',
                'Test Key': 'Test Paper Solving',
                'Practical Key': 'Practical Class',
                'metrics-title': 'Why Choose PAS?',
                'teachers-title': 'Meet Our Dedicated Teachers.',
                'testimonials-title': 'What Our Students Say.',
                'faq-title': 'Frequently Asked Questions.',
                'contact-title': 'Start Your Success Journey.',
                'Mode Toggle': 'Toggle Dark/Light Mode',
                // 🌟 NEW: Guardian Fields for Localization
                'Student Name Label': 'Student Full Name',
                'Student Phone Label': 'Student Phone Number',
                'Guardian Name Label': 'Guardian Full Name',
                'Guardian Phone Label': 'Guardian Phone Number',
            },
            bn: {
                // ... (other Bangla translations)
                'Features': 'বৈশিষ্ট্য',
                'Credibility': 'বিশ্বাসযোগ্যতা',
                'Teachers': 'শিক্ষক',
                'Reviews': 'পর্যালোচনা',
                'FAQ': 'সচরাচর',
                'Contact': 'যোগাযোগ',
                'hero-headline': 'পেস কোচিং সেন্টারের সাথে শ্রেষ্ঠত্ব অর্জন করুন।',
                'hero-subheadline': 'নিশ্চিত সাফল্যের জন্য ক্লাস ৬ থেকে ১০ এর জন্য কোচিং।',
                'Eye-Catcher': 'নতুন ছাত্র-ছাত্রীদের জন্য সকল বিষয়ে ১টি অধ্যায় ফ্রি ক্লাস করার সুযোগ।',
                'Enroll CTA': 'এখনই ভর্তি হোন',
                'features-title': 'নিশ্চিত সাফল্যের জন্য আমাদের মূল বৈশিষ্ট্যসমূহ।',
                'Syllabus Key': '৬ মাসে সিলেবাস শেষ',
                'Practice Key': 'ব্যবহারিক উদাহরণ সহ অনুশীলন ক্লাস',
                'Problem Key': 'সমস্যা সমাধানের ক্লাস',
                'Exam Key': 'অনুশীলন পরীক্ষা',
                'Test Key': 'টেস্ট পেপার সমাধান',
                'Practical Key': 'ব্যবহারিক ক্লাস',
                'metrics-title': 'পেস কেন বেছে নেবেন?',
                'teachers-title': 'আমাদের ডেডিকেটেড শিক্ষকদের সাথে পরিচিত হন।',
                'testimonials-title': 'আমাদের শিক্ষার্থীরা যা বলে।',
                'faq-title': 'সচরাচর জিজ্ঞাসিত প্রশ্নাবলী।',
                'contact-title': 'আপনার সাফল্যের যাত্রা শুরু করুন।',
                'Mode Toggle': 'ডার্ক/লাইট মোড টগল করুন',
                 // 🌟 NEW: Guardian Fields for Localization
                'Student Name Label': 'শিক্ষার্থীর পূর্ণ নাম',
                'Student Phone Label': 'শিক্ষার্থীর ফোন নম্বর',
                'Guardian Name Label': 'অভিভাবকের পূর্ণ নাম',
                'Guardian Phone Label': 'অভিভাবকের ফোন নম্বর',
            }
        };

        function updateContent(lang) {
            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (localizationStrings[lang][key]) {
                    el.textContent = localizationStrings[lang][key];
                }
            });
            
            // Update Navigation Links
            document.querySelectorAll('.main-nav a').forEach(el => {
                const key = el.getAttribute('data-en');
                if (localizationStrings[lang][key]) {
                    el.textContent = localizationStrings[lang][key];
                }
            });

            // Update Specific Elements
            document.getElementById('hero-headline').textContent = localizationStrings[lang]['hero-headline'];
            document.getElementById('hero-subheadline').innerHTML = localizationStrings[lang]['hero-subheadline'];
            document.getElementById('hero-eye-catcher').textContent = localizationStrings[lang]['Eye-Catcher'];
            document.getElementById('hero-cta').textContent = localizationStrings[lang]['Enroll CTA'];
            document.getElementById('features-title').textContent = localizationStrings[lang]['features-title'];
            document.getElementById('metrics-title').textContent = localizationStrings[lang]['metrics-title'];
            document.getElementById('teachers-title').textContent = localizationStrings[lang]['teachers-title'];
            document.getElementById('testimonials-title').textContent = localizationStrings[lang]['testimonials-title'];
            document.getElementById('faq-title').textContent = localizationStrings[lang]['faq-title'];
            document.getElementById('contact-title').textContent = localizationStrings[lang]['contact-title'];

            // 🌟 NEW: Update Form Labels
            document.querySelector('label[for="name"]').textContent = localizationStrings[lang]['Student Name Label'];
            document.querySelector('label[for="phone"]').textContent = localizationStrings[lang]['Student Phone Label'];
            document.querySelector('label[for="guardian-name"]').textContent = localizationStrings[lang]['Guardian Name Label'];
            document.querySelector('label[for="guardian-phone"]').textContent = localizationStrings[lang]['Guardian Phone Label'];

            // Update FAQ Content (Dual Data-attributes)
            document.querySelectorAll('.accordion-item').forEach(item => {
                const header = item.querySelector('.accordion-header span');
                const content = item.querySelector('.accordion-content p');
                
                if(header && header.getAttribute('data-en')) {
                    header.textContent = header.getAttribute(`data-${lang}`);
                }
                if(content && content.getAttribute('data-en')) {
                    content.textContent = content.getAttribute(`data-${lang}`);
                }
            });
            
            document.documentElement.lang = lang;
        }

        document.getElementById('lang-toggle').addEventListener('change', (e) => {
            updateContent(e.target.value);
        });


        // ====================================
        // 2. Dark/Light Mode Logic
        // ====================================
        const modeToggleBtn = document.getElementById('mode-toggle');
        const body = document.body;
        const moonIcon = document.querySelector('.icon-moon');
        const sunIcon = document.querySelector('.icon-sun');

        function toggleMode() {
            const isDarkMode = body.classList.toggle('dark-mode');
            
            if (isDarkMode) {
                body.classList.remove('light-mode');
                moonIcon.style.display = 'none';
                sunIcon.style.display = 'inline';
                modeToggleBtn.setAttribute('aria-label', 'Toggle Light Mode');
            } else {
                body.classList.add('light-mode');
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline';
                modeToggleBtn.setAttribute('aria-label', 'Toggle Dark Mode');
            }
        }

        modeToggleBtn.addEventListener('click', toggleMode);


        // ====================================
        // 3. Advanced UX & Accessibility Logic
        // ====================================
        
        // A. Mobile Menu Toggle Logic (BUG FIXED)
        const menuToggleBtn = document.querySelector('.menu-toggle');
        const mainNav = document.querySelector('.main-nav');
        const menuIcon = menuToggleBtn.querySelector('.icon-menu');
        const closeIcon = menuToggleBtn.querySelector('.icon-close');
        
        function toggleMobileMenu() {
            const isExpanded = mainNav.classList.toggle('mobile-open');
            menuToggleBtn.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                // Show 'X' (close) icon, hide '3-dot' (menu) icon
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block'; 
                body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
            } else {
                // Hide 'X' (close) icon, show '3-dot' (menu) icon
                menuIcon.style.display = 'block'; 
                closeIcon.style.display = 'none';
                body.style.overflow = ''; // Allow scrolling
            }
        }

        menuToggleBtn.addEventListener('click', toggleMobileMenu);
        
        // Close menu when a link is clicked (on mobile)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('mobile-open')) {
                    // Manually set the class and state to 'false' for closure
                    mainNav.classList.remove('mobile-open');
                    menuToggleBtn.setAttribute('aria-expanded', 'false');
                    
                    // Manually set the icons' visibility to the closed state
                    menuIcon.style.display = 'block'; 
                    closeIcon.style.display = 'none';
                    body.style.overflow = ''; // Allow scrolling
                }
            });
        });

        // B. Smooth Scrolling for Internal Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // C. Scroll Reveal Animation Logic (Intersection Observer)
        const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the item is visible
        });

        scrollRevealElements.forEach(el => observer.observe(el));

        // D. Metrics Counter Animation Logic
        const metricsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.count').forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const suffix = counter.getAttribute('data-suffix') || '';
                        let count = 0;
                        const duration = 2000; // 2 seconds
                        const start = performance.now();

                        function updateCount(timestamp) {
                            const progress = timestamp - start;
                            const percentage = Math.min(progress / duration, 1);
                            count = Math.floor(percentage * target);

                            counter.textContent = count + suffix;

                            if (percentage < 1) {
                                requestAnimationFrame(updateCount);
                            }
                        }

                        requestAnimationFrame(updateCount);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5 // Trigger when half of the section is visible
        });

        document.getElementById('metrics').querySelectorAll('.metric-block').forEach(el => metricsObserver.observe(el));


        // E. FAQ Accordion Logic
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const isExpanded = header.getAttribute('aria-expanded') === 'true';

                // Close all others
                document.querySelectorAll('.accordion-header.active').forEach(otherHeader => {
                    if (otherHeader !== header) {
                        otherHeader.classList.remove('active');
                        otherHeader.setAttribute('aria-expanded', 'false');
                        const otherContent = otherHeader.nextElementSibling;
                        otherContent.classList.remove('active');
                        otherContent.style.maxHeight = '0';
                    }
                });

                // Toggle current item
                header.classList.toggle('active');
                header.setAttribute('aria-expanded', !isExpanded);
                content.classList.toggle('active');

                if (content.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
            
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    header.click();
                }
            });
        });

        // F. Firebase Form Submission Logic (NEW)
        const firebaseConfig = {
            // 🚨 আপনার Firebase Console থেকে এই কনফিগারেশনগুলি কপি করে এখানে বসান
            // উদাহরণ: apiKey: "AIzaSy..."
            apiKey: "YOUR_API_KEY", 
            authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_PROJECT_ID.appspot.com",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const db = firebase.firestore();

        const enrollmentForm = document.getElementById('enrollment-form');

        enrollmentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const form = e.target;
            
            // Get all form data
            const formData = {
                studentName: form['name'].value,
                studentPhone: form['phone'].value,
                guardianName: form['guardian-name'].value, // NEW Field
                guardianPhone: form['guardian-phone'].value, // NEW Field
                studentClass: form['class-select'].value,
                session: form['session-select'].value,
                email: form['email'].value,
                message: form['message'].value,
                wantsFreeClass: form['free-class-check'].checked,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            };

            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            try {
                // Save the data to a Firestore collection named "enrollments"
                await db.collection("enrollments").add(formData);

                alert("আপনার ভর্তির আবেদন সফলভাবে জমা দেওয়া হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
                form.reset(); // Clear the form
            } catch (error) {
                console.error("Firebase Submission Error: ", error);
                alert("ফর্ম জমা দিতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
            } finally {
                submitButton.textContent = 'Submit Enrollment';
                submitButton.disabled = false;
            }
        });