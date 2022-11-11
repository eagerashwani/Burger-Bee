import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpg";

const Founder = () => {
    const options = {
        initial : {
            x: "-100%",
            opacity: 0
        },
        whileInView : {
            x: 0,
            opacity: 1
        }
    }
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h1>Ashwani Kumar</h1>
        <p>
          Hey Everyone, I am Ashwani Kumar, Founder of MBA Burger Wala. <br />
          Our Aim is to make the best tasty burger in the world.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
