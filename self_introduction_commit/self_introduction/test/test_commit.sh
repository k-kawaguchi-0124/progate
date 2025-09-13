#!/bin/bash

set -eu

RED='\033[0;31m'
NC='\033[0m' # No Color

# check if there is at least 1 commit
commit_count=$(git --no-pager log --oneline main | wc -l)

if [ $(( commit_count )) -ge 1 ]; then
    # do nothing
    :
else
    echo -e "${RED}You should commit at least once.${NC}"
    exit 1
fi

echo "ok"
exit 0
