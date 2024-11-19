# Keys
(*keys*)

## Overview

### Available Operations

* [create](#create) - Create a new API key for a  company
* [list](#list) - List all active API keys for a client
* [get](#get) - Retrieve a single API key

## create

Create a new API key for a company.

### Example Usage

```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  await pushpressTs.keys.create({
    company: "Nienow Inc",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushpressTsCore } from "pushpress-ts/core.js";
import { keysCreate } from "pushpress-ts/funcs/keysCreate.js";

// Use `PushpressTsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushpressTs = new PushpressTsCore({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const res = await keysCreate(pushpressTs, {
    company: "Nienow Inc",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateApiKeyRequestBody](../../models/operations/createapikeyrequestbody.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Unauthorized          | 401, 403, 407, 511           | application/json             |
| errors.NotFound              | 404, 501, 505                | application/json             |
| errors.Timeout               | 408, 504                     | application/json             |
| errors.BadRequest            | 413, 414, 415, 422, 431, 510 | application/json             |
| errors.RateLimited           | 429                          | application/json             |
| errors.InternalServerError   | 500, 502, 503, 506, 507, 508 | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |

## list

List all active API keys for a client.

### Example Usage

```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.keys.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushpressTsCore } from "pushpress-ts/core.js";
import { keysList } from "pushpress-ts/funcs/keysList.js";

// Use `PushpressTsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushpressTs = new PushpressTsCore({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const res = await keysList(pushpressTs);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiKey](../../models/components/apikey.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Unauthorized          | 401, 403, 407, 511           | application/json             |
| errors.NotFound              | 404, 501, 505                | application/json             |
| errors.Timeout               | 408, 504                     | application/json             |
| errors.BadRequest            | 413, 414, 415, 422, 431, 510 | application/json             |
| errors.RateLimited           | 429                          | application/json             |
| errors.InternalServerError   | 500, 502, 503, 506, 507, 508 | application/json             |
| errors.APIError              | 4XX, 5XX                     | \*/\*                        |

## get

Retrieve a single API key.

### Example Usage

```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.keys.get({
    keyId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushpressTsCore } from "pushpress-ts/core.js";
import { keysGet } from "pushpress-ts/funcs/keysGet.js";

// Use `PushpressTsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushpressTs = new PushpressTsCore({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const res = await keysGet(pushpressTs, {
    keyId: "<id>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetApiKeyRequest](../../models/operations/getapikeyrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiKey](../../models/components/apikey.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.BadRequest                 | 400, 413, 414, 415, 422, 431, 510 | application/json                  |
| errors.Unauthorized               | 401, 403, 407, 511                | application/json                  |
| errors.NotFound                   | 404, 501, 505                     | application/json                  |
| errors.Timeout                    | 408, 504                          | application/json                  |
| errors.RateLimited                | 429                               | application/json                  |
| errors.InternalServerError        | 500, 502, 503, 506, 507, 508      | application/json                  |
| errors.APIError                   | 4XX, 5XX                          | \*/\*                             |