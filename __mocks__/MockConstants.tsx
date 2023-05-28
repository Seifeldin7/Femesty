/**
 * A mock of the Constants module with extra fields specified to simulate a project in development.
 * Use it by importing and returning it from a `jest.mock` call explicitly.
 */


const Constants = jest.requireActual('expo-constants').default;

const MockConstants = Object.create(Constants);
MockConstants.manifest = {
  ...Constants.manifest,
  developer: {
    projectRoot: '/home/test/project',
  },
  logUrl: 'https://localhost:19001/logs',
  // put whatever here
  extra: {
      baseUrl: '192.168.1.1'
  }
};

module.exports = MockConstants;