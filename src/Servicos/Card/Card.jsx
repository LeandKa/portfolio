import React from 'react'
import { Container, H1, Img, P } from './style'

export default function Card({ title, children, Svg }) {
  return (
    <Container>
      <H1>{title}</H1>
      <Img src={Svg}></Img>
      <P>{children}</P>
    </Container>
  )
}
