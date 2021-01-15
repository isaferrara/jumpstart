import React from 'react'
import styled from 'styled-components'

const HoverMenu= styled.div`
  position: absolute; 
  left: 98%;
  top: 0;
  width: 148px;
  height: 110px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-sizing:border-box;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.1) ;
`

const HoverMenus = ({children}) => {
    return (
        <HoverMenu>
            {children}
        </HoverMenu>
    )
}

export default HoverMenus