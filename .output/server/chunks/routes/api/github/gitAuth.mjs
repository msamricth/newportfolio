import { c as defineEventHandler, u as useRuntimeConfig, g as getQuery, e as createError } from '../../../_/nitro.mjs';
import { Octokit } from '@octokit/core';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'node:fs';
import 'node:url';
import 'consola';
import 'node:path';
import 'node:crypto';

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
