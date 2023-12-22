import React from "react";
import hero2 from "../../assets/images/hero2.svg";
import circleBg from "../../assets/images/circleBg.svg";
import card from "../../assets/images/card.svg";
import gameplay from "../../assets/images/gameplay.svg";
import styles from "./intense.module.css"

export const Intense = () => {

  return (
    <section className="flex justify-center px-16 mb-28">

      <div className="flex flex-col justify-between gap-72">

        <div className={styles.animated_content}>
          <img className=" drop-shadow-md h-96" src={card} />
          <div className="py-5 absolute top-2 flex flex-col justify-center items-center gap-4">
            <img src={gameplay} />
            <p className="text-xl text-center w-4/5">
            Intense Survival Gameplay
            </p>
            <p className="text-md font-inconsolata w-4/5 leading-relaxed">
            Test your skills and instincts as you navigate through hostile environments, scavenge for resources, and make crucial choices to survive in a world on the brink of collapse.
            </p>
          </div>
        </div>

        <div className={styles.animated_content}>
          <img className=" drop-shadow-md h-96" src={card} />
          <div className="py-5 absolute top-2 flex flex-col justify-center items-center gap-4">
            <img src={gameplay} />
            <p className="text-xl text-center w-4/5">
            Cooperative Multiplayer
            </p>
            <p className="text-md font-inconsolata w-4/5 leading-relaxed">
            Join forces with friends or other players in cooperative multiplayer mode. Tackle challenging missions together, coordinate strategies, and combine your unique abilities.
            </p>
          </div>
        </div>        

      </div>

      <div className=" relative">
        <img src={hero2} />
        <img className=" absolute top-56 -z-10" src={circleBg} />
      </div>

      <div className="flex flex-col justify-center">

      <div className={styles.animated_content}>
          <img className=" drop-shadow-md h-96" src={card} />
          <div className="py-5 absolute  top-2 flex flex-col justify-center items-center gap-4">
            <img src={gameplay} />
            <p className="text-xl text-center w-4/5">
            Tactical Combat and Customization
            </p>
            <p className="text-md font-inconsolata w-4/5 leading-relaxed">
            Engage in adrenaline-pumping combat encounters, utilizing a range of futuristic weapons, gadgets, and abilities. Customize your play style, strategize your approach.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
