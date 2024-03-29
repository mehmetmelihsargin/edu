import React from 'react';
import { useFormik } from 'formik';

const SignIn = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      password: '',
      zip: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  });



  return (
    <div className=' flex items-center mt-16 justify-center'>
      <div className="">
        <section className="">
          <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap g-6"
          >
            <div
              className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full hidden lg:flex"
                alt="Sample"
              />
            </div>
            <div className='w-2/4'>
              <form className="flex flex-col justify-center p-12 w-full h-full" onSubmit={formik.handleSubmit}>
                <div className="flex flex-wrap w-full h-full -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label htmlFor="grid-first-name" className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" >
                      First Name
                    </label>
                    <input

                      name="firstName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"

                      placeholder="Jane" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="grid-last-name" className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" >
                      Last Name
                    </label>
                    <input

                      name="lastName"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                      id="grid-last-name"

                      placeholder="Doe" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label htmlFor="grid-email-name" className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" >
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white "
                      id="grid-email-name"
                      placeholder="janedoe@example.com" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label htmlFor='grid-password' className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" >
                      Password
                    </label>
                    <input
                      name='password'
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " id="grid-password" type="password" placeholder="**********" />
                    <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label htmlFor='grid-city' className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" >
                      City
                    </label>
                    <input
                      name='city'
                      onChange={formik.handleChange}
                      value={formik.values.city}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white " id="grid-city" type="text" placeholder="Rize" />
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" >
                      State
                    </label>
                    <div className="relative">
                      <select className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white " id="grid-state">
                        <option>Marmara</option>
                        <option>Ege</option>
                        <option>İç Anadolu</option>
                        <option>Karadeniz</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label htmlFor='grid-zip' className="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2" >
                      Zip
                    </label>
                    <input
                      name='zip'
                      onChange={formik.handleChange}
                      value={formik.values.zip}
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white " id="grid-zip" type="text" placeholder="90210" />
                  </div>
                </div>
                <div className="text-center mt-6 lg:text-left">
                  <button
                    type="button"
                    onChange={formik.handleSubmit}
                    className="inline-block px-7 py-3 text-blue-500 bg-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-500 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                  <p className="text-sm text-blue-400 font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="#!"
                      className="text-blue-600 hover:text-blue-700 ml-3 focus:text-blue-700 transition duration-200 ease-in-out"
                    >Register</a
                    >
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignIn;