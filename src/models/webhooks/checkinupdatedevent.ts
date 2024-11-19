/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CheckinUpdatedEventEventType = {
  Updated: "updated",
} as const;
export type CheckinUpdatedEventEventType = ClosedEnum<
  typeof CheckinUpdatedEventEventType
>;

export type CheckinUpdatedEventRequestBody = {
  data?: components.Checkin | undefined;
  /**
   * Unix timestamp of the update event
   */
  created?: number | undefined;
  eventType?: CheckinUpdatedEventEventType | undefined;
};

/** @internal */
export const CheckinUpdatedEventEventType$inboundSchema: z.ZodNativeEnum<
  typeof CheckinUpdatedEventEventType
> = z.nativeEnum(CheckinUpdatedEventEventType);

/** @internal */
export const CheckinUpdatedEventEventType$outboundSchema: z.ZodNativeEnum<
  typeof CheckinUpdatedEventEventType
> = CheckinUpdatedEventEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckinUpdatedEventEventType$ {
  /** @deprecated use `CheckinUpdatedEventEventType$inboundSchema` instead. */
  export const inboundSchema = CheckinUpdatedEventEventType$inboundSchema;
  /** @deprecated use `CheckinUpdatedEventEventType$outboundSchema` instead. */
  export const outboundSchema = CheckinUpdatedEventEventType$outboundSchema;
}

/** @internal */
export const CheckinUpdatedEventRequestBody$inboundSchema: z.ZodType<
  CheckinUpdatedEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: components.Checkin$inboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CheckinUpdatedEventEventType$inboundSchema.optional(),
});

/** @internal */
export type CheckinUpdatedEventRequestBody$Outbound = {
  data?: components.Checkin$Outbound | undefined;
  created?: number | undefined;
  eventType?: string | undefined;
};

/** @internal */
export const CheckinUpdatedEventRequestBody$outboundSchema: z.ZodType<
  CheckinUpdatedEventRequestBody$Outbound,
  z.ZodTypeDef,
  CheckinUpdatedEventRequestBody
> = z.object({
  data: components.Checkin$outboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CheckinUpdatedEventEventType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckinUpdatedEventRequestBody$ {
  /** @deprecated use `CheckinUpdatedEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = CheckinUpdatedEventRequestBody$inboundSchema;
  /** @deprecated use `CheckinUpdatedEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = CheckinUpdatedEventRequestBody$outboundSchema;
  /** @deprecated use `CheckinUpdatedEventRequestBody$Outbound` instead. */
  export type Outbound = CheckinUpdatedEventRequestBody$Outbound;
}

export function checkinUpdatedEventRequestBodyToJSON(
  checkinUpdatedEventRequestBody: CheckinUpdatedEventRequestBody,
): string {
  return JSON.stringify(
    CheckinUpdatedEventRequestBody$outboundSchema.parse(
      checkinUpdatedEventRequestBody,
    ),
  );
}

export function checkinUpdatedEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CheckinUpdatedEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckinUpdatedEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckinUpdatedEventRequestBody' from JSON`,
  );
}