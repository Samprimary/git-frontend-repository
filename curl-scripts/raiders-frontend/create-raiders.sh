#!/bin/bash

curl "http://localhost:4741/raiders" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "raider": {
      "name": "'"${NAME}"'",
      "power": "'"${POWER}"'",
      "user_id": "'"${USERID}"'"
    }
  }'

echo
