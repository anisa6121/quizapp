import React from 'react';

const Herosection = () => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="flex flex-col justify-between lg:flex-row">
				<div className="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0 ">
					<div className="max-w-xl mb-6">
						<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
							Anytime Anywhere
							<br className="hidden md:block" />
							Learn on your
							<br />
							<span className="inline-block text-deep-purple-accent-400">
								Suitable Schedule
							</span>
						</h2>
						<p className="text-base text-gray-700 md:text-lg ">
							Find your favorite subject
							select <br /> and practice. It
							will increase your skills and
							knowledge.
						</p>
					</div>
					<hr className="mb-6 border-gray-300" />
				</div>

				<div className="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-3/5">
					<img src="images/tiny.jpg" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Herosection;