import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #13cbcb;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
padding: 20px;
width: 40%;
background-color: #fff;
${mobile({
    width: "75%"
    
})}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
    
`

const Form = styled.form`
display: flex;
flex-wrap: wrap;
flex-direction: column;


    
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
${mobile({
    textArea: "30px"
    
})}
`


const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #13cbcb;
color: white;
cursor: pointer;
`

const Links = styled.div`
display: flex;
flex-direction: row;


`
const Link = styled.a`
flex: 1;
cursor: pointer;
color: blue;
margin-top: 20px;
margin-bottom: 20px;
  
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            
          <Title>Sign In</Title>
            <Form>
            <Input placeholder ="Email"/>
            <Input placeholder ="Password"/>
            <Links>
              <Link>Create a New Account</Link>
              <Link>Forgot Password</Link>
                      
            </Links>
            <Button>Log in</Button>
            </Form>
          
        </Wrapper>
    </Container>
  )
}

export default Login