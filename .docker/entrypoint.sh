#! /bin/bash

if [ ! -f ".env" ]; then
  cp .env.exemple .env

  yarn db:migrate
  yarn db:seed
fi

yarn install
yarn start
