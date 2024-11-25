import React from 'react'
// import { Button } from "@material-tailwind/react";
import Header from '../Header';
import { gsap } from "gsap";

function EducationalResources() {

  const animateBox = () => {
    gsap.to(".box", { x: 100, duration: 1 });
  };

  return (
    <div className="flex w-max gap-4">
        {/* <Header /> */}
      {/* <Button color="green">color green</Button> */}
      




  <div>
    <div className="box" style={{ width: 50, height: 50, background: "blue" }} />
    <button onClick={animateBox}>Animate</button>
  </div>


      
    </div>
  )
}

export default EducationalResources
