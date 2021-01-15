import React from 'react'
import styled from 'styled-components'

const MenuBtn = styled.button`
  background: none;
  position:relative;
  width: 100%;
  height: 30%;
  margin-top:5px;
  font-size: 16px;
  border:none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10px;
  justify-content: flex-start;
  &:hover {
    background: #B05EFD;
    color:white;
  }
  ` 

const MenuButton = ({children}) => {
    return (
        <MenuBtn>
        {children}      
        </MenuBtn>
    )
}
export default MenuButton