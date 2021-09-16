import style from 'styled-components'

export const Container = style.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin-top:3.0rem;
}
`
export const Title = style.h1`
color:${({ theme }) => theme.colors.primary};
   text-align:center;
   font-size:3.0rem;
    transition: all 0.5s ease-out;
   @media(max-width:820px){
     font-size:2.0rem;
  }
`
export const MainDiv = style.div`
   display:grid;
   margin-top:2.0rem;
   grid-gap:2.0rem;
   padding:2.0rem;
   grid-template-columns:repeat(2,auto);
`
