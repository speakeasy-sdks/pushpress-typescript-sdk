/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { ApiKeys } from "./apikeys.js";
import { Apps } from "./apps.js";
import { Checkins } from "./checkins.js";
import { Companies } from "./companies.js";
import { Customers } from "./customers.js";
import { Keys } from "./keys.js";
import { Messages } from "./messages.js";
import { Webhooks } from "./webhooks.js";

export class PushpressTs extends ClientSDK {
  private _apps?: Apps;
  get apps(): Apps {
    return (this._apps ??= new Apps(this._options));
  }

  private _keys?: Keys;
  get keys(): Keys {
    return (this._keys ??= new Keys(this._options));
  }

  private _apiKeys?: ApiKeys;
  get apiKeys(): ApiKeys {
    return (this._apiKeys ??= new ApiKeys(this._options));
  }

  private _messages?: Messages;
  get messages(): Messages {
    return (this._messages ??= new Messages(this._options));
  }

  private _companies?: Companies;
  get companies(): Companies {
    return (this._companies ??= new Companies(this._options));
  }

  private _customers?: Customers;
  get customers(): Customers {
    return (this._customers ??= new Customers(this._options));
  }

  private _checkins?: Checkins;
  get checkins(): Checkins {
    return (this._checkins ??= new Checkins(this._options));
  }

  private _webhooks?: Webhooks;
  get webhooks(): Webhooks {
    return (this._webhooks ??= new Webhooks(this._options));
  }
}
