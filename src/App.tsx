import styled from 'styled-components'
import MealPage from './components/MealPage'

const AppContainer = styled.div`
  background-color: #eceff2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

function App() {
  return (
    <AppContainer className='App'>
      <MealPage />
    </AppContainer>
  )
}

export default App
