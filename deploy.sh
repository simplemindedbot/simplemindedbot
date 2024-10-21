#!/bin/bash

# Stage and commit any uncommitted changes
git add .
git commit -m "Auto-commit before deployment"

# Run zola build
zola build

# Deploy using wrangler
npx wrangler pages deploy
