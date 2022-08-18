/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DevCenterClient } from "../devCenterClient";
import {
  Usage,
  UsagesListByLocationNextOptionalParams,
  UsagesListByLocationOptionalParams,
  UsagesListByLocationResponse,
  UsagesListByLocationNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Usages operations. */
export class UsagesImpl implements Usages {
  private readonly client: DevCenterClient;

  /**
   * Initialize a new instance of the class Usages class.
   * @param client Reference to the service client
   */
  constructor(client: DevCenterClient) {
    this.client = client;
  }

  /**
   * Lists the current usages and limits in this location for the provided subscription.
   * @param location The Azure region
   * @param options The options parameters.
   */
  public listByLocation(
    location: string,
    options?: UsagesListByLocationOptionalParams
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listByLocationPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByLocationPagingPage(location, options);
      }
    };
  }

  private async *listByLocationPagingPage(
    location: string,
    options?: UsagesListByLocationOptionalParams
  ): AsyncIterableIterator<Usage[]> {
    let result = await this._listByLocation(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByLocationNext(
        location,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByLocationPagingAll(
    location: string,
    options?: UsagesListByLocationOptionalParams
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listByLocationPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Lists the current usages and limits in this location for the provided subscription.
   * @param location The Azure region
   * @param options The options parameters.
   */
  private _listByLocation(
    location: string,
    options?: UsagesListByLocationOptionalParams
  ): Promise<UsagesListByLocationResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listByLocationOperationSpec
    );
  }

  /**
   * ListByLocationNext
   * @param location The Azure region
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    location: string,
    nextLink: string,
    options?: UsagesListByLocationNextOptionalParams
  ): Promise<UsagesListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listByLocationNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DevCenter/locations/{location}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListUsagesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListUsagesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};