import React, { useState } from 'react'
import { Container } from './style'
import BurgerNav from '../BurgerNav/BurgerNav'
export default function Burger() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Container open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Container>
      <BurgerNav open={open}></BurgerNav>
    </>
  )
}
