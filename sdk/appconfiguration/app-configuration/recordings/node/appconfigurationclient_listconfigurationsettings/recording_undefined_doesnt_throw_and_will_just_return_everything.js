let nock = require('nock');

module.exports.hash = "38d2e9f8bbb0a6639315a5b84d98bf0c";

module.exports.testInfo = {"uniqueName":{"listConfigSetting0A":"listConfigSetting0A158696681139705406","listConfigSetting0B":"listConfigSetting0B158696681139709029","listConfigSettingsLabel":"listConfigSettingsLabel158696681139700392"},"newDate":{}}

nock('https://myappconfig.azconfig.io:443', {"encodedQueryParams":true})
  .put('/kv/listConfigSetting0A158696681139705406', {"key":"listConfigSetting0A158696681139705406","label":"listConfigSettingsLabel158696681139700392","value":"[A] production value"})
  .query(true)
  .reply(200, {"etag":"GSmfoGsUuY0MLxte8Hj6y3AMWOq","key":"listConfigSetting0A158696681139705406","label":"listConfigSettingsLabel158696681139700392","content_type":null,"value":"[A] production value","tags":{},"locked":false,"last_modified":"2020-04-15T16:06:51+00:00"}, [
  'Server',
  'nginx/1.16.1',
  'Date',
  'Wed, 15 Apr 2020 16:06:51 GMT',
  'Content-Type',
  'application/vnd.microsoft.appconfig.kv+json; charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Last-Modified',
  'Wed, 15 Apr 2020 16:06:51 GMT',
  'ETag',
  '"GSmfoGsUuY0MLxte8Hj6y3AMWOq"',
  'Sync-Token',
  'zAJw6V16=NjotMSMxOTAyMzU0;sn=1902354',
  'x-ms-request-id',
  'fcb47007-c9bf-49ea-a6c1-b7d71391aec0',
  'x-ms-correlation-request-id',
  'fcb47007-c9bf-49ea-a6c1-b7d71391aec0',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Expose-Headers',
  'DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Authorization, x-ms-client-request-id, x-ms-useragent, x-ms-content-sha256, x-ms-date, host, Accept, Accept-Datetime, Date, If-Match, If-None-Match, Sync-Token, x-ms-return-client-request-id, ETag, Last-Modified, Link, Memento-Datetime, x-ms-retry-after, x-ms-request-id, WWW-Authenticate',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains'
]);

nock('https://myappconfig.azconfig.io:443', {"encodedQueryParams":true})
  .put('/locks/listConfigSetting0A158696681139705406')
  .query(true)
  .reply(200, {"etag":"Rjzuid2vBlKOCuZG7rXmyOciP9A","key":"listConfigSetting0A158696681139705406","label":"listConfigSettingsLabel158696681139700392","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-15T16:06:52+00:00"}, [
  'Server',
  'nginx/1.16.1',
  'Date',
  'Wed, 15 Apr 2020 16:06:51 GMT',
  'Content-Type',
  'application/vnd.microsoft.appconfig.kv+json; charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Last-Modified',
  'Wed, 15 Apr 2020 16:06:52 GMT',
  'ETag',
  '"Rjzuid2vBlKOCuZG7rXmyOciP9A"',
  'Sync-Token',
  'zAJw6V16=NjotMSMxOTAyMzU1;sn=1902355',
  'x-ms-request-id',
  '881f6e36-9f83-4474-92dd-8305984d06b6',
  'x-ms-correlation-request-id',
  '881f6e36-9f83-4474-92dd-8305984d06b6',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Expose-Headers',
  'DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Authorization, x-ms-client-request-id, x-ms-useragent, x-ms-content-sha256, x-ms-date, host, Accept, Accept-Datetime, Date, If-Match, If-None-Match, Sync-Token, x-ms-return-client-request-id, ETag, Last-Modified, Link, Memento-Datetime, x-ms-retry-after, x-ms-request-id, WWW-Authenticate',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains'
]);

nock('https://myappconfig.azconfig.io:443', {"encodedQueryParams":true})
  .put('/kv/listConfigSetting0A158696681139705406', {"key":"listConfigSetting0A158696681139705406","value":"[A] value"})
  .query(true)
  .reply(200, {"etag":"SgxHTQidwuJZRzlULZzeAFOyalS","key":"listConfigSetting0A158696681139705406","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-15T16:06:52+00:00"}, [
  'Server',
  'nginx/1.16.1',
  'Date',
  'Wed, 15 Apr 2020 16:06:51 GMT',
  'Content-Type',
  'application/vnd.microsoft.appconfig.kv+json; charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Last-Modified',
  'Wed, 15 Apr 2020 16:06:52 GMT',
  'ETag',
  '"SgxHTQidwuJZRzlULZzeAFOyalS"',
  'Sync-Token',
  'zAJw6V16=NjotMSMxOTAyMzU2;sn=1902356',
  'x-ms-request-id',
  '2e5eec9d-2303-4368-8908-d61836324296',
  'x-ms-correlation-request-id',
  '2e5eec9d-2303-4368-8908-d61836324296',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Expose-Headers',
  'DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Authorization, x-ms-client-request-id, x-ms-useragent, x-ms-content-sha256, x-ms-date, host, Accept, Accept-Datetime, Date, If-Match, If-None-Match, Sync-Token, x-ms-return-client-request-id, ETag, Last-Modified, Link, Memento-Datetime, x-ms-retry-after, x-ms-request-id, WWW-Authenticate',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains'
]);

nock('https://myappconfig.azconfig.io:443', {"encodedQueryParams":true})
  .put('/kv/listConfigSetting0B158696681139709029', {"key":"listConfigSetting0B158696681139709029","label":"listConfigSettingsLabel158696681139700392","value":"[B] production value"})
  .query(true)
  .reply(200, {"etag":"vR0iCBGVek6Ks3rPw6GDlgUiK0o","key":"listConfigSetting0B158696681139709029","label":"listConfigSettingsLabel158696681139700392","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-15T16:06:52+00:00"}, [
  'Server',
  'nginx/1.16.1',
  'Date',
  'Wed, 15 Apr 2020 16:06:51 GMT',
  'Content-Type',
  'application/vnd.microsoft.appconfig.kv+json; charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Last-Modified',
  'Wed, 15 Apr 2020 16:06:52 GMT',
  'ETag',
  '"vR0iCBGVek6Ks3rPw6GDlgUiK0o"',
  'Sync-Token',
  'zAJw6V16=NjotMSMxOTAyMzU3;sn=1902357',
  'x-ms-request-id',
  '0194a111-706d-4968-b041-343f28e8dea6',
  'x-ms-correlation-request-id',
  '0194a111-706d-4968-b041-343f28e8dea6',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Expose-Headers',
  'DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Authorization, x-ms-client-request-id, x-ms-useragent, x-ms-content-sha256, x-ms-date, host, Accept, Accept-Datetime, Date, If-Match, If-None-Match, Sync-Token, x-ms-return-client-request-id, ETag, Last-Modified, Link, Memento-Datetime, x-ms-retry-after, x-ms-request-id, WWW-Authenticate',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains'
]);

nock('https://myappconfig.azconfig.io:443', {"encodedQueryParams":true})
  .put('/kv/listConfigSetting0B158696681139709029', {"key":"listConfigSetting0B158696681139709029","value":"[B] value"})
  .query(true)
  .reply(200, {"etag":"GOhWZmNSBCWg1FXaNbuxgwjhOuo","key":"listConfigSetting0B158696681139709029","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-15T16:06:52+00:00"}, [
  'Server',
  'nginx/1.16.1',
  'Date',
  'Wed, 15 Apr 2020 16:06:51 GMT',
  'Content-Type',
  'application/vnd.microsoft.appconfig.kv+json; charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Last-Modified',
  'Wed, 15 Apr 2020 16:06:52 GMT',
  'ETag',
  '"GOhWZmNSBCWg1FXaNbuxgwjhOuo"',
  'Sync-Token',
  'zAJw6V16=NjotMSMxOTAyMzU4;sn=1902358',
  'x-ms-request-id',
  '45231937-f8b7-48c6-83c9-743762d6abcb',
  'x-ms-correlation-request-id',
  '45231937-f8b7-48c6-83c9-743762d6abcb',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Expose-Headers',
  'DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Authorization, x-ms-client-request-id, x-ms-useragent, x-ms-content-sha256, x-ms-date, host, Accept, Accept-Datetime, Date, If-Match, If-None-Match, Sync-Token, x-ms-return-client-request-id, ETag, Last-Modified, Link, Memento-Datetime, x-ms-retry-after, x-ms-request-id, WWW-Authenticate',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains'
]);

nock('https://myappconfig.azconfig.io:443', {"encodedQueryParams":true})
  .get('/kv')
  .query(true)
  .reply(200, {"items":[{"etag":"ETMySmYWRAxSKjR4it8N60mshCv","key":"addConfigSample-1586891362769","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T19:09:23+00:00"},{"etag":"bxzehWib6zHkv2lxGzXbBblBFKb","key":"addConfigSample-1586901794045","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T22:03:14+00:00"},{"etag":"1of1KIoKzrcHRPr03dmDELgO0cl","key":"addConfigSample-1586903064130","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T22:24:24+00:00"},{"etag":"bewwMN7AKLeMIgMpoGHrf4nF0F9","key":"addConfigSample158690528013108473","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:01:20+00:00"},{"etag":"UBr3Q6RDG7kgJWAMMEMkQ16xvw8","key":"addConfigSample158690549863008289","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:04:59+00:00"},{"etag":"KO3VsdlHfxdMEM6zm97sbobEjbR","key":"addConfigSample158690565430709956","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:07:34+00:00"},{"etag":"VRsWDdD12d4Ne027qyZCoxNeakn","key":"addConfigSample158690608387302009","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:14:44+00:00"},{"etag":"1emYcMwz4qfxc2SDKRFphGNsVE6","key":"addConfigSample158690756104206179","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:39:21+00:00"},{"etag":"hsSiCj1BiGKPU9Vwg7xx6BrTxql","key":"addConfigSample158690782411402711","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:43:44+00:00"},{"etag":"AEjbcIARpHimH7qh80mJjFArxWp","key":"addConfigSample158690797583309590","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:46:16+00:00"},{"etag":"MCLfUO9YX9oTF876uMKLCjNVSIq","key":"addConfigSample158690809212606855","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:48:12+00:00"},{"etag":"HjK2TsWxxpL6ZWZQwDU68QTb6hh","key":"addConfigSample158690835970900198","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:52:40+00:00"},{"etag":"UhK4fF5GifDcHgfGodmrrjRbeUA","key":"addConfigSample158690871426809790","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:58:34+00:00"},{"etag":"LSq7qUPOmy5XUHwDFJwDV7784Zh","key":"addConfigSample158690902583609931","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-15T00:03:46+00:00"},{"etag":"kFVzI5dvAs85jW0BP58EtBAYsJw","key":"addConfigSample158696680755302258","label":null,"content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-15T16:06:48+00:00"},{"etag":"ydNkcek9S2D0pYGxoY9ijH7Llnf","key":"deleteConfigTest-1586891364237","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T19:09:24+00:00"},{"etag":"pERGbIjtYqH94TIbDXk27H0jyen","key":"deleteConfigTest-1586901795856","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T22:03:16+00:00"},{"etag":"MDRd4y1fyJ5XI8CmGEZViVvxb9Z","key":"deleteConfigTest-1586903065947","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T22:24:26+00:00"},{"etag":"hAsU04u1pJi7XsI2K0rD1JTiG16","key":"deleteConfigTest158690528194105886","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:01:22+00:00"},{"etag":"4QJ2GkoS8pFn9xRL4ry4dEDWALM","key":"deleteConfigTest158690550038607150","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:05:00+00:00"},{"etag":"jvqpd9YAwZPWnGbT0qCK0JIobtD","key":"deleteConfigTest158690565601802719","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:07:36+00:00"},{"etag":"oHyNPYwIH2ludpx2leZZvVkL5A5","key":"deleteConfigTest158690608570501872","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:14:46+00:00"},{"etag":"DuOduWZTOdHOTgnUN4WPyIdQ5Q5","key":"deleteConfigTest158690756284604246","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:39:23+00:00"},{"etag":"J1yuVgXkICvdewvAje18OWShyLT","key":"deleteConfigTest158690782595006037","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:43:46+00:00"},{"etag":"FIek1kC5vtYe0JlM7H7U5w1zdcB","key":"deleteConfigTest158690797764709785","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:46:18+00:00"},{"etag":"ANZkCyyBCrXxK24idkLuSAcOqJg","key":"deleteConfigTest158690809391001678","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:48:14+00:00"},{"etag":"8BIa1Ex00KojlkWP9Ri6DYp7FRp","key":"deleteConfigTest158690836152504365","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:52:42+00:00"},{"etag":"R0Yjx87xctubOVtGvSlcy8FWu80","key":"deleteConfigTest158690871608709268","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-14T23:58:36+00:00"},{"etag":"iMBbFgP5mycOYJYFas44AFpdhXv","key":"deleteConfigTest158690902763605027","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-15T00:03:48+00:00"},{"etag":"wloL2w0AzEZXhZbWKmwX3HVWDfa","key":"deleteConfigTest158696680936403964","label":"MyLabel","content_type":null,"value":"MyValue","tags":{},"locked":false,"last_modified":"2020-04-15T16:06:49+00:00"},{"etag":"AzHzpBIVCt1vPfRFbUX7eMkxz5u","key":"getConfigTest-1586891364676","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T19:09:25+00:00"},{"etag":"8YNZiMyqAWCJHvI7fJsKp9nihF5","key":"getConfigTest-1586901796430","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T22:03:17+00:00"},{"etag":"mzhMMBJrRfkwrKuZcsfHVPmBmTF","key":"getConfigTest-1586903066522","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T22:24:27+00:00"},{"etag":"i83bhSoKXky4njqYui1tFtmcJPN","key":"getConfigTest158690528250209775","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:01:23+00:00"},{"etag":"cf52OZSlUptwoCa3SRdBtp5qMcu","key":"getConfigTest158690550094604109","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:05:01+00:00"},{"etag":"FFKcrhzSsfeUnnzTwyFFVVyqY5D","key":"getConfigTest158690565658304388","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:07:37+00:00"},{"etag":"rabnZvLc42HUo0fCZve6kxHrOoJ","key":"getConfigTest158690608627201456","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:14:46+00:00"},{"etag":"4uayYRZDOsWsuSB9g02EVfyxjEW","key":"getConfigTest158690756341609943","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:39:23+00:00"},{"etag":"LnRHKLvkYnT5AdTXpK8tkrXWMvG","key":"getConfigTest158690782648501037","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:43:47+00:00"},{"etag":"UHNeixAA5tHC2iBFW9e9Xgf5Sqt","key":"getConfigTest158690797821303393","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:46:18+00:00"},{"etag":"jmBIknEE92ouoRPzMYs3teXamgX","key":"getConfigTest158690809445002094","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:48:15+00:00"},{"etag":"IVoGHsPDYXsWZKvlUYN4wlZOgGw","key":"getConfigTest158690836209001496","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:52:42+00:00"},{"etag":"jGoUyUeg4ehX1GURhjw55XRDV3s","key":"getConfigTest158690871665903457","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-14T23:58:37+00:00"},{"etag":"ujUNtaRTpyd2gF5ePVoS5DUIdgM","key":"getConfigTest158690902820003126","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-15T00:03:48+00:00"},{"etag":"mIIIN0UkW2aPlgBRXuPeQcDCndT","key":"getConfigTest158696680993104244","label":"test","content_type":"application/json","value":"foo","tags":{"bar":"baz","car":"caz"},"locked":false,"last_modified":"2020-04-15T16:06:50+00:00"},{"etag":"wLAnLoGx47xhqjjx5eu3ocBXMpN","key":"getConfigurationSettingByDate-1586891364792","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T19:09:26+00:00"},{"etag":"kFYfeBJqK9174xHpmyM23IslBBJ","key":"getConfigurationSettingByDate-1586901796547","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T22:03:18+00:00"},{"etag":"VxpaqUFBJWCecIr9va9G1CZ3Qab","key":"getConfigurationSettingByDate-1586903066645","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T22:24:28+00:00"},{"etag":"NNlFZyPw4IHaW0MHFe3MiNvPUjZ","key":"getConfigurationSettingByDate158690528262102584","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:01:24+00:00"},{"etag":"ZpNvpSnN3b1jhT0ZjqbQEQ6AqPg","key":"getConfigurationSettingByDate158690550106407925","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:05:02+00:00"},{"etag":"MRaVEShHBCiwAyDbv70EwJAVv23","key":"getConfigurationSettingByDate158690565670506358","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:07:38+00:00"},{"etag":"pVAjzqi7rtl6rQSvUPOUGnE2hCR","key":"getConfigurationSettingByDate158690608639207960","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:14:48+00:00"},{"etag":"YxbAcJWjZ6dvdJnIMwa4WxQMR1t","key":"getConfigurationSettingByDate158690756353803788","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:39:25+00:00"},{"etag":"BV0hUc9g7gWwdTqSWR7nExqsANZ","key":"getConfigurationSettingByDate158690782660403257","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:43:48+00:00"},{"etag":"l5eCx511jZ89vWG8kuUDBPp8yT4","key":"getConfigurationSettingByDate158690797833209283","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:46:20+00:00"},{"etag":"WdamZKiThQKNtv1jMDPOfjpaOq1","key":"getConfigurationSettingByDate158690809456907690","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:48:16+00:00"},{"etag":"dlgLhAzVlWQ1rmV8IclCDh0ak7Y","key":"getConfigurationSettingByDate158690836220909400","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:52:43+00:00"},{"etag":"x4DUa3augD6nU5kJE1wBU4P13UZ","key":"getConfigurationSettingByDate158690871677708167","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-14T23:58:38+00:00"},{"etag":"XBuTlBaQCMZsMEfZ24RLuL503Vp","key":"getConfigurationSettingByDate158690902831509646","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-15T00:03:50+00:00"},{"etag":"18I9VNOGpFq0vB8nuWLHZa09VhP","key":"getConfigurationSettingByDate158696681005403085","label":null,"content_type":null,"value":"value2","tags":{},"locked":false,"last_modified":"2020-04-15T16:06:51+00:00"},{"etag":"F1n2NeBEK74ghvzWrFU2PJbnzZN","key":"listConfigSetting0A158690565805102868","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:07:38+00:00"},{"etag":"T1s62ZynVoNHrltVbwDc9wTsEzQ","key":"listConfigSetting0A158690565805102868","label":"listConfigSettingsLabel158690565805107282","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-14T23:07:38+00:00"},{"etag":"bcsij48SQxVnUa15o75xpoAEdL8","key":"listConfigSetting0A158690608773406866","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:14:48+00:00"},{"etag":"Ko6Y3CdF40724rnNnwm4hQKZkVm","key":"listConfigSetting0A158690608773406866","label":"listConfigSettingsLabel158690608773404834","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-14T23:14:48+00:00"},{"etag":"P1bEKHOdCFzG7ob7s58pqleRE8Q","key":"listConfigSetting0A158690756487906192","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:39:25+00:00"},{"etag":"SLtTM49lkc0JJA8ojLVpPbxEuoe","key":"listConfigSetting0A158690756487906192","label":"listConfigSettingsLabel158690756487902998","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-14T23:39:25+00:00"},{"etag":"vMryFfVrFgZDr0yWiatbsaWiKzQ","key":"listConfigSetting0A158690782794402670","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:43:48+00:00"},{"etag":"MQ57uvPMnwI4RrJ1B8e4UhfrJyt","key":"listConfigSetting0A158690782794402670","label":"listConfigSettingsLabel158690782794404118","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-14T23:43:48+00:00"},{"etag":"Z5C1S9VNOMvkkiSuE21oUrT8m1h","key":"listConfigSetting0A158690797967703158","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:46:20+00:00"},{"etag":"d7C2fNMO2krVvxeBElQ9cfxk4Bz","key":"listConfigSetting0A158690797967703158","label":"listConfigSettingsLabel158690797967702310","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-14T23:46:20+00:00"},{"etag":"dkudcxmHBKCj1yTg0AX5TJg3Ass","key":"listConfigSetting0A158690809591309546","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:48:16+00:00"},{"etag":"GzaUHMSh1H6k31YEelsZZcp48Ac","key":"listConfigSetting0A158690809591309546","label":"listConfigSettingsLabel158690809591309871","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-14T23:48:16+00:00"},{"etag":"VBco0w9NFBePYQQBqhaI7LmtUxl","key":"listConfigSetting0A158690836352604944","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:52:44+00:00"},{"etag":"frPgQ9YstG5OLuwNb4a7u4w3DAC","key":"listConfigSetting0A158690836352604944","label":"listConfigSettingsLabel158690836352600268","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-14T23:52:44+00:00"},{"etag":"krofebJxsoZDNOZYGnza1tc8pmR","key":"listConfigSetting0A158690871811800176","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:58:38+00:00"},{"etag":"aOAxMmQfCnB0g4kh72OpdS2Jaa5","key":"listConfigSetting0A158690871811800176","label":"listConfigSettingsLabel158690871811807327","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-14T23:58:38+00:00"},{"etag":"TUUqyqOp5Mo3fkkoVEZ3pxx1r6w","key":"listConfigSetting0A158690902966009849","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-15T00:03:50+00:00"},{"etag":"DRfu0vVxAiDFzCWPnKzSbFTNeWb","key":"listConfigSetting0A158690902966009849","label":"listConfigSettingsLabel158690902966007212","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-15T00:03:50+00:00"},{"etag":"euum3HRKLHCxnevANaC2XxUAdAu","key":"listConfigSetting0A158696214734001318","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-15T14:49:08+00:00"},{"etag":"PWrKkR2axFud7wU7vGRjdeiUQfP","key":"listConfigSetting0A158696214734001318","label":"listConfigSettingsLabel158696214734000290","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-15T14:49:08+00:00"},{"etag":"OrPXmRT10JGp7Te2ZbljcahbBKB","key":"listConfigSetting0A158696276392204744","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-15T14:59:24+00:00"},{"etag":"uCIHwSs6c3SDdwLcT8EknrAoYny","key":"listConfigSetting0A158696276392204744","label":"listConfigSettingsLabel158696276392202711","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-15T14:59:24+00:00"},{"etag":"SgxHTQidwuJZRzlULZzeAFOyalS","key":"listConfigSetting0A158696681139705406","label":null,"content_type":null,"value":"[A] value","tags":{},"locked":false,"last_modified":"2020-04-15T16:06:52+00:00"},{"etag":"Rjzuid2vBlKOCuZG7rXmyOciP9A","key":"listConfigSetting0A158696681139705406","label":"listConfigSettingsLabel158696681139700392","content_type":null,"value":"[A] production value","tags":{},"locked":true,"last_modified":"2020-04-15T16:06:52+00:00"},{"etag":"koVrn3vNogs66aPnwlIAo1N7Mwm","key":"listConfigSetting0B158690565805107624","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:07:39+00:00"},{"etag":"BsdkNngrFT2HD7MnOJi81EGbFU2","key":"listConfigSetting0B158690565805107624","label":"listConfigSettingsLabel158690565805107282","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-14T23:07:38+00:00"},{"etag":"CjrKr4lgJ9pl6lPJu1B0IP8rwJr","key":"listConfigSetting0B158690608773401421","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:14:48+00:00"},{"etag":"BD2KjJDZ78Z1TpfhE24afaZcM5S","key":"listConfigSetting0B158690608773401421","label":"listConfigSettingsLabel158690608773404834","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-14T23:14:48+00:00"},{"etag":"qoaNogwki7FVjyiUAla1xHnjwWe","key":"listConfigSetting0B158690756487905058","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:39:25+00:00"},{"etag":"QX8vl7iIoKz3a72IyB0oCEUcAmc","key":"listConfigSetting0B158690756487905058","label":"listConfigSettingsLabel158690756487902998","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-14T23:39:25+00:00"},{"etag":"9bAjZBBkMlpL9Ze2r104qZlohHN","key":"listConfigSetting0B158690782794401866","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:43:48+00:00"},{"etag":"btV4e6kOi63ceycmrqz5Mreqnw8","key":"listConfigSetting0B158690782794401866","label":"listConfigSettingsLabel158690782794404118","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-14T23:43:48+00:00"},{"etag":"065bF8tTbGvINTdIM02ULHvfGNV","key":"listConfigSetting0B158690797967703927","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:46:20+00:00"},{"etag":"dMPyu5IlDWenmhqSfJDkpyS1Bek","key":"listConfigSetting0B158690797967703927","label":"listConfigSettingsLabel158690797967702310","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-14T23:46:20+00:00"},{"etag":"yvmxBab9gmJfvYpFsU5mixhqdqc","key":"listConfigSetting0B158690809591302059","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:48:16+00:00"},{"etag":"KsvTc1fK1Hb0GYeqngH9bUOng9N","key":"listConfigSetting0B158690809591302059","label":"listConfigSettingsLabel158690809591309871","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-14T23:48:16+00:00"},{"etag":"ei3Sf0Uzu3fltpJKre9HbGmFyge","key":"listConfigSetting0B158690836352607376","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:52:44+00:00"},{"etag":"wi5Pbk4qN4cN5XJEoQ7lffTyrCj","key":"listConfigSetting0B158690836352607376","label":"listConfigSettingsLabel158690836352600268","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-14T23:52:44+00:00"},{"etag":"TE4dH9CDmh6SNc8WOxZlf7Z8exN","key":"listConfigSetting0B158690871811806946","label":null,"content_type":null,"value":"[B] value","tags":{},"locked":false,"last_modified":"2020-04-14T23:58:39+00:00"},{"etag":"aJv3GqQqJyR5i1RVv6sg8R4CYLr","key":"listConfigSetting0B158690871811806946","label":"listConfigSettingsLabel158690871811807327","content_type":null,"value":"[B] production value","tags":{},"locked":false,"last_modified":"2020-04-14T23:58:39+00:00"}],"@nextLink":"/kv?api-version=1.0&after=bGlzdENvbmZpZ1NldHRpbmcwQjE1ODY5MDg3MTgxMTgwNjk0NgpsaXN0Q29uZmlnU2V0dGluZ3NMYWJlbDE1ODY5MDg3MTgxMTgwNzMyNw%3D%3D"}, [
  'Server',
  'nginx/1.16.1',
  'Date',
  'Wed, 15 Apr 2020 16:06:52 GMT',
  'Content-Type',
  'application/vnd.microsoft.appconfig.kvset+json; charset=utf-8',
  'Transfer-Encoding',
  'chunked',
  'Connection',
  'close',
  'Link',
  '</kv?api-version=1.0&after=bGlzdENvbmZpZ1NldHRpbmcwQjE1ODY5MDg3MTgxMTgwNjk0NgpsaXN0Q29uZmlnU2V0dGluZ3NMYWJlbDE1ODY5MDg3MTgxMTgwNzMyNw%3D%3D>; rel="next"',
  'Sync-Token',
  'zAJw6V16=NjotMSMxOTAyMzU4;sn=1902358',
  'x-ms-request-id',
  'bf6afc98-92d0-4581-9131-46efffe2a6b1',
  'x-ms-correlation-request-id',
  'bf6afc98-92d0-4581-9131-46efffe2a6b1',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Credentials',
  'true',
  'Access-Control-Expose-Headers',
  'DNT, X-CustomHeader, Keep-Alive, User-Agent, X-Requested-With, If-Modified-Since, Cache-Control, Content-Type, Authorization, x-ms-client-request-id, x-ms-useragent, x-ms-content-sha256, x-ms-date, host, Accept, Accept-Datetime, Date, If-Match, If-None-Match, Sync-Token, x-ms-return-client-request-id, ETag, Last-Modified, Link, Memento-Datetime, x-ms-retry-after, x-ms-request-id, WWW-Authenticate',
  'Strict-Transport-Security',
  'max-age=15724800; includeSubDomains'
]);
