/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCustomersGlobals = {
  companyId?: string | undefined;
};

export type ListCustomersRequest = {
  page?: number | undefined;
  limit?: number | undefined;
};

/**
 * A paginated response containing an array of customerIds
 */
export type ListCustomersResponseBody = {
  /**
   * An array of objects containing customerIds
   */
  data: Array<components.Customer>;
};

export type ListCustomersResponse = {
  result: ListCustomersResponseBody;
};

/** @internal */
export const ListCustomersGlobals$inboundSchema: z.ZodType<
  ListCustomersGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string().optional(),
});

/** @internal */
export type ListCustomersGlobals$Outbound = {
  companyId?: string | undefined;
};

/** @internal */
export const ListCustomersGlobals$outboundSchema: z.ZodType<
  ListCustomersGlobals$Outbound,
  z.ZodTypeDef,
  ListCustomersGlobals
> = z.object({
  companyId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersGlobals$ {
  /** @deprecated use `ListCustomersGlobals$inboundSchema` instead. */
  export const inboundSchema = ListCustomersGlobals$inboundSchema;
  /** @deprecated use `ListCustomersGlobals$outboundSchema` instead. */
  export const outboundSchema = ListCustomersGlobals$outboundSchema;
  /** @deprecated use `ListCustomersGlobals$Outbound` instead. */
  export type Outbound = ListCustomersGlobals$Outbound;
}

export function listCustomersGlobalsToJSON(
  listCustomersGlobals: ListCustomersGlobals,
): string {
  return JSON.stringify(
    ListCustomersGlobals$outboundSchema.parse(listCustomersGlobals),
  );
}

export function listCustomersGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersGlobals' from JSON`,
  );
}

/** @internal */
export const ListCustomersRequest$inboundSchema: z.ZodType<
  ListCustomersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
});

/** @internal */
export type ListCustomersRequest$Outbound = {
  page: number;
  limit: number;
};

/** @internal */
export const ListCustomersRequest$outboundSchema: z.ZodType<
  ListCustomersRequest$Outbound,
  z.ZodTypeDef,
  ListCustomersRequest
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersRequest$ {
  /** @deprecated use `ListCustomersRequest$inboundSchema` instead. */
  export const inboundSchema = ListCustomersRequest$inboundSchema;
  /** @deprecated use `ListCustomersRequest$outboundSchema` instead. */
  export const outboundSchema = ListCustomersRequest$outboundSchema;
  /** @deprecated use `ListCustomersRequest$Outbound` instead. */
  export type Outbound = ListCustomersRequest$Outbound;
}

export function listCustomersRequestToJSON(
  listCustomersRequest: ListCustomersRequest,
): string {
  return JSON.stringify(
    ListCustomersRequest$outboundSchema.parse(listCustomersRequest),
  );
}

export function listCustomersRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersRequest' from JSON`,
  );
}

/** @internal */
export const ListCustomersResponseBody$inboundSchema: z.ZodType<
  ListCustomersResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(components.Customer$inboundSchema),
});

/** @internal */
export type ListCustomersResponseBody$Outbound = {
  data: Array<components.Customer$Outbound>;
};

/** @internal */
export const ListCustomersResponseBody$outboundSchema: z.ZodType<
  ListCustomersResponseBody$Outbound,
  z.ZodTypeDef,
  ListCustomersResponseBody
> = z.object({
  data: z.array(components.Customer$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersResponseBody$ {
  /** @deprecated use `ListCustomersResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListCustomersResponseBody$inboundSchema;
  /** @deprecated use `ListCustomersResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListCustomersResponseBody$outboundSchema;
  /** @deprecated use `ListCustomersResponseBody$Outbound` instead. */
  export type Outbound = ListCustomersResponseBody$Outbound;
}

export function listCustomersResponseBodyToJSON(
  listCustomersResponseBody: ListCustomersResponseBody,
): string {
  return JSON.stringify(
    ListCustomersResponseBody$outboundSchema.parse(listCustomersResponseBody),
  );
}

export function listCustomersResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersResponseBody' from JSON`,
  );
}

/** @internal */
export const ListCustomersResponse$inboundSchema: z.ZodType<
  ListCustomersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListCustomersResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListCustomersResponse$Outbound = {
  Result: ListCustomersResponseBody$Outbound;
};

/** @internal */
export const ListCustomersResponse$outboundSchema: z.ZodType<
  ListCustomersResponse$Outbound,
  z.ZodTypeDef,
  ListCustomersResponse
> = z.object({
  result: z.lazy(() => ListCustomersResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCustomersResponse$ {
  /** @deprecated use `ListCustomersResponse$inboundSchema` instead. */
  export const inboundSchema = ListCustomersResponse$inboundSchema;
  /** @deprecated use `ListCustomersResponse$outboundSchema` instead. */
  export const outboundSchema = ListCustomersResponse$outboundSchema;
  /** @deprecated use `ListCustomersResponse$Outbound` instead. */
  export type Outbound = ListCustomersResponse$Outbound;
}

export function listCustomersResponseToJSON(
  listCustomersResponse: ListCustomersResponse,
): string {
  return JSON.stringify(
    ListCustomersResponse$outboundSchema.parse(listCustomersResponse),
  );
}

export function listCustomersResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListCustomersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCustomersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCustomersResponse' from JSON`,
  );
}