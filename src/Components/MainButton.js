import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: none;
  width: 243px;
  height: 32px;
  padding: 9px 15px 9px 15px;
  display: flex;
  align-items: center;
  border: 1px solid #8C14FC;
  border-radius: 5px;
  justify-content: center;
  font-size: 10px;
  font-weight: 500px;
  color: #8C14FC;
  &:hover {
    background: #B05EFD;
    color:white;
  }
  ` 

const MainButton = ({children}) => {
    return (
        <Button>
            {children}
        </Button>
    )
}

export default MainButton