import React from 'react';
import "./Blog.css";
const Blog = () => {
  return (
		<div className="dark:bg-gray-800 dark:text-gray-100">
			<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
				<div className="mt-3">
					<h1 className="text-3xl text-green-500">
						Purpose Of React Router
					</h1>
					<p className="mt-2 text-2xl ">
						React Router, and dynamic, client-side
						routing, allows us to build a
						single-page web application with
						navigation without the page refreshing
						as the user navigates. React Router
						uses component structure to call
						components, which display the
						appropriate information. By preventing
						a page refresh, and using Router or
						Link, which is explained in more depth
						below, the flash of a white screen or
						blank page is prevented. This is one
						increasingly common way of having a
						more seamless user experience. React
						router also allows the user to utilize
						browser functionality like the back
						button and the refresh page while
						maintaining the correct view of the
						application.
					</p>
				</div>
			</div>

			<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
				<div className="mt-3">
					<h1 className="text-3xl text-green-500">
						How does Context Api Works?
					</h1>
					<p className="mt-2 text-2xl">
						The React Context API is a way for a
						React app to effectively produce
						global variables that can be passed
						around. This is the alternative to
						"prop drilling" or moving props from
						grandparent to child to parent, and so
						on. Context is also touted as an
						easier, lighter approach to state
						management using Redux. <br />
						React.createContext() is all you need.
						It returns a consumer and a provider.
						Provider is a component that as it's
						names suggests provides the state to
						its children. It will hold the "store"
						and be the parent of all the
						components that might need that store.
						Consumer as it so happens is a
						component that consumes and uses the
						state.
					</p>
				</div>
			</div>

			<div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
				<div className="mt-3">
					<h1 className="text-3xl text-green-500">useRef Hook</h1>
					<p className="mt-2 text-2xl">
						There is a prerequisite to know about
						the ref in react. The useRef is a hook
						that allows to directly create a
						reference to the DOM element in the
						functional component. <br />
						The useRef returns a mutable ref
						object. This object has a property
						called .current. The value is
						persisted in the refContainer.current
						property. These values are accessed
						from the current property of the
						returned object. The .current property
						could be initialised to the passed
						argument initialValue e.g.
						useRef(initialValue). The object can
						persist a value for a full lifetime of
						the component.
					</p>
				</div>
			</div>
		</div>
  );
};

export default Blog;