"use client";

export default function LearnPage() {
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
          max-width: 900px;
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

        h3 {
          font-size: 16px;
          color: #800000;
          font-weight: bold;
          margin: 15px 0 8px 0;
        }

        p {
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .tutorial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }

        .tutorial-card {
          background-color: #E8D4C8;
          padding: 15px;
          border-radius: 5px;
          border: 1px solid #D9BFB7;
        }

        .tutorial-card h3 {
          color: #800000;
          margin-bottom: 10px;
        }

        .difficulty {
          display: inline-block;
          padding: 3px 8px;
          border-radius: 3px;
          font-size: 11px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .difficulty.easy {
          background-color: #90EE90;
          color: #006400;
        }

        .difficulty.medium {
          background-color: #FFD700;
          color: #8B7500;
        }

        .difficulty.hard {
          background-color: #FFB6C1;
          color: #8B0000;
        }

        .code-block {
          background-color: #2D2D2D;
          color: #F8F8F2;
          padding: 15px;
          border-radius: 5px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          margin: 15px 0;
          overflow-x: auto;
        }

        .feature-list {
          list-style: none;
          margin: 15px 0;
        }

        .feature-list li {
          padding: 8px 0;
          border-bottom: 1px solid #D9BFB7;
        }

        .feature-list li:before {
          content: "▶ ";
          color: #800000;
          font-weight: bold;
        }

        .progress-bar {
          background-color: #D9BFB7;
          height: 20px;
          border-radius: 10px;
          margin: 10px 0;
          overflow: hidden;
        }

        .progress-fill {
          background-color: #800000;
          height: 100%;
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .quiz-section {
          background-color: #E8D4C8;
          padding: 20px;
          border-radius: 5px;
          margin: 20px 0;
        }

        .quiz-question {
          font-weight: bold;
          margin-bottom: 10px;
        }

        .quiz-options {
          margin-left: 20px;
        }

        .quiz-options label {
          display: block;
          margin: 5px 0;
          cursor: pointer;
        }

        .quiz-options input[type="radio"] {
          margin-right: 8px;
        }

        .resource-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 15px 0;
        }

        .resource-link {
          background-color: #800000;
          color: #FFFFEE;
          padding: 8px 15px;
          border-radius: 3px;
          text-decoration: none;
          font-size: 12px;
          transition: background-color 0.2s;
        }

        .resource-link:hover {
          background-color: #A52A2A;
          text-decoration: none;
          color: #FFFFEE;
        }
      `}</style>

      <div className="container">
        <h1>Learn More</h1>
        
        <p>
          Welcome to our comprehensive learning center! Here you'll find absolutely nothing of value, 
          but it looks impressive. We've compiled the most useless tutorials and guides that the internet 
          has never asked for. Prepare to learn things you'll never use!
        </p>

        <h2>Featured Tutorials</h2>
        <div className="tutorial-grid">
          <div className="tutorial-card">
            <span className="difficulty easy">Easy</span>
            <h3>How to Breathe</h3>
            <p>A step-by-step guide to inhaling and exhaling. Perfect for beginners who have been doing it wrong their entire lives.</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
            <p style={{fontSize: '11px', marginTop: '5px'}}>75% of students mastered this life skill</p>
          </div>
          
          <div className="tutorial-card">
            <span className="difficulty medium">Medium</span>
            <h3>Advanced Staring</h3>
            <p>Learn the art of staring at walls without blinking. Includes techniques for maintaining eye contact with paint.</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '42%'}}></div>
            </div>
            <p style={{fontSize: '11px', marginTop: '5px'}}>42% dropped out due to excessive blinking</p>
          </div>
          
          <div className="tutorial-card">
            <span className="difficulty hard">Hard</span>
            <h3>Quantum Napping</h3>
            <p>Master the physics of sleeping in multiple positions simultaneously. Requires basic understanding of being tired.</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '8%'}}></div>
            </div>
            <p style={{fontSize: '11px', marginTop: '5px'}}>8% achieved quantum sleep state</p>
          </div>
          
          <div className="tutorial-card">
            <span className="difficulty easy">Easy</span>
            <h3>Clicking Buttons 101</h3>
            <p>A comprehensive guide to clicking buttons with confidence. Covers left-click, right-click, and the mysterious middle-click.</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '93%'}}></div>
            </div>
            <p style={{fontSize: '11px', marginTop: '5px'}}>93% successfully clicked something</p>
          </div>
        </div>

        <h2>Code Examples That Don't Work</h2>
        <p>Here are some code snippets that look professional but actually do nothing:</p>
        
        <div className="code-block">
{`// This function calculates the meaning of life
function calculateMeaningOfLife() {
  const answer = 42;
  const question = "What is 6 times 7?";
  return { answer, question, meaning: "undefined" };
}

// Async function that waits forever
async function waitForIt() {
  while (true) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Still waiting...");
  }
}

// CSS for making things more beige
.beige-ify {
  background-color: #F0E0D6 !important;
  color: #800000 !important;
  border: 1px solid #D9BFB7 !important;
}`}
        </div>

        <h2>Useless Skills You Can Learn</h2>
        <ul className="feature-list">
          <li>Typing with your eyes closed (and seeing if anyone notices)</li>
          <li>Remembering exactly what you ate for breakfast three years ago</li>
          <li>Folding a fitted sheet perfectly (then never using it again)</li>
          <li>Speaking fluent gibberish to confuse your coworkers</li>
          <li>Balancing a spoon on your nose during important meetings</li>
          <li>Writing documentation that nobody will ever read</li>
          <li>Creating PowerPoint presentations about the importance of brevity</li>
          <li>Learning to say "hello" in 50 languages you'll never visit</li>
        </ul>

        <h2>Test Your Knowledge</h2>
        <div className="quiz-section">
          <div className="quiz-question">1. What is the primary purpose of this website?</div>
          <div className="quiz-options">
            <label><input type="radio" name="q1" /> To provide valuable educational content</label>
            <label><input type="radio" name="q1" /> To demonstrate navigation bars</label>
            <label><input type="radio" name="q1" /> To waste your time with meaningless content</label>
            <label><input type="radio" name="q1" /> All of the above</label>
          </div>
          
          <div className="quiz-question" style={{marginTop: '15px'}}>2. How many pages does this website have?</div>
          <div className="quiz-options">
            <label><input type="radio" name="q2" /> 3 pages</label>
            <label><input type="radio" name="q2" /> 4 pages</label>
            <label><input type="radio" name="q2" /> Too many pages</label>
            <label><input type="radio" name="q2" /> Not enough pages</label>
          </div>
        </div>

        <h2>Additional Resources</h2>
        <p>Expand your knowledge with these completely fabricated resources:</p>
        <div className="resource-links">
          <a href="#" className="resource-link">Fake Documentation</a>
          <a href="#" className="resource-link">Nonexistent API</a>
          <a href="#" className="resource-link">Broken Tutorial</a>
          <a href="#" className="resource-link">404 Error Guide</a>
          <a href="#" className="resource-link">Empty Database</a>
          <a href="#" className="resource-link">Null Reference</a>
        </div>

        <h2>Learning Path Recommendations</h2>
        <p>Based on your interest in clicking on things, we recommend:</p>
        <ol style={{marginLeft: '20px', lineHeight: '1.8'}}>
          <li>Start with "How to Use a Mouse" (prerequisite for all advanced courses)</li>
          <li>Progress to "Intermediate Clicking" (covers double-clicks and right-clicks)</li>
          <li>Master "Advanced Navigation" (learn how to use the back button)</li>
          <li>Graduate to "Expert Level Browsing" (includes opening multiple tabs)</li>
          <li>Finally achieve "Enlightenment" (realize you could have been doing something useful this whole time)</li>
        </ol>

        <p>
          Congratulations! You've reached the end of our Learn More page. You now know exactly as much 
          as you did before, but with more confidence. Remember: the key to learning is realizing that 
          most of what you learn will be forgotten, but the experience of forgetting is what makes us human.
        </p>
      </div>
    </>
  );
}