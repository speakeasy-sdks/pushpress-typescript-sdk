/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PushpressCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  Company,
  Company$inboundSchema,
} from "../models/components/company.js";
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
import { Result } from "../types/fp.js";

/**
 * Get company details associated with the API key
 */
export async function companiesGet(
  client: PushpressCore,
  options?: RequestOptions,
): Promise<
  Result<
    Company,
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
> {
  const path = pathToFunc("/company")();

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
    operationID: "getCompany",
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
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || 10000,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
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
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    Company,
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
    M.json(200, Company$inboundSchema),
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
    return result;
  }

  return result;
}
