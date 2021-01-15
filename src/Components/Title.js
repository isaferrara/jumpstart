import React from 'react'
import styled from 'styled-components'

const Titles= styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.86px;
  text-align:center;
`

const Title = ({children}) => {
    return (
        <Titles>
        {children}
        </Titles>
    )
}
export default Title