
import linkedInSvg from 'public/svg/linkedin.svg'
export default function Services() {


  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="sm:grid grid-cols-2 gap-4 mx-4 mt-8">
        <div className=" p-6  ">
        <div className="bg-gray-900 p-6 rounded-xl">
          <div className="max-w-md   mx-auto">
            <div className="text-white text-3xl font-bold mb-6">Need Consultancy</div>
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-phone"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <textarea
                    className="appearance-none block w-full bg-gray-200 dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none h-32"
                    id="grid-message"
                    placeholder="Message"
                  />
                </div>
              </div>
              <div>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white dark:text-gray-300 py-2 px-4 rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
        <div className="flex flex-col sm:ml-20 justify-center p-6">
          <h1 className="text-4xl font-bold mt-4">Contact Us</h1>
          <p className="mt-4">Jcrown Sports </p> 
 
           <p className="mt-4">  13, Arise Stadium Road, Abeokuta,
        Ogun, Nigeria.</p>

<p className="mt-4"> +2348087493079, +2348089222764</p>
<p className="mt-4">  jcrownsports@gmail.com</p>
<div className="flex mt-5 items-center gap-2">
     <img src={linkedInSvg} alt="linkedIn" className="w-6 h-6" />
 
    </div>
        </div>
      </div>
    </main>
  )
}