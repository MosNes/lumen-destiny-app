/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import express from "express";
import cors from "cors";
import {onRequest} from "firebase-functions/v2/https";

const app = express();

//add CORS middleware
app.use(cors({origin: true}));

//add JSON middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const api = onRequest(app);