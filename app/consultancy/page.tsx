'use client';
import Image from 'next/image';
import linkedIn from '../../public/svg/linkedIn.svg';
import { useState } from 'react';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from '../components/alertDialog'; 

export default function Services() {
  const [formData, setFormData] = useState({
    firstName: '',
    surName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('grid-', '')]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch("https://jaycrown.onrender.com/api/v1/create-consultancy" + "https://cors-anywhere.herokuapp.com/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          surName: formData.surName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Failed to submit form: ${response.status}`);
      }
      
      const data = await response.json();

      setShowSuccess(true);
      setFormData({
        firstName: '',
        surName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="xl:grid grid-cols-2 gap-4 mx-4 mt-8">
        <div className="p-6">
          <div className="bg-stone-900 p-6 rounded-xl sm:px-10">
            <div className="max-w-xl mx-auto">
              <div className="text-white text-3xl  sm:text-5xl font-bold mb-6  py-4 font-['Champ']">Need  <br/>  Consultancy?</div>
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      className="appearance-none block dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-firstName"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className="appearance-none block w-full dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-surName"
                      type="text"
                      placeholder="Last Name"
                      value={formData.surName}
                      onChange={handleChange}
                      required
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-phoneNumber"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full px-3">
                    <textarea
                      className="appearance-none block w-full bg-gray-200 dark:focus:bg-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-none text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none h-32"
                      id="grid-message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <button 
                    className="bg-yellow-600 hover:bg-yellow-700 text-white dark:text-gray-300 py-2 px-4 rounded-lg disabled:opacity-50"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
                {error && (
                  <div className="mt-4 text-red-500">
                    {error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:ml-20 justify-center p-6">
          <h1 className="text-4xl font-bold mt-4  sm:text-5xl font-['Champ']">Contact Us</h1>
          <p className="mt-4">Jcrown Sports</p>
          <p className="mt-4">13, Arise Stadium Road, Abeokuta, Ogun, Nigeria.</p>
          <p className="mt-4">+2348087493079, +2348089222764</p>
          <p className="mt-4">jcrownsports@gmail.com</p>
          <div className="flex mt-5 items-center gap-2">
            <Image className="relative z-10 w-6 h-6" alt="linkedIn" src={linkedIn} quality={100} />
          </div>
        </div>
      </div>

      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Form Submitted Successfully!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for your submission. We will get back to you soon.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}