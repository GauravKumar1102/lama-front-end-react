
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Adv = styled.div`
height: 30px;

background-color: #6CC4A1;
color: white;

display: flex;
font-size: 14px;
font-weight: 500;
align-items: center;
justify-content: center;
${mobile({
    height: "40px"
    
})}
`




const Advertisement = () => {
  return (
    
        <Adv>
        😃Today's fairest deal for every attire on 10% extra-less!😃
        </Adv>
  )
}

export default Advertisement