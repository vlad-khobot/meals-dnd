import { FC } from 'react'
import styled from 'styled-components'
import MealContainer from '../MealContainer'
import { ColumnsProps } from '../MealPage'
interface MealProps {
  containersData: ColumnsProps
}

const StyledMealsContainers = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  height: 80%;
  gap: 5px;
`

const Meals: FC<MealProps> = ({ containersData }) => {
  return (
    <StyledMealsContainers>
      {Object.entries(containersData).map(([columnId, column], index) => (
        <MealContainer key={columnId} columnId={columnId} column={column} />
      ))}
    </StyledMealsContainers>
  )
}
export default Meals
