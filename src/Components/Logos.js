import React from 'react'
import styled from 'styled-components'


const Logo= styled.svg`
  width: 25px;
  height:18px;
  &:hover{
    filter: invert(1);
  }
`
const Logos = ({children}) => {
    return (
        <Logo >
            {children}
        </Logo>
    )
}

export default Logos