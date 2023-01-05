import React from "react";
import { Container, MenuOne } from "./styles";

function Menu() {
  return (
    <Container>
      <div>
        <h3>ACOMPANHAR PEDIDO</h3>
      </div>
      <MenuOne>
        <p>COMPRA</p>
        <p>GUIA DE TAMANHOS</p>
        <p>MINHA CONTA</p>
        <p>POLÍTICA DE PAGAMENTO</p>
        <p>POLÍTICA DE ENTREGA</p>
        <p>TROCAS E DEVOLUÇÕES</p>
        <p>CUIDADOS COM OS PRODUTOS</p>
        <p>
          <b>CONTATO</b>
        </p>
      </MenuOne>
    </Container>
  );
}

export default Menu;
