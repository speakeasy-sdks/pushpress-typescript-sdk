<!-- Start SDK Example Usage [usage] -->
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