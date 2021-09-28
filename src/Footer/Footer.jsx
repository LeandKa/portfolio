import React from 'react'
import { Container, Title, P, H1, Span, Div, Git } from './style'
import Arrow from './Arrow/Arrow'

export default function Footer() {
  return (
    <Container id="contato_me">
      <Title>Contato</Title>
      <P>Entre em contato comigo </P>
      <H1>Email:lcavalcanti29@gmail.com</H1>
      <H1>Telefone:(21)98204-5984</H1>
      <Div>
        <Span>
          ©{' '}
          <Git
            target="_blank"
            href="https://github.com/LeandKa?tab=repositories"
          >
            Leandro Cavalcanti
          </Git>{' '}
          Copyright 2021 .
        </Span>
        <Arrow></Arrow>
      </Div>
    </Container>
  )
}
