
import styled from 'styled-components'
import { categoriesData } from '../data'
import { mobile } from '../Responsive'
import CategoryItem from './CategoryItem'

const Container = styled.div`

display: flex;
padding: 20px;
justify-content: space-between;

${mobile({
    padding: "0px",
    flexDirection: "column"
    
})}
`

const Categories = () => {
  return (
    <Container>
      {categoriesData.map(item=>(
        <CategoryItem item = {item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories