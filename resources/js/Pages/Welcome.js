import React from 'react';
import {Link, Head} from '@inertiajs/inertia-react';
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome"/>
            <div
                className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 underline">
                                Log in
                            </Link>

                            <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mx-auto lg:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-center sm:pt-0">
                        <ApplicationLogo/>
                    </div>

                    <div className="mt-8 overflow-hidden shadow sm:rounded-lg">

                            {props.auth.user ? (
                                <div className="grid grid-cols-1 md:grid-cols-1">
                                <Link href={route('dashboard')}
                                      className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">

                                    Dashboard
                                </Link>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Link href={route('login')}
                                          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Log in
                                    </Link>

                                    <Link href={route('register')}
                                          className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between"></div>
                </div>
            </div>
        </>
    );
}
