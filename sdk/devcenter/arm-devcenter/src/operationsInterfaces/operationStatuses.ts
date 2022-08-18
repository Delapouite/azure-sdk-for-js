/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationStatusesGetOptionalParams,
  OperationStatusesGetResponse
} from "../models";

/** Interface representing a OperationStatuses. */
export interface OperationStatuses {
  /**
   * Gets the current status of an async operation.
   * @param location The Azure region
   * @param operationId The ID of an ongoing async operation
   * @param options The options parameters.
   */
  get(
    location: string,
    operationId: string,
    options?: OperationStatusesGetOptionalParams
  ): Promise<OperationStatusesGetResponse>;
}