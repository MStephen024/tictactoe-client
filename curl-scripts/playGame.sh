# VARIABLE=VALUE sh curl-scripts/auth/games/${ID}.sh

#!/bin/bash

curl "https://wdi-library-api.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
      "game": {
        "cell": {
          "index": 0,
          "value": "x"
        },
        "over": false
      }
  }'

echo
