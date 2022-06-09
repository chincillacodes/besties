import drink from "./drink.png";
import cinnamon from "./cinnamon.jpeg";
import lavender from "./lavender.jpeg";
import place from "./place.jpeg";
import golang from "./golang.png";

function  Reasons() {
  return (
    <div className="reasons">
      <h1>My boyfriend if he was...</h1>

      <div id="disclaimer">
        <p>note: I saw this as a trend on tiktok</p>
      </div>

      <div className ="card">
        <h1>A drink</h1>

        <img src={drink}></img>

        <p>for obvious reasons...but
          this drink is perfectly creamy,
          not too sweet, and slightly bitter,
          which is absolutely optimal just like you
        </p>
      </div>


      <div className ="card">
        <h1>A food</h1>

        <img src={cinnamon}></img>

        <p>
          I'm not a massive fan of cinnamon but
          when it's the main character in a dish,
          it's tolerable. It's especially comforting
          in a fluffy cinnamon roll with a beautiful glaze.
          I guess the comforting feeling of a cinnamon roll
          reminds me of you.
        </p>
      </div>

      <div className ="card">
        <h1>A flower</h1>

        <img src={lavender}></img>

        <p>smells good like you and it's
          very aesthetically pleasing.
        </p>
      </div>

      <div className ="card" id="place">
        <h1>A place</h1>

        <img id="placeImg" src={place}></img>

        <p>
          I think if I were here, I wouldn't
          be able to pay attention to anything else,
          and that's how it's like when I'm with you.
        </p>
      </div>

      <div className ="card">
        <h1>A programming language</h1>

        <img src={golang}></img>

        <p>
          Number one, it's faster than
          Python and Java, being that it's a 
          compiled language. You're a fast
          dude. Performance wise, we good
          too. Most importantly, the
          mascot is cute -- just like you!
        </p>
      </div>

      <div className ="card">
        <h1>A playlist</h1>

        <p>I guess these songs just remind me of you lol</p>
        <iframe 
        src="https://open.spotify.com/embed/playlist/4gfIFDWdOaeY16AUUKFTt4?utm_source=generator&theme=0"
         width="100%" height="380" frameBorder="0" allowFullScreen=""
         allow="autoplay; clipboard-write; 
         encrypted-media; 
         fullscreen; picture-in-picture"></iframe>
      </div>
      
    </div>
  )
}

export default Reasons;