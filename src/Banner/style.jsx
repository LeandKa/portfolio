import style from 'styled-components'
export const Container = style.div`
 display:flex;
 flex-direction:column;
 justify-content:space-around;
 padding:4.0rem;
 margin-top:4.0rem;
 margin-bottom:2.0rem;
 p{
   font-size:4.5rem;
   transition: all 0.3s ease-out;
   span{
     color:${({ theme }) => theme.colors.primary};
   }
   @media(max-width:800px){
        font-size:3.5rem;
  }
  @media(max-width:475px){
      font-size:2.5rem;
  }
 }

 h1{
   font-size:2.5rem;
   color:white;
 }
 h3{

   color:white;
 }

  @media(max-width:800px){
        padding:2.0rem;
  }
  @media(max-width:475px){
      padding:1.0rem;
  }

`
