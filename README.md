# L2B2-Frontend-Path-Assignment-6-Server
# Live Link : https://l2-b2-frontend-path-assignment-6-server-starter-pack-eight.vercel.app
## Installation:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run dev`.


## Configuration:
- Environment Variables:
  - `PORT`: Port number the server listens on. Default: 5000
  - `MONGODB_URI`: URI for MongoDB database.
  - `JWT_SECRET`: Secret key for JWT token generation.
  - `EXPIRES_IN`: Token expiration time.

## Usage:
- API Endpoints:
  - POST `/api/v1/auth/login`
    - Description: Authenticates user and returns a JWT token.
    - Request: 
        ```json
        { 
            "email": "example@email.com", 
            "password": "password" 
        }
        ```
    - Response: 
        ```json
        {
            "success": true, 
            "message": "User registered successfully"
        }
        ```

  - POST `/api/v1/auth/register`
    - Description: Registers a new user.
    - Request:
        ```json
        { 
            "name": "John", 
            "email": "example@email.com", 
            "password": "password" 
        }
        ```
    - Response: 
        ```json
        {
            "success": true,
            "message": "Login successful",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoMkBleGFtcGxlLmNvbSIsImlhdCI6MTcwNzg1MDYyMSwiZXhwIjoxNzA3OTM3MDIxfQ.7EahSgmPLPNuZ_T9ok-B6TayWCJVdxPzi_Nx4UfrhvY"
        }
        ```

  
     - POST `/api/v1/create-supply`
    - Description: add a new supply post.
    - Request:
      
       ```json
        {
             "Title": "Give the Gift of Food: Donate Kits for Families in Crisis",
              "Image": "https://i.ibb.co/gZ8G5yr/volunteers-collecting-food-donations-close-up.jpg",
              "Category": "Food supplies",
              "Amount": 100,
              "Description": "Your contribution ensures that medical professionals have the tools they need to save lives and alleviate suffering. Together, we can make a tangible difference in the fight against illness and disease, offering comfort and healing to those who need it most. Join us in our mission to extend a helping hand to those in need. Your generosity will bring hope to the sick and vulnerable, restoring health and well-being to individuals and communities around the world. Let's stand together in solidarity, showing compassion and care for our fellow human beings during their time of greatest need."      }
        ```

    - Response: 
        ```json
        {
            "success": true,
            "message": "Data added successfuly",
        } ```

   - GET `/api/v1/relief-goods`
       - Description: Get supply posts.

        - GET `/api/v1/relief-goods/:id`
       - Description: Get a supply post.

    
       - PUT `/api/v1/update-supply/:id`
       - Description: Update a supply post.

      - DELETE `/api/v1/delete-supply/:id`
       - Description: Delete a supply post.



## Dependencies:
- `bcrypt`: Library for hashing passwords.
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from .env file.
- `express`: Web framework for Node.js.
- `jsonwebtoken`: Library for generating and verifying JWT tokens.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

