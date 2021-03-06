import React from 'react'
import styled from 'styled-components'

export const MenuBtn = styled.button`
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
  text-align:left;
  &:hover {
    background: #B05EFD;
    color:white;
  }
  ` 

const MenuButton = ({children, className}) => {
    return (
        <MenuBtn className={className}>
        {children}      
        </MenuBtn>
    )
}
export default MenuButton