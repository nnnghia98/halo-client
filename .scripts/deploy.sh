#!/bin/bash
set -e

yarn install --production

yarn build

npm run restart
