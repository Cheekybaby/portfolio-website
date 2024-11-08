'use client'
import { useFormData } from 'herotofu-react';

const ContactForm = () => {
  // TODO - update to the correct endpoint
  const { formState, getFormSubmitHandler } = useFormData('https://public.herotofu.com/v1/51bd2aa0-9c16-11ef-840d-9fdbf4f87a8b');

  return (
    <>
      <form onSubmit={getFormSubmitHandler()}>
        <div className="pt-0 mb-3 w-full">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3">
          <textarea
            placeholder="Your message..."
            name="message"
            className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
            required
          />
        </div>
        <div className="pt-0 mb-3 w-full">
          <button
            className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-white hover:text-blue-500 rounded shadow outline-none"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;