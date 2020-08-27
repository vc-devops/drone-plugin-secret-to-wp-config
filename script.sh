#!/bin/bash
set -euo pipefail

echo $PLUGIN_USERNAME

pwd

ls -al

exec "$@"
