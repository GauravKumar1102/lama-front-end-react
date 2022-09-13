
import styled from 'styled-components'


const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;


`
const Title = styled.h1`
padding: 5px;
margin-bottom: 10px;
color: white;
font-weight: 650;

`

const Button = styled.button`
border: none;
padding: 10px;
cursor: pointer;
font-weight: 700;
background-color: white;
color: gray;

`
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
    </Container>


  )
}

export default CategoryItem