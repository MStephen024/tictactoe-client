# VARIABLE=VALUE sh curl-scripts/auth/games[?over=].sh

#!/bin/bash

curl "https://tic-tac-toe-wdi.herokuapp.com/games[?over=]" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "id": 1,
      "cells": ["o","x","o","x","o","x","o","x","o"],
      "over": true,
      "player_x": {
        "id": 1,
        "email": "and@and.com"
      },
      "player_o": null
    }
}'

echo
