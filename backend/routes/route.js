import express from "express";
import { deleteProduct, getProducts, postProduct, putProduct } from "../controller/controller.js";

const router = express.Router();

router.post("/", postProduct);
router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.put("/:id", putProduct);

export default router;
