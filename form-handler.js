/* ========================================
   FORM HANDLER & ANALYTICS
   Pastor-Entrepreneur Fracture Landing Page
   ======================================== */

// Form Handler
const captureForm = document.getElementById('capture-form');

if (captureForm) {
    captureForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            firstName: document.querySelector('input[name="firstName"]').value,
            email: document.querySelector('input[name="email"]').value,
            churchBusiness: document.querySelector('input[name="churchBusiness"]').value,
            revenue: document.querySelector('select[name="revenue"]').value,
            ready: document.querySelector('input[name="ready"]').checked,
            timestamp: new Date().toISOString(),
            source: 'pastor-entrepreneur-fracture-landing'
        };

        // Send to analytics
        if (window.gtag) {
            gtag('event', 'lead_capture', {
                'first_name': formData.firstName,
                'email': formData.email,
                'revenue_level': formData.revenue,
                'ready_to_book': formData.ready
            });
        }

        // Send to email service (Grawt or similar)
        try {
            const response = await fetch('/api/capture-lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Show success message
                alert('Thank you! Check your email for the Authority Diagnostic Starter Kit.');
                captureForm.reset();
                
                // If they checked ready, redirect to booking
                if (formData.ready) {
                    setTimeout(() => {
                        window.location.href = '/booking';
                    }, 1000);
                }
            } else {
                console.error('Form submission failed');
                alert('There was an error. Please try again or email reyes@agentmail.to');
            }
        } catch (error) {
            console.error('Error:', error);
            
            // Fallback: Show email address
            alert('Thank you! Please email ' + formData.email + ' to reyes@agentmail.to to confirm.');
        }
    });
}

// Scroll tracking
document.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    // Track scroll depth at intervals
    if (scrollPercent > 25 && !window.scrollTracked25) {
        window.scrollTracked25 = true;
        gtag('event', 'scroll_depth', {'value': '25'});
    }
    if (scrollPercent > 50 && !window.scrollTracked50) {
        window.scrollTracked50 = true;
        gtag('event', 'scroll_depth', {'value': '50'});
    }
    if (scrollPercent > 75 && !window.scrollTracked75) {
        window.scrollTracked75 = true;
        gtag('event', 'scroll_depth', {'value': '75'});
    }
    if (scrollPercent > 90 && !window.scrollTracked90) {
        window.scrollTracked90 = true;
        gtag('event', 'scroll_depth', {'value': '90'});
    }
});

// CTA button tracking
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        gtag('event', 'cta_click', {
            'button_text': this.innerText,
            'button_class': this.className
        });
    });
});

// Link tracking
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'internal_link_click', {
            'target_section': this.getAttribute('href')
        });
    });
});

// Track external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function() {
        gtag('event', 'external_link_click', {
            'url': this.href
        });
    });
});
