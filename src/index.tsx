
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App';
import About from './pages/about/About';
import { LazyShop } from '@/pages/shop/Shop.lazy';

const root = document.getElementById('root')

if (!root) {
	throw new Error('root not found')
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
		children: [
			{
				path: '/about', 
				element:	<About/>
			},
			{
				path: '/shop', 
				element: <Suspense fallback={'Loading...'}><LazyShop/></Suspense>
			},
		]
  },
]);

container.render(<RouterProvider router={router}/>)