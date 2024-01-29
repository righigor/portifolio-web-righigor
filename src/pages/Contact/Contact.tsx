import { Helmet } from 'react-helmet';
import EmailContactForm from '../../components/EmailContactForm/EmailContactForm';
import OtherContacts from '../../components/OtherContacts/OtherContacts';
import style from './Contact.module.css';

function Contact() {
  return (
    <div>
      <Helmet>
        <title>
          Contact me
        </title>
      </Helmet>
      <h1 className={ style.title }>Contato</h1>
      <EmailContactForm />
      <OtherContacts />
    </div>
  );
}

export default Contact;
