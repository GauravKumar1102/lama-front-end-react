import React from 'react'
import styled from 'styled-components'
import Advertisement from '../Components/Advertisement'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Product from '../Components/Product'

const Container = styled.div`
    

`
const Title = styled.h1`
margin: 20px;

`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
padding: 20px;
margin-right: 20px;

`
const Option = styled.option`
    

`


const ProductList = () => {
  return (
    <div>
        <Container>
            <Advertisement/>
            <Navbar/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>White</Option>
                    
                    <Option>Black</Option>
                    
                    <Option>Red</Option>
                    
                    <Option>Blue</Option>
                    
                    <Option>Yellow</Option>
                    
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option selected>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
                </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
                </Filter>
            </FilterContainer>
            <Product/>
            <Footer/>
        </Container>

        </div>

    )
}

export default ProductList