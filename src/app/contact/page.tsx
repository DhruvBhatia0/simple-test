"use client";

export default function ContactPage() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background-color: #FFFFEE;
          font-family: arial, helvetica, sans-serif;
          font-size: 13px;
          color: #800000;
        }

        .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background-color: #F0E0D6;
          border: 1px solid #D9BFB7;
          border-radius: 5px;
        }

        h1 {
          font-size: 24px;
          color: #800000;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }

        h2 {
          font-size: 18px;
          color: #800000;
          font-weight: bold;
          margin: 20px 0 10px 0;
        }

        p {
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 30px 0;
        }

        .contact-card {
          background-color: #E8D4C8;
          padding: 20px;
          border-radius: 5px;
          border: 1px solid #D9BFB7;
        }

        .contact-card h3 {
          color: #800000;
          margin-bottom: 15px;
          font-size: 16px;
        }

        .contact-info {
          margin-bottom: 10px;
        }

        .contact-info strong {
          color: #800000;
          display: block;
          margin-bottom: 3px;
        }

        .contact-form {
          background-color: #E8D4C8;
          padding: 25px;
          border-radius: 5px;
          border: 1px solid #D9BFB7;
          margin: 30px 0;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          color: #800000;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 8px;
          border: 1px solid #D9BFB7;
          border-radius: 3px;
          font-family: arial, helvetica, sans-serif;
          font-size: 13px;
          background-color: #F0E0D6;
          color: #800000;
        }

        .form-group textarea {
          height: 100px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #800000;
        }

        .submit-btn {
          background-color: #800000;
          color: #FFFFEE;
          padding: 10px 20px;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.2s;
        }

        .submit-btn:hover {
          background-color: #A52A2A;
        }

        .office-hours {
          background-color: #D9BFB7;
          padding: 15px;
          border-radius: 5px;
          margin: 20px 0;
        }

        .hours-grid {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 8px;
          font-size: 12px;
        }

        .hours-grid .day {
          font-weight: bold;
          color: #800000;
        }

        .social-links {
          display: flex;
          gap: 15px;
          margin: 15px 0;
        }

        .social-link {
          background-color: #800000;
          color: #FFFFEE;
          padding: 8px 15px;
          border-radius: 3px;
          text-decoration: none;
          font-size: 12px;
          transition: background-color 0.2s;
        }

        .social-link:hover {
          background-color: #A52A2A;
          text-decoration: none;
          color: #FFFFEE;
        }

        .faq-section {
          margin: 30px 0;
        }

        .faq-item {
          background-color: #E8D4C8;
          padding: 15px;
          border-radius: 5px;
          margin-bottom: 10px;
          border: 1px solid #D9BFB7;
        }

        .faq-question {
          font-weight: bold;
          color: #800000;
          margin-bottom: 8px;
        }

        .faq-answer {
          line-height: 1.5;
        }

        .map-placeholder {
          background-color: #D9BFB7;
          height: 200px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #800000;
          font-style: italic;
          margin: 20px 0;
        }

        .response-message {
          background-color: #90EE90;
          color: #006400;
          padding: 10px;
          border-radius: 3px;
          margin: 15px 0;
          display: none;
        }

        .error-message {
          background-color: #FFB6C1;
          color: #8B0000;
          padding: 10px;
          border-radius: 3px;
          margin: 15px 0;
          display: none;
        }
      `}</style>

      <div className="container">
        <h1>Contact Us</h1>
        
        <p>
          Want to get in touch? Of course you do! We love hearing from our completely imaginary customers. 
          Whether you have questions, complaints, or just want to say hello, we're here to ignore you in the most 
          professional way possible.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>🏢 Main Office</h3>
            <div className="contact-info">
              <strong>Address:</strong>
              123 Fictional Street, Suite 456
              Imaginary City, IC 78910
            </div>
            <div className="contact-info">
              <strong>Phone:</strong>
              (555) 123-4567 (Please don't call, we're busy)
            </div>
            <div className="contact-info">
              <strong>Email:</strong>
              contact@simple-test.fake (We won't reply)
            </div>
            <div className="map-placeholder">
              🗺️ Map would go here if this was real
            </div>
          </div>

          <div className="contact-card">
            <h3>🕐 Office Hours</h3>
            <div className="office-hours">
              <div className="hours-grid">
                <div className="day">Monday:</div>
                <div>9:00 AM - 5:00 PM (Closed for lunch, all day)</div>
                <div className="day">Tuesday:</div>
                <div>9:00 AM - 5:00 PM (Working from home)</div>
                <div className="day">Wednesday:</div>
                <div>9:00 AM - 5:00 PM (Team building day)</div>
                <div className="day">Thursday:</div>
                <div>9:00 AM - 5:00 PM (Meetings about meetings)</div>
                <div className="day">Friday:</div>
                <div>9:00 AM - 12:00 PM (Early weekend)</div>
                <div className="day">Weekend:</div>
                <div>Closed (Living our best lives)</div>
              </div>
            </div>
          </div>
        </div>

        <h2>Send Us a Message (That We'll Never Read)</h2>
        <div className="contact-form">
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! It has been successfully ignored.'); }}>
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <select id="subject" name="subject" required>
                <option value="">Select a subject</option>
                <option value="general">General Question</option>
                <option value="complaint">Complaint</option>
                <option value="praise">Unwarranted Praise</option>
                <option value="bug">Bug Report (We'll call it a feature)</option>
                <option value="other">Other (Probably still won't help)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message *</label>
              <textarea id="message" name="message" required placeholder="Type your message here... We promise to read it (eventually)"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority Level</label>
              <select id="priority" name="priority">
                <option value="low">Low (We'll get to it never)</option>
                <option value="medium">Medium (We'll forget about it tomorrow)</option>
                <option value="high">High (We'll lose it in our inbox)</option>
                <option value="urgent">Urgent (We'll panic and do nothing)</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Send Message (Into the Void)</button>
          </form>
        </div>

        <h2>Connect With Us (Socially Awkward)</h2>
        <p>Follow us on social media for updates we'll never post!</p>
        <div className="social-links">
          <a href="#" className="social-link">📘 Facebook (Empty)</a>
          <a href="#" className="social-link">🐦 Twitter (Silent)</a>
          <a href="#" className="social-link">📷 Instagram (No Photos)</a>
          <a href="#" className="social-link">💼 LinkedIn (Unemployed)</a>
          <a href="#" className="social-link">🎥 YouTube (No Videos)</a>
        </div>

        <h2>Frequently Asked Questions (That Nobody Asked)</h2>
        <div className="faq-section">
          <div className="faq-item">
            <div className="faq-question">Q: How long does it take to get a response?</div>
            <div className="faq-answer">A: We aim to respond within 3-5 business years. If you haven't heard from us by then, please send another message that we'll also ignore.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Q: Do you offer customer support?</div>
            <div className="faq-answer">A: We prefer to call it "customer avoidance." Our support team is specially trained in the art of being unavailable.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Q: Can I speak to a manager?</div>
            <div className="faq-answer">A: No. The manager is currently in a meeting about scheduling more meetings. Please try again never.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Q: Is this website real?</div>
            <div className="faq-answer">A: It's as real as your hopes of getting a response from us. So, technically, no.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Q: Why is everything beige?</div>
            <div className="faq-answer">A: Beige is the color of corporate mediocrity. We find it inspiring in its lack of inspiration.</div>
          </div>
        </div>

        <h2>Other Ways to Not Reach Us</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>📞 Phone Support</h3>
            <p>Call us at (555) 987-6543 for immediate frustration. Our automated system will transfer you in circles until you give up.</p>
            <p><strong>Best time to call:</strong> Never</p>
          </div>

          <div className="contact-card">
            <h3>📧 Email Support</h3>
            <p>Email us at support@simple-test.fake for the privilege of waiting for a response that will never come.</p>
            <p><strong>Response time:</strong> Geological</p>
          </div>

          <div className="contact-card">
            <h3>📱 Live Chat</h3>
            <p>Our live chat is staffed by bots that have been programmed to say "I don't understand" in 50 different languages.</p>
            <p><strong>Availability:</strong> When you're not looking</p>
          </div>

          <div className="contact-card">
            <h3>📬 Snail Mail</h3>
            <p>Send us a letter! We'll use it as kindling for our office bonfire where we burn customer complaints.</p>
            <p><strong>Delivery time:</strong> Depends on the wind</p>
          </div>
        </div>

        <p>
          Thank you for visiting our Contact Us page! We hope you've enjoyed this completely pointless exercise in futility. 
          Remember: the best way to contact us is to not contact us at all. We appreciate your understanding and look forward 
          to never hearing from you.
        </p>
      </div>
    </>
  );
}