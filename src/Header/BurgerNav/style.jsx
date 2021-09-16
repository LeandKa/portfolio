import style from 'styled-components'
export const Ul = style.ul`
  list-style: none;
  display: none;
  flex-flow: row nowrap;
  transition: all 0.5s ease-out;
  li {
    padding: 18px 10px;
    text-align:center;
    list-style:none;
    a{
      text-decoration:none;
   color:white;
   font-size:1.2rem;
   cursor:pointer;
   &:hover{
     color:${({ theme }) => theme.colors.primary};
   }
    }
  }
  @media (max-width: 800px) {
    display:flex;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0px;
    right: 0;
    background-color:rgba(0, 0, 0, 0.4);
    height: 120vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`
