'use client';

import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import { Mail, Linkedin, Phone, ArrowRight } from 'lucide-react';
import React from 'react';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [floatingElements, setFloatingElements] = useState<Array<{left: string, top: string, animation: string, animationDelay: string}>>([]);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const elements = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 5}s`
    }));
    setFloatingElements(elements);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (form.current) {
      emailjs.sendForm('service_1e8dufl', 'template_h9qcq9k', form.current, 'wo0erO5AjGp0iuZmY')
        .then((result) => {
          console.log('Email sent successfully!', result.text);
          setIsSent(true);
          form.current?.reset();
          setTimeout(() => setIsSent(false), 3000);
        })
        .catch((error) => {
          console.error('Failed to send email:', error.text);
        });
    }
  };

  return (
    <div className="relative min-h-screen pb-20 md:pb-0 md:h-[calc(100vh-200px)] flex items-center justify-center">
      {/* Animated X background - decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element, i) => (
          <div
            key={i}
            className="absolute text-gray-200 dark:text-gray-800 text-xl opacity-20"
            style={{
              left: element.left,
              top: element.top,
              animation: element.animation,
              animationDelay: element.animationDelay
            }}
          >
            ✕
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="mx-auto text-center max-w-3xl px-6 md:mt-8 w-full">
        <h1 className="text-2xl md:text-5xl font-medium text-gray-900 dark:text-white z-20 mt-12 md:-translate-x-4">
          Get in Touch! 
        </h1>

  
        <div className="contact__container grid mt-8 relative">
          {/* Contact cards */}
          <div className="contact__content">
            <h3 className="contact__title">Contact Me</h3>
            <div className="contact__info">
              {/* Email Card */}
              <a
                href="mailto:ldlulu085@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex flex-col items-center gap-2.5 p-4 min-h-[100px] rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-sm hover:shadow-md active:shadow-inner transition-all duration-300 group w-full">
                  <div className="flex-shrink-0">
                    <Mail className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-md font-medium text-gray-800 dark:text-gray-200 leading-tight">
                      Email
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      ldlulu085@gmail.com
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Write me <ArrowRight className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/lana-duke/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex flex-col items-center gap-2.5 p-4 min-h-[100px] rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-sm hover:shadow-md active:shadow-inner transition-all duration-300 group w-full">
                  <div className="flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-md font-medium text-gray-800 dark:text-gray-200 leading-tight">
                      LinkedIn
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Message me on LinkedIn!
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Message me <ArrowRight className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </a>

              {/*Phone Number Card */}
              <a
                href="tel:+6093312402"
                className="block"
              >
                <div className="flex flex-col items-center gap-2.5 p-4 min-h-[100px] rounded-xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 shadow-sm hover:shadow-md active:shadow-inner transition-all duration-300 group w-full">
                  <div className="flex-shrink-0">
                    <Phone className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <div className="text-center">
                    <p className="text-md font-medium text-gray-800 dark:text-gray-200 leading-tight">
                      Call Me
                    </p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      609-331-2402
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                    Call me 
                    <ArrowRight className="w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* "or" divider - only visible on desktop */}
          <div className="hidden md:block absolute left-1/2 top-64 transform -translate-x-[180%] z-10 pointer-events-none">
            <h3 className="contact__title text-gray-400"> <strong>or</strong></h3>
          </div>

          {/* "or" divider for mobile - centered between sections */}
          <div className="md:hidden my-6 flex items-center justify-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <h3 className="px-4 text-gray-400 font-semibold">or</h3>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Contact form */}
          <div className="contact__content">
            <h3 className="contact__title">Shoot me a message below!</h3>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div" style={{ backgroundColor: 'transparent' }}>
                <label className="contact__form-tag">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="contact__form-input" 
                  style={{ backgroundColor: 'transparent' }}
                  placeholder="insert your name" 
                  required 
                />
              </div>

              <div className="contact__form-div" style={{ backgroundColor: 'transparent' }}>
                <label className="contact__form-tag">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  className="contact__form-input" 
                  style={{ backgroundColor: 'transparent' }}
                  placeholder="insert your email" 
                  required 
                />
              </div>

              <div className="contact__form-div contact__form-area" style={{ backgroundColor: 'transparent' }}>
                <label className="contact__form-tag">Message</label>
                <textarea 
                  name="message" 
                  cols={30} 
                  rows={10}
                  className="contact__form-input" 
                  style={{ backgroundColor: 'transparent' }}
                  placeholder="write your message here" 
                  required
                ></textarea>
              </div>

              <button className={`bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 w-full ${isSent ? 'border-2 border-green-500' : ''}`}>
                {isSent ? 'Message sent!' : 'Send Message!'}
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}