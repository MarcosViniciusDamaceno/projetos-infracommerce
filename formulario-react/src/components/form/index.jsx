import React from "react";
import { Container, Contact, Info, Form } from "./styles";

import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

function Forms({ setMenuIsVisible }) {
  return (
    <Container>
      <AiOutlineMenu size={30} onClick={() => setMenuIsVisible(true)} />
      <Contact>
        <h1>CONTATO</h1>
        <p>
          Nosso atendimento ao cliente funciona de segunda à sábado - 24hs,
          Domingo até as 08hs (horário de Brasília) exceto feriados.
        </p>
      </Contact>
      <Info>
        <h2>LOJA ONLINE</h2>
        <span>
          <BsTelephone size={18} />
          <b>Telefone</b>: (11) 4935-2398
        </span>
        <span>
          <BsEnvelope size={18} />
          <b>Email</b>: contato@armaniexchange.com.br
        </span>
      </Info>

      <div>
        <h3>ENVIE UMA MENSAGEM</h3>
      </div>
      <Form>
        <label htmlFor="name">
          NOME:
          <input type="text" id="name" />
        </label>

        <label htmlFor="sobrenome">
          SOBRENOME:
          <input type="text" id="sobrenome" />
        </label>

        <label htmlFor="email">
          EMAIL:
          <input type="email" id="email" />
        </label>

        <label htmlFor="telefone">
          TELEFONE:
          <input type="tel" id="telefone" />
        </label>

        <label htmlFor="celular">
          CELULAR:
          <input type="tel" id="celular" />
        </label>

        <label htmlFor="solicitação">
          TIPO DE SOLICITAÇÃO:
          <select>
            <option value="duvida">Dúvidas</option>
            <option value="reclamação">Reclamações</option>
          </select>
        </label>

        <label htmlFor="mensagem">
          MENSAGEM:
          <textarea rows="10" cols="100" id="mensagem" />
        </label>
        <div>
          <button type="submit">ENVIAR</button>
        </div>
      </Form>
    </Container>
  );
}

export default Forms;
