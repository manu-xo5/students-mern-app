npm run build --prefix=client
rm -rf server/build
mv client/build server/
echo DONE