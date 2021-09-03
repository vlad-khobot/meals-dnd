import styled from 'styled-components'
import { ReactComponent as DoneSvg } from '../../assets/done.svg'

export const StyledHeader = styled.div`
  height: 120px;
  background: white;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
export const StyledDoneSvg = styled(DoneSvg)`
  height: 15px;
  width: 15px;
`
export const TopPart = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  box-shadow: 1px 0px 1px 0px grey;
`
export const BottomPart = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 1px 0px 1px 0px grey;
`
export const Info = styled.div`
  width: 7.5%;
  height: 60%;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  flex-direction: column;
  background: white;
  border-right: 2px solid #f7f6f7;
  gap: 2px;
`
export const Error = styled.div`
  height: 60%;
  width: 60.5%;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  margin-left: 20px;
  flex-direction: column;
  background: #ffd1d4;
  color: #d85562;
  font-size: 13px;
`
export const ButtonsContainer = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  button {
    margin: 0 10px;
  }
`
export const Dropdown = styled.button`
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  font-size: 20px;
  svg {
    transition: 0.2s;
  }
  &:hover svg {
    fill: #d0d2dae6;
  }
`
export const InfoButton = styled.button`
  width: 70px;
  height: 30px;
  background: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  transition: 0.2s;
  &:hover {
    background: #d0d2dae6;
  }
`
export const Title = styled.span`
  color: grey;
  font-size: 13px;
`
export const Description = styled.span`
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 2px;
`
