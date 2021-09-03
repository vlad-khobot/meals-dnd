import styled from 'styled-components'
import MealPageHeader from '../MealPageHeader'
import MealsContainers from '../MealsContainers'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import {
  onDragEnd,
  selectColumns,
  selectShowModal,
} from '../../store/slices/appSlice'
import Modal from '../Modal'

export interface ColumnsProps {
  [x: string]: {
    name: string
    calories: number
    items: {
      id: string
      content: string
    }[]
  }
}

const MealPageContainer = styled.div`
  background: white;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px grey;
  margin: 0 auto;
  min-height: 770px;
  width: 100%;
`
const MainText = styled.h1`
  text-align: left;
  color: #2c2d57;
`
const PageWrapper = styled.div`
  min-width: 1500px;
  margin: 0 auto;
`

const MealPage = () => {
  const dispatch = useDispatch()
  function dispatchDragEnd(result: DropResult) {
    dispatch(
      onDragEnd({
        result: result,
        columns: selectCols,
      })
    )
  }
  const selectCols = useSelector(selectColumns)
  const showModal = useSelector(selectShowModal)
  return (
    <>
      {showModal && <Modal />}
      <PageWrapper>
        <MainText>Zenfit Meal [v2]</MainText>
        <MealPageContainer>
          <MealPageHeader />
          <DragDropContext onDragEnd={(result) => dispatchDragEnd(result)}>
            <MealsContainers containersData={selectCols} />
          </DragDropContext>
        </MealPageContainer>
      </PageWrapper>
    </>
  )
}
export default MealPage
