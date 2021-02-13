import { BishopIcon } from "./icons/bishop";
import { KingIcon } from "./icons/king";
import { KnightIcon } from "./icons/knight";
import { QueenIcon } from "./icons/queen";
import { PawnIcon } from "./icons/pawn";
import { RookIcon } from "./icons/rook";

import { IDesignPieces } from "types/Design";

export const classic_outlined: IDesignPieces = {
  ["black"]: {
    bishop: <BishopIcon className="pieces black_pieces" height={70}/>,
    king: <KingIcon className="pieces black_pieces"  height={70} />,
    queen: <QueenIcon className="pieces black_pieces" height={70} />,
    knight: <KnightIcon className="pieces black_pieces" height={70} />,
    pawn: <PawnIcon className="pieces black_pieces" height={70} />,
    rook: <RookIcon className="pieces black_pieces" height={70} />,
  },
  ["white"]: {
    bishop: <BishopIcon className="pieces white_pieces" height={70} />,
    king: <KingIcon className="pieces white_pieces" height={70} />,
    queen: <QueenIcon className="pieces white_pieces" height={70} />,
    knight: <KnightIcon className="pieces white_pieces" height={70} />,
    pawn: <PawnIcon className="pieces white_pieces" height={70} />,
    rook: <RookIcon className="pieces white_pieces" height={70} />,
  },
};
