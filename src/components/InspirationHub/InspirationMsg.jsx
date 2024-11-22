import React, { useContext } from 'react'
import { UserApp } from './InspirationPage1'

function InspirationMsg() {
    const {username, school} = useContext(UserApp)
  return (
    <div>
      <p>Hello {username === "" ? "Buddy" : username},</p>
      <p>{username === "" ? "Student" : username}, you are doing an amazing job, and your hard work is truly paying off! At{" "}  
         {school === "" ? "school" : school}, you're not just learning lessons in textbooks—you’re building the foundation for a future filled with possibilities. 
        Every day, you are becoming a stronger, smarter, and more confident version of yourself. Remember, it's okay to face challenges—they’re the stepping stones to your growth and success. 
        Whether it’s mastering [subject] or working through a tough assignment, you are proving to yourself just how capable you are. Keep embracing your learning journey, stay curious, and never give up. 
        You are more than capable of achieving greatness, and the future is bright for you. Believe in your potential, stay focused, and always strive for your best. 
        You’ve got this!</p>
        <br/><br/>
        <p>As a strong person {" "}{username === "" ? "student" : username}, you possess the incredible ability to rise above challenges, turn obstacles into opportunities, and achieve everything 
        you set your heart and mind to. Strength is not just about being unshaken; it’s about facing difficulties head-on, learning from setbacks, and growing through every experience. You have within you the 
        courage to chase your dreams, the resilience to overcome failures, and the determination to succeed. Remember, no goal is too far, no task is too difficult, and no challenge is too great for someone as capable as you. 
        Trust in your abilities, stay persistent, and keep striving forward. With your inner strength and unwavering spirit, there’s truly nothing in this world that you cannot accomplish. Believe in yourself, because you are unstoppable!
        </p>
        <p>You can do everything very smoothly and correctly!! Try and try. One day you can win.</p>
    </div>
  )
}

export default InspirationMsg
