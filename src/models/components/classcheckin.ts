/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ClassCheckinType = {
  ClassCheckin: "ClassCheckin",
} as const;
export type ClassCheckinType = ClosedEnum<typeof ClassCheckinType>;

export type ClassCheckin = {
  /**
   * Unique identifier for the checkin
   */
  id: string;
  /**
   * Name of the checked-in class
   */
  name: string;
  type: ClassCheckinType;
  /**
   * Type of the class
   */
  classType: string;
};

/** @internal */
export const ClassCheckinType$inboundSchema: z.ZodNativeEnum<
  typeof ClassCheckinType
> = z.nativeEnum(ClassCheckinType);

/** @internal */
export const ClassCheckinType$outboundSchema: z.ZodNativeEnum<
  typeof ClassCheckinType
> = ClassCheckinType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassCheckinType$ {
  /** @deprecated use `ClassCheckinType$inboundSchema` instead. */
  export const inboundSchema = ClassCheckinType$inboundSchema;
  /** @deprecated use `ClassCheckinType$outboundSchema` instead. */
  export const outboundSchema = ClassCheckinType$outboundSchema;
}

/** @internal */
export const ClassCheckin$inboundSchema: z.ZodType<
  ClassCheckin,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string(),
  type: ClassCheckinType$inboundSchema,
  classType: z.string(),
});

/** @internal */
export type ClassCheckin$Outbound = {
  id: string;
  name: string;
  type: string;
  classType: string;
};

/** @internal */
export const ClassCheckin$outboundSchema: z.ZodType<
  ClassCheckin$Outbound,
  z.ZodTypeDef,
  ClassCheckin
> = z.object({
  id: z.string(),
  name: z.string(),
  type: ClassCheckinType$outboundSchema,
  classType: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ClassCheckin$ {
  /** @deprecated use `ClassCheckin$inboundSchema` instead. */
  export const inboundSchema = ClassCheckin$inboundSchema;
  /** @deprecated use `ClassCheckin$outboundSchema` instead. */
  export const outboundSchema = ClassCheckin$outboundSchema;
  /** @deprecated use `ClassCheckin$Outbound` instead. */
  export type Outbound = ClassCheckin$Outbound;
}

export function classCheckinToJSON(classCheckin: ClassCheckin): string {
  return JSON.stringify(ClassCheckin$outboundSchema.parse(classCheckin));
}

export function classCheckinFromJSON(
  jsonString: string,
): SafeParseResult<ClassCheckin, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ClassCheckin$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ClassCheckin' from JSON`,
  );
}
