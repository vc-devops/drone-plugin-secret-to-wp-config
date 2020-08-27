#!/bin/bash
set -euo pipefail

echo $PLUGIN_USERNAME

exec "$@"
