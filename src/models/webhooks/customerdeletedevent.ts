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

export const CustomerDeletedEventEventType = {
  Deleted: "deleted",
} as const;
export type CustomerDeletedEventEventType = ClosedEnum<
  typeof CustomerDeletedEventEventType
>;

export type CustomerDeletedEventRequestBody = {
  /**
   * Schema representing a customer, former customer or lead served by Company
   */
  data?: Customer | undefined;
  /**
   * Unix timestamp of the deletion event
   */
  created?: number | undefined;
  eventType?: CustomerDeletedEventEventType | undefined;
};

/** @internal */
export const CustomerDeletedEventEventType$inboundSchema: z.ZodNativeEnum<
  typeof CustomerDeletedEventEventType
> = z.nativeEnum(CustomerDeletedEventEventType);

/** @internal */
export const CustomerDeletedEventEventType$outboundSchema: z.ZodNativeEnum<
  typeof CustomerDeletedEventEventType
> = CustomerDeletedEventEventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerDeletedEventEventType$ {
  /** @deprecated use `CustomerDeletedEventEventType$inboundSchema` instead. */
  export const inboundSchema = CustomerDeletedEventEventType$inboundSchema;
  /** @deprecated use `CustomerDeletedEventEventType$outboundSchema` instead. */
  export const outboundSchema = CustomerDeletedEventEventType$outboundSchema;
}

/** @internal */
export const CustomerDeletedEventRequestBody$inboundSchema: z.ZodType<
  CustomerDeletedEventRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Customer$inboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CustomerDeletedEventEventType$inboundSchema.optional(),
});

/** @internal */
export type CustomerDeletedEventRequestBody$Outbound = {
  data?: Customer$Outbound | undefined;
  created?: number | undefined;
  eventType?: string | undefined;
};

/** @internal */
export const CustomerDeletedEventRequestBody$outboundSchema: z.ZodType<
  CustomerDeletedEventRequestBody$Outbound,
  z.ZodTypeDef,
  CustomerDeletedEventRequestBody
> = z.object({
  data: Customer$outboundSchema.optional(),
  created: z.number().int().optional(),
  eventType: CustomerDeletedEventEventType$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerDeletedEventRequestBody$ {
  /** @deprecated use `CustomerDeletedEventRequestBody$inboundSchema` instead. */
  export const inboundSchema = CustomerDeletedEventRequestBody$inboundSchema;
  /** @deprecated use `CustomerDeletedEventRequestBody$outboundSchema` instead. */
  export const outboundSchema = CustomerDeletedEventRequestBody$outboundSchema;
  /** @deprecated use `CustomerDeletedEventRequestBody$Outbound` instead. */
  export type Outbound = CustomerDeletedEventRequestBody$Outbound;
}

export function customerDeletedEventRequestBodyToJSON(
  customerDeletedEventRequestBody: CustomerDeletedEventRequestBody,
): string {
  return JSON.stringify(
    CustomerDeletedEventRequestBody$outboundSchema.parse(
      customerDeletedEventRequestBody,
    ),
  );
}

export function customerDeletedEventRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CustomerDeletedEventRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerDeletedEventRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerDeletedEventRequestBody' from JSON`,
  );
}
