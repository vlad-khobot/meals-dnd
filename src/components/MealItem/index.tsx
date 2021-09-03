import { FC } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
interface MealProps {
  backgroundUrl: string
  index: number
  id: string
}
const StyledMeal = styled.div<{ backgroundUrl: string }>`
  width: 60px;
  height: 60px;
  border: 2px solid white;
  margin: 10px 10px;
  border-radius: 5px;
  background-image: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 3px 1px grey;
  &:hover {
    opacity: 0.5;
  }
`

const Meal: FC<MealProps> = ({ backgroundUrl, index, id }) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <>
            <StyledMeal
              data-tip
              data-for='happyFace'
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              backgroundUrl={backgroundUrl}
            ></StyledMeal>
            <ReactTooltip
              backgroundColor={'#2f355a'}
              id='happyFace'
              type='error'
            >
              <p style={{ textAlign: 'center' }}>
                Some description and <br /> the amount of kcal
              </p>
              <img
                style={{
                  width: '100px',
                  height: '90px',
                  marginTop: '5px',
                  marginLeft: '12px',
                }}
                src={backgroundUrl}
                alt='hint'
              />
            </ReactTooltip>
          </>
        )
      }}
    </Draggable>
  )
}
export default Meal
