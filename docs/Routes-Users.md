# Blog API Documentation

## Introdução
This REST API allows you to manage users, posts and comments on a blog. All the Routess available for the `User` entities are described below.

---

## Routes Users (User)

### 1. Insert new User
- **Routes:** `POST /users`
- **Description:** Insert new User.
- **Parameters (JSON):**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

### 2. Get All Users
- **Routes:** `GET /users`
- **Description:** Cria um novo usuário.
- **Parameters (JSON):**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

### 3. Get Find User
- **Routes:** `GET /user/{id}`
- **Description:** Get find one User
- **Parameters (JSON):**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

### 4. Update find User
- **Routes:**: `PUT /user/{id}`
- **Description:**: Update find User select.
- **Parâmetros de URL**: id - ID User.
- **Parameters (JSON):**
```json
Copiar código
{
  "title": "string",
  "content": "string"
}
```
<br>