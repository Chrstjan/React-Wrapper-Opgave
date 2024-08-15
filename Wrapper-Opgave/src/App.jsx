import './App.scss'
import { objectsArray } from './assets/App'
import { Card } from './components/Card/Card'
import { CardBody } from './components/Card/CardBody/CardBody'
import { CardFooter } from './components/Card/CardFooter/CardFooter'
import { CardHeader } from './components/Card/CardHeader/CardHeader'
import { Wrapper } from './components/Wrapper/Wrapper'

function App() {
  return (
    <>
      <Wrapper title="Wrapper Component" subtitle="Subtitle">
      {objectsArray.map((card) => {
        //MUST RETURN TO RENDER HTML ELEMENTS
          return (
          <Card>
            <CardHeader title={card.title}/>
            <CardBody content={card.textContent} image={card.image}/>
            <CardFooter footerContent={card.footerContent}/>
        </Card>
          )
        })}
      </Wrapper>
    </>
  )
}

export default App
