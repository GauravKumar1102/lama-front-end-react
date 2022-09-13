import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Advertisement from '../Components/Advertisement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'


const Container = styled.div`
    

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`

const ImgContainer = styled.div`
flex: 1;

`
const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;

`
const InfoContainer = styled.div`
flex: 1;
padding: 0 50px;
`
const Title = styled.h1`
font-weight: 200;

`
const Desc = styled.p`
margin: 20px 0;

`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0;
display: flex;
justify-content:space-between;

`

const Filter = styled.div`
display: flex;
align-items: center;`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;`
const FilterColor = styled.option`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 5px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`

const FilterSizeOption = styled.option`

    
`
const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;


`
const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
`
const Amount = styled.option`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0 5px;


    
`

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: #fff;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #d4d4d4;

}

`


const Product = () => {
  return (
    <Container>
        <Advertisement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
            <Image src="https://images.pexels.com/photos/11146184/pexels-photo-11146184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Leather Jacket</Title>
                <Desc>Contrary to popular belief, Lorem Ipsum is not simply random text.
                     It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                       looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites
                        of the word in classical literature, discovered the undoubtable source.
                </Desc>
                <Price>1500 Rs.</Price>
                <FilterContainer>
                    <Filter>

                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="Black"/>
                    <FilterColor color="Red"/>
                    <FilterColor color="Blue"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>

                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>  
                </AmountContainer>
               <Button>Add to Cart</Button>


                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product