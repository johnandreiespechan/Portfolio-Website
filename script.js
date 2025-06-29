document.addEventListener('DOMContentLoaded', function () {

    initializeCharts();
    initializeSkillAnimations();

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal slider for badges
    const badgeSlides = [
        { img: 'img/certificate-badge/badge1.jpg', desc: 'Wala Pa HAHAHAHHA, Nakuha palang :>. Sa certificate meron na' },
        { img: 'img/certificate-badge/badge2.jpg', desc: 'Badge 2 description here.' }
    ];
    let badgeIdx = 0;
    const badgeModal = document.getElementById('badgeModal');
    const badgeCard = document.getElementById('badge-card');
    if (badgeCard && badgeModal) {
        badgeCard.onclick = () => { badgeIdx = 0; showBadge(badgeIdx, true); badgeModal.style.display = 'flex'; badgeModal.classList.add('active'); };
        document.getElementById('closeBadgeModal').onclick = () => { badgeModal.style.display = 'none'; badgeModal.classList.remove('active'); };
        document.getElementById('prevBadge').onclick = () => { badgeIdx = (badgeIdx - 1 + badgeSlides.length) % badgeSlides.length; showBadge(badgeIdx, false); };
        document.getElementById('nextBadge').onclick = () => { badgeIdx = (badgeIdx + 1) % badgeSlides.length; showBadge(badgeIdx, false); };
    }
    function showBadge(idx, instant) {
        const img = document.getElementById('badgeImg');
        img.classList.remove('active');
        setTimeout(() => {
            img.src = badgeSlides[idx].img;
            document.getElementById('badgeDesc').innerText = badgeSlides[idx].desc;
            document.getElementById('badgeIndicator').innerText = `${idx + 1} / ${badgeSlides.length}`;
            img.classList.add('active');
        }, instant ? 0 : 200);
    }

    // Modal slider for certificates
    const certSlides = [
        { img: 'img/certificate-badge/JPCS BSU Alangilan 0082 John Andrei E. Chan (1)_page-0001.jpg', desc: 'BULAGA!! JPCS Memship HAHAHAHA. Nakuha palang din ng legit na cert :>' },
        { img: 'img/certificate-badge/random-cert.jpg', desc: 'Certificate 2 description here.' }
    ];
    let certIdx = 0;
    const certModal = document.getElementById('certModal');
    const certCard = document.getElementById('cert-card');
    if (certCard && certModal) {
        certCard.onclick = () => { certIdx = 0; showCert(certIdx, true); certModal.style.display = 'flex'; certModal.classList.add('active'); };
        document.getElementById('closeCertModal').onclick = () => { certModal.style.display = 'none'; certModal.classList.remove('active'); };
        document.getElementById('prevCert').onclick = () => { certIdx = (certIdx - 1 + certSlides.length) % certSlides.length; showCert(certIdx, false); };
        document.getElementById('nextCert').onclick = () => { certIdx = (certIdx + 1) % certSlides.length; showCert(certIdx, false); };
    }
    function showCert(idx, instant) {
        const img = document.getElementById('certImg');
        img.classList.remove('active');
        setTimeout(() => {
            img.src = certSlides[idx].img;
            document.getElementById('certDesc').innerText = certSlides[idx].desc;
            document.getElementById('certIndicator').innerText = `${idx + 1} / ${certSlides.length}`;
            img.classList.add('active');
        }, instant ? 0 : 200);
    }

    // Close modal when clicking outside content
    window.onclick = function (event) {
        if (event.target === badgeModal) { badgeModal.style.display = 'none'; badgeModal.classList.remove('active'); }
        if (event.target === certModal) { certModal.style.display = 'none'; certModal.classList.remove('active'); }
    };

    // Modern pop-up effect: social icons animate one by one when contact is in view
    const workTogetherBtn = document.querySelector('.why-hire-cta .btn.primary');
    const contactSection = document.getElementById('contact');
    const socialLinks = document.querySelector('.social-links');
    const socialIcons = document.querySelectorAll('.social-icon');
    let highlightPending = false;
    if (workTogetherBtn && contactSection && socialLinks && socialIcons.length) {
        workTogetherBtn.addEventListener('click', function (e) {
            e.preventDefault();
            highlightPending = true;
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
        // Intersection Observer to trigger pop-up when contact section is visible
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && highlightPending) {
                    socialIcons.forEach((icon, idx) => {
                        setTimeout(() => {
                            icon.classList.add('pop-animate');
                            setTimeout(() => {
                                icon.classList.remove('pop-animate');
                            }, 800); // prolong effect to 800ms
                        }, idx * 220); // prolong stagger to 220ms
                    });
                    highlightPending = false;
                }
            });
        }, { threshold: 0.5 });
        observer.observe(contactSection);
    }

    // Mobile navbar toggle
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    const mainNavMenu = document.getElementById('mainNavMenu');
    if (mobileNavToggle && mainNavMenu) {
        mobileNavToggle.addEventListener('click', function () {
            mainNavMenu.classList.toggle('show');
        });
        // Hide menu when a link is clicked (for better UX)
        mainNavMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNavMenu.classList.remove('show');
            });
        });
    }
});

function initializeCharts() {
    const ctx1 = document.getElementById('chart1');
    if (ctx1) {
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Sales Data Analysis',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(52, 152, 219, 0.5)',
                        'rgba(46, 204, 113, 0.5)',
                        'rgba(231, 76, 60, 0.5)',
                        'rgba(155, 89, 182, 0.5)',
                        'rgba(241, 196, 15, 0.5)',
                        'rgba(52, 73, 94, 0.5)'
                    ],
                    borderColor: [
                        'rgba(52, 152, 219, 1)',
                        'rgba(46, 204, 113, 1)',
                        'rgba(231, 76, 60, 1)',
                        'rgba(155, 89, 182, 1)',
                        'rgba(241, 196, 15, 1)',
                        'rgba(52, 73, 94, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Interactive Dashboard
    const ctx2 = document.getElementById('chart2');
    if (ctx2) {
        // Data sets for different scenarios
        const dataSets = {
            sales: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                data: [125000, 187000, 142000, 234000],
                label: 'Quarterly Sales ($)',
                color: 'rgba(52, 152, 219, 0.8)',
                borderColor: 'rgba(52, 152, 219, 1)'
            },
            users: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                data: [1200, 1850, 2100, 2800, 3200, 4100],
                label: 'Monthly Active Users',
                color: 'rgba(46, 204, 113, 0.8)',
                borderColor: 'rgba(46, 204, 113, 1)'
            },
            performance: {
                labels: ['CPU', 'Memory', 'Storage', 'Network', 'Database'],
                data: [85, 92, 78, 88, 95],
                label: 'System Performance (%)',
                color: 'rgba(231, 76, 60, 0.8)',
                borderColor: 'rgba(231, 76, 60, 1)'
            }
        };

        let currentChart = null;
        let currentDataSet = 'sales';

        function createChart(type, dataKey) {
            const data = dataSets[dataKey];
            const config = {
                type: type,
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: data.label,
                        data: data.data,
                        backgroundColor: type === 'doughnut' ? [
                            'rgba(52, 152, 219, 0.8)',
                            'rgba(46, 204, 113, 0.8)',
                            'rgba(231, 76, 60, 0.8)',
                            'rgba(155, 89, 182, 0.8)',
                            'rgba(241, 196, 15, 0.8)'
                        ] : data.color,
                        borderColor: data.borderColor,
                        borderWidth: 2,
                        fill: type === 'line' ? false : true,
                        tension: type === 'line' ? 0.4 : 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#fff',
                                font: {
                                    size: 12
                                }
                            }
                        }
                    },
                    scales: type !== 'doughnut' ? {
                        x: {
                            ticks: {
                                color: '#fff'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: '#fff'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        }
                    } : {}
                }
            };

            if (currentChart) {
                currentChart.destroy();
            }

            currentChart = new Chart(ctx2, config);
            updateStats(data.data);
        }

        function updateStats(data) {
            const total = data.reduce((sum, val) => sum + val, 0);
            const average = Math.round(total / data.length);
            const max = Math.max(...data);

            // Animate the stats
            animateValue('totalValue', 0, total, 1000);
            animateValue('avgValue', 0, average, 1000);
            animateValue('maxValue', 0, max, 1000);
        }

        function animateValue(elementId, start, end, duration) {
            const element = document.getElementById(elementId);
            if (!element) return;

            const startTime = performance.now();
            const startValue = start;

            function updateValue(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const currentValue = Math.round(startValue + (end - startValue) * progress);
                element.textContent = currentValue.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(updateValue);
                }
            }

            requestAnimationFrame(updateValue);
        }

        // Event listeners for dashboard controls
        const chartTypeSelect = document.getElementById('chartType');
        const dataSetSelect = document.getElementById('dataSet');

        if (chartTypeSelect) {
            chartTypeSelect.addEventListener('change', function () {
                createChart(this.value, currentDataSet);
            });
        }

        if (dataSetSelect) {
            dataSetSelect.addEventListener('change', function () {
                currentDataSet = this.value;
                createChart(chartTypeSelect ? chartTypeSelect.value : 'bar', currentDataSet);
            });
        }

        // Initialize with default chart
        createChart('bar', 'sales');
    }
}

function initializeSkillAnimations() {
    const skillProgressBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;

                // Reset to 0 and animate to target width
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);

                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    skillProgressBars.forEach(bar => {
        observer.observe(bar);
    });
}

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log('Form submitted with data:', data);

    alert('Thank you for your message! I will get back to you soon.');

    e.target.reset();
}