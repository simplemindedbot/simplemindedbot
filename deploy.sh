#!/bin/bash

# Stage and commit any uncommitted changes
git add .
git commit -m "Auto-commit before deployment"

# Push changes to the remote repository
git push

# Run zola build
zola build

# Deploy using wrangler
npx wrangler pages deploy
