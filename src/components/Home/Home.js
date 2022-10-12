import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Herosection from '../Herosection/Herosection';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const loaderData = useLoaderData()

    const quizData = loaderData.data
    // console.log(loaderData)
    console.log(quizData)
    return (
		<div>
			<Herosection></Herosection>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-24 lg:px-8 lg:py-20">
				<div className=" grid gap-6 row-gap-3 mb-8 lg:grid-cols-2 sm:row-gap-6 sm:grid-cols-1 ">
					{quizData.map((quiz) => (
						<Quiz
							quiz={quiz}
							key={quiz.id}
						></Quiz>
					))}
				</div>
			</div>
		</div>
    );
};

export default Home;