#!/bin/bash
# Script to initialize React + Express project

# 1. Clone repository
# Usage: ./setup-react-express.sh <github_username>

set -e

if [ $# -lt 1 ]; then
  echo "Usage: $0 <github_username>"
  exit 1
fi

GITHUB_USER="$1"
REPO_NAME="skin-risk-dashboard"

# Clone the repository if not already present
if [ ! -d "$REPO_NAME" ]; then
  git clone "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
fi
cd "$REPO_NAME"

# 2. Initialize Node project
npm init -y

# 3. Install frontend template (React)
# create-react-app will generate the client directory
npx create-react-app client

# Set up server directory
mkdir -p server
cd server
npm init -y
npm install express node-fetch nodemon

# Done
cat <<'MSG'

Initialization complete!
- Frontend: ./client
- Backend:  ./server

Run 'npm start' inside ./client to start React, and use nodemon or node in ./server for Express.
MSG
EOF
