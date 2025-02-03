'use client';
import Image from 'next/image';
import Frame10 from '../public/Frame10.png';
import Frame11 from '../public/Frame11.png';
import frame15 from '../public/frame15.png';
export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="mt-8">
        <div className="sm:grid grid-cols-2 gap-4 mx-4 mt-8 ">
    <div className="text-2xl font-medium p-4 flex items-center justify-center relative">
      {/* Diamond shape using Tailwind classes */}
      <div className="absolute -z-10 h-3/4 w-3/4 bg-yellow-200  p-5 rounded-[20%]   left-[-280px] opacity-20 transform rotate-45"></div>
      <div> 
      <div className="text-7xl font-extrabold font-['Champ']">
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
  {/* <img src="/frame10.png" className="rounded-3xl relative z-10" /> */}
<Image  className='rounded-3xl relative z-10 ' alt="frame10" src={Frame10}   quality={100} placeholder="blur" />
 
</div>
        </div>

     <div className=" mt-5">
        <div className="p-6">
            <div className="text-4xl  text-7xl font-extrabold font-['Champ'] my-2 text-center ">
                Our Philosophy
            </div>
           <p className='text-center my-3 text-md'> At Jcrown Sport, we believe that success in sports management is built on a foundation of integrity,
passion, and strategic innovation. Our core philosophy is centered around providing unparalleled
service to athletes, teams, and organizations by fostering growth,
performance excellence, and long-term success.
            </p>
            </div>
     </div>

     <div className=" mt-5  sm:grid grid-cols-5  p-3 sm:p-10 ">
      

          <div className="col-span-3 font-medium p-4  ">
            <div className=" p-8 bg-green-800 shadow-lg shadow-gray-900  h-full flex items-center justify-center text-white rounded-2xl">
              <div>
            <div className="text-4xl font-bold">
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
            <Image  className='rounded-3xl relative z-10 mt-2' alt="frame10" src={Frame11}   quality={100} placeholder="blur" />
          </div>
    
      </div>
</section>

 <section className="mt-8"> 

  <div className="bg-green-800 text-white p-6  rounded-t-[400px]">

<div className='sm:mt-20  mt-10 p-10 '>  
<h1 className="text-4xl p-4 text-4xl  text-center font-bold"> Mission</h1>
<p className='text-center px-5'> At Jcrown Sport , we believe that success in sports management is built on a foundation of integrity,
passion, and strategic innovation. Our core philosophy is centered around providing unparalleled
service to athletes, teams, and organizations by fostering growth,
performance excellence, and long-term success.</p>
</div>
 

<div className='mt-5 sm:grid grid-cols-3 gap-4 p-10'>
  <div className='col-span-1 p-3'>
    <Image className='rounded-3xl relative z-10' alt="frame15" src={frame15}   quality={100} placeholder="blur" />
  </div>

  <div className='p-3  col-span-2 flex items-center justify-center'>
    <div>    
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
 <div className='bg-green-50  rounded-b-[400px]'>
  <div className='sm:p-32 p-16'>
  <h1 className='text-3xl font-bold text-center p-3'>
Our Vision
  </h1>
  <div className='text-md  text-center sm:px-16'> 
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
 
    </main>
  )
}