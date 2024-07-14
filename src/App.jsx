import './index.css'
import { ProductList, Modal, Cart } from './components'
import data from './data.json'
function App() {
  return (
    <>
      <main className='flex flex-col items-center justify-center py-8 bg-Rose_50'>
        <ProductList />
        <Cart />
        <Modal />
      </main>
    </>
  )
}

export default App
