import style from 'styled-components'
import { FaLinkedin, FaGithubAlt } from 'react-icons/fa'

export const Container = style.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-self:center;
  width:100%;
  padding:3.0rem;


  h1{
   color:${({ theme }) => theme.colors.primary};
   text-align:center;
   font-size:3.0rem;
    transition: all 0.3s ease-out;
   @media(max-width:820px){
     font-size:2.0rem;
  }
  }
`

export const DivMain = style.div`
    display:flex;
    margin-top:2.0rem;
    flex-direction:row;
    justify-content:center;
    gap:2.0rem;
    align-self:center;
    width:100%;
   transition: all 0.3s ease-out;
    @media(max-width:820px){
      flex-direction:column;
  }

`
export const DivColumn = style.div`
  display:flex;
  flex-direction:column;
`
export const DivRow = style.div`
  display:flex;
  flex-direction:row;
  align-self:center;
  gap:2.0rem;
  @media(max-width:820px){
     gap:0;
  }
`

export const Img = style.img`
 width:450px;
 height:450px;
 border-radius:100%;
 transition: all 1.2s ease-out;
  @media(max-width:820px){
      align-self:center;
      width:350px;
      height:350px;
  }
  @media(max-width:475px){
      width:200px;
      height:200px;
  }
`

export const P = style.p`
  margin-top:4.0rem;
  font-size:1.5rem;
  line-height:4.0rem;
  align-self:center;
  transition: all 0.5s ease-out;
  @media(max-width:820px){
    margin-top:0;
    font-size:1.0rem;
    line-height:3.0rem;
  }
`
export const IconLinkedin = style(FaLinkedin)`
   color:${({ theme }) => theme.colors.secondary};
   font-size:50px;
   cursor:pointer;
   margin-left:1.0rem;
   transition: all 0.5s ease-out;
   &:hover{
     color:${({ theme }) => theme.colors.primary};
   }
   @media(max-width:820px){
    font-size:30px;
  }
`

export const IconGitHub = style(FaGithubAlt)`
 color:${({ theme }) => theme.colors.secondary};
 font-size:50px;
 cursor:pointer;
 margin-left:1.0rem;
 transition: all 0.5s ease-out;
 &:hover{
     color:${({ theme }) => theme.colors.primary};
   }
   @media(max-width:820px){
    font-size:30px;
  }
`
