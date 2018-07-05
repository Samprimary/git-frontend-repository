#!/bin/bash

curl "https://localhost:4741/raiders/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "raider": {
      "name": "'"${NAME}"'",
      "power": "'"${POWER}"'"
    }
  }'

echo
