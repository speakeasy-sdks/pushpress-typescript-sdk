/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Webhook = {
  id: string;
  /**
   * URL to post the event data to
   */
  url: string;
  /**
   * List of events the webhook is subscribed to
   */
  events: Array<string>;
  created: number;
  updated: number;
  /**
   * companyId of the company to which the webhook belongs
   */
  company: string;
};

/** @internal */
export const Webhook$inboundSchema: z.ZodType<Webhook, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string(),
    url: z.string(),
    events: z.array(z.string()),
    created: z.number(),
    updated: z.number(),
    company: z.string(),
  });

/** @internal */
export type Webhook$Outbound = {
  id: string;
  url: string;
  events: Array<string>;
  created: number;
  updated: number;
  company: string;
};

/** @internal */
export const Webhook$outboundSchema: z.ZodType<
  Webhook$Outbound,
  z.ZodTypeDef,
  Webhook
> = z.object({
  id: z.string(),
  url: z.string(),
  events: z.array(z.string()),
  created: z.number(),
  updated: z.number(),
  company: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Webhook$ {
  /** @deprecated use `Webhook$inboundSchema` instead. */
  export const inboundSchema = Webhook$inboundSchema;
  /** @deprecated use `Webhook$outboundSchema` instead. */
  export const outboundSchema = Webhook$outboundSchema;
  /** @deprecated use `Webhook$Outbound` instead. */
  export type Outbound = Webhook$Outbound;
}

export function webhookToJSON(webhook: Webhook): string {
  return JSON.stringify(Webhook$outboundSchema.parse(webhook));
}

export function webhookFromJSON(
  jsonString: string,
): SafeParseResult<Webhook, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Webhook$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Webhook' from JSON`,
  );
}
