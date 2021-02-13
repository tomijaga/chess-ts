export const clone = (obj: object) =>
  Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
