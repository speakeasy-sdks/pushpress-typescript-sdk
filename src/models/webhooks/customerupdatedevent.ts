/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Customer,
  Customer$inboundSchema,
  Customer$Outbound,
  Customer$outboundSchema,
} from "../components/customer.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CustomerUpdatedEventEventType = {
  Updated: "updated",
} as const;
export type CustomerUpdatedEventEventType = ClosedEnum<
  typeof CustomerUpdatedEventEventType
>;

export type CustomerUpdatedEventRequestBody = {
  /**
   * Schema representing a customer, former customer or lead served by Company
   */
  data?: Customer | undefined;
  /**
   * Unix timestamp of the update event
   */
  created?: number | undefined;
  eventType?: CustomerUpdatedEventEventType | undefined;
};

/** @internal */
export const CustomerUpdatedEventEventType$inboundSchema: z.ZodNativeEnum<
  typeof CustomerUpdatedEventEventType
> = z.nativeEnum(CustomerUpdatedEventEventType);

/** @internal */
export const CustomerUpdatedEventEventType$outboundSchema: z.ZodNativeEnum<
  typeof CustomerUpdatedEventEventType
> = CustomerUpdatedEventEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerUpdatedEventEventType$ {
  /** @deprecated use `CustomerUpdatedEventEventType$inboundSchema` instead. */
  export const inboundSchema = CustomerUpdatedEventEventType$inboundSchema;
  /** @deprecated use `CustomerUpdatedEventEventType$outboundSchema` instead. */
  export const outboundSchema = CustomerUpdatedEventEventType$outboundSchema;
}

/** @internal */
export const CustomerUpdatedEventRequestBody$inboundSchema: z.ZodType<
  CustomerUpdatedEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Customer$inboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CustomerUpdatedEventEventType$inboundSchema.optional(),
});

/** @internal */
export type CustomerUpdatedEventRequestBody$Outbound = {
  data?: Customer$Outbound | undefined;
  created?: number | undefined;
  eventType?: string | undefined;
};

/** @internal */
export const CustomerUpdatedEventRequestBody$outboundSchema: z.ZodType<
  CustomerUpdatedEventRequestBody$Outbound,
  z.ZodTypeDef,
  CustomerUpdatedEventRequestBody
> = z.object({
  data: Customer$outboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CustomerUpdatedEventEventType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerUpdatedEventRequestBody$ {
  /** @deprecated use `CustomerUpdatedEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = CustomerUpdatedEventRequestBody$inboundSchema;
  /** @deprecated use `CustomerUpdatedEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = CustomerUpdatedEventRequestBody$outboundSchema;
  /** @deprecated use `CustomerUpdatedEventRequestBody$Outbound` instead. */
  export type Outbound = CustomerUpdatedEventRequestBody$Outbound;
}

export function customerUpdatedEventRequestBodyToJSON(
  customerUpdatedEventRequestBody: CustomerUpdatedEventRequestBody,
): string {
  return JSON.stringify(
    CustomerUpdatedEventRequestBody$outboundSchema.parse(
      customerUpdatedEventRequestBody,
    ),
  );
}

export function customerUpdatedEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CustomerUpdatedEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerUpdatedEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerUpdatedEventRequestBody' from JSON`,
  );
}
