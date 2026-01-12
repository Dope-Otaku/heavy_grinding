# we will create a backedn using nodejs


requirements :
experss js
nodejs
mongodb

to run this code in development - ```  node --env-file=.env index.js  ```


to test 

to post :: ``` curl -X POST http://localhost:8000/api/v1/reviews/new -H "Content-Type: application/json" -d '{"movieId": 12, "user": "raj", "review": "good"}'  ```


to get :: ``` curl -X GET http://localhost:8000/api/v1/reviews/6964eb8421712b6b6bb53766   ```
to delete :: ``` curl -X DEL http://localhost:8000/api/v1/reviews/6964eb8421712b6b6bb53766   ```


mongodb issue:
<h3>sometimes it will give you issues while connecting with db|| either whitelist your ip or allow every users for a limited time || it's an mongodb internal issue</h3>