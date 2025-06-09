import { defineEventHandler, getQuery, createError } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/h3/dist/index.mjs';
import { a as useRuntimeConfig } from '../../../_/nitro.mjs';
import { Octokit } from 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/@octokit/core/dist-src/index.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/vue/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/consola/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/emmta/Local%20Sites/newportfolio/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/emmta/Local%20Sites/newportfolio/node_modules/ohash/dist/index.mjs';

const gitAuth = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const gistId = getQuery(event).id;
  if (!gistId) {
    throw createError({ statusCode: 400, message: "Missing gist ID" });
  }
  const octokit = new Octokit({
    auth: config.githubToken
  });
  const response = await octokit.request("GET /gists/{gist_id}", {
    gist_id: gistId,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });
  return response.data;
});

export { gitAuth as default };
//# sourceMappingURL=gitAuth.mjs.map
