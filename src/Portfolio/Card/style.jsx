import style from 'styled-components'

export const CardBody = style.div`
  display:flex;
  flex-direction:column;
  width:500px;
  height:350px;
  margin-left:0.5rem;
  margin-top:1.0rem;
  position:relative;
  top:0;
  transition:all 0.2s ease-out;
  &:hover{
   top:-10px;
  }
  @media(max-width:820px){
    height:300px;
    width:300px;
  }
`
export const Img = style.img`
 height:100%;
`
export const Div = style.div`
 position:absolute;
 background:black;
 opacity:0;
 height:100%;
 width:100%;
 top:0px;
 right:0px;
 &:hover{
   opacity:0.7;
 }
`

export const DivDetails = style.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
`
export const DivButtons = style.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:6.0rem;
`

export const H1 = style.h1`
   font-size:3.125vw;
   color:white;
   margin-top:2.0rem;
   letter-spacing:0.2rem;
   text-align:center;
`

export const P = style.p`
   margin-left:0.5rem;
   font-size:1.0rem;
   line-height:1.0rem;
   text-align:center;
   font-weight:600;
   margin-top:1.0rem;
`

export const Button = style.a`
  border:2px solid ${({ theme }) => theme.colors.primary};
  background:none;
  color:${({ theme }) => theme.colors.primary};
  width:30%;
  margin-left:1.0rem;
  border-radius:10%;
  text-align:center;
  text-decoration:none;
  padding:1.0rem;
   transition: all 0.5s ease-out;
  cursor:pointer;

  &:hover{
   color:white;
   background:${({ theme }) => theme.colors.primary};
   border:2px solid ${({ theme }) => theme.colors.primary};
  }
  &:focus{
    outline:none;
  }
`
