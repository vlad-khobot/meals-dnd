import { FC } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import ContainerBody from '../ContainerBody'
import ContainerHeader from '../ContainerHeader'
export interface ListProps {
  id: string
  content: string
}
export interface ColumnProps {
  name: string
  calories: number
  items: {
    id: string
    content: string
  }[]
}
interface MealContainerProps {
  columnId: string
  column: ColumnProps
}
const StyledMealContainer = styled.div<{ isDropDisabled: boolean }>`
  padding-bottom: 20px;
  border-radius: 5px;
  width: 19.3%;
  background: white;
  transition: 0.2s;
  box-shadow: 0px 0px 2px grey;
  &:hover {
    background: #bec2cfe6;
  }
`

const MealContainer: FC<MealContainerProps> = ({ columnId, column }) => {
  const isDropDisabled = column.items.length === 6
  return (
    <StyledMealContainer isDropDisabled={isDropDisabled}>
      <ContainerHeader title={column.name} calories={column.calories} />
      <Droppable
        droppableId={columnId}
        key={columnId}
        isDropDisabled={isDropDisabled}
      >
        {(provided, snapshot) => {
          return (
            <>
              <ContainerBody
                {...provided.droppableProps}
                innerRef={provided.innerRef}
                column={column}
                provided={provided}
              />
            </>
          )
        }}
      </Droppable>
    </StyledMealContainer>
  )
}
export default MealContainer
