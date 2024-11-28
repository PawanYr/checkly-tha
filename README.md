# Checkly Monitoring-as-code

This example project shows how you can use the Checkly CLI in a monitoring as code (MaC) workflow.

## Project Structure

```code
.github/
└── workflows/
   └── checkly.yml        # Sample GitHub Action that tests and deploys checks on push
src/
├── alert-channels.ts     # Where you can add and configure email and other kinds of alerts
└── __checks__/           # Where you'll put the files you get from the online dashboard
   ├── *.check.ts         # Check definitions
   └── *.spec.ts          # The checks themselves
checkly-config.ts         # Config info for this project such as project name and region; change this to suit your needs
```
- Place the files you download from the Checkly online dashboard in `src/__checks__/`
- Add the email you wish to be alerted of failures at to `src/alert-channels.ts`
- Running `npx checkly test` will look for `.check.ts` files and `.spec.ts` in `__checks__` directories and execute them in a dry run.
- Running `npx checkly deploy` will deploy your checks to Checkly, attach alert channels, and run them on a 10m schedule in the 
region `us-east-1` and `eu-west-1`; you can change the frequency and regions in checkly-config.ts.
- An example GitHub Actions workflow is in the `.github/workflows/checkly.yml` file. On push, it triggers all the checks in the project and deploys them if they pass.