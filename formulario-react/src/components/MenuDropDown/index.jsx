import React from "react";

import { MenuDrop } from "./styles";

import { IoClose } from "react-icons/io5";

function MenuDropDown({ menuIsVisible, setMenuIsVisible }) {
  return (
    <MenuDrop isVisible={menuIsVisible}>
      <IoClose size={30} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <a href="#">ACOMPANHAR PEDIDO</a>
        <a href="#">COMPRA</a>
        <a href="#">GUIA DE TAMANHOS</a>
        <a href="#">MINHA CONTA</a>
        <a href="#">POLÍTICA DE PAGAMENTO</a>
        <a href="#">POLÍTICA DE ENTREGA</a>
        <a href="#">TROCAS E DEVOLUÇÕES</a>
        <a href="#">CUIDADOS COM OS PRODUTOS</a>
        <a href="#">
          <b>CONTATO</b>
        </a>
      </nav>
    </MenuDrop>
  );
}

export default MenuDropDown;
