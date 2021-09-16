import React, { useEffect, useState } from 'react'
import { Data } from '../Data'
import Card from './Card/Card'
import { Container, DivMain, Plus, Title } from './style'
import {
  Img,
  CardBody,
  Div,
  DivDetails,
  H1,
  P,
  DivButtons,
  Button
} from './Card/style'

export default function Portfolio() {
  const [isHover, setIsHover] = useState(0)

  const handleMouseOver = id => {
    console.log(id)
  }

  const handleMouseOut = () => {
    setIsHover(0)
  }

  return (
    <Container id="portfolio_me">
      <Title>Portfolio</Title>
      <DivMain>
        {Data.map((data, index) => (
          <>
            <Card
              handleMouseOut={handleMouseOut}
              handleMouseOver={handleMouseOver}
              select={isHover}
              key={data.id}
              id={data.id}
              img={data.img}
              title={data.title}
              git={data.git}
              link={data.link}
            >
              {data.description}
            </Card>
          </>
        ))}
      </DivMain>
    </Container>
  )
}
