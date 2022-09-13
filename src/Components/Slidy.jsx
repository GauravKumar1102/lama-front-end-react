import styled  from 'styled-components'
import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import { sliderItems } from '../data'


const Container = styled.div`

width: 100%;
height: 60vh;
display: flex;
align-items: center;
justify-items: center;
position: relative;
justify-items: center;
background-color: #fff4f4;
overflow: hidden;

`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #d4d4d4;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom: 0;
margin: auto;
left: ${props=> props.direction === "Left" && "10px"};
right: ${props=> props.direction === "Right" && "10px"};
cursor: pointer;
opacity: 0.6; 
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
justify-items: center;
align-items: center;
transition: all 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slides = styled.div`

display: flex;
align-items: center;
width: 100vw;
height: 50vh;
  
`

const ImageContainer = styled.div`
flex:1;



`
const Image = styled.img`
flex: 1;




`
const InfoContainer = styled.div`
flex:1;
padding: 50px;
margin: 50px;
align-items: center;
justify-items: center;




`
const Title = styled.h1`
font-size: 30px;

`
const Desc = styled.p`
margin-top: 10px;
font-size: 20px;
font-weight: 500;

`

const Button = styled.button`
border: none;
padding: 10px;
cursor: pointer;
font-weight: 700;
font-size: 20px;
background-color: white;
color: gray;
margin-top: 10px;

`



const Slidy = () => {
  const[slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction)=>{

      if(direction === "Left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
      } else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0 )
      }


  };

  return (
    <Container>
          
                    <Arrow direction = "Left" onClick={()=>handleClick("Left")}>
                        <ArrowLeft/>
                    </Arrow>
            <Wrapper slideIndex={slideIndex}>
              {sliderItems.map(item =>(

                <Slides>
                     
                      <ImageContainer>
                          <Image src={item.img}/>
                      </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    
                    </InfoContainer>
                    </Slides>
                      ))}
                   
            </Wrapper>
                    <Arrow direction ="Right" onClick={()=> handleClick("right")}>
                        <ArrowRight/>
                    </Arrow>
            

    </Container>
  )
}

export default Slidy