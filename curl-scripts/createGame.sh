# VARIABLE=VALUE sh curl-scripts/auth/games.sh

#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data  '{
    "game":
      "id": 3,
      "cells": ["","","","","","","","",""],
      "over": false,
      "player_x": {
        "id": 1,
        "email": "and@and.com"
      },
      "player_o": null
  }'
