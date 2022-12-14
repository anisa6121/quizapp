import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    
    console.log(quiz)
    const { total, name, logo, id } =quiz


    return (
		<div className="  transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl  bg-slate-300 ">
			<img
				className='h-40 mt-3 mx-auto  '
			
				src={logo}
				alt=""
			/>

			<div className="p-4">
				<h5> {name}</h5>
				<p className="mb-7 text-2xl"> Total Question: {total}</p>

				<Link
					to={`/quiz/${id}`}
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					Lets Go To Start
				</Link>
			</div>
		</div>
    ); 
};

export default Quiz;