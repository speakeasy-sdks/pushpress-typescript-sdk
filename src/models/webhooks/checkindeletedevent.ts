/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Checkin,
  Checkin$inboundSchema,
  Checkin$Outbound,
  Checkin$outboundSchema,
} from "../components/checkin.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CheckinDeletedEventEventType = {
  Deleted: "deleted",
} as const;
export type CheckinDeletedEventEventType = ClosedEnum<
  typeof CheckinDeletedEventEventType
>;

export type CheckinDeletedEventRequestBody = {
  data?: Checkin | undefined;
  /**
   * Unix timestamp of the deletion event
   */
  created?: number | undefined;
  eventType?: CheckinDeletedEventEventType | undefined;
};

/** @internal */
export const CheckinDeletedEventEventType$inboundSchema: z.ZodNativeEnum<
  typeof CheckinDeletedEventEventType
> = z.nativeEnum(CheckinDeletedEventEventType);

/** @internal */
export const CheckinDeletedEventEventType$outboundSchema: z.ZodNativeEnum<
  typeof CheckinDeletedEventEventType
> = CheckinDeletedEventEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckinDeletedEventEventType$ {
  /** @deprecated use `CheckinDeletedEventEventType$inboundSchema` instead. */
  export const inboundSchema = CheckinDeletedEventEventType$inboundSchema;
  /** @deprecated use `CheckinDeletedEventEventType$outboundSchema` instead. */
  export const outboundSchema = CheckinDeletedEventEventType$outboundSchema;
}

/** @internal */
export const CheckinDeletedEventRequestBody$inboundSchema: z.ZodType<
  CheckinDeletedEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Checkin$inboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CheckinDeletedEventEventType$inboundSchema.optional(),
});

/** @internal */
export type CheckinDeletedEventRequestBody$Outbound = {
  data?: Checkin$Outbound | undefined;
  created?: number | undefined;
  eventType?: string | undefined;
};

/** @internal */
export const CheckinDeletedEventRequestBody$outboundSchema: z.ZodType<
  CheckinDeletedEventRequestBody$Outbound,
  z.ZodTypeDef,
  CheckinDeletedEventRequestBody
> = z.object({
  data: Checkin$outboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CheckinDeletedEventEventType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckinDeletedEventRequestBody$ {
  /** @deprecated use `CheckinDeletedEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = CheckinDeletedEventRequestBody$inboundSchema;
  /** @deprecated use `CheckinDeletedEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = CheckinDeletedEventRequestBody$outboundSchema;
  /** @deprecated use `CheckinDeletedEventRequestBody$Outbound` instead. */
  export type Outbound = CheckinDeletedEventRequestBody$Outbound;
}

export function checkinDeletedEventRequestBodyToJSON(
  checkinDeletedEventRequestBody: CheckinDeletedEventRequestBody,
): string {
  return JSON.stringify(
    CheckinDeletedEventRequestBody$outboundSchema.parse(
      checkinDeletedEventRequestBody,
    ),
  );
}

export function checkinDeletedEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CheckinDeletedEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckinDeletedEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckinDeletedEventRequestBody' from JSON`,
  );
}
