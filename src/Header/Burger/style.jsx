import style from 'styled-components'

export const Container = style.div`
  width:2.0rem;
  height:2.0rem;
  position:relative;
  top:10px;
  right:-100px;
   z-index:20;
  display:none;
  transition: all 0.5s ease-out;
  @media(max-width:800px){
    display:flex;
    justify-content:space-around;
    flex-flow: column nowrap;
  }
  @media (max-width: 650px) {
    right:-100px;
    top:10px;
   }
   @media (max-width: 650px) {
    right:-30px;
    top:10px;
   }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
