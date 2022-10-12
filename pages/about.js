import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";

export default function About() {
  return (
    <div>
      <h1>What is Match Meetup?</h1>
      <p>
        Match Meetup is an app to find local football players that you can
        organise games with around your local area.
      </p>
      <h3 style={{ paddingTop: "1rem", margin: "auto 0" }}>
        <span style={{ colour: "red", fontweight: "bold" }}>
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={[
              "Anyone fancy a game this afternoon?",
              "Yeah!",
              "What time?",
            ]}
          />
        </span>
      </h3>
    </div>
  );
}
