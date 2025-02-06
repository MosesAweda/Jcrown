'use client';
import Image from 'next/image';
import Slider2   from 'react-infinite-logo-slider'
import caf from '../public/caf.png';

import ogun from '../public/ogun.png';
// import epl from 'https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844179/epl_tnhr56.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };


  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };
  return (
    <>
       <main className="overflow-x-hidden"> 
      <section className="mt-8 container mx-auto" >
        <div className="sm:grid grid-cols-2 gap-4 mx-4 mt-8 ">
    <div className="text-2xl font-medium p-4 flex items-center justify-center relative">
      {/* Diamond shape using Tailwind classes */}
      <div className="absolute -z-10 h-3/4 w-3/4 bg-yellow-200  p-5 rounded-[20%]   left-[-280px] opacity-20 transform rotate-45"></div>
      <div> 
      <div className="text-4xl  sm:text-7xl font-extrabold font-['Champ']">
  Revive the <span className="text-green-800">athlete</span> in you.
</div>
      <p className='mt-5 text-md'>   We believe in the transformative power of sport
        and are driven to help athletes and organizations achieve their dreams, leaving a lasting legacy in
        the world of sport and beyond.
        </p>
      </div>
    </div>
    <div className="bg-transparent p-20 relative"> 
  <div className="absolute -z-10 h-3/4 w-3/4 bg-green-500 rounded-[20%]   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 rotate-45"></div>
  <img src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844181/Frame10_mrmwnk.png" className="rounded-3xl relative z-10" /> 
 
 
</div>
        </div>

     <div className=" mt-5">
        <div className="p-6">
            <div className="text-4xl sm:text-7xl font-extrabold font-['Champ'] my-2 text-center ">
                Our Philosophy
            </div>
           <p className='text-center my-3 text-md'> At Jcrown Sport, we believe that success in sports management is built on a foundation of integrity,
passion, and strategic innovation. Our core philosophy is centered around providing unparalleled
service to athletes, teams, and organizations by fostering growth,
performance excellence, and long-term success.
            </p>
            </div>
     </div>

     <div className=" mt-5  lg:grid grid-cols-5  p-3 sm:p-10 ">
      

          <div className="col-span-3 font-medium p-4  ">
            <div className=" p-8 bg-green-800 shadow-lg shadow-gray-900  h-full flex items-center justify-center text-white rounded-2xl">
              <div>
            <div className="text-3xl  my-3   sm:text-4xl font-bold">
                Athlethe-Centric Approach
            </div>
            <div className="">
            We are committed to putting athletes at the heart of
          everything we do. Understanding their unique needs and
          aspirations, we strive to create personalized pathways
          that support both their athletic and personal
          development. We aim to empower athletes with the
          resources, guidance, and opportunities needed to
          succeed on and off the field.
            </div>
            </div>
            </div>
            </div>

            <div className="col-span-2 p-2 "> 
            {/* <img src="/frame11.png"  className="mt-2"   /> */}
            <img  className='rounded-3xl relative z-10 mt-2' alt="frame10" 
            src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844182/frame13_e09asb.png"  
   
    />
          </div>
    
      </div>
</section>

<section className="mt-8 w-full bg-black p-10 text-white"> 
<Slider {...settings1} className="h-full">
      {/* Wrap all slides in a container with fixed height */}
      <div className=" h-[800px] sm:h-[400px] bg-black text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col-reverse md:flex-row md:gap-8 items-center h-full">
            <div className="w-full md:w-4/6 mt-8 md:mt-0 flex flex-col justify-center py-8 md:py-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 px-12">
                Ethical Leadership and Integrity
              </h1>
              <p className="leading-relaxed px-12 pb-8">
                Our guiding principles are rooted in honesty, transparency, and
                accountability. At Jcrown, we believe that ethical leadership is
                essential in building trust and fostering lasting relationships with
                athletes, stakeholders, and partners. We hold ourselves to the highest
                standards of integrity in all our dealings.
              </p>
            </div>
            <div className="w-full md:w-2/6 flex justify-center items-center py-8">
              <img
             src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851523/shield_mh0hix.svg'
                alt="Shield representing integrity"
                className="w-full max-w-24 md:max-w-3/4 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[800px]   sm:h-[400px] bg-black text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col-reverse md:flex-row md:gap-8 items-center h-full">
            <div className="w-full md:w-4/6 mt-8 md:mt-0 flex flex-col justify-center py-8 md:py-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 px-12">
                Innovation and Adaptability
              </h1>
              <p className="leading-relaxed px-12 pb-8">
                The sports industry is dynamic and ever-evolving.
                We pride ourselves on our ability to adapt to changing trends, leverage new technologies, and innovate in 
                the ways we manage talent and operations. Whether it's marketing strategies, training methods, 
                or athlete branding, we remain at the forefront of the industry to create cutting-edge solutions.
              </p>
            </div>
            <div className="w-full md:w-2/6 flex justify-center items-center py-8">
              <img
                src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851522/rocket_ktdb2z.svg'
                alt="Rocket representing innovation"
                className="w-full max-w-24 md:max-w-3/4 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[800px] sm:h-[400px] bg-black text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col-reverse md:flex-row md:gap-8 items-center h-full">
            <div className="w-full md:w-4/6 mt-8 md:mt-0 flex flex-col justify-center py-8 md:py-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 px-12">
                Building Long-Term Relationships
              </h1>
              <p className="leading-relaxed px-12 pb-8">
                We focus on nurturing meaningful, long-lasting relationships with our clients, sponsors, and partners. 
                Our success is measured by the success we bring to those we serve, 
                and we are dedicated to creating mutually beneficial partnerships that stand the test of time.
              </p>
            </div>
            <div className="w-full md:w-2/6 flex justify-center items-center py-8">
              <img
                src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851519/heart_zy96nk.svg'
                alt="Heart representing relationships"
                className="w-full max-w-24 md:max-w-3/4 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[800px] sm:h-[400px] bg-black text-white">
        <div className="container mx-auto px-4 h-full">
          <div className="flex flex-col-reverse md:flex-row md:gap-8 items-center h-full">
            <div className="w-full md:w-4/6 mt-8 md:mt-0 flex flex-col justify-center py-8 md:py-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 px-12">
                Excellence Through Collaboration
              </h1>
              <p className="leading-relaxed px-12 pb-8">
                Jcrown Sport Management thrives on collaboration both internally and externally. By bringing together experts, 
                athletes, coaches, and industry leaders, we create a team-driven approach that 
                fosters excellence and achieves outstanding results for every individual and organization we work with.
              </p>
            </div>
            <div className="w-full md:w-2/6 flex justify-center items-center py-8">
              <img
                src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1738851520/peopleGroup_th1nwt.svg'
                alt="People group representing collaboration"
                className="w-full max-w-24 md:max-w-3/4 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      </Slider>
  </section>

  <section className="mt-8 w-full px-4"> 

  <div className="bg-green-800 text-white p-6  rounded-t-[600px]">

<div className='sm:mt-20  mt-10 p-10 '>  
<h1 className="text-4xl sm:text-6xl p-4 text-4xl font-['Champ'] text-center font-bold"> Mission</h1>
<p className='text-center md:px-24 px-5 ' > At Jcrown Sport , we believe that success in sports management is built on a foundation of integrity,
passion, and strategic innovation. Our core philosophy is centered around providing unparalleled
service to athletes, teams, and organizations by fostering growth,
performance excellence, and long-term success.</p>
</div>
 

<div className='mt-5 sm:grid grid-cols-3 gap-4 p-10'>
  <div className='col-span-1 p-3'>
    <img  src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844180/frame15_gtydg3.png" />
  </div>

  <div className='p-3  col-span-2 flex items-center justify-center'>
    <div className=''>    
      <p>
    We strive to create lasting relationships built on trust, integrity, and collaboration, ensuring that every client’s
     goals are met with passion and professionalism. Through our commitment to 
    excellence, we aim to contribute to the growth of the sports industry while making a positive impact in the 
    communities we serve.
    </p>
    <p className='mt-5'>
    At Jcrown, we believe in the transformative power of sport and are driven to help athletes and organizations achieve
     their dreams, 
    leaving a lasting legacy in the world of sport and beyond.
    </p>
    </div>
    </div>

  </div>
 </div>
 <div className='bg-green-50  text-black  rounded-b-[400px]'>
  <div className='sm:p-32 p-16'>
  <h1 className='text-3xl font-bold text-center p-3'>
Our Vision
  </h1>
  <div className='text-md   text-center sm:px-16'> 
  <p className=''> 
Our vision at Jcrown Sport Intl Ltd is to be a leading example in athlete management and development.
 We envision a world where  our client have access to a world-class management service and  are connected, inspired,
  and engaged with a community
who care and  puts their interest (clients) first.
</p>
<p>
By harnessing the power of innovation, technology, and collaboration, we seek to create memorable experiences that transcend the 
boundaries of traditional sports management and marketing.
We also aspire to be the go-to partner for sports organizations looking to amplify their brand presence and reach new heights of 
success in the ever-evolving sports industry.
</p>
</div>
</div>

 </div>




    </section>
 


 <section className='mt-8 w-full mb-3 hidden sm:block '> 

  <h1 className="text-4xl sm:text-6xl font-bold text-center py-16  font-['Champ']"> Our Sponsors</h1>
  <Slider2
 width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
        >
            <Slider2.Slide>
              <img className='w-36' alt="epl" src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844179/epl_tnhr56.png"  width={100}   height={100}     />
       
            </Slider2.Slide>
            <Slider2.Slide>
            <img className='w-36' alt="fifa"src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844179/fifa_gopwkw.png"  width={100}   height={100}       />
            </Slider2.Slide>
            <Slider2.Slide>
            <img className='w-36' alt="caf" src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844179/caf_noguqi.png"   width={100} height={100}   />
            </Slider2.Slide>
            <Slider2.Slide>
            <img className='w-36' alt="ogun" src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844181/ogun_ohodny.png"   width={100} height={100}      />
            </Slider2.Slide>
        </Slider2>
 </section>

 <section className='mt-8 w-full mb-3 sm:hidden'>
  <div>
  <h1 className="text-4xl sm:text-6xl font-bold text-center py-16  font-['Champ']"> Our Sponsors</h1>
  </div>
  <div className='p-3 my-4 flex items-center justify-center'>
    <Image className='w-1/2' alt="sponsors" src='https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844179/epl_tnhr56.png'  height={100} width={100}   quality={100}   />
  </div>
  <div className='p-3 my-4 flex items-center justify-center'>
    <Image className='w-1/2' alt="sponsors" src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844179/fifa_gopwkw.png"   height={100} width={100}   quality={100}   />
  </div>
  <div className='p-3 my-4 flex items-center justify-center'>
    <Image className='w-1/2' alt="sponsors" src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844179/caf_noguqi.png"   width={100} height={100} quality={100}   />
  </div>
  <div className='p-3 my-4 flex items-center justify-center'>
    <Image className='w-1/2' alt="sponsors" src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844181/ogun_ohodny.png" width={100} height={100}  quality={100}   />
  </div>
 </section> 

 
    </main>

    </>
  )
}