import { FC } from 'react'
import styled from 'styled-components'
import MealItem from '../MealItem'
import { ReactComponent as AddSvg } from '../../assets/add.svg'
import { ColumnProps } from '../MealContainer'
import { DroppableProvided } from 'react-beautiful-dnd'
import { showModal } from '../../store/slices/appSlice'
import { useDispatch } from 'react-redux'

interface ItemBodyProps {
  column: ColumnProps
  innerRef: (element: HTMLElement | null) => any
  provided: DroppableProvided
}
const ItemBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
const AbsoluteButton = styled.button`
  width: 150px;
  height: 30px;
  position: absolute;
  left: 50%;
  bottom: -23px;
  transform: translate(-50%, 0);
  border: 1px solid grey;
  background: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: 0.2s;
  &:hover {
    background: #d0d2dae6;
  }
`
const MealList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-bottom: 20px;
  min-height: 524px;
  max-height: 524px;
`
const StyledAddSvg = styled(AddSvg)`
  height: 16px;
  width: 16px;
`
const ItemBody: FC<ItemBodyProps> = ({ column, innerRef, provided }) => {
  const dispatch = useDispatch()
  function showLoaderFunc() {
    dispatch(showModal())
  }
  return (
    <ItemBodyContainer ref={innerRef}>
      <MealList>
        {column.items.map((item, i) => (
          <MealItem index={i} backgroundUrl={item.content} id={item.id} />
        ))}
        {provided.placeholder}
      </MealList>
      <AbsoluteButton onClick={showLoaderFunc}>
        <StyledAddSvg />
        Add alternative
      </AbsoluteButton>
    </ItemBodyContainer>
  )
}
export default ItemBody
