import { ReactComponent as EnterSvg } from '../../assets/enter.svg'
import { ReactComponent as ThreeDotsSvg } from '../../assets/dots.svg'
import {
  StyledHeader,
  TopPart,
  ButtonsContainer,
  Dropdown,
  InfoButton,
  BottomPart,
  Info,
  Title,
  Description,
  StyledDoneSvg,
  Error,
} from './styled'
const MealPageHeader = () => {
  return (
    <StyledHeader>
      <TopPart>
        <span>Test</span>
        <ButtonsContainer>
          <Dropdown>
            <ThreeDotsSvg />
          </Dropdown>
          <InfoButton>
            <EnterSvg />
            Details
          </InfoButton>
        </ButtonsContainer>
      </TopPart>
      <BottomPart>
        <Info>
          <Title>Target kcals</Title>
          <Description>4000</Description>
        </Info>
        <Info>
          <Title>Macro split</Title>
          <Description>40c/40p/20f</Description>
        </Info>
        <Info>
          <Title>Status</Title>
          <Description>
            <StyledDoneSvg /> Plan is visible
          </Description>
        </Info>
        <Info>
          <Title>Created</Title>
          <Description>26. apr. 2019</Description>
        </Info>
        <Error>
          One or more of your meals don't hit the target kcal amount. Replace
          the meal or edit it manually
        </Error>
      </BottomPart>
    </StyledHeader>
  )
}
export default MealPageHeader
