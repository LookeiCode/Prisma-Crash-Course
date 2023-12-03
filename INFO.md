
# GENERAL INFO
Almost everything in Prisma is asynchronous

It's gonna run, it's gonna wait, and then it's gonna give you the result

# SHOWING ALL SQL QUERIES BEING RUN IN A FILE UNDER PRISMA
You can log all of your queries that are being run from your Prisma client inside a file

const prisma = new PrismaClient({ log: ["query"] });

Now every time your file runs, it will show all the queries being ran in that file under the hood of Prisma inside the terminal.

This can be used to debug things or if you need to worry about performance and want to see everything going on under the hood.

# PROJECT LINK/REFERENCE
Project references this video...
https://www.youtube.com/watch?v=RebA5J-rlwg&t=27s