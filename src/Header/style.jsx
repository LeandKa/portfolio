import style from 'styled-components'

export const Container = style.div`
   display:flex;
   flex-direction:row;
   width:100%;
   top:0;
   justify-content:space-around;
   position:fixed;
  background-color:rgba(0, 0, 0, 0.4);
   z-index:5;
`
export const Logo = style.a`
  cursor:pointer;
  text-decoration:none;
  color:${({ theme }) => theme.colors.primary};
  h1{
    font-size:1.0rem;
    margin-top:0.9rem;
  }
  h6{
    font-size:0.6rem;
    text-align:center;
  }
  @media(max-width:800px){
    margin-bottom:0.9rem;
  }
`

export const Nav = style.ul`
   justify-content:end;
   display:grid;
   padding-top:0.2rem;
   margin-top:0.5rem;
   grid-template-columns:repeat(6,auto);
   grid-gap:1.0rem;
   @media(max-width:800px){
    display:none;
  }
`
export const Li = style.li`
  padding:1.0rem;
  list-style:none;
`

export const A = style.a`
   text-decoration:none;
   color:white;
   font-size:1.2rem;
   cursor:pointer;
   &:hover{
     color:${({ theme }) => theme.colors.primary};
   }
`
