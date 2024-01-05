"use server";

import { unstable_cache } from "next/cache";

const getId = unstable_cache(async () => {
  return Math.random();
});

export const testSkewAction = async () => {
  return await getId();
};
