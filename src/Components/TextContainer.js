import React from 'react'
import styled from 'styled-components'


const TextContainers= styled.div`
  width: 243px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TextContainer = ({children}) => {
    return (
        <TextContainers>
            {children}
        </TextContainers>
    )
}

export default TextContainer