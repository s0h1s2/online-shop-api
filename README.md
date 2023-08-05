# Start And Run
How to run
You have to install docker and docker-compose then 
run `docker-compose up`
the api and database server should be run.

# api endpoints 
i could use swagger but i guess the backend is pretty simple. and i assume you are using postman and to create a new `stores,products,categories` you need authorization so you have to pass `x-auth:<token>` header you and replace `<token>` with generated token from `auth` endpoint

1.to authenticate send `POST` request with `{ 'username':'admin','password':'admin' }` to get json web token  
`http://localhost:5000/api/v1/stores`

2.to get stores and stores are paginated as well
`http://localhost:5000/api/v1/stores`
`http://localhost:5000/api/v1/stores?page=2`

3.to create new store send `POST` request with header `Content-Type:multipart/form-data` becuase of file uploading the fields are `name,description` and select file for `logo`
`http://localhost:5000/api/v1/stores`

4.to get categories 
`http://localhost:5000/api/v1/categories/<:storeid>`

5.to create new categories send `POST` request with header `Content-Type:multipart/form-data` becuase of file uploading the fields are `name,description` and select file for `image`
`http://localhost:5000/api/v1/categories/<:storeid>`

6.to get products 
`http://localhost:5000/api/v1/products/<:categoryid>`

7.to create new product send `POST` request with header `Content-Type:multipart/form-data` becuase of file uploading the fields are `name,price,description` and select file for `image`
`http://localhost:5000/api/v1/products/<:categoryid>`
