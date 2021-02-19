import express from "express";
import { OnlineGameModel } from "../models/games/OnlineGameModel.js";

const router = express.Router();

const getGames = async (req, res) => {
  const limit = req.query;
  const games = await OnlineGameModel.find().limit(+limit);

  return res.json(games);
};

router.get("/games", getGames);

export { router as gamesRoute };
