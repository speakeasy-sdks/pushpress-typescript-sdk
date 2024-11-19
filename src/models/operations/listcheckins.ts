/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  Checkin,
  Checkin$inboundSchema,
  Checkin$Outbound,
  Checkin$outboundSchema,
} from "../components/checkin.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ListCheckinsGlobals = {
  companyId?: string | undefined;
};

export type ListCheckinsRequest = {
  page?: number | undefined;
  limit?: number | undefined;
};

/**
 * A paginated response containing a list of check-ins
 */
export type ListCheckinsResponseBody = {
  data: Array<Checkin>;
};

export type ListCheckinsResponse = {
  result: ListCheckinsResponseBody;
};

/** @internal */
export const ListCheckinsGlobals$inboundSchema: z.ZodType<
  ListCheckinsGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  companyId: z.string().optional(),
});

/** @internal */
export type ListCheckinsGlobals$Outbound = {
  companyId?: string | undefined;
};

/** @internal */
export const ListCheckinsGlobals$outboundSchema: z.ZodType<
  ListCheckinsGlobals$Outbound,
  z.ZodTypeDef,
  ListCheckinsGlobals
> = z.object({
  companyId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCheckinsGlobals$ {
  /** @deprecated use `ListCheckinsGlobals$inboundSchema` instead. */
  export const inboundSchema = ListCheckinsGlobals$inboundSchema;
  /** @deprecated use `ListCheckinsGlobals$outboundSchema` instead. */
  export const outboundSchema = ListCheckinsGlobals$outboundSchema;
  /** @deprecated use `ListCheckinsGlobals$Outbound` instead. */
  export type Outbound = ListCheckinsGlobals$Outbound;
}

export function listCheckinsGlobalsToJSON(
  listCheckinsGlobals: ListCheckinsGlobals,
): string {
  return JSON.stringify(
    ListCheckinsGlobals$outboundSchema.parse(listCheckinsGlobals),
  );
}

export function listCheckinsGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ListCheckinsGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCheckinsGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCheckinsGlobals' from JSON`,
  );
}

/** @internal */
export const ListCheckinsRequest$inboundSchema: z.ZodType<
  ListCheckinsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
});

/** @internal */
export type ListCheckinsRequest$Outbound = {
  page: number;
  limit: number;
};

/** @internal */
export const ListCheckinsRequest$outboundSchema: z.ZodType<
  ListCheckinsRequest$Outbound,
  z.ZodTypeDef,
  ListCheckinsRequest
> = z.object({
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCheckinsRequest$ {
  /** @deprecated use `ListCheckinsRequest$inboundSchema` instead. */
  export const inboundSchema = ListCheckinsRequest$inboundSchema;
  /** @deprecated use `ListCheckinsRequest$outboundSchema` instead. */
  export const outboundSchema = ListCheckinsRequest$outboundSchema;
  /** @deprecated use `ListCheckinsRequest$Outbound` instead. */
  export type Outbound = ListCheckinsRequest$Outbound;
}

export function listCheckinsRequestToJSON(
  listCheckinsRequest: ListCheckinsRequest,
): string {
  return JSON.stringify(
    ListCheckinsRequest$outboundSchema.parse(listCheckinsRequest),
  );
}

export function listCheckinsRequestFromJSON(
  jsonString: string,
): SafeParseResult<ListCheckinsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCheckinsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCheckinsRequest' from JSON`,
  );
}

/** @internal */
export const ListCheckinsResponseBody$inboundSchema: z.ZodType<
  ListCheckinsResponseBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: z.array(Checkin$inboundSchema),
});

/** @internal */
export type ListCheckinsResponseBody$Outbound = {
  data: Array<Checkin$Outbound>;
};

/** @internal */
export const ListCheckinsResponseBody$outboundSchema: z.ZodType<
  ListCheckinsResponseBody$Outbound,
  z.ZodTypeDef,
  ListCheckinsResponseBody
> = z.object({
  data: z.array(Checkin$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCheckinsResponseBody$ {
  /** @deprecated use `ListCheckinsResponseBody$inboundSchema` instead. */
  export const inboundSchema = ListCheckinsResponseBody$inboundSchema;
  /** @deprecated use `ListCheckinsResponseBody$outboundSchema` instead. */
  export const outboundSchema = ListCheckinsResponseBody$outboundSchema;
  /** @deprecated use `ListCheckinsResponseBody$Outbound` instead. */
  export type Outbound = ListCheckinsResponseBody$Outbound;
}

export function listCheckinsResponseBodyToJSON(
  listCheckinsResponseBody: ListCheckinsResponseBody,
): string {
  return JSON.stringify(
    ListCheckinsResponseBody$outboundSchema.parse(listCheckinsResponseBody),
  );
}

export function listCheckinsResponseBodyFromJSON(
  jsonString: string,
): SafeParseResult<ListCheckinsResponseBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCheckinsResponseBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCheckinsResponseBody' from JSON`,
  );
}

/** @internal */
export const ListCheckinsResponse$inboundSchema: z.ZodType<
  ListCheckinsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: z.lazy(() => ListCheckinsResponseBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ListCheckinsResponse$Outbound = {
  Result: ListCheckinsResponseBody$Outbound;
};

/** @internal */
export const ListCheckinsResponse$outboundSchema: z.ZodType<
  ListCheckinsResponse$Outbound,
  z.ZodTypeDef,
  ListCheckinsResponse
> = z.object({
  result: z.lazy(() => ListCheckinsResponseBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListCheckinsResponse$ {
  /** @deprecated use `ListCheckinsResponse$inboundSchema` instead. */
  export const inboundSchema = ListCheckinsResponse$inboundSchema;
  /** @deprecated use `ListCheckinsResponse$outboundSchema` instead. */
  export const outboundSchema = ListCheckinsResponse$outboundSchema;
  /** @deprecated use `ListCheckinsResponse$Outbound` instead. */
  export type Outbound = ListCheckinsResponse$Outbound;
}

export function listCheckinsResponseToJSON(
  listCheckinsResponse: ListCheckinsResponse,
): string {
  return JSON.stringify(
    ListCheckinsResponse$outboundSchema.parse(listCheckinsResponse),
  );
}

export function listCheckinsResponseFromJSON(
  jsonString: string,
): SafeParseResult<ListCheckinsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListCheckinsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListCheckinsResponse' from JSON`,
  );
}
