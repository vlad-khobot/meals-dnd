import styled from 'styled-components'
import { ReactComponent as CloseSvg } from '../../assets/close.svg'
export const ModalContainer = styled.div`
  background-color: #ffffffcc;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  display: flex;
  justify-content: center;
`
export const List = styled.div`
  overflow-y: auto;
  background-color: white;
`
export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`
export const Item = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 0px 1px 0px grey;
  padding: 5px 5px;
`
export const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const StyledCloseSvg = styled(CloseSvg)`
  width: 10px;
  height: 10px;
`
export const StyledButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 0 10px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    background: #d0d2dae6;
  }
`
export const Title = styled.div`
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`
export const CloseButton = styled.button`
  background: transparent;
  border: none;
  svg {
    transition: 0.2s;
  }
  &:hover svg {
    fill: grey;
  }
`
export const Header = styled.div`
  width: 480px;
  padding: 20px 15px;
  box-shadow: 1px 0px 1px 0px grey;
  display: flex;
  justify-content: space-between;
`
