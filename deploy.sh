#!/bin/bash
set -e

npm run build
npx gh-pages -d dist -r https://github.com/selinbgunaydin/module11.git