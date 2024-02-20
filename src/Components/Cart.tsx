'use client'
import React, {Fragment} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {useDispatch, useSelector} from "react-redux";
import {remove} from "@/Redux/CartSlice";


interface CartProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

function Cart({isOpen, setIsOpen}: CartProps) {
    const dispatch = useDispatch();
    const cart = useSelector((state: any) => state.cart);

    const removeItem = (id: number) => {
        dispatch(remove(id));
    }

    return (
        <div>
            {cart.length > 0 ? (
                <Transition.Root show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"/>
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                                        enterFrom="translate-x-full"
                                        enterTo="translate-x-0"
                                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                                        leaveFrom="translate-x-0"
                                        leaveTo="translate-x-full"
                                    >
                                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                    <div className="flex items-start justify-between">
                                                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping
                                                            cart</Dialog.Title>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                <span className="absolute -inset-0.5"/>
                                                                <span className="sr-only">Close panel</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="mt-8">
                                                        <div className="flow-root">
                                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                {cart.map((product: any) => (
                                                                    <li key={product.id} className="flex py-6">
                                                                        <div
                                                                            className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img
                                                                                src={product.image}
                                                                                alt={product.image}
                                                                                className="h-full w-full object-cover object-center"
                                                                            />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div
                                                                                    className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href={product.title}>{product.title}</a>
                                                                                    </h3>
                                                                                    <p className="ml-4">{product.price}</p>
                                                                                </div>
                                                                                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                                                            </div>
                                                                            <div
                                                                                className="flex flex-1 items-end justify-between text-sm">
                                                                                <p className="text-gray-500">Qty {product.price}</p>

                                                                                <div className="flex">
                                                                                    <button
                                                                                        onClick={() => removeItem(product.id)}
                                                                                        type="button"
                                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                    >
                                                                                        Remove
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                    <div
                                                        className="flex justify-between text-base font-medium text-gray-900">
                                                        <p>Subtotal</p>
                                                        <p>$262.00</p>
                                                    </div>
                                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes
                                                        calculated at
                                                        checkout.</p>
                                                    <div className="mt-6">
                                                        <a
                                                            href="#"
                                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </div>
                                                    <div
                                                        className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                        <p>
                                                            or{' '}
                                                            <button
                                                                type="button"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                Continue Shopping
                                                                <span aria-hidden="true"> &rarr;</span>
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

            ) : (
                <Transition.Root show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"/>
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                                        enterFrom="translate-x-full"
                                        enterTo="translate-x-0"
                                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                                        leaveFrom="translate-x-0"
                                        leaveTo="translate-x-full"
                                    >
                                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                    <div className="flex items-start justify-between">
                                                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping
                                                            cart</Dialog.Title>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                                onClick={() => setIsOpen(false)}
                                                            >
                                                                <span className="absolute -inset-0.5"/>
                                                                <span className="sr-only">Close panel</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="max-w-4xl mx-auto px-10 py-32 bg-white rounded-lg ">
                                                        <div>

                                                        </div>
                                                        <div
                                                            className="flex flex-col items-center justify-center py-12">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                 className="h-24 w-24 text-gray-400 mb-4">
                                                                <path
                                                                    d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z">
                                                                </path>
                                                            </svg>
                                                            <p className="text-gray-600 text-lg font-semibold mb-4">Your
                                                                shopping cart is empty.</p>
                                                            <button
                                                                className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300">
                                                                Let's go shopping!
                                                            </button>
                                                        </div>
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
            )}

        </div>
    );
}

export default Cart;