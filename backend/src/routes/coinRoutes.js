import express from "express";
import {getCoinList, getCoinListPerPage,getCoinChart, getCoinsWithChart} from "../controllers/coinController.js";

const router = express.Router();

router.get("/list/all",getCoinList);
router.get("/list/market",getCoinListPerPage);
router.get("/market-chart/:id",getCoinChart);
router.get("/with-chart",getCoinsWithChart);

export default router;