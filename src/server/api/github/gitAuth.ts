import { Octokit } from '@octokit/core'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const gistId = getQuery(event).id as string

  if (!gistId) {
    throw createError({ statusCode: 400, message: 'Missing gist ID' })
  }

  const octokit = new Octokit({
    auth: config.githubToken,
  })

  const response = await octokit.request('GET /gists/{gist_id}', {
    gist_id: gistId,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })

  return response.data
})