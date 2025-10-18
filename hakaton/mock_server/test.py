from db import db
import asyncio

async def main():
    a = await db['users'].find_one({"account_bindings": {"email": "user@example.com"}})
    print(a)

if __name__ == '__main__':
    asyncio.run(main())