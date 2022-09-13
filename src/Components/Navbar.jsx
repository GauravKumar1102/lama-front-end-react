
import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {mobile} from "../Responsive"



const Container = styled.div`
background-color: teal;
height: 60px;
justify-content: space-between;
align-items: center;

${mobile({
    height: "50px",
    
})}
`


const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({
    padding: "10px 0px"
    
})}
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
color: white;
`

  
const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({
   display: "none"
    
})}

`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Inpute = styled.input`
border: none;
background-color: teal;
${mobile({
   width : "50px"
    
})}

    
`

const Center = styled.div`
flex: 1;
font-weight: bold;
text-align: center;
color: white;
`
const Logo = styled.h1`
font-weight: bold;
${mobile({
    fontSize:"24px"
    
})}
    
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
color: white;
justify-content: flex-end;
${mobile({
    justifyContent: "center",
    flex: "2"
    
})}

`  
const MenuItem = styled.div`

font-size: 14;
cursor: pointer;
margin-left: 25px;
${mobile({
    fontSize: "12px",
    marginLeft : "10px"
    
})}
`

const ShopCart = styled.div`
margin-left: 30px;
cursor: pointer;

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           
            <Left>
              <Language>EN</Language>  
            <SearchContainer>
               <Inpute placeholder='Search'></Inpute>
               <Search/>
            </SearchContainer>
            
            </Left>
                <Center>
                    <Logo>Clothy.</Logo>
            
                </Center>
            <Right>
              
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <ShopCart>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />                  
                    </Badge>
                    </ShopCart>

           
             
            

            </Right>

        </Wrapper>

    </Container>
  )
}

export default Navbar