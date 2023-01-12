import { useState } from "react";
import { ContactFormContainer, SubmitAndSocial, Icon, Popup } from "./styles";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [msg, setMsg] = useState("");
  const [showNumber, setShowNumber] = useState(false);

  return (
    <ContactFormContainer>
      <h3>
        Ficou interessado, contate-nos nas redes redes sociais ou nos mande uma
        mensagem!
      </h3>
      <form>
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
          <span>Email:</span>
          <input
            type="text"
            required
            placeholder="Digite seu email"
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
        <SubmitAndSocial>
          <button>Enviar</button>
          <div>
            {showNumber && <Popup>(12) 34567-8910</Popup>}
            <Icon color="#34af23" onClick={() => setShowNumber(!showNumber)}>
              <i className="fa-brands fa-whatsapp"></i>
            </Icon>
            <Icon href="https://instagram.com" color="#517fa4">
              <i className="fa-brands fa-instagram"></i>
            </Icon>
          </div>
        </SubmitAndSocial>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
