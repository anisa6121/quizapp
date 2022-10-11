import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Chart from './components/Chart/Chart'
import Blog from './components/Blog/Blog'
import Main from './layout/Main';
import Errorpage from './components/Errorpage/Errorpage';



function App() {

  const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			errorElement: <Errorpage></Errorpage>,
			children: [
				// {
				// 	path: "/",
				// 	element: <Home></Home>,
				// },
				{
					path: "/home",

					element: <Home></Home>,
					loader: () => {
						return fetch(
							"https://openapi.programming-hero.com/api/quiz"
						);
					},
				},

				{
					path: "/chart",
					element: <Chart></Chart>,
				},
				{
					path: "/blog",
					element: <Blog></Blog>,
				},
			],
		},
  ]);


  return (
    <div className="">
      

		



			<RouterProvider router={router}></RouterProvider>
		</div>
  );
}

export default App;






