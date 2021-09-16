import React from 'react'
import { Ul } from './style'
export default function BurgerNav({ open }) {
  return (
    <Ul open={open}>
      <li>
        <a href="#about_me">Sobre</a>
      </li>
      <li>
        <a href="#servico_me">Serviços</a>
      </li>
      <li>
        <a href="#portfolio_me">Portfólio</a>
      </li>
      <li>
        <a href="#contato_me">Contato</a>
      </li>
    </Ul>
  )
}
