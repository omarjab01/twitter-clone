import React from 'react'

const RightSide = () => {
    return (
        <div className="bg-black col-span-5 h-full text-white p-8 right-container flex flex-col justify-center">
            <div>
                <img src="https://img.icons8.com/material-rounded/24/FFFFFF/twitter.png" className='img-twitter-white mb-4 scale-150' />
            </div>
                <h1 className='text-6xl font-black my-8 text-white mb-12'>Happening Now</h1>
            <div className="w-80">
                <h2 className='text-4xl font-black'>Join Twitter Today.</h2>
                <form className='my-6 w-full flex flex-col gap-4'>
                    <button className='flex flex-row items-center justify-center bg-white pr-4 w-full py-0 rounded-full'>
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" className='scale-50 p-0' />

                        <p className='text-black'>Sign Up with Google</p>
                    </button>
                    
                    <button className='flex flex-row items-center justify-center bg-white pr-4 w-full rounded-full py-3'>
                        <img src="https://img.icons8.com/material-outlined/24/000000/mac-os--v2.png" className='mr-2 p-0' />

                        <p className='text-black'>Sign Up with Apple</p>
                    </button>

                </form>
                <div className='flex flex-row items-center'>
                    <div className='bg-gray-700 w-full hr-div'></div>
                    <p className='mx-4'>or</p>
                    <div className='bg-gray-700 w-full hr-div'></div>
                </div>
                <form className='mt-6'>
                    <button className='w-full bg-blue-500 py-3 rounded-full hover:bg-blue-900 transition duration-300 ease-in-out'>Sign up with phone or email</button>
                </form>
                <p className='text-xs my-3'>
                    By signing up, you agree to the <span className='text-blue-500'>Terms of Service</span> and <span className='text-blue-500'>Privacy Policy</span>, including <span className='text-blue-500'>Cookie Use</span>.
                </p>
            </div>
            <div className='mt-24 w-80'>
                <h3 className='text-xl my-2 font-medium'>Already have an account?</h3>
                <button className='w-full border rounded-full py-3 mt-2 text-blue-500 hover:bg-blue-900 transition duration-300 ease-in-out'>Sign in</button>
            </div>
        </div>
    )
}

export default RightSide