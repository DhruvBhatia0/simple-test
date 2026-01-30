"use client";

export default function Home() {
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

        a {
          color: #0000EE;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .header {
          background-color: #F0E0D6;
          border-bottom: 1px solid #D9BFB7;
          padding: 5px;
          text-align: center;
        }

        .board-list {
          font-size: 11px;
          margin-bottom: 5px;
        }

        .board-list a {
          color: #800000;
          margin: 0 3px;
        }

        h1 {
          font-size: 20px;
          color: #800000;
          font-weight: bold;
        }

        .subtitle {
          font-size: 10px;
          color: #800000;
        }

        .post-form-container {
          text-align: center;
          margin: 10px auto;
          padding: 10px;
        }

        .post-form {
          display: inline-block;
          background-color: #F0E0D6;
          border: 1px solid #D9BFB7;
          padding: 10px;
        }

        .post-form table {
          border-collapse: collapse;
        }

        .post-form td {
          padding: 2px;
        }

        .post-form label {
          font-size: 11px;
          color: #800000;
        }

        .post-form input[type="text"],
        .post-form textarea {
          width: 300px;
          border: 1px solid #AAA;
          font-family: arial, helvetica, sans-serif;
          font-size: 12px;
        }

        .post-form textarea {
          height: 120px;
          resize: vertical;
        }

        .post-form input[type="submit"] {
          background-color: #F0E0D6;
          border: 1px solid #AAA;
          padding: 2px 10px;
          cursor: pointer;
          font-size: 11px;
        }

        .thread {
          margin: 10px 15px;
          padding: 5px;
          border-bottom: 1px solid #F0E0D6;
        }

        .op-post {
          margin-bottom: 10px;
        }

        .post {
          display: block;
          margin: 2px 0;
          overflow: hidden;
        }

        .file-info {
          font-size: 11px;
          color: #707070;
          margin-bottom: 3px;
        }

        .file-name {
          color: #0000EE;
        }

        .post-info {
          margin: 3px 0;
        }

        .post-number {
          color: #800000;
          font-weight: bold;
        }

        .subject {
          color: #0F0C5D;
          font-weight: bold;
        }

        .name {
          color: #117743;
          font-weight: bold;
        }

        .tripcode {
          color: #228854;
        }

        .date {
          color: #800000;
        }

        .post-image {
          float: left;
          margin: 5px 15px 5px 5px;
          cursor: pointer;
        }

        .post-image img {
          max-width: 250px;
          max-height: 250px;
        }

        .post-message {
          margin: 10px 5px;
          line-height: 1.4;
          word-wrap: break-word;
        }

        .quote {
          color: #789922;
        }

        .reply {
          background-color: #F0E0D6;
          border: 1px solid #D9BFB7;
          padding: 5px;
          margin: 5px 0 5px 20px;
          display: inline-block;
          min-width: 400px;
        }

        .reply-links {
          margin: 10px 0;
          font-size: 11px;
        }

        .footer {
          text-align: center;
          padding: 10px;
          font-size: 10px;
          color: #800000;
        }

        .hr {
          border-top: 1px solid #D9BFB7;
          margin: 10px 0;
        }

        .omitted {
          font-style: italic;
          color: #800000;
          margin-left: 20px;
        }

        .br {
          margin: 5px 0;
        }
      `}</style>

      <div className="header">
        <div className="board-list">
          <a href="#">[a]</a>
          <a href="#">[b]</a>
          <a href="#">[c]</a>
          <a href="#">[d]</a>
          <a href="#">[e]</a>
          <a href="#">[f]</a>
          <a href="#">[g]</a>
          <a href="#">[gif]</a>
          <a href="#">[h]</a>
          <a href="#">[hr]</a>
          <a href="#">[k]</a>
          <a href="#">[m]</a>
          <a href="#">[o]</a>
          <a href="#">[p]</a>
          <a href="#">[r]</a>
          <a href="#">[s]</a>
          <a href="#">[t]</a>
          <a href="#">[u]</a>
          <a href="#">[v]</a>
          <a href="#">[vg]</a>
          <a href="#">[vr]</a>
          <a href="#">[w]</a>
          <a href="#">[wg]</a>
        </div>
        <h1>/b/ - Random</h1>
        <p className="subtitle">The stories and information posted here are artistic works of fiction and falsehood.</p>
        <p className="subtitle">Only a fool would take anything posted here as fact.</p>
      </div>

      <div className="post-form-container">
        <form className="post-form">
          <table>
            <tbody>
              <tr>
                <td><label>Name</label></td>
                <td><input type="text" placeholder="Anonymous" /></td>
              </tr>
              <tr>
                <td><label>Subject</label></td>
                <td><input type="text" /></td>
              </tr>
              <tr>
                <td><label>Comment</label></td>
                <td><textarea placeholder="Type your message here..." /></td>
              </tr>
              <tr>
                <td><label>File</label></td>
                <td><input type="file" /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" value="Post" /></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      <div className="hr" />

      <div className="thread">
        <div className="op-post">
          <div className="post-info">
            <span className="subject">Daily reminder thread</span>
            <span className="post-number">No. 12345678</span>
            <span className="date">01/19/26(Mon)12:34:56</span>
          </div>
          <div className="post-message">
            This is the daily reminder thread. Remember to stay hydrated and take breaks from your screen every now and then. Your health is more important than any internet drama.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345679</span>
            <span className="date">01/19/26(Mon)12:35:01</span>
          </div>
          <div className="post-message">
            Thanks for the reminder anon! I needed to hear that today. I have been staring at my screen for like 6 hours straight working on this project and completely forgot to eat lunch.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345680</span>
            <span className="date">01/19/26(Mon)12:36:23</span>
          </div>
          <div className="post-message">
            <span className="quote">{">"}implying anyone here takes care of their health</span>
            <div className="br" />
            Lol you are funny. Most of us survive on energy drinks and instant noodles and questinoable substances
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345681</span>
            <span className="date">01/19/26(Mon)12:37:45</span>
          </div>
          <div className="post-message">
            Speaking of which, can we talk about how amazing pizza is? It is literally the perfect food. You can have it for breakfast, lunch, and dinner. Cold pizza in the morning is chefs kiss.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345682</span>
            <span className="date">01/19/26(Mon)12:38:12</span>
          </div>
          <div className="post-message">
            <span className="quote">{">"}cold pizza</span>
            <div className="br" />
            {">"}
            <div className="br" />
            You are a monster. Pizza should always be eaten piping hot with extra cheese dripping everywhere. Cold pizza is a crime against humanity.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345683</span>
            <span className="date">01/19/26(Mon)12:39:01</span>
          </div>
          <div className="post-message">
            The amount of autism in this thread is genuinely concerning. It is PIZZA. Calm down. Eat it how you want. No one cares about your food preferences.
          </div>
        </div>
        <div className="omitted">
          14 replies omitted. Click Reply to view.
        </div>
      </div>

      <div className="hr" />

      <div className="thread">
        <div className="op-post">
          <div className="post-info">
            <span className="post-number">No. 12345700</span>
            <span className="date">01/19/26(Mon)13:01:23</span>
          </div>
          <div className="post-message">
            What is the most useless skill you have that you are surprisingly good at? I will go first. I can recite the entire script of The Matrix from memory. I do not know why I can do this. I watched it too many times as a teenager and now it is just stuck in there forever.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345701</span>
            <span className="date">01/19/26(Mon)13:02:45</span>
          </div>
          <div className="post-message">
            I can identify any song within 3 notes. It is great at parties but also terrible because I can never just enjoy music without analyzing it. Every song is just patterns and intervals to me now.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345702</span>
            <span className="date">01/19/26(Mon)13:04:12</span>
          </div>
          <div className="post-message">
            I can sleep anywhere at any time. On buses, in libraries, during conversations, you name it. I once fell asleep standing up at a concert. It is both a blessing and a curse because I cannot stay awake in important meetings to save my life.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345703</span>
            <span className="date">01/19/26(Mon)13:05:33</span>
          </div>
          <div className="post-message">
            I can remember exactly what I was doing and where I was for any random date you pick. Like if you ask me what I was doing on March 15th, 2008, I can tell you. It is weird and not useful at all but it makes me feel like a savant sometimes.
          </div>
        </div>
      </div>

      <div className="hr" />

      <div className="thread">
        <div className="op-post">
          <div className="post-info">
            <span className="subject">Unpopular opinions thread</span>
            <span className="post-number">No. 12345750</span>
            <span className="date">01/19/26(Mon)14:15:00</span>
          </div>
          <div className="post-message">
            Star Wars is overrated. The original trilogy is fine but nothing special. The prequels are worse than people remember and the sequels are garbage. There, I said it. Come at me.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345751</span>
            <span className="date">01/19/26(Mon)14:15:45</span>
          </div>
          <div className="post-message">
            <span className="quote">{">"}Star Wars is overrated</span>
            <div className="br" />
            Bold of you to post this on /b/ of all boards. You are going to get destroyed. But also, I kind of agree? The lore is more interesting than the actual movies.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345752</span>
            <span className="date">01/19/26(Mon)14:16:30</span>
          </div>
          <div className="post-message">
            The prequels are actually good when you accept them as campy sci-fi adventure movies and not serious dramatic works. The lightsaber fights in the prequels alone are better than anything in the original trilogy.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345753</span>
            <span className="date">01/19/26(Mon)14:17:15</span>
          </div>
          <div className="post-message">
            My unpopular opinion is that video games are better now than they have ever been. People who say "gamers rise up" and complain about modern games are just nostalgic for being teenagers with unlimited free time. There are more high quality games available today than ever before.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345754</span>
            <span className="date">01/19/26(Mon)14:18:00</span>
          </div>
          <div className="post-message">
            Coffee tastes like burnt dirt and people who say they love the taste are lying to themselves. You drink it because you are addicted to caffeine, not because it tastes good. Fight me.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345755</span>
            <span className="date">01/19/26(Mon)14:19:30</span>
          </div>
          <div className="post-message">
            <span className="quote">{">"}coffee tastes like burnt dirt</span>
            <div className="br" />
            This is objectively true for bad coffee but there is actually really good coffee out there that tastes amazing. You just have not had good coffee. Also agreed on the addiction part though.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345756</span>
            <span className="date">01/19/26(Mon)14:20:45</span>
          </div>
          <div className="post-message">
            I think pineapple belongs on pizza. It is delicious. The sweet and salty combination is perfect. If you do not like it that is fine but stop acting like it is a war crime. It is just fruit on cheese.
          </div>
        </div>
        <div className="omitted">
          47 replies omitted. Click Reply to view.
        </div>
      </div>

      <div className="hr" />

      <div className="thread">
        <div className="op-post">
          <div className="post-info">
            <span className="post-number">No. 12345800</span>
            <span className="date">01/19/26(Mon)15:30:00</span>
          </div>
          <div className="post-message">
            If you could have any fictional technology from any movie or TV show, what would you pick and why? For me it is definitely the holodeck from Star Trek. Can you imagine? Infinite possibilities. You could visit any world, experience anything, all from your living room.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345801</span>
            <span className="date">01/19/26(Mon)15:31:15</span>
          </div>
          <div className="post-message">
            The One Ring from Lord of the Rings. Invisible at will, extended lifespan, dominion over the orcs? Sign me up. Plus you get to hang out with Gandalf and the fellowship. Actually on second thought, the corruption aspect is a major downside. Never mind.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345802</span>
            <span className="date">01/19/26(Mon)15:32:30</span>
          </div>
          <div className="post-message">
            The Portal Gun from Portal. Instant travel anywhere you can visualize? That is essentially unlimited power. You could end world hunger by instant-transporting food anywhere. You could solve traffic forever. It is the ultimate utility item.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345803</span>
            <span className="date">01/19/26(Mon)15:33:45</span>
          </div>
          <div className="post-message">
            Time Turner from Harry Potter. Think about it. You could have 48 hours in a day. Work, sleep, do whatever you want. Double your productive hours. Sure there is the whole "cannot change major events" limitation but that is manageable.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345804</span>
            <span className="date">01/19/26(Mon)15:35:00</span>
          </div>
          <div className="post-message">
            Flying car from Back to the Future. It is not the most powerful but it is the most fun. Also you can actually buy one now apparently? Though they are not really flying cars, more like fancy drivable planes. Not the same thing.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345805</span>
            <span className="date">01/19/26(Mon)15:36:20</span>
          </div>
          <div className="post-message">
            A pocket dimension like in Doctor Strange. Imagine having infinite storage space. Never worry about where to put anything ever again. Or you could just live there. Your own private universe.
          </div>
        </div>
      </div>

      <div className="hr" />

      <div className="thread">
        <div className="op-post">
          <div className="post-info">
            <span className="subject">Rate my setup thread</span>
            <span className="post-number">No. 12345850</span>
            <span className="date">01/19/26(Mon)16:00:00</span>
          </div>
          <div className="post-message">
            Post your desk setup and I will rate it. 1-10 based on productivity, aesthetics, and comfort. No judging based on budget, just overall setup quality.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345851</span>
            <span className="date">01/19/26(Mon)16:01:30</span>
          </div>
          <div className="post-message">
            Here is my setup: 27-inch 4K monitor, mechanical keyboard with cherry mx blues, ergonomic mouse, standing desk, three plants, ambient lighting, and a mini fridge within arm reach. I would give it a solid 8.5.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345852</span>
            <span className="date">01/19/26(Mon)16:02:45</span>
          </div>
          <div className="post-message">
            {">"}standing desk
            <div className="br" />
            {">"}mini fridge
            <div className="br" />
            {">"}plants
            <div className="br" />
            Bro this is a CEO setup, not a desk setup. I have a laptop on a stack of books and I eat dinner at my desk. We are not the same.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345853</span>
            <span className="date">01/19/26(Mon)16:04:00</span>
          </div>
          <div className="post-message">
            I use a folding table from Walmart, a $20 keyboard from Amazon, and I sit on a dining room chair. My setup score? Maybe a 3. But I have written more code in this setup than most people will write in their fancy ergonomic chairs. Poverty breeds innovation.
          </div>
        </div>
        <div className="reply">
          <div className="post-info">
            <span className="name">Anonymous</span>
            <span className="post-number">No. 12345854</span>
            <span className="date">01/19/26(Mon)16:05:30</span>
          </div>
          <div className="post-message">
            The best setup is the one that lets you do what you need to do. I have seen people with $5000 setups who just browse Facebook all day, and people with a laptop and a coffee shop who produce amazing work. It is not about the gear.
          </div>
        </div>
      </div>

      <div className="footer">
        <p>All trademarks and copyrights on this page are owned by their respective parties.</p>
        <p>Comments are owned by the posters. Images uploaded are the responsibility of the Poster.</p>
      </div>
    </>
  );
}
