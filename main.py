# main.py

import os
from datetime import time

from fastapi import FastAPI
from fastapi_crudrouter import SQLAlchemyCRUDRouter
from sqlmodel import Field, Session, SQLModel, create_engine
from pydantic import EmailStr
from uuid import UUID, uuid4
from datetime import datetime
from typing import List
from dotenv import load_dotenv
from os import getenv

load_dotenv()

engine = create_engine(getenv("DB_URL"))

now = Field(default=datetime.now())


def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()


Id = Field(default=uuid4(), primary_key=True)


class User(SQLModel):
    fullname: str = Field(...)
    photoURL: str = Field(...)
    email: EmailStr = Field(...)


class Product(SQLModel):
    name: str = Field(...)
    description: str = Field(...)
    price: float = Field(...)
    stock: int = Field(...)
    images: List[str] = Field(...)


class Order(SQLModel):
    user_id: UUID = Field(..., )
    product_id: UUID = Field(...)
    quantity: int = Field(...)


class Cart(SQLModel):
    user_id: UUID = Field(...)
    orders: List[UUID] = Field(...)
    total: float = Field(...)


class Users(User, table=True):
    id: UUID = Id
    created_at: time = now
    updated_at: time = now


class Products(Product, table=True):
    id: UUID = Id
    created_at: time = now
    updated_at: time = now


class Orders(Order, table=True):
    id: UUID = Id
    created_at: time = now
    updated_at: time = now


class Carts(Cart, table=True):
    id: UUID = Id
    created_at: time = now
    updated_at: time = now


def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()


user = SQLAlchemyCRUDRouter(
    schema=User,
    create_schema=User,
    db_model=Users,
    db=get_db,
)

product = SQLAlchemyCRUDRouter(
    schema=Product,
    create_schema=Product,
    db_model=Products,
    db=get_db,
)

order = SQLAlchemyCRUDRouter(
    schema=Order,
    create_schema=Order,
    db_model=Orders,
    db=get_db,
)

cart = SQLAlchemyCRUDRouter(
    schema=Cart,
    create_schema=Cart,
    db_model=Carts,
    db=get_db,
)

app = FastAPI()

app.include_router(user)
app.include_router(product)
app.include_router(order)
app.include_router(cart)


@app.on_event("startup")
async def startup_event():
    SQLModel.metadata.create_all(engine)


print("http://localhost:8000/docs")
