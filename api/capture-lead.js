/**
 * API Route: Capture Lead
 * Handles form submissions and integrates with Grawt
 */

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { firstName, email, churchBusiness, revenue, ready, timestamp, source } = req.body;

    // Validate required fields
    if (!firstName || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Prepare lead data
        const leadData = {
            firstName,
            email,
            churchBusiness: churchBusiness || '',
            revenueLevel: revenue || '',
            readyToBook: ready || false,
            source: 'pastor-entrepreneur-fracture-landing',
            timestamp: new Date(timestamp).toISOString(),
            landingPage: 'pastor-entrepreneur-fracture'
        };

        // Send to Grawt (if API key is configured)
        if (process.env.GRAWT_API_KEY) {
            const grawt_response = await fetch('https://api.grawt.io/v1/leads', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.GRAWT_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: leadData.firstName,
                    email: leadData.email,
                    metadata: {
                        churchBusiness: leadData.churchBusiness,
                        revenueLevel: leadData.revenueLevel,
                        readyToBook: leadData.readyToBook,
                        source: leadData.source,
                        landingPage: leadData.landingPage
                    }
                })
            });

            if (!grawt_response.ok) {
                console.error('Grawt API error:', grawt_response.status);
            }
        }

        // Send welcome email via AgentMail (if configured)
        if (process.env.AGENTMAIL_API_KEY) {
            const email_response = await fetch('https://api.agentmail.to/send', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.AGENTMAIL_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to: leadData.email,
                    from: 'reyes@agentmail.to',
                    subject: 'Your Authority Diagnostic Starter Kit',
                    html: getWelcomeEmail(leadData.firstName)
                })
            });

            if (!email_response.ok) {
                console.error('Email send error:', email_response.status);
            }
        }

        // Log lead capture
        console.log('Lead captured:', {
            email: leadData.email,
            name: leadData.firstName,
            revenue: leadData.revenueLevel,
            readyToBook: leadData.readyToBook,
            timestamp: leadData.timestamp
        });

        // Return success
        return res.status(200).json({
            success: true,
            message: 'Lead captured successfully',
            leadId: email // Simple ID for tracking
        });

    } catch (error) {
        console.error('Error capturing lead:', error);
        return res.status(500).json({
            error: 'Failed to capture lead',
            details: error.message
        });
    }
}

/**
 * Generate welcome email HTML
 */
function getWelcomeEmail(firstName) {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px; background: #f9f9f9; }
        .content h2 { color: #c9a563; font-size: 20px; }
        .content p { margin: 10px 0; }
        .cta { display: inline-block; background: #c9a563; color: #1a1a1a; padding: 12px 30px; text-decoration: none; border-radius: 4px; margin: 20px 0; font-weight: bold; }
        .footer { text-align: center; color: #999; font-size: 12px; padding: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Authority Diagnostic Starter Kit</h1>
        </div>
        <div class="content">
            <h2>Hey ${firstName}!</h2>
            <p>Thank you for requesting the Authority Diagnostic Starter Kit.</p>
            
            <p>Inside this email, you'll find:</p>
            <ul>
                <li><strong>The 5 Key Questions</strong> that reveal if your fracture is credibility, messaging, or role confusion</li>
                <li><strong>A Quick Self-Assessment</strong> to diagnose your specific fracture</li>
                <li><strong>Your Next Best Move</strong> based on what you discover</li>
            </ul>
            
            <p>This is the foundation we'll use to build your complete Authority Diagnostic.</p>
            
            <h2 style="margin-top: 30px;">Ready for the full diagnostic?</h2>
            <p>Schedule a 90-minute Authority Assessment Interview with Reyes and discover exactly what's fractured in your positioning.</p>
            
            <a href="https://calendly.com/reyes-castillo" class="cta">Book Your Assessment</a>
            
            <p style="margin-top: 30px;"><strong>Questions?</strong> Reply to this email or reach out to reyes@agentmail.to</p>
            
            <p>Looking forward to showing you exactly where the fracture is—and how to repair it.</p>
            
            <p>— Reyes</p>
        </div>
        <div class="footer">
            <p>&copy; 2026 Reyes Castillo. All rights reserved.</p>
            <p>This email was sent to you because you requested the Authority Diagnostic Starter Kit.</p>
        </div>
    </div>
</body>
</html>
    `;
}
