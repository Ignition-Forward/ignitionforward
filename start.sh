#!/bin/sh

# Start the Node.js API server in background
node /app/server.js &

# Start nginx in foreground
nginx -g 'daemon off;'
