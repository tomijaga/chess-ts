import { createContext } from "react";
import { BoardClass, ITilePosition, SelectedTile } from "types/Board";

export const BoardContext = createContext({} as BoardClass);

export const SelectedTileContext = createContext({} as SelectedTile);
