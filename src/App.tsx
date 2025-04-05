import { Header } from './components/Header/Header'

import './styles/Global.scss'
import { Main } from './components/Main/Main'
import { TodoProvider } from './TodoContext'


function App() {
  return (
    <>
      <TodoProvider>
      <Header/>
      <Main/>
      </TodoProvider>
    </>
  )
}

export default App
