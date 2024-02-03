import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import EmailContactForm from '../../components/EmailContactForm/EmailContactForm';
import OtherContacts from '../../components/OtherContacts/OtherContacts';
import style from './Contact.module.css';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Contato
        </title>
      </Helmet>
      <h1 className={ style.title }>Contato</h1>
      <EmailContactForm />
      <OtherContacts />
    </div>
  );
}

export default Contact;
