import { Pawn } from "types/Pieces";
import { clone } from "usefull-fns/Object";

export const fillArray = <T extends unknown>(item: any, size: number): T[] => {
  const arr: T[] = [];

  for (let i = 0; i < size; i++) {
    if (typeof item === "object") {
      arr.push(clone(item));
    }
    arr.push(item);
  }
  return arr;
};
