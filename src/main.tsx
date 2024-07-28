import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/global.css'

function App() {
  return (
    <>
      <p className="text-red-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
        impedit soluta. Obcaecati veritatis nam, consectetur sed aut ipsa fugiat
        excepturi doloribus tempore officiis cum vel exercitationem ut impedit
        dolor laborum?
      </p>
    </>
  )
}

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
)
