import { useEffect } from "react";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from "./Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51OYDMEB48Z1jq3TPEvNbAQSvVOAIgTcOMGXoz79BqoBpraTQeMtY04CTbvWyQ71BpWZrqXOJG9dWHmRDLkTJpc4g00x8g5s6qz"
);

const router = createBrowserRouter([
  {
    path: "/orders",
    element: (
      <>
        <Header />
        <Orders />
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/checkout",
    element: (
      <>
        <Header />
        <Checkout />
      </>
    ),
  },
  {
    path: "/payment",
    element: (
      <>
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
]);

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is >>>>>", authUser);

      if (authUser) {
        //user just loged in or was loged
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user loged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
