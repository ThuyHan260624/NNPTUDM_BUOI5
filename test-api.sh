#!/bin/bash

# Test User & Role API Endpoints

BASE_URL="http://localhost:5000/api"

echo "=== TEST ROLE ENDPOINTS ==="

# 1. Create Role
echo -e "\n1. Create Role"
curl -X POST $BASE_URL/roles \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "description": "Administrator role"
  }'

# 2. Get All Roles
echo -e "\n\n2. Get All Roles"
curl -X GET $BASE_URL/roles

# 3. Get Role by ID (thay {roleId} bằng ID thực tế)
echo -e "\n\n3. Get Role by ID"
# curl -X GET $BASE_URL/roles/{roleId}

# 4. Update Role (thay {roleId} bằng ID thực tế)
echo -e "\n\n4. Update Role"
# curl -X PUT $BASE_URL/roles/{roleId} \
#   -H "Content-Type: application/json" \
#   -d '{
#     "name": "Manager",
#     "description": "Manager role"
#   }'

# 5. Delete Role (thay {roleId} bằng ID thực tế)
echo -e "\n\n5. Delete Role (Soft Delete)"
# curl -X DELETE $BASE_URL/roles/{roleId}

echo -e "\n\n=== TEST USER ENDPOINTS ==="

# 6. Create User
echo -e "\n6. Create User"
curl -X POST $BASE_URL/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "password": "password123",
    "email": "john@example.com",
    "fullName": "John Doe",
    "avatarUrl": "https://i.sstatic.net/l60Hf.png",
    "status": false
  }'

# 7. Get All Users
echo -e "\n\n7. Get All Users"
curl -X GET $BASE_URL/users

# 8. Enable User
echo -e "\n\n8. Enable User (Set status = true)"
curl -X POST $BASE_URL/users/enable \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "username": "johndoe"
  }'

# 9. Disable User
echo -e "\n\n9. Disable User (Set status = false)"
curl -X POST $BASE_URL/users/disable \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "username": "johndoe"
  }'

# 10. Get User by ID (thay {userId} bằng ID thực tế)
echo -e "\n\n10. Get User by ID"
# curl -X GET $BASE_URL/users/{userId}

# 11. Update User (thay {userId} bằng ID thực tế)
echo -e "\n\n11. Update User"
# curl -X PUT $BASE_URL/users/{userId} \
#   -H "Content-Type: application/json" \
#   -d '{
#     "fullName": "Jane Doe",
#     "loginCount": 5
#   }'

# 12. Delete User (thay {userId} bằng ID thực tế)
echo -e "\n\n12. Delete User (Soft Delete)"
# curl -X DELETE $BASE_URL/users/{userId}

echo -e "\n\nDone!"
