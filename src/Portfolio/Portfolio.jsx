import React, { useEffect, useState } from 'react'
import { Data } from '../Data'
import Card from './Card/Card'
import {
  AnimationRotation,
  Container,
  DivMain,
  Minus,
  MoreContent,
  Plus,
  PortfolioHeader,
  Title
} from './style'

export default function Portfolio() {
  const [toggle, setToggle] = useState(true)

  const RenderItems = () => {
    if (!toggle) {
      const dat = Data
      return dat
    } else {
      const dat = Data.slice(0, 6)
      return dat
    }
  }
  return (
    <Container id="portfolio_me">
      <PortfolioHeader>
        <Title>Portfolio</Title>
        <MoreContent toggle={toggle}>
          {toggle ? (
            <Plus onClick={() => setToggle(!toggle)} />
          ) : (
            <Minus onClick={() => setToggle(!toggle)} />
          )}
        </MoreContent>
      </PortfolioHeader>
      <DivMain>
        {RenderItems().map(data => (
          <>
            <Card
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
