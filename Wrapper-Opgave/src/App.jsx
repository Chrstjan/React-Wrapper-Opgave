import './App.scss'
import { textObject } from './assets/App'
import { Card } from './components/Card/Card'
import { CardBody } from './components/Card/CardBody/CardBody'
import { CardFooter } from './components/Card/CardFooter/CardFooter'
import { CardHeader } from './components/Card/CardHeader/CardHeader'
import { Wrapper } from './components/Wrapper/Wrapper'

function App() {
  return (
    <>
      <Wrapper title="Wrapper Component" subtitle="Subtitle">
        <Card>
          <CardHeader title="Card Title"/>
          <CardBody content="Card Content"/>
          <CardFooter footerContent="Footer Content"/>
        </Card>
      </Wrapper>
    </>
  )
}

export default App
