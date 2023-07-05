import React from 'react'

const About = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2=7xl px-5 lg:px-8">
          <h1 className="text-2xl font-sans tracking-tight text-black-300 sm:text-5xl">About iNotebook</h1>
          <p className=" mb-4 mt-6 text-lg leading-8 text-gray-600">iNotebook is a powerful online note-taking application that helps you stay organized
            and keep track of your thoughts, ideas, and tasks.</p>

          <h2 className="text-2xl font-bold tracking-tight text-black-300 sm:text-6x">Features</h2>
          <ul className="list-disc pl-6 mb-8 text-2xl tracking-tight text-gray-600 sm:text-2xl">
            <li>Easy and intuitive user interface</li>
            <li>Create, edit, and delete notes</li>
            <li>Categorize notes using tags</li>
            <li>Search notes by title or content</li>
            <li>Markdown support for formatting</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>

          <h2 className="text-2xl font-bold tracking-tight text-dark300 sm:text-6x">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">We would love to hear from you! If you have any questions, feedback, or suggestions, please feel free
            to reach out to us.</p>
          <p className="mt-2 text-lg leading-8 text-gray-600">Email: inotebook@gmail.com</p>
          <p className=" mb-6 mt-2 text-lg leading-8 text-gray-600">Phone: +91 9469xxxxxx</p>

          <h2 className="text-2xl font-bold tracking-tight text-dark-300 sm:text-6x">Location</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">iNotebook HQ</p>
          <p className="mt-2 text-lg leading-8 text-gray-600">123 Main Street</p>
          <p className="mt-2 text-lg leading-8 text-gray-600">City, State 12345</p>

        </div>
      </div>
      <footer className="bg-neutral-900 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-white">© 2023 iNotebook. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default About