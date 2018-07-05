#!/bin/bash

#call using sh scripts/raiders/delete-raider.sh

curl "http://localhost:4741/raiders/${ID}" \
  --include \
  --request DELETE

echo
