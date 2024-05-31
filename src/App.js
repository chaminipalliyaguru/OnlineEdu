// import './App.css';
import { useState } from 'react';
import Header from './components/Header';


function App() {
  
  const imageURL = "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNDctc2FzaS0wM18yLmpwZw.jpg";
  const bannerURL = "https://static.vecteezy.com/system/resources/thumbnails/002/294/868/small/digital-learning-web-banner-design-students-study-with-mobile-phone-during-online-class-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg"
  return (
    <div className="App">
        <div className="flex justify-center items-center h-screen">
          <div
            className="bg-cover bg-center h-100 w-100"
            style={{
              backgroundImage: `url(${imageURL})`,
            }}
          >
            <Header />

            

            <div className="mb-4">
      <img
          src="https://static.vecteezy.com/system/resources/thumbnails/002/294/868/small/digital-learning-web-banner-design-students-study-with-mobile-phone-during-online-class-online-education-digital-classroom-e-learning-concept-header-or-footer-banner-free-vector.jpg" 
          className="h-72 w-full p-4 rounded-lg"
          alt="" />
  {/* </div>
  <div className="mb-4"> */}
      {/* <img
          src="https://mdbootstrap.com//img/Photos/Square/1.jpg"
          className="h-auto max-w-64 rounded-full"
          alt="" /> */}
  {/* </div>
  <div className="mb-4"> */}
      {/* <img
          src="https://tecdn.b-cdn.net/img/new/standard/city/044.jpg"
          className="h-auto max-w-64 rounded-full"
          alt="" /> */}
  </div>
          
            {/* <div class="flex justify-evenly ..."> */}
  {/* <div> <img
      className="h-40 w-45 rounded-lg object-cover object-center"
      src="https://learn.lankaacademy.lk/pluginfile.php/1/blog/attachment/11/long-shot-child-attending-virtual-school-courses.jpg"
      alt="nature image"
    /></div>

  <div><img
      className="object-none object-left h-40 w-45 rounded-lg object-cover object-center"
      src="https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_67b8fa708c.jpg"
      alt="nature image"
    /></div>

  <div>03</div>
</div> */}


<div className="p-4">
      <h1 className="text-xl font-bold text-blue-500">Hello, Educator!</h1>
      <p className="text-base text-gray-700">An educational experience that has no physical boundary, allows for students to take part in classes and interact with peers from any location. Online education has become a viable and exciting method for instructional delivery in the global business society that runs on a 24/7 schedule (24 hours a day/7 days a week) because it provides students with great flexibility. With the increased availability of the Internet and computer technology, students are able to access information anytime and anyplace that would normally be available only through a traditional classroom. Studies have shown that students learn just as effectively in an online classroom as they do in the traditional classroom.
      FUTURE OF ONLINE EDUCATION Online teaching is here to stay. Many students prefer the online classroom since it offers flexibility in their busy schedules. With the proliferation of information and knowledge, students must become lifelong learners in today's world, and online education plays an important role in helping individuals access the learner-centered and self-directed instruction.
      With enhanced software, hardware, and Internet access, more options for online education will become available. With student enrollments increasing faster than classrooms can be built, students becoming more proficient with technology, and students pursuing an education that meets their needs, the future of online education will continue to grow. Online degree programs will become more widely accepted as they become a more common practice.</p>
    </div>
    
          </div>
        </div>
    </div>
  );
}

export default App;
