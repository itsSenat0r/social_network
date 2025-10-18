from fastapi import FastAPI, HTTPException, Depends, Query
from pydantic import BaseModel, EmailStr
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import json
import random
from db import db
import bcrypt
import asyncio

api = FastAPI()

origins = ["*"]

api.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RegisterRequest(BaseModel):
    email: EmailStr
    password: str

class AuthUser(BaseModel):
    account_id: str
    password: str

class CreateGroupData(BaseModel):
    avatar_link: str
    description: str
    name: str

class CreatePostData(BaseModel):
    post_picture: str
    post_thumbnail: str
    post_autor: str
    post_autor_id: str
    post_autor_rating: float
    post_statistic: list
    post_type: str

@api.get("/posts")
async def Post(post_data: CreatePostData = None,
               action: str = Query(...)):
    with open('./placeholders.json', 'r', encoding="utf8") as f:
        data = await db['posts'].find_one({})
        if action == "get":
            return [data[random.randint(0, len(data) - 1)], 
                    data[random.randint(0, len(data) - 1)],
                    data[random.randint(0, len(data) - 1)]]
        elif action == "add" and post_data:
            await db['posts'].insert_one({
                "id": str(db['posts'].count_documents({} + 1)),
                "postPicture": post_data.post_picture,
                "postThumbnail": post_data.post_thumbnail,
                "postAutor": post_data.post_autor,
                "postAutorId": post_data.post_autor_id,
                "postAutorRating": post_data.post_autor_rating,
                "postDate": str(datetime.now()),
                "postStatistic": post_data.post_statistic,
                "postType": post_data.post_type
            })
            return { "OK" }

    

@api.post("/register")
async def register(user: RegisterRequest):
    email = user.email
    password = user.password

    doc = await db['users'].find_one({"account_bindings.email": email})
    if doc is not None:
        raise HTTPException(status_code=409, detail="User is already exists")
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode("utf-8")

    db['users'].insert_one({
        "isEnterprise": "none",
        "account_id": int(await db['users'].count_documents({})+  1),
        "account_avatar": "none",
        "account_bindings": {
            "email": str(email)
        },
        "account_groups": "none",
        "account_create_data": str(datetime.now()),
        "account_password_hash": hashed
    })

    return { "OK" }


@api.post("/login")
async def login(login: OAuth2PasswordRequestForm = Depends()):
    email = login.username
    password = login.password
    
    doc = await db['users'].find_one({"account_bindings.email": email})
    if not doc:
        raise HTTPException(status_code=404, detail='User is not exists')
    
    if not login:
        raise HTTPException(status_code=401, detail="Incorrect login")
    
    if not bcrypt.checkpw(password.encode("utf-8"), doc['account_password_hash'].encode("utf-8")):
        return { "Incorrect password" }
    
    return { "OK": str(doc['account_id']) }


@api.post("/groups")
async def groups(user: AuthUser,
                 create_data: CreateGroupData = None,
                 action: str = Query(...),
                 group: str = Query(None)):
    account_id = user.account_id
    password = user.password

    doc = await db['users'].find_one({"account_id": account_id})
    if not doc:
        raise HTTPException(status_code=404, detail='User is not exists')
    if not bcrypt.checkpw(password.encode("utf-8"), doc['account_password_hash'].encode("utf-8")):
        return { "Incorrect password" }
    
    
    check = doc['account_groups']
    if action == 'delete':
        if check and group != None and check[group] == "owner":
            await db['groups'].find_one_and_delete({"group_id": group})
            await db['users'].update_one(
                {"account_id": account_id},
                {"$unset": {"account_groups": {group}}}
            )
            return { "OK" }
        else:
            return { "No groups are linked to account" }
    elif action == 'add':
        if create_data != None:
            name = create_data.name
            avatar_link = create_data.avatar_link
            description = create_data.description
            
            id = str(await db['groups'].count_documents({}) + 1)
            await db['groups'].insert_one({
                "group_id": id,
                "group_creator_id": account_id,
                "group_create_date": str(datetime.now()),
                "group_subs": 1,
                "group_posts": 0,
                "group_avatar": avatar_link,
                "group_name": name,
                "group_description": description
            })

            await db['users'].update_one(
                {"account_id": account_id},
                {"$set": {"account_groups": {id: 'owner'}}}
            )
            return { "OK" }

    elif action == 'check':
        if not doc['account_groups'] or doc['account_groups'] == 'none':
            return { 'No groups are linked to account' }
        else:
            return {doc['account_groups']}
            

    else:
        return { 'Incorrect action' }
