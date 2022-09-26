/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SSODetailsRequest,
  MonitorsGetSSODetailsOptionalParams,
  DynatraceObservability
} from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the SSO configuration details from the partner.
 *
 * @summary Gets the SSO configuration details from the partner.
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/Monitors_GetSSODetails_MaximumSet_Gen.json
 */
async function monitorsGetSsoDetailsMaximumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const request: SSODetailsRequest = { userPrincipal: "alice@microsoft.com" };
  const options: MonitorsGetSSODetailsOptionalParams = { request };
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.getSSODetails(
    resourceGroupName,
    monitorName,
    options
  );
  console.log(result);
}

monitorsGetSsoDetailsMaximumSetGen().catch(console.error);

/**
 * This sample demonstrates how to Gets the SSO configuration details from the partner.
 *
 * @summary Gets the SSO configuration details from the partner.
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2021-09-01/examples/Monitors_GetSSODetails_MinimumSet_Gen.json
 */
async function monitorsGetSsoDetailsMinimumSetGen() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const monitorName = "myMonitor";
  const request: SSODetailsRequest = {};
  const options: MonitorsGetSSODetailsOptionalParams = { request };
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.monitors.getSSODetails(
    resourceGroupName,
    monitorName,
    options
  );
  console.log(result);
}

monitorsGetSsoDetailsMinimumSetGen().catch(console.error);