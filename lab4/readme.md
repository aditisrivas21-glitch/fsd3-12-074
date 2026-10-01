# NPM Project 
1. go to projrct folder (by cd)
2.type ``` npm init -y```
3. open package.json
update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json


```
script{

    "start": "node app.js",
    "dev": "nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use `npm run dev`

## REST API
-majorly backend server retuns only data not html file
-REST API use(get,post,put,pstch,delete) ,method to communicate with client
-any browser can check only get method
-for other method type we use third party API Tester like postman,thunder,client,echo,api etc

EchoAPI for VS Code

# Request Type 
1. GET  - GET ALL, GET BY ID 

Get : /api/products/
Get : /api/products/101


2. POST

Post: /api/products
and data will be shared by EchoAPI Body section

3. PUT/PATCH 

Put/Patch: /api/products/201
(id and echoapi body both are used)

4. DELETE

delete: /api/products/110


Exported fun can be imported by 