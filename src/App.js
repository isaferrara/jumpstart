import './App.css';
import styled from 'styled-components'
import {useState} from 'react'

const Container= styled.div`
  width: 305px;
  height: 300px;
  background-color: white;
  position: absolute;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing:border-box;
  border-bottom: 4px solid #FEDEDD;
`
const Background = styled.div`
  background: #E5E5E5;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  ` 
const TextContainer= styled.div`
  width: 243px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`
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
const Title= styled.h1`
  font-size: 16px;
  font-weight: 600;
  line-height: 21.86px;
  text-align:center;
`
const Text= styled.p`
  font-size: 12px;
  font-weight: 400px;
  line-height: 18px;
  text-align:center;
  position: relative;
  bottom: 10px;
`

const ThreeDotsButton= styled.button`
  position: absolute;
  left: 85%;
  background:none;
  border: none;
`
const HoverMenu= styled.div`
  position: absolute; 
  left: 99%;
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
const Download = styled.button`
  background: none;
  width: 100%;
  height: 30%;
  margin-top:5px;
  font-size: 16px;
  border:none;
  display: flex;
  align-items: center;
  justify-content: left;
  &:hover {
    background: #B05EFD;
    color:white;
  }
  ` 
const Print = styled.button`
background: none;
width: 100%;
height: 30%;
font-size: 16px;
display: flex;
align-items: center;
justify-content: left;
border:none;
&:hover {
    background: #B05EFD;
    color:white;
  }
` 
const Delete = styled.button`
  background: none;
  width: 100%;
  height: 30%;
  font-size: 16px;
  color:red;
  border:none;
  display: flex;
  align-items: center;
  justify-content: left;
  &:hover {
    background: #B05EFD;
    color:white;
  }
  ` 

const Logos= styled.svg`
  color: black;
  margin: 0 10px ;
  &:hover{
    filter: invert(1);
  }
`




function App() {
  const [hover, setHover]= useState(false)


  return (
    <Background>
      <Container >
        <ThreeDotsButton onClick={()=> setHover(!hover)}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="9.5" r="1.5" fill="#343D48" fillOpacity="0.5"/>
            <circle cx="17.5" cy="16.5" r="1.5" fill="#343D48" fillOpacity="0.5"/>
            <circle cx="17.5" cy="23.5" r="1.5" fill="#343D48" fillOpacity="0.5"/>
            <rect x="0.5" y="0.5" width="33" height="33" rx="4.5" stroke="#F1F4F6"/>
          </svg>
        </ThreeDotsButton>

        {hover? <HoverMenu>
          <Download>
            <Logos width="14" height="19" viewBox="0 0 14 19" fill="none"  xmlns="http://www.w3.org/2000/svg">
              <path d="M3.90909 8.17749L7.18182 11.3774M7.18182 11.3774L10.0909 8.17749M7.18182 11.3774V0M1 12.839V17.7771H13C13 17.7771 13 9.38238 13 14.5773" stroke="black" strokeWidth="1.5"/>
            </Logos>
            Download
          </Download>

          <Print>
            <Logos width="18" height="17" viewBox="0 0 18 17" fill="none" rigth='20px' xmlns="http://www.w3.org/2000/svg">
              <path d="M5.6263 11.9647H5.1263V12.4647V13.5971V14.0971H5.6263H12.3767H12.8767V13.5971V12.4647V11.9647H12.3767H5.6263ZM5.6263 14.2323H5.1263V14.7323V15.8647V16.3647H5.6263H12.3767H12.8767V15.8647V14.7323V14.2323H12.3767H5.6263ZM13.0008 16.5H4.99933V13.6V11.8323H13.0008V13.6V16.5Z" fill="#0F2137" stroke="#0F2137"/>
              <path d="M4.99933 0.5H13.0008V3.4V5.16763H4.99933V3.4V0.5Z" fill="#0F2137" stroke="#0F2137"/>
              <path d="M14.6248 7.29999H15.1248V6.79999V5.66762V3.89999H15.7489C16.1488 3.89999 16.5904 4.10591 16.9422 4.46034C17.2939 4.81455 17.5 5.26103 17.5 5.66762V11.3324C17.5 11.7386 17.2935 12.185 16.9413 12.5395C16.5889 12.8942 16.1472 13.1 15.7489 13.1H15.1248V11.3324V10.2V9.7H14.6248H3.37518H2.87518V10.2V11.3352V13.1029H2.25107C1.85161 13.1029 1.41002 12.8966 1.05792 12.5416C0.705987 12.1868 0.5 11.7402 0.5 11.3352V5.66762C0.5 5.26103 0.706145 4.81455 1.05777 4.46034C1.40962 4.10591 1.85122 3.89999 2.25107 3.89999H2.87518V5.66762V6.79999V7.29999H3.37518H14.6248Z" fill="#0F2137" stroke="#0F2137"/>
            </Logos>
            Print
          </Print>

          <Delete>
            <Logos width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.16973 12.7548H7.16974V12.7516V5.95157C7.16974 5.74629 7.32893 5.6 7.50153 5.6C7.67225 5.6 7.83333 5.7475 7.83333 5.95157V12.7516C7.83333 12.9525 7.67532 13.1 7.50153 13.1C7.3236 13.1 7.16844 12.9521 7.16973 12.7548ZM11.1667 1.7V2.2H11.6667H14.1682C14.3414 2.2 14.4983 2.34616 14.4969 2.5483H14.4969V2.55157C14.4969 2.7525 14.3389 2.9 14.1651 2.9H13.6651V3.4V15.3C13.6651 15.9725 13.1338 16.5 12.4985 16.5H2.49847C1.86309 16.5 1.3318 15.9725 1.3318 15.3V3.4V2.9H0.831799C0.656824 2.9 0.5 2.75442 0.5 2.55157C0.5 2.34629 0.659195 2.2 0.831799 2.2H3.33333H3.83333V1.7V0.848435C3.83333 0.649923 3.99204 0.5 4.1682 0.5H10.8349C11.008 0.5 11.1667 0.646795 11.1667 0.848435V1.7ZM1.99847 15.3V15.8H2.49847H11.9985H12.4985H12.5015V15.3H12.9985V3.4V2.9H12.4985H2.49847H1.99847V3.4V15.3ZM5.33487 12.7516C5.33487 12.9501 5.17616 13.1 5 13.1C4.82502 13.1 4.6682 12.9544 4.6682 12.7516V5.95157C4.6682 5.74629 4.8274 5.6 5 5.6C5.17497 5.6 5.33487 5.74871 5.33487 5.95157V12.7516ZM10.3318 12.7516C10.3318 12.9525 10.1738 13.1 10 13.1C9.82594 13.1 9.66713 12.9549 9.66513 12.7496V5.95157C9.66513 5.74871 9.82503 5.6 10 5.6C10.1707 5.6 10.3318 5.7475 10.3318 5.95157V12.7516Z" fill="#EB5757" stroke="#EB5757"/>
            </Logos>

          Delete</Delete>

        </HoverMenu>: <></>}


        <TextContainer>
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="22" fill="#FEDEDD"/>
            <path d="M35 17.2304V13.6765C35 13.5539 34.8775 13.4314 34.7549 13.3088L32.549 12.0833V10.3676C32.549 10.1225 32.4265 10 32.1814 10H13.6765H10.3676C10.1225 10 10 10.1225 10 10.3676V36.2255C10 36.4706 10.1225 36.5931 10.3676 36.5931H13.6765H32.1814C32.4265 36.5931 32.549 36.4706 32.549 36.2255V34.3873L34.7549 33.1618C34.8775 33.0392 35 32.9167 35 32.7941V29.3627C35 29.2402 34.8775 29.1176 34.7549 28.9951L33.7745 28.5049L34.7549 28.0147C34.8775 27.8922 35 27.7696 35 27.6471V24.2157C35 24.0931 34.8775 23.9706 34.7549 23.848L33.7745 23.3578L34.7549 22.8676C34.8775 22.7451 35 22.6226 35 22.5V18.9461C35 18.8235 34.8775 18.701 34.7549 18.5784L33.7745 18.0882L34.7549 17.598C34.8775 17.4755 35 17.3529 35 17.2304ZM10.8578 10.8578H13.3088V35.8578H10.8578V10.8578ZM31.8137 35.8578H14.0441V10.8578H31.8137V12.451V17.7206V22.8676V22.9902V28.1373V34.2647V35.8578ZM34.1422 32.6716L32.549 33.5294V28.75L34.1422 29.6078V32.6716ZM34.1422 27.402L32.9167 28.0147L32.549 27.8922V23.6029L34.1422 24.4608V27.402ZM34.1422 22.1324L32.9167 22.7451L32.549 22.6226V18.3333L34.1422 19.1912V22.1324ZM34.1422 16.9853L32.9167 17.598L32.549 17.3529V13.0637L34.1422 13.9216V16.9853Z" fill="#DA0703"/>
            <path d="M26.9118 16.0048H18.8235C17.7206 16.0048 16.8627 16.8626 16.8627 17.9656V20.4166C16.8627 21.5195 17.7206 22.3773 18.8235 22.3773H26.9118C28.0147 22.3773 28.8725 21.5195 28.8725 20.4166V17.9656C28.9951 16.8626 28.0147 16.0048 26.9118 16.0048ZM28.1372 20.5391C28.1372 21.1519 27.647 21.7646 26.9118 21.7646H18.8235C18.2108 21.7646 17.598 21.2744 17.598 20.5391V18.0881C17.598 17.4754 18.0882 16.8626 18.8235 16.8626H26.9118C27.5245 16.8626 28.1372 17.3528 28.1372 18.0881V20.5391Z" fill="#DA0703"/>
            <path d="M20.9069 24.9507H27.7696C28.0147 24.9507 28.1373 24.8281 28.1373 24.583C28.1373 24.3379 28.0147 24.2154 27.7696 24.2154H20.9069C20.6618 24.2154 20.5392 24.4605 20.5392 24.583C20.5392 24.7056 20.6618 24.9507 20.9069 24.9507Z" fill="#DA0703"/>
            <path d="M18.4559 24.0934H17.2304C16.9853 24.0934 16.8627 24.3385 16.8627 24.4611C16.8627 24.7062 17.1078 24.8287 17.2304 24.8287H18.4559C18.701 24.8287 18.8235 24.7062 18.8235 24.4611C18.8235 24.3385 18.701 24.0934 18.4559 24.0934Z" fill="#DA0703"/>
            <path d="M28.5049 26.5438H20.9069C20.6618 26.5438 20.5392 26.6664 20.5392 26.9115C20.5392 27.1566 20.6618 27.2791 20.9069 27.2791H28.6275C28.8726 27.2791 28.9951 27.1566 28.9951 26.9115C28.9951 26.6664 28.75 26.5438 28.5049 26.5438Z" fill="#DA0703"/>
            <path d="M18.4559 26.5438H17.2304C16.9853 26.5438 16.8627 26.6664 16.8627 26.9115C16.8627 27.1566 17.1078 27.2791 17.2304 27.2791H18.4559C18.701 27.2791 18.8235 27.1566 18.8235 26.9115C18.8235 26.6664 18.701 26.5438 18.4559 26.5438Z" fill="#DA0703"/>
            <path d="M26.9118 28.8723H20.9069C20.6618 28.8723 20.5392 28.9948 20.5392 29.2399C20.5392 29.485 20.6618 29.6076 20.9069 29.6076H26.9118C27.1569 29.6076 27.2794 29.485 27.2794 29.2399C27.2794 29.1174 27.1569 28.8723 26.9118 28.8723Z" fill="#DA0703"/>
            <path d="M18.4559 28.8723H17.2304C16.9853 28.8723 16.8627 28.9948 16.8627 29.2399C16.8627 29.485 17.1078 29.6076 17.2304 29.6076H18.4559C18.701 29.6076 18.8235 29.485 18.8235 29.2399C18.8235 29.1174 18.701 28.8723 18.4559 28.8723Z" fill="#DA0703"/>
          </svg>
          <Title>Corporate Bylaws</Title>
          <Text>An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors.</Text>
        </TextContainer>
        <Button> View Document</Button>
      </Container>
    </Background>
  );
}
export default App;
