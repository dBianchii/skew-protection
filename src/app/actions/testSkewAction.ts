"use server";

export const testSkewAction = async () => {
  return process.env.VERCEL_DEPLOYMENT_ID;
};
