import style from 'styled-components'
import { FaArrowUp } from 'react-icons/fa'

export const Span = style(FaArrowUp)`
 color:white;
 transition: all 0.3s ease-out;
 cursor:pointer;
 &:hover{
   color:${({ theme }) => theme.colors.primary};
 }
`
