import React from 'react'
import { Container, Logo, Nav, Li, A } from './style'
import Burger from './Burger/Burger'

export default function Header() {
  return (
    <Container>
      <Logo href="/">
        <h1>LeandroCavalcanti</h1>
        <h6>DESENVOLVEDOR WEB</h6>
      </Logo>
      <Nav>
        <Li>
          <A href="#about_me">Sobre</A>
        </Li>
        <Li>
          <A href="#servico_me">Serviços</A>
        </Li>
        <Li>
          <A href="#portfolio_me">Portfólio</A>
        </Li>
        <Li>
          <A href="#contato_me">Contato</A>
        </Li>
      </Nav>
      <Burger />
    </Container>
  )
}
