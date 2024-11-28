/**
* This is a Checkly CLI BrowserCheck construct. To learn more, visit:
* - https://www.checklyhq.com/docs/cli/
* - https://www.checklyhq.com/docs/cli/constructs-reference/#browsercheck
*/

import { BrowserCheck, Frequency, RetryStrategyBuilder } from 'checkly/constructs'
import { emailChannel } from '../alert-channels'
const alertChannels = [emailChannel]

new BrowserCheck('screenshotting-wikipedia', {
  name: 'Screenshotting Wikipedia',
  alertChannels,
  activated: true,
  muted: false,
  shouldFail: false,
  runParallel: true,
  runtimeId: '2024.02',
  locations: ['ca-central-1', 'us-east-1'],
  tags: [],
  frequency: Frequency.EVERY_30M,
  environmentVariables: [],
  code: {
    entrypoint: './screenshotting-wikipedia.spec.ts',
  },
  retryStrategy: RetryStrategyBuilder.linearStrategy({
    baseBackoffSeconds: 60,
    maxRetries: 2,
    maxDurationSeconds: 600,
    sameRegion: true,
  }),
})
