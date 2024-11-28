import {
  EmailAlertChannel,
} from 'checkly/constructs'

const sendDefaults = {
  sendFailure: true,
  sendRecovery: true,
  sendDegraded: false,
  sslExpiry: true,
  sslExpiryThreshold: 30
}

export const emailChannel = new EmailAlertChannel('email-channel-1', {
  // Your email address here
  address: 'me@pawanyerramilli.com',
  ...sendDefaults
})
