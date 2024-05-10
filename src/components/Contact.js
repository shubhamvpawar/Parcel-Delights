import React from 'react'

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4">
            <div className="mb-4 md:mb-0">
                <img src="logo.png" alt="LOGO" className="h-10" />
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-4">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Button</button>
            </div>
        </div>
    )
}

export default Contact;