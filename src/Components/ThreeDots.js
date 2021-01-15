import React, {useState} from 'react'
import styled from 'styled-components'
import HoverMenus from "./HoverMenus.js";
import Logos from "./Logos.js";
import MenuButton from "./MenuButton.js";
import {MenuBtn} from "./MenuButton.js";

const ThreeDotsButton= styled.button`
  position: absolute;
  left: 82%;
  background:none;
  border: none;
`
const DelLogo = styled(MenuBtn)`
  color: red
`


const ThreeDots = () => {
  const [hover, setHover]= useState(false)

  return (
        <ThreeDotsButton onClick={()=> setHover(!hover)}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="9.5" r="1.5" fill="#343D48" fillOpacity="0.5"/>
            <circle cx="17.5" cy="16.5" r="1.5" fill="#343D48" fillOpacity="0.5"/>
            <circle cx="17.5" cy="23.5" r="1.5" fill="#343D48" fillOpacity="0.5"/>
            <rect x="0.5" y="0.5" width="33" height="33" rx="4.5" stroke="#F1F4F6"/>
          </svg>
          {hover? 
        <HoverMenus>
           <MenuButton>
           <Logos>
              <svg width="14" height="19" viewBox="0 0 14 19" fill="none" style={{paddingRight:'20px'}} xmlns="http://www.w3.org/2000/svg">
                <path d="M3.90909 8.17749L7.18182 11.3774M7.18182 11.3774L10.0909 8.17749M7.18182 11.3774V0M1 12.839V17.7771H13C13 17.7771 13 9.38238 13 14.5773" stroke="black" strokeWidth="1.5"/>
              </svg>
            </Logos>
            Download
          </MenuButton>  

          <MenuButton>
            <Logos>
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" rigth='20px' style={{paddingRight:'20px'}} xmlns="http://www.w3.org/2000/svg">
                <path d="M5.6263 11.9647H5.1263V12.4647V13.5971V14.0971H5.6263H12.3767H12.8767V13.5971V12.4647V11.9647H12.3767H5.6263ZM5.6263 14.2323H5.1263V14.7323V15.8647V16.3647H5.6263H12.3767H12.8767V15.8647V14.7323V14.2323H12.3767H5.6263ZM13.0008 16.5H4.99933V13.6V11.8323H13.0008V13.6V16.5Z" fill="#0F2137" stroke="#0F2137"/>
                <path d="M4.99933 0.5H13.0008V3.4V5.16763H4.99933V3.4V0.5Z" fill="#0F2137" stroke="#0F2137"/>
                <path d="M14.6248 7.29999H15.1248V6.79999V5.66762V3.89999H15.7489C16.1488 3.89999 16.5904 4.10591 16.9422 4.46034C17.2939 4.81455 17.5 5.26103 17.5 5.66762V11.3324C17.5 11.7386 17.2935 12.185 16.9413 12.5395C16.5889 12.8942 16.1472 13.1 15.7489 13.1H15.1248V11.3324V10.2V9.7H14.6248H3.37518H2.87518V10.2V11.3352V13.1029H2.25107C1.85161 13.1029 1.41002 12.8966 1.05792 12.5416C0.705987 12.1868 0.5 11.7402 0.5 11.3352V5.66762C0.5 5.26103 0.706145 4.81455 1.05777 4.46034C1.40962 4.10591 1.85122 3.89999 2.25107 3.89999H2.87518V5.66762V6.79999V7.29999H3.37518H14.6248Z" fill="#0F2137" stroke="#0F2137"/>
              </svg>
            </Logos>
            Print
            </MenuButton>

            <DelLogo>
            <Logos>
              <svg width="15" height="17" viewBox="0 0 15 17" fill="none"  style={{paddingRight:'20px'}} xmlns="http://www.w3.org/2000/svg">
                <path d="M7.16973 12.7548H7.16974V12.7516V5.95157C7.16974 5.74629 7.32893 5.6 7.50153 5.6C7.67225 5.6 7.83333 5.7475 7.83333 5.95157V12.7516C7.83333 12.9525 7.67532 13.1 7.50153 13.1C7.3236 13.1 7.16844 12.9521 7.16973 12.7548ZM11.1667 1.7V2.2H11.6667H14.1682C14.3414 2.2 14.4983 2.34616 14.4969 2.5483H14.4969V2.55157C14.4969 2.7525 14.3389 2.9 14.1651 2.9H13.6651V3.4V15.3C13.6651 15.9725 13.1338 16.5 12.4985 16.5H2.49847C1.86309 16.5 1.3318 15.9725 1.3318 15.3V3.4V2.9H0.831799C0.656824 2.9 0.5 2.75442 0.5 2.55157C0.5 2.34629 0.659195 2.2 0.831799 2.2H3.33333H3.83333V1.7V0.848435C3.83333 0.649923 3.99204 0.5 4.1682 0.5H10.8349C11.008 0.5 11.1667 0.646795 11.1667 0.848435V1.7ZM1.99847 15.3V15.8H2.49847H11.9985H12.4985H12.5015V15.3H12.9985V3.4V2.9H12.4985H2.49847H1.99847V3.4V15.3ZM5.33487 12.7516C5.33487 12.9501 5.17616 13.1 5 13.1C4.82502 13.1 4.6682 12.9544 4.6682 12.7516V5.95157C4.6682 5.74629 4.8274 5.6 5 5.6C5.17497 5.6 5.33487 5.74871 5.33487 5.95157V12.7516ZM10.3318 12.7516C10.3318 12.9525 10.1738 13.1 10 13.1C9.82594 13.1 9.66713 12.9549 9.66513 12.7496V5.95157C9.66513 5.74871 9.82503 5.6 10 5.6C10.1707 5.6 10.3318 5.7475 10.3318 5.95157V12.7516Z" fill="#EB5757" stroke="#EB5757"/>
              </svg>
              </Logos>
              Delete
            </DelLogo>
        </HoverMenus>
        : <></>}
        </ThreeDotsButton>
    )
}
export default ThreeDots