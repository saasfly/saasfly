import { dinero, type Dinero, type DineroSnapshot } from "dinero.js";
import superjson from "superjson";
import type { JSONValue } from "superjson/dist/types";

superjson.registerCustom(
  {
    isApplicable: (val): val is Dinero<number> => {
      try {
        // if this doesn't crash we're kinda sure it's a Dinero instance
        (val as Dinero<number>).calculator.add(1, 2);
        return true;
      } catch {
        return false;
      }
    },
    serialize: (val) => {
      return val.toJSON() as JSONValue;
    },
    deserialize: (val) => {
      return dinero(val as DineroSnapshot<number>);
    },
  },
  "Dinero",
);

export const transformer = superjson;
