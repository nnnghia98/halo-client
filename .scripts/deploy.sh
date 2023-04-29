#!/bin/bash
set -e

yarn install

npm run build

npm run restart
