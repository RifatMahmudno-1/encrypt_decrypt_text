import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { FC } from 'react'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import AES from '@/pages/AES'

function Router({ Layout }: { Layout: FC }) {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '*',
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Index />
            },

            {
              path: 'aes',
              element: <AES />
            },
            {
              path: '*',
              element: <NotFound />
            }
          ]
        }
      ])}
    />
  )
}

export default Router
