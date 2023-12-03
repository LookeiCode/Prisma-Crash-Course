const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {

    // await prisma.user.deleteMany()

    // CREATING ***********************************************************************************

    //  const user = await prisma.user.create({
    //         data: {
    //             name: "Tyler",
    //             email: "Tyler@gmail.com",
    //             age: 30,
    //             userPreference: {
    //                 create: {
    //                     emailUpdates: true,
    //                 }
    //             }
    //         },

    //     // You can only have select or include, you cannot have both inside the same function
    //     // Include just includes whatever data you want to return
    //     // include: {
    //     //     userPreference: true,
    //     // }
    //     // Select is Used to SPECIFICALLY select which data you want to include
    //     // select: {
    //     //     name: true,
    //     //     userPreference: { select: { id: true } },
    //     // },
    // });
    // console.log(user);


    // Here we are creating many users with the "createMany" prisma method
    // We must put our objects inside of an array []

    // const users = await prisma.user.createMany({
    //         data: [{
    //             name: "Tyler",
    //             email: "Tyler@gmail.com",
    //             age: 30,

    //         }, {
    //             name: "Kristen",
    //             email: "Kristen@gmail.com",
    //             age: 27,
    //         }]
    //     });
    //     console.log(users);


    // FINDING ***********************************************************************************

    // Finds things with the "@unique" attribute in your prisma schema
    // Find unique only ever returns one thing - in this case a user
    // Inside of a "find" query we always have to use a "where" claus

    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: "Tyler@gmail.com"
    //     }
    // })
    // console.log(user);


    // Finds the first user with the name of tyler (assuming there were multiple)
    // Similar to findUnique except it allows you to find something based on any property, not just unique ones

    //   const user = await prisma.user.findFirst({
    //         where: {
    //             name: "New Tyler"
    //         }
    //     })
    // console.log(user);


    // Will find many/all users that match the attribute/value we define in the where clause
    // You can also not include a where clause and it will find every user in the user table
    // The where clause is essentially a filter here

    // const user = await prisma.user.findMany({
    //     where: {
    //         name: "Tyler"
    //     }
    // })
    // console.log(user);

    // UPDATING ***********************************************************************************

    // update will just update one/the first user/thing it finds
    // Update takes in two sections/args - the data you want to update with, and a where clause to tell it where/what you want to update
    // Apparently the where clause needs to point to a @unique attribute

    // const user = await prisma.user.update({
    //     where: {
    //         email: "Tyler22@gmail.com",
    //     },
    //     data: {
    //         name: "Tyler2",
    //     },
    // })
    // console.log(user);


    // updateMany is the same as update, except it'll update all the users that match the query you define in the where clause
    // const user = await prisma.user.updateMany({
    //     where: {
    //         name: "Tyler",
    //     },
    //     data: {
    //         name: "New Tyler",
    //     },
    // })
    // console.log(user);

    // You can't use a "Select" or an "Include" with updateMany

    // DELETING ***********************************************************************************

    // It must be on a unique field - it will delete that user

    // const user = await prisma.user.delete({
    //     where: {
    //         email: "Tyler@gmail.com"
    //     }
    // })
    // console.log(user);


    // Here we want to delete many users based on the query we define in the where clause
    // So her we use a fancy one called "gt" (greater than) so we say delete many/all the users with an age greater than 30
    // const user = await prisma.user.deleteMany({
    //     where: {
    //         age: {gt: 30},
    //     }
    // })
    // console.log(user);

    // If you want to delete all the users in the database you'd pass it nothing
    // const user = await prisma.user.deleteMany()

    //The same applies to findMany to get/find all the users in your database
    // const user = await prisma.user.findMany()

    // EXAMPLE CODE ************************************************************************************************

    // We create a user variable
    // We then await, and use prisma to target the user table, then use the create method
    // Then we pass in an object called "data" which we pass another object into with the data to create the new user with

    // const user = await prisma.user.create({
    //     data: {
    //         name: "Tyler",
    //     }
    // })
    // console.log(user);

    // 1. We wait for prisma to create a user for us (await) 
    // 2. Then it will put it in our DB with the name of "Tyler"
    // 3. Then it will return that user, which we then can console.log

    // The "findMany()" method is used to find every row/record in the specified table and display them or do seething with them defined with some code 
    // const users = await prisma.user.findMany()

    // console.log(users);

    // await prisma.user.deleteMany()
}



// catches any errors from the "main" function
// once we're done running though all of our code we disconnect from the prisma database (not required because it automatically disconnects as soon as your program finishes running - but why not add it anyway lol)
main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })