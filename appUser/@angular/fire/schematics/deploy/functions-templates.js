"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeVersion = 10;
const FUNCTION_NAME = 'ssr';
const FUNCTION_REGION = 'us-central1';
const RUNTIME_OPTIONS = {
    timeoutSeconds: 60,
    memory: '1GB'
};
exports.defaultPackage = (dependencies, devDependencies) => `{
  "name": "functions",
  "description": "Angular Universal Application",
  "scripts": {
    "lint": "",
    "serve": "firebase serve --only functions",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "${exports.NodeVersion}"
  },
  "dependencies": ${JSON.stringify(dependencies, null, 4)},
  "devDependencies": ${JSON.stringify(devDependencies, null, 4)},
  "private": true
}
`;
exports.defaultFunction = (path) => `const functions = require('firebase-functions');

const expressApp = require('./${path}/main').app();

exports.${FUNCTION_NAME} = functions
  .region('${FUNCTION_REGION}')
  .runWith(${JSON.stringify(RUNTIME_OPTIONS)})
  .https
  .onRequest(expressApp);
`;
