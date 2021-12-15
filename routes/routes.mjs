import express from "express";

const router=express.Router();

import controller from "./controller/controller.mjs";

router
    .route('/')
    .get(controller.showUser) 
    .post(controller.postUser);

module.exports = router;