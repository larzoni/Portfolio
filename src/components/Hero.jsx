import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[150px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#731663]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">
              Helena
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Six Feet tall and Creative. <br />
            <span className="text-pink-200 font-extrabold">
              I am currently looking for my intern
            </span>
            <span className="text-pink-800 font-extrabold uppercase">ship</span>{" "}
            <br className="sm:block hidden" />
            Have you seen it?
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
