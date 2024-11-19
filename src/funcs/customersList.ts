/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PushpressCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  BadRequest,
  BadRequest$inboundSchema,
} from "../models/errors/badrequest.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import {
  InternalServerError,
  InternalServerError$inboundSchema,
} from "../models/errors/internalservererror.js";
import { NotFound, NotFound$inboundSchema } from "../models/errors/notfound.js";
import {
  RateLimited,
  RateLimited$inboundSchema,
} from "../models/errors/ratelimited.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { Timeout, Timeout$inboundSchema } from "../models/errors/timeout.js";
import {
  Unauthorized,
  Unauthorized$inboundSchema,
} from "../models/errors/unauthorized.js";
import {
  ListCustomersRequest,
  ListCustomersRequest$outboundSchema,
  ListCustomersResponse,
  ListCustomersResponse$inboundSchema,
} from "../models/operations/listcustomers.js";
import { Result } from "../types/fp.js";
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * Get a list of all customers in a
 */
export async function customersList(
  client: PushpressCore,
  request: ListCustomersRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      ListCustomersResponse,
      | BadRequest
      | Unauthorized
      | NotFound
      | Timeout
      | RateLimited
      | InternalServerError
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  >
> {
  const parsed = safeParse(
    request,
    (value) => ListCustomersRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/customers")();

  const query = encodeFormQuery({
    "limit": payload.limit,
    "page": payload.page,
  });

  const headers = new Headers({
    Accept: "application/json",
    "companyId": encodeSimple("companyId", client._options.companyId, {
      explode: false,
      charEncoding: "none",
    }),
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "listCustomers",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || 10000,
  }, options);
  if (!requestRes.ok) {
    return haltIterator(requestRes);
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [
      "400",
      "401",
      "403",
      "404",
      "407",
      "408",
      "413",
      "414",
      "415",
      "422",
      "429",
      "431",
      "4XX",
      "500",
      "501",
      "502",
      "503",
      "504",
      "505",
      "506",
      "507",
      "508",
      "510",
      "511",
      "5XX",
    ],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    ListCustomersResponse,
    | BadRequest
    | Unauthorized
    | NotFound
    | Timeout
    | RateLimited
    | InternalServerError
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, ListCustomersResponse$inboundSchema, { key: "Result" }),
    M.jsonErr([400, 413, 414, 415, 422, 431, 510], BadRequest$inboundSchema),
    M.jsonErr([401, 403, 407, 511], Unauthorized$inboundSchema),
    M.jsonErr([404, 501, 505], NotFound$inboundSchema),
    M.jsonErr([408, 504], Timeout$inboundSchema),
    M.jsonErr(429, RateLimited$inboundSchema),
    M.jsonErr(
      [500, 502, 503, 506, 507, 508],
      InternalServerError$inboundSchema,
    ),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): Paginator<
    Result<
      ListCustomersResponse,
      | BadRequest
      | Unauthorized
      | NotFound
      | Timeout
      | RateLimited
      | InternalServerError
      | APIError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  > => {
    const page = request?.page || 0;
    const nextPage = page + 1;

    if (!responseData) {
      return () => null;
    }
    const results = dlv(responseData, "data.resultArray");
    if (!Array.isArray(results) || !results.length) {
      return () => null;
    }
    const limit = request?.limit || 0;
    if (results.length < limit) {
      return () => null;
    }

    return () =>
      customersList(
        client,
        {
          ...request,
          page: nextPage,
        },
        options,
      );
  };

  const page = { ...result, next: nextFunc(raw) };
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
