cd client/
npm run build
cd ..
mv client/build/ server/pages

git add .
git commit --allow-empty -m "redeploying"
git push heroku main

rmdir server/pages