import envelope from './envelope.png';
import { Link } from 'react-router-dom';


function  LoveLetter() {
  return (
    <div>
      <h1>Click to open the letter!</h1>

      <div className="letter">
      <img id="envelopeImg"
      src={envelope} onClick={openEnvelope}></img>
      </div>

      <div id="myMessage" className="hidden">
        <p>
          Dear Adrian,

          <br></br><br></br>

          I know you probably think I'm a cornball for this
          entire thing, but honestly, life is actually pretty short,
          so I might as well be the hopeless romantic I am. In other
          words, I'm really just what people would call a "simp."

          <br></br><br></br>

          I felt the need to write this, because well, I love love
          reflecting on things every time some period of time has
          passed. End of month reflection, annual reflection? Yes 
          please! In actuality though, I just think it's important
          you know how much I truly appreciate you and how much 
          I value the time we've spent together thus far.

          <br></br><br></br>

          I remember telling you that when I'm with you, I feel
          very grounded in the present. I truly meant that, because
          nobody has ever made me as happy as you do. I think what I enjoy
          about you is that I'd enjoy your company in any context, 
          even if things were purely platonic (and when it was professional),
          I still experienced so much joy just being in your presence.

          <br></br><br></br>

          To tell the honest truth, I will never not feel like I'm
          the luckier one. You put your 110% (whole badussy) into
          everything, like you don't realize it but the fact that
          you actually write me detailed paragraphs, send me 
          interesting articles, and listen to me ramble means the
          world to me. Furthermore, the fact that you've stuck around
          through the obstacles means more than anything.


          <br></br><br></br>

          I just want you to always always know that you're such
          a phenomenal human. You're the type of person I'd never
          forget, for the rest of my life. Your kindness, intelligence,
          and diligence shines through in everything you do, and to 
          tell the truth, I'm constantly in awe of how smart you are lol.
          Also, I think the reason my body temperature rises when I'm
          around you is because truthfully, you make me a bit nervous,
          you're really cute lol. 

          <br></br><br></br>

          I spent a good portion of my life struggling with what
          love really meant or what it was supposed to feel like
          in the romantic context. I knew I liked being good at things
          and solving hard problems, and that cute things like my
          cat make me feel nice, but I never understood the love
          they depicted in the movies. So, I wrote it off as something
          that must've been overly romanticized for fictional purposes
          and accepted the fact that it was unlikely I'd truly learn
          how to experience it. 

          <br></br><br></br>

          I think I know what love is now. It's being alone
          with you in the dark and laughing with pure joy. It's
          hoping that you're comfortable while you're laying in
          bed next to me. It's walking through the world around me
          and seeing so many things that remind me of you. It's 
          keeping some event or moment or article or story or fact
          in my head because you're the first and only person I'm
          excited to tell. It's the genuine and plentiful
          happiness I feel for you when you achieve something or
          when anything brings you joy. And for all of that, I'm
          grateful you've showed me that it might just be a real thing.

          <br></br><br></br>

          I try not to get too attached or think about things like
          "forever." Instead, I try to focus on the present moment
          and what I can do to make you happy. Neither of us
          really knows or will ever know what the future truly
          holds, and that uncertainty will always be there. 
          What I do know however, is that for any of the possible
          permutations of the future, I hope it involves you. 
          I hope it involves you telling me about some new thing
          you're using in one of your cool projects, us trying new
          fruits, reviewing cafes, building legos,
          and touching toes. I can't
          guarantee it, but gosh, I hope it works out.

          <br></br><br></br>
          I love you, in the hopeless romantic movie way,
          in the way I love learning hard things and making
          cool things, in the way I love my fluffy cat, in
          all the ways. I promise, from the bottom of my heart
          that I will always care for you and try my best to make
          you happy, whatever it takes.

          <br></br><br></br>
          
          <p style={{textAlign:"right"}}>Sincerely, <br></br>
            Abigail
          </p>
          
        </p>
      </div>

      <div id="contBtn" className="hidden">
        <Link to="/reasons">
        <button>continue</button>
        </Link>
        
      </div>
      
    </div>
  )
}

function openEnvelope() {
  let envelopeImg = document.getElementById("envelopeImg");

  let fadeEffect = setInterval(function() {
    if (!envelopeImg.style.opacity) {
      envelopeImg.style.opacity = 1;
    } 

    if (envelopeImg.style.opacity > 0) {
      envelopeImg.style.opacity -= 0.15;
    } else {
      clearInterval(fadeEffect);

      document.getElementById("myMessage").classList.remove("hidden");
      envelopeImg.style.width = "0px";
      envelopeImg.style.height = "0px";

      document.getElementById("contBtn").classList.remove("hidden");
    }
  }, 200);

  
  
}

export default LoveLetter;