**Register**
----
Registers a single user

* **URL**

  /auth/register

* **Method:**

  `POST`
  
* **URL PARAMS**
 
  `None`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
      {
        "status": "success",
        "message": "Registration Successful",
        "data": {
          "tokenFlag": "auth",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzAyMjE0ZDc5MGMzMzFkNDQ2NjkyM2IiLCJmbGFnIjoiYXV0aCIsImNvdW50ZXIiOiJjUllVMWM2RWxnSWNKaUNMV0hIYTJZTGYzRDcxTEVDODlGaDEiLCJpYXQiOjE2NjEwODM5ODEsImV4cCI6MTY2MzY3NTk4MX0.g6bn0KQ7Gu72egdowhcIir2cbSWGTuJOjkXuqUY5h2s"
        }
      }
    ```
    
* **Error Response:**

  * **Code:** 400 <br />
    **Content:** `{ error : "User already exists" }`
    
 * **Sample Call:**

  ```javascript
    {
      "email": "clement@email.com",
      "username": "clems",
      "password": "clement"
    }
  ```
  
  **Login**
----
Log in a single user

* **URL**

  /auth/login

* **Method:**

  `POST`
  
* **URL PARAMS**
 
  `None`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
      {
        "status": "success",
        "message": "Login Successful",
        "data": {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzAwM2FkNGEzZWVmN2RmNjc2MDc3ZmMiLCJmbGFnIjoiYXV0aCIsImNvdW50ZXIiOiJLOTIxaDFPMnFaQ242Q1pLYlg2QkVVZmthWDlYOFJ5b2NKMFkiLCJpYXQiOjE2NjEwODQwNDcsImV4cCI6MTY2MzY3NjA0N30.N4PqYhKmMPTZG9v3qsKUbuEQXSJi-Fo0mEVznA8-1Os",
          "tokenFlag": "auth"
        }
      }
    ```
    
* **Error Response:**

  * **Code:** 403 AUTHORIZATION <br />
    **Content:** `{ error : "Invalid Login Credentials" }`
    
 * **Sample Call:**

  ```javascript
    {
      "email": "clement@email.com",
      "password": "clement"
    }
  ```
  
  **Post a review**
----
Posts a review by an authenticated user

* **URL**

  /review

* **Method:**

  `POST`
  
* **URL PARAMS**
 
  `None`
  
* **AUTHORIZATION HEADER**
 
  `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzAyMjE0ZDc5MGMzMzFkNDQ2NjkyM2IiLCJmbGFnIjoiYXV0aCIsImNvdW50ZXIiOiJjUllVMWM2RWxnSWNKaUNMV0hIYTJZTGYzRDcxTEVDODlGaDEiLCJpYXQiOjE2NjEwODM5ODEsImV4cCI6MTY2MzY3NTk4MX0.g6bn0KQ7Gu72egdowhcIir2cbSWGTuJOjkXuqUY5h2s`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
      {
        "status": "success",
        "message": "Review Sent",
        "data": {
          "review": {
            "apartmentId": "630050902a5eed6ff4dc5654",
            "userId": "63003ad4a3eef7df676077fc",
            "description": "A wonderful place to live with a kind landlord",
            "helpfulCount": 0,
            "files": [
              "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
              "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
            ],
            "_id": "630222464028a157bbd4009f",
            "createdAt": "2022-08-21T12:17:10.484Z",
            "updatedAt": "2022-08-21T12:17:10.484Z",
            "__v": 0
          }
        }
      }
    ```
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User not found" }`
    
 * **Sample Call:**

  ```javascript
    {
      "apartmentId": "630050902a5eed6ff4dc5654",
      "description": "A wonderful place to live with a kind landlord",
    }
    files: {
        field name = files: aurora.jpg,
        field name = files: aurora2.mp4
       }
  ```
  
  
  **Show all reviews**
----
Returns json data of all reviews

* **URL**

  /review

* **Method:**

  `GET`
  
* **URL PARAMS**
 
  `None`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
      {
        "status": "success",
        "message": "Successfully fetched reviews",
        "data": {
          "reviews": [
            {
              "_id": "630222464028a157bbd4009f",
              "apartmentId": "630050902a5eed6ff4dc5654",
              "userId": "63003ad4a3eef7df676077fc",
              "description": "A wonderful place to live with a kind landlord",
              "helpfulCount": 0,
              "files": [
                "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
                "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
              ],
              "createdAt": "2022-08-21T12:17:10.484Z",
              "updatedAt": "2022-08-21T12:17:10.484Z",
              "__v": 0
            },
            {
              "_id": "630222464028a157bbd4009f",
              "apartmentId": "630050902a5eed6ff4dc5654",
              "userId": "63003ad4a3eef7df676077fc",
              "description": "A wonderful place to live with a kind landlord",
              "helpfulCount": 0,
              "files": [
                "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
                "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
              ],
              "createdAt": "2022-08-21T12:17:10.484Z",
              "updatedAt": "2022-08-21T12:17:10.484Z",
              "__v": 0
            }
          ]
        }
      }
    ```
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User not found" }`
    
 * **Sample Call:**

  ```javascript
    {}
  ```
  
  
  **Show review**
----
Returns json data about a single review

* **URL**

  /review/:id

* **Method:**

  `GET`
  
* **URL PARAMS**
 
  `id=[number]`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
      {
        "status": "success",
        "message": "Successfully fetched review",
        "data": {
          "reviews": [
            {
              "_id": "630222464028a157bbd4009f",
              "apartmentId": "630050902a5eed6ff4dc5654",
              "userId": "63003ad4a3eef7df676077fc",
              "description": "A wonderful place to live with a kind landlord",
              "helpfulCount": 0,
              "files": [
                "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
                "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
              ],
              "createdAt": "2022-08-21T12:17:10.484Z",
              "updatedAt": "2022-08-21T12:17:10.484Z",
              "__v": 0
            }
          ]
        }
      }
    ```
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No reviews were found" }`
    
 * **Sample Call:**

  ```javascript
    {}
  ```
  
  
  **Sort reviews by helpful count**
----
Returns json data of all reviews with highest helpful count in descending order

* **URL**

  /review/?count=true

* **Method:**

  `GET`
  
* **URL QUERY**
 
  `count=[string]`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
      {
        "status": "success",
        "message": "Successfully fetched review",
        "data": {
          "reviews": [
            {
              "_id": "630222464028a157bbd4009f",
              "apartmentId": "630050902a5eed6ff4dc5654",
              "userId": "63003ad4a3eef7df676077fc",
              "description": "A wonderful place to live with a kind landlord",
              "helpfulCount": 4,
              "files": [
                "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
                "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
              ],
              "createdAt": "2022-08-21T12:17:10.484Z",
              "updatedAt": "2022-08-21T12:17:10.484Z",
              "__v": 0
            },
            {
              "_id": "630222464028a157bbd4009f",
              "apartmentId": "630050902a5eed6ff4dc5654",
              "userId": "63003ad4a3eef7df676077fc",
              "description": "A wonderful place to live with a kind landlord",
              "helpfulCount": 2,
              "files": [
                "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
                "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
              ],
              "createdAt": "2022-08-21T12:17:10.484Z",
              "updatedAt": "2022-08-21T12:17:10.484Z",
              "__v": 0
            },
          ]
        }
      }
    ```
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No reviews were found" }`
    
 * **Sample Call:**

  ```javascript
    {}
  ```
  
  
  **Sort reviews by most recent**
----
Returns json data of all reviews with most recent in descending order

* **URL**

  /review/?recent=true

* **Method:**

  `GET`
  
* **URL QUERY**
 
  `recent=[string]`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
      {
        "status": "success",
        "message": "Successfully fetched review",
        "data": {
          "reviews": [
          
            {
              "_id": "630222464028a157bbd4009f",
              "apartmentId": "630050902a5eed6ff4dc5654",
              "userId": "63003ad4a3eef7df676077fc",
              "description": "A wonderful place to live with a kind landlord",
              "helpfulCount": 4,
              "files": [
                "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
                "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
              ],
              "createdAt": "2022-08-21T12:17:10.484Z",
              "updatedAt": "2022-08-21T12:17:10.484Z",
              "__v": 0
            },
            {
              "_id": "630222464028a157bbd4009f",
              "apartmentId": "630050902a5eed6ff4dc5654",
              "userId": "63003ad4a3eef7df676077fc",
              "description": "A wonderful place to live with a kind landlord",
              "helpfulCount": 6,
              "files": [
                "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
                "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
              ],
              "createdAt": "2022-08-21T12:20:10.484Z",
              "updatedAt": "2022-08-21T12:20:10.484Z",
              "__v": 0
            }
          ]
        }
      }
    ```
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "No reviews were found" }`
    
 * **Sample Call:**

  ```javascript
    {}
  ```
  
  
  **Mark review as helpful**
----
Returns json data of a review with helpfulCount field incremented by 1 

* **URL**

  /review/:id

* **Method:**

  `PATCH`
  
* **URL PARAMS**
 
  `id:[number]`
  
* **AUTHORIZATION HEADER**
 
  `None`
  
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    
    ```
            {
        "status": "success",
        "message": "Review Updated",
        "data": {
          "updatedReview": {
            "_id": "630222464028a157bbd4009f",
            "apartmentId": "630050902a5eed6ff4dc5654",
            "userId": "63003ad4a3eef7df676077fc",
            "description": "the best house of all",
            "helpfulCount": 1,
            "files": [
              "https://s3.amazonaws.com/pentBucket/1661084228738-FB_IMG_1654352865185.jpg?AWSAccessKeyId=AKIAUXD2NX3GS2SOBG5E&Expires=1661084530&Signature=xolavIHhQbzHTjrMKVx0ddxe1Jk%3D",
              "https://s3.amazonaws.com/pentBucket/1661084228740-FB_IMG_1654352135759.jpg?AWSAccessKeyId=AKIAW2WWNFW5KZY6QVNZ&Expires=1661084530&Signature=eN4AAMs6q7ICnUIXs7AYu6GBglI%3D"
            ],
            "createdAt": "2022-08-21T12:17:10.484Z",
            "updatedAt": "2022-08-22T00:36:11.707Z",
            "__v": 0
          }
        }
      }
    ```
    
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Review not found" }`
    
 * **Sample Call:**

  ```javascript
    {}
  ```
