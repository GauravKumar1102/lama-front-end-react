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

    
`

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
    

`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #13cbcb;
color: white;
cursor: pointer;

    
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
            <Input placeholder ="name"/>
            <Input placeholder ="last name"/>
            <Input placeholder ="username"/>
            <Input placeholder ="email"/>
            <Input placeholder ="password"/>
            <Input placeholder ="Confirm Password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <b>Privacy Policy</b>
                </Agreement>
            <Button>Create Account</Button>    
            </Form>

        </Wrapper>

    </Container>
  )
}

export default Register