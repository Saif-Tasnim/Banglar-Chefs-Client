import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto mt-28 mb-20'>
            <div className='flex justify-center items-center'>
            <h1 className='text-center text-2xl mb-12'>All Blogs Are Here ... </h1>
            
            <button className="btn btn-accent ml-64 -mt-9"> Download Pdf </button>

            </div>
            

            <div className='mt-8'>
                <h2 className='text-center text-xl mb-4 font-bold'> Tell us the differences between uncontrolled and controlled components.
                </h2>

                <p className='mt-3'>
                    <b> Uncontrolled components : </b> These are components where form data is handled by the DOM itself rather than controlled by React. The state of the form elements resides in the DOM, and to access the form data, you directly query the DOM using JavaScript.

                </p>

                <p className='mt-3'>
                    <b> Controlled components: </b> In contrast, controlled components have their form state managed by React. The state of the form elements is controlled by React and stored in the components state. Any changes to the form elements trigger a state update, and React re-renders the component accordingly.

                </p>
            </div>

            <div className='mt-8'>
                <h2 className='text-center text-xl mb-4 font-bold'>
                    How to validate React props using PropTypes ?
                </h2>

                <p>React provides a library called PropTypes that allows you to define the expected types and structure of the props passed to a component. By defining prop types, you can enforce type checking and provide warnings in development if the props are used incorrectly. PropTypes help ensure that the correct data is passed to components, improving code reliability and catching potential bugs early.
                </p>

            </div>

            <div className='mt-8'>
                <h2 className='text-center text-xl mb-4 font-bold'>
                    Tell us the difference between nodejs and express js.
                </h2>

                <p className='mt-3'>
                    <b> Node.js: </b> Node.js is a runtime environment that allows you to execute JavaScript code outside of a web browser. It provides a server-side runtime environment for building scalable and efficient web applications using JavaScript. Node.js offers features like event-driven architecture, non-blocking I/O operations, and a vast ecosystem of modules to enhance web development.


                </p>

                <p className='mt-3'>
                    <b> Express.js: </b>Express.js is a popular web application framework built on top of Node.js. It simplifies the process of building web applications by providing a set of robust and flexible features. Express.js handles routing, middleware, and other common web development tasks, making it easier to build server-side applications with Node.js. It offers a minimalistic and unopinionated approach, allowing developers to structure and customize their applications as needed.

                </p>

            </div>
            
            <div className='mt-8'>
                <h2 className='text-center text-xl mb-4 font-bold'>
                    What is a custom hook, and why will you create a custom hook?
                </h2>

                <p className='mt-3'>

                    Custom hooks in React are JavaScript functions that allow you to reuse logic across multiple components. They enable you to extract component logic into reusable functions that can be shared and used in different components. Custom hooks provide a way to encapsulate and share stateful logic, side effects, or common functionalities, making the code more modular, readable, and reusable.

                </p>

                <p className='mt-3'>
                    Creating a custom hook can be beneficial when you have complex logic that needs to be shared between components. It helps in reducing code duplication, promoting reusability, and simplifying component composition. Custom hooks enable you to abstract away complex logic into a separate function, making your components cleaner and easier to understand. They also improve maintainability and allow for better separation of concerns within your codebase.
                </p>

            </div>
        </div>
    );
};

export default Blog;