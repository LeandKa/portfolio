import style from 'styled-components'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

export const Container = style.div`
  display:flex;
  flex-direction:column;
  margin-top:4.0rem;
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

export const Plus = style(AiFillPlusCircle)`
 color:white;
 &:after{
  position: absolute;
  display: block;
  top: 0px;
  left: -7px;
  width: 0px;
  height: 0px;
  border-right: 7px solid rgba(0,0,0,0);
  border-bottom: 5px solid rgba(240,245,250,1);
  border-left: 7px solid rgba(0,0,0,0);
);
  -ms-transform: rotate(-70deg);
  transform: rotate(
-70deg
);
  content: "";
  opacity: 0;
 }
 &:before{
  border-bottom: 5px solid rgba(240,245,250,1);
  border-left: 3px solid rgba(0,0,0,0);
  border-right: 3px solid rgba(0,0,0,0);
  position: absolute;
  height: 0;
  width: 0;
  top: -3px;
  left: -5px;
  display: block;
  content: "";
  opacity: 0;
  -webkit-transform: rotate(
-35deg
);
  -ms-transform: rotate(-35deg);
  transform: rotate(
-35deg
);
 }
`

export const Minus = style(AiFillMinusCircle)`
 color:white;
`

export const DivMain = style.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  gap:1.0rem;
  justify-content:center;
  margin-left:1.5rem;
`
