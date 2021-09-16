import React from 'react'
import {
  Container,
  Img,
  P,
  DivMain,
  DivColumn,
  DivRow,
  IconGitHub,
  IconLinkedin
} from './style'

import Avatar from '../../public/assets/Avatar.jpg'

export default function About() {
  return (
    <Container id="about_me">
      <h1>Sobre</h1>
      <DivMain>
        <Img src={Avatar} alt="Avatar"></Img>
        <DivColumn>
          <P>
            Olá, eu sou Leandro Cavalcanti formado no curso de Tecnólogo em
            Jogos Digitais pela universidade Estácio de Sá, atualmente voltado
            para o desenvolvimento FrontEnd e BackEnd com foco em ReactJs, Redux
            e Nodejs apaixonado por tecnologia e sempre em busca de aprender.
          </P>
          <DivRow>
            <a
              href="https://github.com/LeandKa"
              rel="noreferrer"
              target="_blank"
            >
              <IconGitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/leandro-pereira-8a3a0592/"
              rel="noreferrer"
              target="_blank"
            >
              <IconLinkedin />
            </a>
          </DivRow>
        </DivColumn>
      </DivMain>
    </Container>
  )
}
