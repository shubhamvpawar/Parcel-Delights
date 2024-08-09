import React, { useState } from 'react';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (

        <div className="flex justify-center items-center">

            <div className="w-11/12 md:w-1/3 p-8 rounded-lg bg-white">
                <form
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h1 className="text-3xl font-bold py-2">
                        {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && (<input
                        // ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-2 my-2 w-full border border-black rounded-lg"
                    />
                    )}
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-2 my-2 w-full border border-black rounded-lg" />

                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 my-2 w-full border border-black rounded-lg" />
                    <button
                        className="p-2 my-2 bg-green-600 w-full rounded-lg"
                    >{isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="py-2 cursor-pointer"
                        onClick={toggleSignInForm}
                    >{isSignInForm ? "New to Parcel Delight? Sign Up Now" : "Already a user? Sign In now"}
                    </p>
                </form>
            </div>
        </div >
    );
};

export default Login;
