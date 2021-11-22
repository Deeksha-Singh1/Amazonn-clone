/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express=require("express");
const cors =require("cors");
const { response } = require("express");
const stripe= require("stripe")("sk_test_51JyCR8SEnk29pgvema6pc2Mp7BP32hspf4WdXJyZ5WChnUCWXippqy9dUKJ03UZLUh81gjFEUp4c8wO8210BLuDj007AxUjQCT");
//App Config
const app = express();
//Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/',(request, response) => response.status(200).send('hello world'))

//Listen Command
exports.api=functions.https.onRequest(app)