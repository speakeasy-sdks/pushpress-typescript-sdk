/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dlv } from "./dlv.js";

import * as z from "zod";
import { SDKOptions } from "./config.js";

export interface Env {
  PUSHPRESSTS_API_KEY?: string | undefined;

  /**
   * Sets the companyId parameter for all supported operations
   */
  PUSHPRESSTS_COMPANY_ID?: string | undefined;

  PUSHPRESSTS_DEBUG?: boolean | undefined;
}

export const envSchema: z.ZodType<Env, z.ZodTypeDef, unknown> = z.object({
  PUSHPRESSTS_API_KEY: z.string().optional(),

  PUSHPRESSTS_COMPANY_ID: z.string().optional(),

  PUSHPRESSTS_DEBUG: z.coerce.boolean().optional(),
});

let envMemo: Env | undefined = undefined;
/**
 * Reads and validates environment variables.
 */
export function env(): Env {
  if (envMemo) {
    return envMemo;
  }

  envMemo = envSchema.parse(
    dlv(globalThis, "process.env") ?? dlv(globalThis, "Deno.env") ?? {},
  );
  return envMemo;
}

/**
 * Clears the cached env object. Useful for testing with a fresh environment.
 */
export function resetEnv() {
  envMemo = undefined;
}

/**
 * Populates global parameters with environment variables.
 */
export function fillGlobals(options: SDKOptions): SDKOptions {
  const clone = { ...options };

  const envVars = env();

  if (typeof envVars.PUSHPRESSTS_COMPANY_ID !== "undefined") {
    clone.companyId ??= envVars.PUSHPRESSTS_COMPANY_ID;
  }

  return clone;
}