import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                {/* Children routs should be loaded here */}
                <Outlet />
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

//Add RouterProvider configuration here
//OLD
// root.render(<AppLayout />);
//NEW
root.render(<RouterProvider router={appRouter} />);
