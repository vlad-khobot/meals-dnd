import { FC } from 'react'
import styled from 'styled-components'
interface ItemHeaderProps {
  title: string
  calories: number
}
const ItemHeaderContainer = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 4px;
  padding: 0 10px;
`
const AbsoluteSpan = styled.span`
  position: absolute;
  right: 30px;
  bottom: 5px;
  color: #75a0c8;
  font-size: 13px;
`
const Title = styled.span`
  font-weight: bold;
  font-size: 12px;
  padding-top: 6px;
`
const Calories = styled.span`
  color: grey;
  font-size: 11px;
`
const ItemHeader: FC<ItemHeaderProps> = ({ title, calories }) => {
  return (
    <ItemHeaderContainer>
      <Title>{title}</Title>
      <Calories>{calories} kcals</Calories>
      <AbsoluteSpan>40c/40p/20f</AbsoluteSpan>
    </ItemHeaderContainer>
  )
}
export default ItemHeader
