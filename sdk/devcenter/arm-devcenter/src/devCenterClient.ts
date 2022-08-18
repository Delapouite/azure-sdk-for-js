/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  DevCentersImpl,
  ProjectsImpl,
  AttachedNetworksImpl,
  GalleriesImpl,
  ImagesImpl,
  ImageVersionsImpl,
  CatalogsImpl,
  EnvironmentTypesImpl,
  ProjectEnvironmentTypesImpl,
  DevBoxDefinitionsImpl,
  OperationsImpl,
  OperationStatusesImpl,
  UsagesImpl,
  SkusImpl,
  PoolsImpl,
  SchedulesImpl,
  NetworkConnectionsImpl
} from "./operations";
import {
  DevCenters,
  Projects,
  AttachedNetworks,
  Galleries,
  Images,
  ImageVersions,
  Catalogs,
  EnvironmentTypes,
  ProjectEnvironmentTypes,
  DevBoxDefinitions,
  Operations,
  OperationStatuses,
  Usages,
  Skus,
  Pools,
  Schedules,
  NetworkConnections
} from "./operationsInterfaces";
import { DevCenterClientOptionalParams } from "./models";

export class DevCenterClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DevCenterClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Unique identifier of the Azure subscription. This is a GUID-formatted string
   *                       (e.g. 00000000-0000-0000-0000-000000000000).
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: DevCenterClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DevCenterClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-devcenter/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes: `${optionsWithDefaults.credentialScopes}`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2022-08-01-preview";
    this.devCenters = new DevCentersImpl(this);
    this.projects = new ProjectsImpl(this);
    this.attachedNetworks = new AttachedNetworksImpl(this);
    this.galleries = new GalleriesImpl(this);
    this.images = new ImagesImpl(this);
    this.imageVersions = new ImageVersionsImpl(this);
    this.catalogs = new CatalogsImpl(this);
    this.environmentTypes = new EnvironmentTypesImpl(this);
    this.projectEnvironmentTypes = new ProjectEnvironmentTypesImpl(this);
    this.devBoxDefinitions = new DevBoxDefinitionsImpl(this);
    this.operations = new OperationsImpl(this);
    this.operationStatuses = new OperationStatusesImpl(this);
    this.usages = new UsagesImpl(this);
    this.skus = new SkusImpl(this);
    this.pools = new PoolsImpl(this);
    this.schedules = new SchedulesImpl(this);
    this.networkConnections = new NetworkConnectionsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  devCenters: DevCenters;
  projects: Projects;
  attachedNetworks: AttachedNetworks;
  galleries: Galleries;
  images: Images;
  imageVersions: ImageVersions;
  catalogs: Catalogs;
  environmentTypes: EnvironmentTypes;
  projectEnvironmentTypes: ProjectEnvironmentTypes;
  devBoxDefinitions: DevBoxDefinitions;
  operations: Operations;
  operationStatuses: OperationStatuses;
  usages: Usages;
  skus: Skus;
  pools: Pools;
  schedules: Schedules;
  networkConnections: NetworkConnections;
}