import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex'>
      <div onClick={() => setIsOpen(!isOpen)} className=' flex'>
        <span className='material-symbols-rounded'>menu</span>
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => setIsOpen(!isOpen)}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full pl-64'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'>
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                    <div
                      className=' top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800'
                      tabIndex={-1}
                      aria-labelledby='drawer-navigation-label'>
                      <h5
                        id='drawer-navigation-label'
                        className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
                        Menu
                      </h5>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        type='button'
                        data-drawer-hide='drawer-navigation'
                        aria-controls='drawer-navigation'
                        className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
                        <svg
                          aria-hidden='true'
                          className='w-5 h-5'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'>
                          <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'
                          />
                        </svg>
                        <span className='sr-only'>Close menu</span>
                      </button>
                      <div className='py-4 overflow-y-auto'>
                        <ul className='space-y-2'>
                          <li>
                            <a
                              href='#'
                              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                              <svg
                                aria-hidden='true'
                                className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                                <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                              </svg>
                              <span className='ml-3'>Dashboard</span>
                            </a>
                          </li>
                          <li>
                            <button
                              type='button'
                              className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                              aria-controls='dropdown-example'
                              data-collapse-toggle='dropdown-example'>
                              <svg
                                aria-hidden='true'
                                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  fillRule='evenodd'
                                  d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                                E-commerce
                              </span>
                              <svg
                                className='w-6 h-6'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  fillRule='evenodd'
                                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </button>
                            <ul
                              id='dropdown-example'
                              className='hidden py-2 space-y-2'>
                              <li>
                                <a
                                  href='#'
                                  className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                  Products
                                </a>
                              </li>
                              <li>
                                <a
                                  href='#'
                                  className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                  Billing
                                </a>
                              </li>
                              <li>
                                <a
                                  href='#'
                                  className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                                  Invoice
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                              <svg
                                aria-hidden='true'
                                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                              </svg>
                              <span className='flex-1 ml-3 whitespace-nowrap'>
                                Kanban
                              </span>
                              <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                                Pro
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                              <svg
                                aria-hidden='true'
                                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z' />
                                <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z' />
                              </svg>
                              <span className='flex-1 ml-3 whitespace-nowrap'>
                                Inbox
                              </span>
                              <span className='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                                3
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                              <svg
                                aria-hidden='true'
                                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  fillRule='evenodd'
                                  d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <span className='flex-1 ml-3 whitespace-nowrap'>
                                Users
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                              <svg
                                aria-hidden='true'
                                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  fillRule='evenodd'
                                  d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <span className='flex-1 ml-3 whitespace-nowrap'>
                                Products
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                              <svg
                                aria-hidden='true'
                                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  fillRule='evenodd'
                                  d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <span className='flex-1 ml-3 whitespace-nowrap'>
                                Sign In
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                              <svg
                                aria-hidden='true'
                                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                  fillRule='evenodd'
                                  d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
                                  clipRule='evenodd'
                                />
                              </svg>
                              <span className='flex-1 ml-3 whitespace-nowrap'>
                                Sign Up
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='flex h-full flex-col overflow-y-scroll bg-gray-900 text-white shadow-xl'>
                      <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                        <div className='flex items-start justify-between'>
                          <Dialog.Title className='text-lg font-medium  '>
                            Shopping cart
                          </Dialog.Title>
                          <div className='ml-3 flex h-7 items-center'>
                            <button
                              type='button'
                              className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                              onClick={() => setIsOpen(!isOpen)}>
                              <span className='sr-only'>Close panel</span>
                            </button>
                          </div>
                        </div>

                        <div className='mt-8'>
                          <div className='flow-root'>
                            <ul
                              role='list'
                              className='-my-6 divide-y divide-gray-200'></ul>
                          </div>
                        </div>
                      </div>

                      <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                        <div className='flex justify-between text-base font-medium '>
                          <p>Subtotal</p>
                        </div>
                        <p className='mt-0.5 text-sm text-gray-300'>
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className='mt-6'>
                          <a
                            href='#'
                            className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
                            Checkout
                          </a>
                        </div>
                        <div className='mt-6 flex justify-center text-center text-sm text-gray-300'>
                          <p>
                            or{" "}
                            <button
                              type='button'
                              className='font-medium text-indigo-600 hover:text-indigo-500'>
                              Continue Shopping
                              <span aria-hidden='true'> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
  return (
    <div>
      {/* drawer init and show */}
      <span className='material-symbols-rounded block 2xl:hidden'>menu</span>
      {/* <div className='text-center'>
        <button
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
          type='button'
          data-drawer-target='drawer-navigation'
          data-drawer-show='drawer-navigation'
          aria-controls='drawer-navigation'>
          Show navigation
        </button>
      </div> */}
      {/* drawer component */}
      <div
        id='drawer-navigation'
        className=' top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800'
        // tabIndex={-1}
        aria-labelledby='drawer-navigation-label'>
        <h5
          id='drawer-navigation-label'
          className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'>
          Menu
        </h5>
        <button
          type='button'
          data-drawer-hide='drawer-navigation'
          aria-controls='drawer-navigation'
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'>
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <div className='py-4 overflow-y-auto'>
          <ul className='space-y-2'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' />
                  <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z' />
                </svg>
                <span className='ml-3'>Dashboard</span>
              </a>
            </li>
            <li>
              <button
                type='button'
                className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'
                aria-controls='dropdown-example'
                data-collapse-toggle='dropdown-example'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='flex-1 ml-3 text-left whitespace-nowrap'>
                  E-commerce
                </span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <ul id='dropdown-example' className='hidden py-2 space-y-2'>
                <li>
                  <a
                    href='#'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700'>
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Kanban</span>
                <span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300'>
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z' />
                  <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z' />
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Inbox</span>
                <span className='inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Users</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Products</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Sign In</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
