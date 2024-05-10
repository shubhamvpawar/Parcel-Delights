import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-white shadow-lg mt-2 mb-0 rounded-lg pt-4 pb-0 '>
            <div className='flex justify-center items-center mx-auto py-2 font-semibold'>
                <p className="text-center">Created by Shubham Pawar © 2024 Parcel Delight</p>
            </div>
            <div className='flex justify-center mx-auto py-2'>
                <div className='w-1/2 flex justify-end pr-2'
                >
                    <a
                        className='hover:scale-90 hover:font-semibold'
                        href="https://www.linkedin.com/in/shubham-dev-design/"
                        target="_blank"
                    >LinkedIN</a>
                </div>
                <div className='flex w-1/2 justify-start pl-2'
                >
                    <a
                        className='hover:scale-90 hover:font-semibold'
                        href="https://github.com/shubhamvpawar/Parcel-Delights"
                        target="_blank"
                    >GitHub</a></div>
            </div>
        </div >
    )
}

export default Footer;