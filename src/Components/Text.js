import React from 'react'
import styled from 'styled-components'

export const TextPar= styled.p`
  font-size: 12px;
  font-weight: 400px;
  line-height: 18px;
  text-align:center;
  position: relative;
  bottom: 10px;
`

const Text = ({children}) => {
    return (
            <TextPar>{children}</TextPar>
    )
}

export default Text