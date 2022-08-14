# NoSQL: Social Network API

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Video Demo](#video-demo)
- [Screenshots](#screenshots)
- [Database Models](#database-models-and-api-routes)
- [API Routes](#api-routes)
- [Installation](#installation)
- [Usage](#usage)
- [Contact Me](#contact-me)
- [My Development Environment](#my-development-environment)
- [Languages, Technologies and Packages used](#languages-technologies-and-packages-used)

## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. I have been using several of the technologies that social networking platforms use in their full-stack applications while on my journey to become a full stack developer; And because the foundation of these applications is data, it’s important that i understand how to build and structure the API first.

I was tasked with building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. For this project i used [Express.js](https://www.npmjs.com/package/express) for routing, a [MongoDB](https://www.mongodb.com/) database, and the[Mongoose](https://www.npmjs.com/package/mongoose) ODM.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Video Demo

The following walkthrough videos show initial setup and the POST, PUT, and DELETE routes for Users, Thoughts, Reactions and Friends being tested in Postman:

[01 - Start Up - Sourcing schema, seeding database, starting application](https://drive.google.com/file/d/1K-f-2xzGQg_lvo0fI_993LsXF2yWu4Js/view?usp=sharing)

[02 - GET requests](https://drive.google.com/file/d/1UU7gzGNonPRSoHRGdXsJFR7FbwGZ0BBJ/view?usp=sharing)

[03 - POST requests](https://drive.google.com/file/d/1CQPTptV9Xbcb2uRDHdWs29L1pTrx26EO/view?usp=sharing)

[04 - PUT requests](https://drive.google.com/file/d/1aYN9cDfodcl916J7gYyjiNZ44LLBHIPi/view?usp=sharing)

[05 - DELETE requests](https://drive.google.com/file/d/1UNHLCgngtdjpOBD-_pI3Kmv7eXxIJAnJ/view?usp=sharing)

## Screenshots

The following animations show examples of the application's API routes being tested in Postman.

The following animation shows GET routes to return all users:

![Demo of GET routes to return all users and all thoughts being tested in Insomnia.](./screenshots/Get%20all%20Users.png)

and Here you can see all thoughts being returned in Postman:

The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:

![Demo that shows GET routes to return a single user and a single thought being tested in Insomnia.](./screenshots/Get%20all%20thoughts.png)

## Database Models and API Routes

The database for this application contains the following four models (click to expand):

## Models

<details>
- <summary> User: </summary>
- `username`

- String
- Unique
- Required
- Trimmed

- `email`

  - String
  - Required
  - Unique
  - Must match a valid email address (look into Mongoose's matching validation)

- `thoughts`

  - Array of `_id` values referencing the `Thought` model

- `friends`
  - Array of `_id` values referencing the `User` model (self-reference)

**Schema Settings**:

Created a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

</details>

---

<details>
- <summary> Thought: </summary>
- `thoughtText`

- String
- Required
- Must be between 1 and 280 characters

- `createdAt`

  - Date
  - Set default value to the current timestamp
  - Use a getter method to format the timestamp on query

- `username` (The user that created this thought)

  - String
  - Required

- `reactions` (These are like replies)
  - Array of nested documents created with the `reactionSchema`

**Schema Settings**:

Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

 </details>

---

<details>
- <summary> Reaction (SCHEMA ONLY): </summary>
- `reactionId`

- Use Mongoose's ObjectId data type
- Default value is set to a new ObjectId

- `reactionBody`

  - String
  - Required
  - 280 character maximum

- `username`

  - String
  - Required

- `createdAt`
  - Date
  - Set default value to the current timestamp
  - Use a getter method to format the timestamp on query

**Schema Settings**:

This will not be a model, but rather will be used as the `reaction` field's subdocument schema in the `Thought` model.

</details>

---

### API Routes

**`/api/users`**

- `GET` all users

- `GET` a single user by its `_id` and populated thought and friend data

- `POST` a new user:

```json
// example data
{
	"username": "lernantino",
	"email": "lernantino@gmail.com"
}
```

- `PUT` to update a user by its `_id`

- `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

- `POST` to add a new friend to a user's friend list

- `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

- `GET` to get all thoughts

- `GET` to get a single thought by its `_id`

- `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
	"thoughtText": "Here's a cool thought...",
	"username": "lernantino",
	"userId": "5edff358a0fcb779aa7b118b"
}
```

- `PUT` to update a thought by its `_id`

- `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

- `POST` to create a reaction stored in a single thought's `reactions` array field

- `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

## Installation

The application will be invoked by entering the following 3 commands line by line into your terminal / CLI

```

git clone git@github.com:faisal244/social-network-api.git
cd social-network-api
npm install

```

## Usage

Once all the dependancies have been installed, please provide the application with the source database schema by entering the following 2 commands in your terminal:

```

npm run seed
npm run start

```

## Contact me

- Contact me by Email: [m.faisal244@gmail.com](mailto:m.faisal244@gmail.com)

- [Connect with me on linkedin](https://www.linkedin.com/in/faisal244/)

- [View my Portfolio](https://faisal244.github.io/Portfolio/)

## My Development Environment

- VScode
- Terminal
- Nodemon
- MacOS Monterey
- Git
- Github

## Languages, Technologies and Packages used

- Javascript
- Node.JS v18.7.0

- [NPM] Mongoose
- [NPM] Express
- [NPM] Dotenv
- [NPM] date-fns

---
