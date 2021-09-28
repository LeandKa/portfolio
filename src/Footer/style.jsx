import style from 'styled-components'
export const Container = style.div`
  display:flex;
  flex-direction:column;
  margin-top:3.0rem;

`

export const Title = style.h1`
   color:${({ theme }) => theme.colors.primary};
   text-align:center;
   font-size:4.0rem;
    transition: all 0.5s ease-out;
   @media(max-width:820px){
     font-size:3.0rem;
  }
`

export const H1 = style.h1`
   font-size:1.2rem;
   color:white;
   text-align:center;
`

export const P = style.p`
   padding-top:4.0rem;
   text-align:center;
   margin-left:0.5rem;
   font-size:1.0rem;
`

export const Div = style.div`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  margin-top:6.0rem;
  padding:3.0rem;
`

export const Span = style.span`
  text-align:center;
`

export const Git = style.a`
 color:white;
 &:hover{
   color:${({ theme }) => theme.colors.primary};
 }
`
