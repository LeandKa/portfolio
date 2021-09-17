import style from 'styled-components'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

export const Container = style.div`
  display:flex;
  flex-direction:column;
  margin-top:4.0rem;
}
`

export const PortfolioHeader = style.div`
 display:flex;
 flex-direction:row;
 justify-content:space-around;
 margin:1.0rem;
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
export const MoreContent = style.div`
   display:flex;
   gap:1.0rem;
   margin-top:1.0rem;
   align-content:center;
`
export const Slide = style.div`
  background: white;
  width:40px;
  height:25px;
  position:relative;
  left:60px;
`

export const Plus = style(AiFillPlusCircle)`
color:white;
 font-size:25px;
`

export const Minus = style(AiFillMinusCircle)`
 color:white;
 font-size:25px;
`

export const DivMain = style.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  gap:1.0rem;
  justify-content:center;
  margin-left:1.5rem;
`
