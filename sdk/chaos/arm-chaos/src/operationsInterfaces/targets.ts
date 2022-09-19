/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Target,
  TargetsListOptionalParams,
  TargetsGetOptionalParams,
  TargetsGetResponse,
  TargetsDeleteOptionalParams,
  TargetsCreateOrUpdateOptionalParams,
  TargetsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Targets. */
export interface Targets {
  /**
   * Get a list of Target resources that extend a tracked regional resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param parentProviderNamespace String that represents a resource provider namespace.
   * @param parentResourceType String that represents a resource type.
   * @param parentResourceName String that represents a resource name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    options?: TargetsListOptionalParams
  ): PagedAsyncIterableIterator<Target>;
  /**
   * Get a Target resource that extends a tracked regional resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param parentProviderNamespace String that represents a resource provider namespace.
   * @param parentResourceType String that represents a resource type.
   * @param parentResourceName String that represents a resource name.
   * @param targetName String that represents a Target resource name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options?: TargetsGetOptionalParams
  ): Promise<TargetsGetResponse>;
  /**
   * Delete a Target resource that extends a tracked regional resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param parentProviderNamespace String that represents a resource provider namespace.
   * @param parentResourceType String that represents a resource type.
   * @param parentResourceName String that represents a resource name.
   * @param targetName String that represents a Target resource name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    options?: TargetsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Create or update a Target resource that extends a tracked regional resource.
   * @param resourceGroupName String that represents an Azure resource group.
   * @param parentProviderNamespace String that represents a resource provider namespace.
   * @param parentResourceType String that represents a resource type.
   * @param parentResourceName String that represents a resource name.
   * @param targetName String that represents a Target resource name.
   * @param target Target resource to be created or updated.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    parentProviderNamespace: string,
    parentResourceType: string,
    parentResourceName: string,
    targetName: string,
    target: Target,
    options?: TargetsCreateOrUpdateOptionalParams
  ): Promise<TargetsCreateOrUpdateResponse>;
}