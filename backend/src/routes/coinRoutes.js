import express from "express";
import {getCoinList, getCoinListPerPage} from "../controllers/coinController.js";

const router = express.Router();

router.get("/list/all",getCoinList);
router.get("/list/market",getCoinListPerPage);

export default router;