# Email
(*messages.email*)

## Overview

### Available Operations

* [send](#send) - Send an email

## send

Send an email

### Example Usage

```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  await pushpressTs.messages.email.send({
    to: "Isobel_Brakus@yahoo.com",
    subject: "<value>",
    body: "<value>",
    from: "Fern47@yahoo.com",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PushpressTsCore } from "pushpress-ts/core.js";
import { messagesEmailSend } from "pushpress-ts/funcs/messagesEmailSend.js";

// Use `PushpressTsCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pushpressTs = new PushpressTsCore({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const res = await messagesEmailSend(pushpressTs, {
    to: "Isobel_Brakus@yahoo.com",
    subject: "<value>",
    body: "<value>",
    from: "Fern47@yahoo.com",
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
| `request`                                                                                                                                                                      | [operations.SendEmailRequestBody](../../models/operations/sendemailrequestbody.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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