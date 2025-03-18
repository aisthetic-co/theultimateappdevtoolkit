// import { expiry } from "../../../config/cacheTimings";

import CacheKeyManager from ".";

export interface CacheKeyManagerParams {
  keyPrefix: string;
  expiry?: number;
}

const keyUsages: Array<CacheKeyManagerParams> = [
  // {
  //   keyPrefix: somePrefix,
  //   expiry: expiry.somePrefix,
  // },
];

export const cacheKeyEntities = keyUsages.reduce<
  Record<string, CacheKeyManager>
>((map, obj: CacheKeyManagerParams) => {
  map[obj.keyPrefix] = new CacheKeyManager({
    keyPrefix: obj.keyPrefix,
    expiry: obj.expiry,
  });
  return map;
}, {});
