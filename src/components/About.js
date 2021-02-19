import React from "react";
import "../App.css";

function About() {
  return (
    <section className="section-about" id="section-about">
        <h2 className="heading-secondary u-margin-bottom-8">
            About Me
        </h2>
        <div className="about-content">
            <div className="about-content__text">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="paragraph">
                    Faucibus interdum posuere lorem ipsum dolor sit. Sagittis eu volutpat odio facilisis mauris sit amet massa. Quam vulputate dignissim suspendisse in. Faucibus pulvinar elementum integer enim neque volutpat. Egestas sed sed risus pretium quam vulputate dignissim. Et tortor at risus viverra adipiscing. Pulvinar mattis nunc sed blandit libero.
                </p>
            </div>
            <div className="about-content__images">
                This is for the images.
            </div>
        </div>
    </section>
  );
}

export default About;