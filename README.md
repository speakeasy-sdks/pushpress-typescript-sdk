<div align="center">
    <img src="https://github.com/user-attachments/assets/fab0b863-5d21-41c5-83ac-ee6857766f8d" width="600">
    <h1>Typescript SDK</h1>
    <p><strong>The Solution for Bringing In More Members.</strong></p>
    <p>Developer-friendly & type-safe Typescript SDK specifically catered to leverage the <strong>PushPress</strong> API.</p>
    <a href="https://ppe.apidocumentation.com/reference"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=4c2cec&style=for-the-badge" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/katrina/katrina). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary
PushPress API: Welcome to PushPress' API documentation!

<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Pagination](#pagination)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.apps.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiKeys](docs/sdks/apikeys/README.md)

* [revoke](docs/sdks/apikeys/README.md#revoke) - Revoke an API key
* [delete](docs/sdks/apikeys/README.md#delete) - Permanently delete an API key

### [apps](docs/sdks/apps/README.md)

* [list](docs/sdks/apps/README.md#list) - List all available apps
* [get](docs/sdks/apps/README.md#get) - Get details of a specific app
* [install](docs/sdks/apps/README.md#install) - Install an app for a company

#### [apps.installs](docs/sdks/installs/README.md)

* [list](docs/sdks/installs/README.md#list) - List all installs of a specific app
* [uninstall](docs/sdks/installs/README.md#uninstall) - Soft uninstall an app (mark it as uninstalled but retain data)
* [hardDelete](docs/sdks/installs/README.md#harddelete) - Hard delete an app (remove all data)
* [get](docs/sdks/installs/README.md#get) - Get details of a specific app install

### [checkins](docs/sdks/checkins/README.md)

* [list](docs/sdks/checkins/README.md#list) - Get a list of all check-ins
* [get](docs/sdks/checkins/README.md#get) - Get a check-in by ID

### [companies](docs/sdks/companies/README.md)

* [get](docs/sdks/companies/README.md#get) - Get company details associated with the API key

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - Get a list of all customers in a
* [get](docs/sdks/customers/README.md#get) - Get a customer by ID

### [keys](docs/sdks/keys/README.md)

* [create](docs/sdks/keys/README.md#create) - Create a new API key for a  company
* [list](docs/sdks/keys/README.md#list) - List all active API keys for a client
* [get](docs/sdks/keys/README.md#get) - Retrieve a single API key

### [messages](docs/sdks/messages/README.md)


#### [messages.email](docs/sdks/email/README.md)

* [send](docs/sdks/email/README.md#send) - Send an email

#### [messages.notifications](docs/sdks/notifications/README.md)

* [sendPing](docs/sdks/notifications/README.md#sendping) - Send a ping notification via Ably Realtime

#### [messages.push](docs/sdks/push/README.md)

* [send](docs/sdks/push/README.md#send) - Send a push notification


### [webhooks](docs/sdks/webhooks/README.md)

* [create](docs/sdks/webhooks/README.md#create) - Create a new webhook to subscribe to one or more events
* [list](docs/sdks/webhooks/README.md#list) - List all registered webhooks
* [get](docs/sdks/webhooks/README.md#get) - Get details of a specific webhook
* [update](docs/sdks/webhooks/README.md#update) - Update the URL or events for an existing webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete a specific webhook

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`apiKeysDelete`](docs/sdks/apikeys/README.md#delete) - Permanently delete an API key
- [`apiKeysRevoke`](docs/sdks/apikeys/README.md#revoke) - Revoke an API key
- [`appsGet`](docs/sdks/apps/README.md#get) - Get details of a specific app
- [`appsInstall`](docs/sdks/apps/README.md#install) - Install an app for a company
- [`appsInstallsGet`](docs/sdks/installs/README.md#get) - Get details of a specific app install
- [`appsInstallsHardDelete`](docs/sdks/installs/README.md#harddelete) - Hard delete an app (remove all data)
- [`appsInstallsList`](docs/sdks/installs/README.md#list) - List all installs of a specific app
- [`appsInstallsUninstall`](docs/sdks/installs/README.md#uninstall) - Soft uninstall an app (mark it as uninstalled but retain data)
- [`appsList`](docs/sdks/apps/README.md#list) - List all available apps
- [`checkinsGet`](docs/sdks/checkins/README.md#get) - Get a check-in by ID
- [`checkinsList`](docs/sdks/checkins/README.md#list) - Get a list of all check-ins
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get company details associated with the API key
- [`customersGet`](docs/sdks/customers/README.md#get) - Get a customer by ID
- [`customersList`](docs/sdks/customers/README.md#list) - Get a list of all customers in a
- [`keysCreate`](docs/sdks/keys/README.md#create) - Create a new API key for a  company
- [`keysGet`](docs/sdks/keys/README.md#get) - Retrieve a single API key
- [`keysList`](docs/sdks/keys/README.md#list) - List all active API keys for a client
- [`messagesEmailSend`](docs/sdks/email/README.md#send) - Send an email
- [`messagesNotificationsSendPing`](docs/sdks/notifications/README.md#sendping) - Send a ping notification via Ably Realtime
- [`messagesPushSend`](docs/sdks/push/README.md#send) - Send a push notification
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create a new webhook to subscribe to one or more events
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete a specific webhook
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get details of a specific webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List all registered webhooks
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update the URL or events for an existing webhook

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.apps.installs.list({
    appId: "<id>",
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.apps.list({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.apps.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.APIError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `list` method may throw the following errors:

| Error Type                 | Status Code                       | Content Type     |
| -------------------------- | --------------------------------- | ---------------- |
| errors.BadRequest          | 400, 413, 414, 415, 422, 431, 510 | application/json |
| errors.Unauthorized        | 401, 403, 407, 511                | application/json |
| errors.NotFound            | 404, 501, 505                     | application/json |
| errors.Timeout             | 408, 504                          | application/json |
| errors.RateLimited         | 429                               | application/json |
| errors.InternalServerError | 500, 502, 503, 506, 507, 508      | application/json |
| errors.APIError            | 4XX, 5XX                          | \*/\*            |

```typescript
import { PushpressTs } from "pushpress-ts";
import {
  BadRequest,
  InternalServerError,
  NotFound,
  RateLimited,
  SDKValidationError,
  Timeout,
  Unauthorized,
} from "pushpress-ts/models/errors";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await pushpressTs.apps.list();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof BadRequest): {
        // Handle err.data$: BadRequestData
        console.error(err);
        return;
      }
      case (err instanceof Unauthorized): {
        // Handle err.data$: UnauthorizedData
        console.error(err);
        return;
      }
      case (err instanceof NotFound): {
        // Handle err.data$: NotFoundData
        console.error(err);
        return;
      }
      case (err instanceof Timeout): {
        // Handle err.data$: TimeoutData
        console.error(err);
        return;
      }
      case (err instanceof RateLimited): {
        // Handle err.data$: RateLimitedData
        console.error(err);
        return;
      }
      case (err instanceof InternalServerError): {
        // Handle err.data$: InternalServerErrorData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name    | Server                           |
| ------- | -------------------------------- |
| `prod`  | `https://api.pushpress.com`      |
| `stage` | `https://api.pushpressstage.com` |
| `dev`   | `https://api.pushpressdev.com`   |

#### Example

```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  server: "dev",
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.apps.list();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  serverURL: "https://api.pushpress.com",
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.apps.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { PushpressTs } from "pushpress-ts";
import { HTTPClient } from "pushpress-ts/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new PushpressTs({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable  |
| -------- | ------ | ------- | --------------------- |
| `apiKey` | apiKey | API key | `PUSHPRESSTS_API_KEY` |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { PushpressTs } from "pushpress-ts";

const pushpressTs = new PushpressTs({
  apiKey: process.env["PUSHPRESSTS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpressTs.apps.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { PushpressTs } from "pushpress-ts";

const sdk = new PushpressTs({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `PUSHPRESSTS_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=pushpress-ts&utm_campaign=typescript)
