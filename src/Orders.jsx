import { useState, useEffect } from "react";
import { doc, collection, onSnapshot } from "firebase/firestore"; // Import doc here
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const ordersCollectionRef = collection(userDocRef, "orders");

        const unsubscribe = onSnapshot(ordersCollectionRef, (snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });

        // Cleanup function to detach the listener when the component unmounts or the user changes
        return () => unsubscribe();
      } else {
        setOrders([]);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
