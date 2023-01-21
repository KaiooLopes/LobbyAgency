import { useState } from "react";
import {
  ContactFormContainer,
  Loading,
  SocialMidia,
  OpenOrCloseForm,
  FormDiv,
  ResponseEmail,
  ButtonOk,
} from "./styles";

import emailjs from "@emailjs/browser";

import Error from "./images/Error.gif";
import EmailSend from "./images/EmailSend.gif";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [emailSend, setEmailSend] = useState(false);
  const [error, setError] = useState(false);

  const sandEmail = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_title: title,
      from_message: msg,
      from_number: number,
    };

    setLoading(true);

    await emailjs
      .send(
        "service_dyfudpq",
        "template_vxsefv5",
        templateParams,
        "2lDKer35MXvDM1B7p"
      )
      .then(
        (res) => {
          setEmail(true);
          setName("");
          setEmail("");
          setTitle("");
          setMsg("");
          setNumber("");
          setLoading(false);
          setEmailSend(true);
        },
        (err) => {
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <ContactFormContainer>
      <h3>Quer aumentar suas vendas e escalar seu negócio?</h3>
      <h3>Entre em contato agora!</h3>
      <SocialMidia>
        <a
          href="https://wa.me/53984737286?text=Oii, quero aumentar as vendas do meu negocio!!!"
          target="_blank"
          rel="noreferrer"
        >
          Whatsapp
        </a>
        <a
          href="https://www.instagram.com/thelobbyagency/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </SocialMidia>
      <OpenOrCloseForm onClick={() => setOpenForm(!openForm)} open={openForm}>
        <p>Enviar Mensagem</p>
        <i className="fa-solid fa-sort-down"></i>
      </OpenOrCloseForm>
      <FormDiv>
        {openForm && (
          <form onSubmit={sandEmail}>
            <label>
              <span>Nome:</span>
              <input
                type="text"
                required
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label>
              <span>Numero:</span>
              <input
                type="text"
                required
                placeholder="Digite seu numero"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
            </label>
            <label>
              <span>Email:</span>
              <input
                type="text"
                required
                placeholder="Digite seu melhor email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label>
              <span>Assunto:</span>
              <input
                type="text"
                required
                placeholder="Digite o assunto da mensagem"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              <span>Mensagem:</span>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                name="msg"
                cols="30"
                rows="7"
                required
                placeholder="Digite sua mensagem"
              ></textarea>
            </label>
            <button>
              {!loading && <span>Enviar</span>}
              {loading && <Loading></Loading>}
            </button>
          </form>
        )}
      </FormDiv>
      {(emailSend || error) && (
        <ResponseEmail>
          <div>
            {emailSend && (
              <>
                <img src={EmailSend} alt="email enviado" />
                <h3>Email enviado com sucesso!</h3>
                <ButtonOk onClick={() => setEmailSend(false)}>Ok!</ButtonOk>
              </>
            )}

            {error && (
              <>
                <img src={Error} alt="Erro no envio" />
                <h3>Email não enviado!</h3>
                <ButtonOk onClick={() => setError(false)}>Ok!</ButtonOk>
              </>
            )}
          </div>
        </ResponseEmail>
      )}
    </ContactFormContainer>
  );
};

export default ContactForm;
