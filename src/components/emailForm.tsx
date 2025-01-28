import { useState } from 'react';

/* eslint-disable max-len */
interface PhoneChangeEvent {
  target: {
    value: string;
  };
}
export default function EmailForm() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: PhoneChangeEvent) => {
    const input = e.target.value.replace(/\D/g, '');
    const formattedPhone = formatPhoneNumber(input);
    setPhone(formattedPhone);
  };

  const formatPhoneNumber = (value: string) => {
    if (value.length <= 2) return value;
    if (value.length <= 7) return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    return `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(
      3,
      7,
    )}-${value.slice(7, 11)}`;
  };

  return (
    <div className="bg-gray-900 px-6 min-h-screen text-white" id="contact">
      <form
        action="https://formsubmit.co/righigordev@gmail.com.com"
        method="POST"
        className="flex flex-col gap-6 items-center justify-center"
      >
        <div className="relative group">
          <input
            type="text"
            name="name"
            id="name"
            required
            className="peer bg-transparent border border-gray-500 rounded-md h-12 lg:w-80 sm:w-2/3 py-2 px-4 outline-none"
          />
          <label
            htmlFor="name"
            className="text-gray-300 px-1 absolute -translate-y-1/2 top-1/2 left-4 pointer-events-none duration-300 peer-focus:top-0 peer-focus:bg-gray-900 peer-focus:text-xs peer-valid:bg-gray-900 peer-valid:top-0 peer-valid:text-xs"
          >
            Seu Nome
          </label>
        </div>

        <div className="relative group">
          <input
            type="text"
            name="phone"
            id="phone"
            value={ phone }
            onChange={ handlePhoneChange }
            required
            className="peer bg-transparent border border-gray-500 rounded-md h-12 lg:w-80 sm:w-2/3 py-2 px-4 outline-none"
          />
          <label
            htmlFor="phone"
            className="text-gray-300 px-1 absolute -translate-y-1/2 top-1/2 left-4 pointer-events-none duration-300 peer-focus:top-0 peer-focus:bg-gray-900 peer-focus:text-xs peer-valid:bg-gray-900 peer-valid:top-0 peer-valid:text-xs"
          >
            Seu WhatsApp
          </label>
        </div>
        <div className="relative group">
          <input
            type="email"
            name="email"
            id="email"
            required
            className="peer bg-transparent border border-gray-500 rounded-md h-12 lg:w-80 sm:w-2/3 py-2 px-4 outline-none"
          />
          <label
            htmlFor="email"
            className="text-gray-300 px-1 absolute -translate-y-1/2 top-1/2 left-4 pointer-events-none duration-300 peer-focus:top-0 peer-focus:bg-gray-900 peer-focus:text-xs peer-valid:bg-gray-900 peer-valid:top-0 peer-valid:text-xs"
          >
            Seu Email
          </label>
        </div>
        {/* <input type="email" name="email" required />
        <button type="submit">Send</button> */}
      </form>
    </div>
  );
}
