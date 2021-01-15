import React from 'react'
import styled from 'styled-components'


const Logo= styled.svg`
  margin:0;
  &:hover{
    filter: invert(1);
  }
`
const Logos = ({children, className}) => {
    return (
        <Logo className={className}>
            {children}
        </Logo>
    )
}

export default Logos