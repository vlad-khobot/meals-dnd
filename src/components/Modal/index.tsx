import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideModal } from '../../store/slices/appSlice'
import {
  ModalContainer,
  List,
  Header,
  Title,
  CloseButton,
  StyledCloseSvg,
  Item,
  Info,
  StyledImg,
  StyledButton,
} from './styled'

const forMapping = new Array(21).fill(0)
const Modal = () => {
  const dispatch = useDispatch()
  function dispatchHideModal() {
    dispatch(hideModal())
  }
  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(hideModal())
      }
    },
    [dispatch]
  )
  useEffect(() => {
    document.addEventListener('keydown', (e) => keyDownHandler(e))
    return () => {
      document.removeEventListener('keydown', (e) => keyDownHandler(e))
    }
  }, [keyDownHandler])
  return (
    <ModalContainer onClick={dispatchHideModal}>
      <List onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Recipes</Title>
          <CloseButton onClick={dispatchHideModal}>
            <StyledCloseSvg />
          </CloseButton>
        </Header>

        {forMapping.map((item, i) => (
          <Item key={i}>
            <Info>
              <StyledImg
                src='https://www.michaelbuble.com/sites/g/files/g2000002856/f/styles/media_gallery_large/public/Sample-image10-highres.jpg?itok=o__r64CL'
                alt='apple'
              />
              <span>Apple</span>
            </Info>

            <StyledButton>Select</StyledButton>
          </Item>
        ))}
      </List>
    </ModalContainer>
  )
}
export default Modal
