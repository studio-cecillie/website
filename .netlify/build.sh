echo "Downloading Cecil"
if [ -z $CECIL_VERSION ]; then
  curl -sSOL https://cecil.app/cecil.phar
else
  curl -sSOL https://cecil.app/download/$CECIL_VERSION/cecil.phar
fi
php cecil.phar --version

echo "Started Cecil build"
if [[ $1 == "preview" ]]; then
  php cecil.phar build -vv --baseurl=$DEPLOY_PRIME_URL --drafts
else
  php cecil.phar build -vv --baseurl=$URL --postprocess
fi

# build success? can deploy?
if [ $? = 0 ]; then echo "Finished Cecil build"; exit 0; fi

echo "Interrupted Cecil build"; exit 1
