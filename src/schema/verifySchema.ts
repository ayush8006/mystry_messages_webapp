import { z } from 'zod';

export const verifyCodeValidation = z
  .string()
  .length(6, "Verification code must be exactly 6 characters long");


  export const verifySchema=z.object({
    code:verifyCodeValidation,
  })