import { createContext } from "react";
import { GameClient } from "chess";
import { BoardClass, ITilePosition, SelectedTile, TileData } from "types/Board";

export const BoardContext = createContext({} as BoardClass);

export const SelectedTileContext = createContext({} as SelectedTile);

export const GameClientContext = createContext({} as GameClient);

export const TileDataContext = createContext({} as TileData);
