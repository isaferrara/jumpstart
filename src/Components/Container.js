import React from 'react'
import styled from 'styled-components'

const Containers= styled.div`
  width: 305px;
  height: 300px;
  background-color: white;
  position: absolute;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing:border-box;
  border-bottom: 4px solid #FEDEDD;
`

const Container = ({children}) => {
    return (
        <Containers>
            {children}
        </Containers>
    )
}

export default Container