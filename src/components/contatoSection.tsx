/* eslint-disable max-len */
import EmailForm from './emailForm';
import OutrosContatos from './outrosContatos';

export default function ContatoSection() {
  return (
    <div className="bg-gray-900 px-2 min-h-screen flex flex-col md:flex-row lg:flex-row" id="contact">
      <div className="lg:w-1/2">
        <h2 className="text-3xl text-center text-white py-12">
          Entre em contato
        </h2>
        <EmailForm />
      </div>
      <div className="lg:w-1/2 ">
        <OutrosContatos />
      </div>
    </div>
  );
}
