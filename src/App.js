import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Chart from './components/Chart/Chart'
import Blog from './components/Blog/Blog'
import Main from './layout/Main';
import Errorpage from './components/Errorpage/Errorpage';
import Quizdetails from './components/Quizdetails/Quizdetails';
import Herosection from './components/Herosection/Herosection';




function App() {

  const router = createBrowserRouter([
		{
			path: "/",
			element: <Main></Main>,
			errorElement: <Errorpage></Errorpage>,
			children: [
				{
					path: "/",
					element: <Herosection></Herosection>,
				},
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
          path: '/quiz/:quizId',
          element: <Quizdetails></Quizdetails>,
          loader: async ({params}) => {
            // console.log(params);
     return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`
		);
          }

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







