#!/bin/bash
set -e
npm run build

pm2 restart app1
