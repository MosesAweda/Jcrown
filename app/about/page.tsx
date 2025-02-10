'use client';
import Slider from 'react-infinite-logo-slider'
import Image from "next/image"

export default function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-end w-full"> 
    <div className="bg-yellow-500 p-6 rounded-xl shadow-lg border-black  border-solid border-b-8 border-4 max-w-6xl" > 
      <h1 className="text-4xl font-bold mb-4  sm:text-5xl md:text-6xl font-['Champ']">About the Jcrown Sports</h1>
    Jcrown Sport Intl Ltd. is a dynamic sports management and marketing agency that specializes in providing tailored management and
     marketing solutions for a diverse range of sports entities, including teams, athletes, and brands. With a practical understanding of the sports landscape, we bring a fresh perspective and strategic approach to solving clients needs. 
    Our team of experienced professionals is committed to delivering results-driven campaigns  and drive engagement.
      </div>
      </div>
      
      <div className="mt-20" id='team'>
        <h1 className="text-4xl font-bold mb-4 font-['Champ'] sm:text-6xl">Team Squad</h1>
      At Jcrown Sport Intl, we are more than just a sports marketing agency - we are a partner in the success of our clients. Join us as we embark on a journey to redefine sports marketing and inspire new ways to experience the world of sports.
       At Jcrown Sport Intl Ltd, we have extensive experience in practical  management and sports marketing.
      </div>

      <div className="grid sm:grid-cols-4 gap-4 mx-auto p-2 mt-8">
    <div>
      <img src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844181/makinde_vtuqpg.png" alt="makinde" />
      <div className="font-bold text-lg  text-center mt-2 mb-0    font-['Champ']">Makinde Emmanuel</div>
      <div className="text-sm text-center "> Ogun, Nigeria</div>
    </div>
    <div>
      <img src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844181/precious_pmophz.png" alt="precious" />
      <div className="font-bold text-lg  text-center mt-2 mb-0    font-['Champ']"> Precious Godwin</div>
      <div className="text-sm text-center "> Delta, Nigeria</div>
    </div>
    <div>
      <img src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844180/ayomide_dh7uiu.png" alt="Ayomide" />
      <div className="font-bold text-lg  text-center mt-2 mb-0    font-['Champ']"> Ayomide Adebayo</div>
      <div className="text-sm text-center "> Lagos, Nigeria</div>
    </div>
    <div>
      <img src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844180/favour_ohxqm6.png' alt="makinde" />
      <div className="font-bold text-lg  text-center mt-2 mb-0    font-['Champ']"> Favour Benjamin</div>
      <div className="text-sm text-center "> Abuja, Nigeria</div>
    </div>
        </div>


        <div className="mt-40 grid sm:grid-cols-4   gap-1 mx-auto p-2">
  {/* Using a fixed width and height for smaller squares */}
 
  <div className="w-64 h-64 bg-green-800  mt-10 sm:mt-0 mx-auto  text-white rounded-xl shadow-bg border-black border-solid border-b-8 border-2 flex flex-col justify-center p-6">
    <h1 className="text-4xl sm:text-5xl font-bold text-left pb-1 font-[Verdana] font-['Champ']">12+</h1>
    <p className="text-left mt-2">Years of helping professional and collegiate athletes.</p>
  </div>

  <div className="w-64 h-64  mt-10 sm:mt-0 mx-auto  bg-yellow-600 text-black rounded-xl shadow-bg border-black border-solid border-b-8 border-2 flex flex-col justify-center p-6">
    <h1 className="text-4xl sm:text-5xl font-bold text-left font-[Verdana] font-['Champ']" >500+</h1>
    <p className="text-left mt-2">Professional and collegiate players under contract.</p>
  </div>

  <div className="w-64 h-64 mt-10 sm:mt-0 mx-auto bg-green-800 text-white rounded-xl shadow-bg border-black border-solid border-b-8 border-2 flex flex-col justify-center p-6">
    <h1 className="text-4xl sm:text-5xl font-bold text-left font-[Verdana] font-['Champ']">20+</h1>
    <p className="text-left mt-2">Countries where clients are representing national teams.</p>
      </div>
    </div>
    

     

 <section className='mt-8 w-full mb-3   ' id='talents'> 

<h1 className="text-4xl sm:text-6xl font-bold text-left py-16  font-['Champ']"> Our Talents</h1>
<Slider
  width="250px"
  duration={40}
  pauseOnHover={true}
  blurBorders={false}
  blurBorderColor={'#fff'}
   // Added spacing between slides
>
  <Slider.Slide>  
  {/* <Slider.Slide style={{padding: '0 10px', margin: '0 40px'}}> */}
    <div className="flex   items-end justify-center space-x-4 ">
      <img 
        className="-w36 h-36 object-cover "   
        alt="james" 
        src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1738849624/James_c1rvai.png'
        
      />
      <div className="flex flex-col justify-end text-xs h-36">
        <label className="font-bold  text-sm font-['Champ']">James Wilson</label>
        <label className='font-medium text-xs'>GIRONA FC</label>
        <label className='text-xs'>Midfielder</label>
      </div>
    </div>
  </Slider.Slide>

  <Slider.Slide>
    <div className="flex    items-end justify-center space-x-4 ">
      <img 
        className="w-36  h-36 object-cover " 
        alt="faith" 
         src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844180/faith_r4axq2.png'
        
      />
      <div className="flex flex-col justify-end text-xs h-36">
        <label className="font-semibold text-sm font-['Champ']">Faith Adeleye</label>
        <label>Nigeria</label>
        <label>100m Athlete</label>
      </div>
    </div>
  </Slider.Slide>


  <Slider.Slide>
    <div className="flex    items-end justify-center space-x-5">
      <img 
        className="w-36 h-36 object-cover rounded-xl"   
        alt="faith" 
         src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1739186797/muyiwa_mtm18s.png'
        
      />
      <div className="flex flex-col justify-end text-xs h-36">
        <label className="font-semibold text-sm font-['Champ']"> Muyiwa David</label>
        <label>Anambra FC</label>
        <label> Midfielder</label>
      </div>
    </div>
  </Slider.Slide>

  <Slider.Slide>
    <div className="flex    items-end justify-center space-x-5 ">
      <img 
        className="w-36 h-36 object-cover rounded-xl"   
        alt="faith" 
         src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1739186797/tunde_dajnve.png'
        
      />
      <div className="flex flex-col justify-end text-xs h-36">
        <label className="font-semibold text-sm font-['Champ']"> Tunde Lawal</label>
        <label>Arsenal FC</label>
        <label> Winger</label>
      </div>
    </div>
  </Slider.Slide>
</Slider>
</section>  


     
    </main>
  )
}