#!/bin/bash
/bin/bash wait-for-mysql.sh
npm run migrate
npm run seed
node app.js