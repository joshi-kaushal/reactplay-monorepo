import './App.css'
import { CounterProvider } from './context/counterProvider'
import Counter from './components/counter'
import IncrementButton from './components/increment'
import DecrementButton from './components/decrement'

function App() {

  return (
    <>
      <CounterProvider>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
          <Counter />
          <div className="flex space-x-4">
            <IncrementButton />
            <DecrementButton />
          </div>
        </div>
      </CounterProvider>
    </>
  )
}

export default App
