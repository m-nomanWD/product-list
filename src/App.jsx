import './index.css'
import { ProductList, Modal, Cart } from './components'

function App() {
  return (
    <>
      <main className='flex flex-col max-w-7xl mx-auto  py-8 lg:px-6 bg-Rose_50 lg:flex-row '>
        <ProductList />
        <Cart />
        <Modal />
      </main>
    </>
  )
}

export default App
