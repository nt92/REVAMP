#!/bin/bash

MINPARAMS=1

jekyll build
git add .
git commit -m "$1"
git push
# git push origin production
