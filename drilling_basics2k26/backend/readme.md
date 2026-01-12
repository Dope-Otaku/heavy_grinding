# we will create a backedn using nodejs


requirements :
experss js
nodejs
mongodb

to run this code in development - ```  node --env-file=.env index.js  ```


to test ``` curl -X POST http://localhost:8000/api/v1/reviews/new -H "Content-Type: application/json" -d '{"movieId": 12, "user": "raj", "review": "good"}'  ```