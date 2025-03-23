# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token.

## Request Body

The request body must be a JSON object with the following fields:

- `email`: A valid email address (required)
- `password`: A string with at least 8 characters (required)
- `fullName`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (required)
- `isDriver`: A boolean indicating if the user is a driver (optional)

Example:

```json
{
  "email": "user@example.com",
  "password": "password123",
  "fullName": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "isDriver": true
}
```

## Responses

- **201 Created**: User successfully registered. Returns the user object and an authentication token.
  
  Example:
  
  ```json
  {
    "user": {
      "_id": "userId",
      "email": "user@example.com",
      "fullName": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "isDriver": true
    },
    "token": "JWT Token"
  }
  ```

- **400 Bad Request**: Validation failed. Returns an array of error messages.
  
  Example:
  
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

## Notes

- Ensure that the `JWT_SECRET` environment variable is set for token generation.
- The MongoDB connection string should be correctly configured in the `.env` file. 