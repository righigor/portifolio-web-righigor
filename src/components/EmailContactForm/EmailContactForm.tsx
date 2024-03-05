/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, FormEvent, useState } from 'react';
import Swal from 'sweetalert2';
import style from './EmailContactForm.module.css';

function EmailContactForm() {
  const [dataForm, setDataForm] = useState({
    name: '',
    wpp: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xayrqpke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataForm),
      });
      if (response.ok) {
        console.log('msg enviada');
        setDataForm({
          name: '',
          wpp: '',
          email: '',
          message: '',
        });
        Swal.fire({
          title: 'Mensagem Enviada com sucesso!',
          text: 'Entrarei em contato via email/whatsapp informado!',
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Erro ao enviar a mensagem!',
          text: 'Por favor tente novamente.',
          icon: 'error',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={ style.container }>
      <form onSubmit={ handleSubmit } className={ style.formContainer }>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            value={ dataForm.name }
            onChange={ handleChange }
            placeholder="Seu nome"
            id="name"
            className={ style.inputArea }
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="wpp"
            value={ dataForm.wpp }
            onChange={ handleChange }
            placeholder="Seu whatsApp"
            id="wpp"
            className={ style.inputArea }
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="email"
            value={ dataForm.email }
            onChange={ handleChange }
            placeholder="Seu e-mail"
            id="email"
            className={ style.inputArea }
          />
        </label>
        <br />
        <label>
          <textarea
            name="message"
            value={ dataForm.message }
            onChange={ handleChange }
            placeholder="Digite sua mensagem"
            className={ style.inputArea }
          />
        </label>
        <br />
        <button
          type="submit"
          className={ style.btn }
          disabled={ !dataForm.name || !dataForm.message }
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default EmailContactForm;
