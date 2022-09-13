import { Facebook, Instagram, LocationOn, Mail, Phone, Pinterest, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = styled.div`
    display: flex;
    
    ${mobile({
   flexDirection : "column",
   backgroundColor : "#f7f7f7"
    
})}

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;

`
const Logo = styled.h1`
  font-weight  :600 ;
`
const Desc = styled.p`
    margin: 20px 0;
    font-weight: 500;

`
const SocialContainer = styled.div`
display: flex; 

`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: ${props=> props.color };
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;


`

const Center = styled.div`
flex: 1;
padding: 20px;

`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
   margin: 0;
   padding: 0; 
   list-style: none;
   display: flex;
   flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50% ;
    margin-bottom: 10px;

`
const Right = styled.div`
flex: 1;
padding: 20px;

`
const ContactItem = styled.div`
 margin-bottom:20px ;
display: flex;
align-items: center;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Clothy.</Logo>
            <Desc>The strength of good design is now in your hands.
                 Truely own your cloth-piece by drawing the pattern and thereby choose the pattern.
                Get it printed with perfect fits that matches the occasion. Or simply let our designers vow you.
                 Make everyday with the true shine completely yours.
            </Desc>
            <SocialContainer>
                <SocialIcon color="Blue">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="Pink">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="Blue">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="Red">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
              <LocationOn style={{marginRight:"10px"}}/>  371, IIM Road, Lucknow, India.
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91 6386334694           
            </ContactItem>
            <ContactItem>
            <Mail style={{marginRight:"10px"}}/> gauravkr1102@gmail.com          
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer