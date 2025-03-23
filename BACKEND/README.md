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

## Login Endpoint Documentation

### Endpoint

`POST /users/login`

### Description

This endpoint is used to authenticate a user. It validates the input data, checks the credentials against the database, and returns an authentication token if successful.

### Request Body

The request body must be a JSON object with the following fields:

- `email`: A valid email address (required)
- `password`: A string with at least 8 characters (required)

Example:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Responses

- **200 OK**: User successfully authenticated. Returns the user object and an authentication token.
  
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
    "token": "authToken"
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

- **401 Unauthorized**: Authentication failed. Returns an error message indicating invalid credentials.
  
  Example:
  
  ```json
  {
    "error": "Invalid email or password"
  }
  ```

### Notes

- Ensure that the `JWT_SECRET` environment variable is set for token generation.
- The MongoDB connection string should be correctly configured in the `.env` file.

## Profile Endpoint Documentation

### Endpoint

`GET /users/profile`

### Description

This endpoint is used to retrieve the profile of the authenticated user.

### Authentication

This endpoint requires the user to be authenticated by providing a valid JWT token in the `Authorization` header or as a cookie.

### Responses

- **200 OK**: Returns the user's profile information.
  
  Example:
  
  ```json
  {
    "_id": "userId",
    "email": "user@example.com",
    "fullName": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "isDriver": true
  }
  ```

- **401 Unauthorized**: Authentication failed. Returns an error message indicating the user is not authorized.
  
  Example:
  
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## Logout Endpoint Documentation

### Endpoint

`GET /users/logout`

### Description

This endpoint is used to log out the authenticated user by clearing the authentication token.

### Authentication

This endpoint requires the user to be authenticated by providing a valid JWT token in the `Authorization` header or as a cookie.

### Responses

- **200 OK**: Successfully logged out. Returns a success message.
  
  Example:
  
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

- **401 Unauthorized**: Authentication failed. Returns an error message indicating the user is not authorized.
  
  Example:
  
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---