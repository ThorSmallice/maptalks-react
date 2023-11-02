import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routers from './router'

const domNode = document.getElementById('root') as HTMLElement

createRoot(domNode).render(<RouterProvider router={routers}></RouterProvider>)
