<!-- Start SDK Example Usage [usage] -->
```typescript
import { Pushpress } from "pushpress";

const pushpress = new Pushpress({
  apiKey: process.env["PUSHPRESS_API_KEY"] ?? "",
});

async function run() {
  const result = await pushpress.apps.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->