import type {
  TestRunnerConfig,
} from '@storybook/test-runner';
import {
  screenshot,
} from 'storycap-testrun';

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    await screenshot(page, context, {});
  },
};

export default config;
