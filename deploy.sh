cd client/
npm run build
cd ..

git add .
git commit --allow-empty -m "redeploying"
git push heroku main