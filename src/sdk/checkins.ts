/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkinsGet } from "../funcs/checkinsGet.js";
import { checkinsList } from "../funcs/checkinsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Checkin } from "../models/components/checkin.js";
import { GetCheckinRequest } from "../models/operations/getcheckin.js";
import {
  ListCheckinsRequest,
  ListCheckinsResponse,
} from "../models/operations/listcheckins.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Checkins extends ClientSDK {
  /**
   * Get a list of all check-ins
   */
  async list(
    request: ListCheckinsRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<ListCheckinsResponse>> {
    return unwrapResultIterator(checkinsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a check-in by ID
   */
  async get(
    request: GetCheckinRequest,
    options?: RequestOptions,
  ): Promise<Checkin> {
    return unwrapAsync(checkinsGet(
      this,
      request,
      options,
    ));
  }
}
