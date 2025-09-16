import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              We believe food should be an adventure—a delicious one. Every dish we create is a blend of fresh, vibrant ingredients designed to awaken your senses. We're passionate about crafting meals that aren't just good for you, but that you'll genuinely crave.
              Our philosophy is simple: great food starts with great ingredients. We partner with local farms and suppliers who share our commitment to quality, ensuring that every vegetable, grain, and protein is at its absolute best.
              This isn't just about a meal; it's about a promise. A promise to deliver honest, nourishing, and incredibly flavorful food that makes you feel good from the inside out.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
