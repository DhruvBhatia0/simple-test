"use client";

export default function AboutPage() {
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

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .team-member {
          background-color: #E8D4C8;
          padding: 15px;
          border-radius: 5px;
          text-align: center;
        }

        .team-member h3 {
          color: #800000;
          margin-bottom: 5px;
        }

        .team-member p {
          font-size: 12px;
          margin-bottom: 0;
        }

        .stats {
          display: flex;
          justify-content: space-around;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
          padding: 15px;
        }

        .stat-number {
          font-size: 28px;
          font-weight: bold;
          color: #800000;
          display: block;
        }

        .stat-label {
          font-size: 12px;
          color: #800000;
        }

        .timeline {
          margin: 30px 0;
        }

        .timeline-item {
          border-left: 3px solid #D9BFB7;
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .timeline-year {
          font-weight: bold;
          color: #800000;
          font-size: 16px;
        }

        .timeline-content {
          margin-top: 5px;
        }
      `}</style>

      <div className="container">
        <h1>About Us</h1>
        
        <p>
          Welcome to Simple Test! We are a completely fictional company that exists only in this codebase. 
          Our mission is to demonstrate the power of Next.js while providing you with absolutely no real value 
          whatsoever. Isn't that amazing?
        </p>

        <h2>Our Story</h2>
        <p>
          Founded in 2023 by a group of developers who were bored on a Tuesday afternoon, Simple Test has grown 
          from a simple idea into a slightly more complex idea. We started with just one line of code and have 
          since expanded to hundreds of lines of code, most of which are probably unnecessary.
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-year">2023</div>
            <div className="timeline-content">
              The company was "founded" in a coffee shop between commits. Our first product was a blank HTML page.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2024</div>
            <div className="timeline-content">
              We added CSS! The page was now beige instead of white. This was considered a major breakthrough.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2025</div>
            <div className="timeline-content">
              Migrated to Next.js because someone said it was "the future." We're still waiting for that future to arrive.
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2026</div>
            <div className="timeline-content">
              Added a navigation bar with four pages. This is our biggest achievement to date.
            </div>
          </div>
        </div>

        <h2>Our Amazing Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>John Developer</h3>
            <p>CEO & Chief Code Writer</p>
            <p>Loves semicolons and hates tabs</p>
          </div>
          <div className="team-member">
            <h3>Jane Designer</h3>
            <p>Creative Director</p>
            <p>Makes everything beige on purpose</p>
          </div>
          <div className="team-member">
            <h3>Bob Manager</h3>
            <p>Project Manager</p>
            <p>Schedules meetings that could have been emails</p>
          </div>
          <div className="team-member">
            <h3>Alice Intern</h3>
            <p>Coffee Specialist</p>
            <p>Actually does all the work</p>
          </div>
        </div>

        <h2>By The Numbers</h2>
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Pages on this website</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Cups of coffee consumed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">42</span>
            <span className="stat-label">Bugs fixed (and created)</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Working navigation bar</span>
          </div>
        </div>

        <h2>Our Values</h2>
        <p>
          We believe in the power of meaningless corporate jargon, the importance of team-building exercises 
          that everyone hates, and the sacred duty of sending all-company emails about the coffee machine being broken. 
          Our core values include synergy, innovation, disruption, and other buzzwords we found in a business book.
        </p>

        <p>
          Thank you for visiting our About Us page! We hope you've learned absolutely nothing useful about us, 
          because that's exactly what we were going for. Now please go look at our other pages, which are equally 
          pointless but slightly different.
        </p>
      </div>
    </>
  );
}