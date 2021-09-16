import React, { useEffect } from 'react'
import {
  Img,
  CardBody,
  Div,
  DivDetails,
  H1,
  P,
  DivButtons,
  Button
} from './style'

export default function Card({
  id,
  img,
  isHover,
  handleMouseOut,
  handleMouseOver,
  title,
  children,
  git,
  link
}) {
  return (
    <CardBody
      onMouseOver={() => handleMouseOver(id)}
      onMouseOut={handleMouseOut}
    >
      <Img src={img} alt="Img-Card"></Img>
      <Div>
        <DivDetails>
          <H1>{title}</H1>
          <P>{children}</P>
          {link ? (
            <DivButtons>
              <Button href={link} target="_blank">
                Ver site
              </Button>
              <Button href={git} target="_blank">
                GitHub
              </Button>
            </DivButtons>
          ) : (
            <DivButtons>
              <Button href={git} target="_blank">
                GitHub
              </Button>
            </DivButtons>
          )}
        </DivDetails>
      </Div>
    </CardBody>
  )
}
