const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OYDMEB48Z1jq3TPa7J3zPhKqbK4SX2weBwxZWz9S1kFTkxt3S15lGdP1oI3aQmRsktEvk1NGcUIGWpayUOk98rA00WLzxG1vd"); // prettier-ignore

// API

// App config
const app = express();

// Middlewares (A set of functions that execute between an incoming HTTP request
// and the server's response)
app.use(cors({origin: true})); // prettier-ignore
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  //   OK - Created (201)
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/spa-4b7bb/us-central1/api
