import React from 'react';

const Login = () => {
    return (
        <div className="flex justify-center items-center">
            <div className=" w-1/3 p-8 rounded-lg bg-white">
                <h2 className="text-2xl mb-4 justify-center text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 p-2 border rounded-md w-full" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 border rounded-md w-full" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
