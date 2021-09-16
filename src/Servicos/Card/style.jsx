import style from 'styled-components'

export const Container = style.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-self:center;
  text-align:center;
`

export const H1 = style.h1`
    font-size:1.5rem;
    color:${({ theme }) => theme.colors.secondary};
`

export const Img = style.img`
   width:60px;
   align-self:center;
`

export const P = style.p`
   font-size:1.0rem;
`
