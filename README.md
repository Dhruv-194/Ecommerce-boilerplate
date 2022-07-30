# Ecommerce (React) Coding Assessment


## My Attempt -
- Created a basic UI of Login/Register Components Page
- Intialized the authentication of user using the given API endpoints
- Created a Products Components Page which shows the list of the products after fetching from the API 
- Created a Product Detail Component page which displays the detail of the product after fetching from the API

> ### Note : I tried my best to make the UI of Product Page and Product Detail Page as close to the given screenshot

## How to Setup

- Clone this repo
- `npm install` - To install the dependencies
- `npm install -D json-server json-server-auth` - for *actually* running the json-server
- `npm run server` - To start the JSON server
- `npm start` - To start the react app


## Screenshots
<img src="Screenshots/Screenshot%20(538).png" height="200" width="400"/> <img src="Screenshots/Screenshot%20(539).png" height="200" width="400" hspace="10"/>
<img src="Screenshots/Screenshot%20(540).png" height="200" width="400"/> <img src="Screenshots/Screenshot%20(543).png" height="200" width="400" hspace="10"/>


---
<details>
<summary> the assignemnt </summary>
<br>

## Overview

To complete this assessment, you will need to use this [Ecommerce-boilerplate](https://github.com/gurukishore111/Ecommerce-boilerplate) web app.

The purpose of this assessment is to assess your **skills and approach to composing a simple web app** given an API feed.

## What to do?

Your goal is to implement an eCommerce application. The CSS framework/library is totally up to you.

Although it's a very basic exercise, we will be looking for simple, well-designed, well-commented, and tested code in the submission.

Please include a `README` with setup instructions and any other documentation you created as part of your solution.

Also, add very short info for the following to your `README`:

- Describe all the application functionalities
- Are there any improvements you could make to your submission?
- What would you do differently if you were allocated more time?

Once you complete implementation, please add the link to the hosted repository (e.g. Github). Alternatively, you may submit your code as a ZIP file too.

(NOTE: You have to use the latest version of v18 and react-router-dom v6)

## How should the application work?

The user of this react application should be able to view all the products. The application should have the following workflow,

1. Create the login/register functionality.
2. Once the user is authenticated
3. Users can add the products to the cart page
4. Also user can add their favourite products

## Development Setup

- Clone this repo
- `npm install` - To install the dependencies
- `npm run server` - To start the JSON server
- `npm start` - To start the react app

## This project's user interface should like this.

### Login/Register page

<img width="1512" alt="Screenshot 2022-07-24 at 10 44 13 AM" src="https://user-images.githubusercontent.com/52570524/180701451-5ccce009-0384-426c-b1bc-d7536fd7b142.png">

### Home page

<img width="1512" alt="Screenshot 2022-07-24 at 10 45 58 AM" src="https://user-images.githubusercontent.com/52570524/180701523-b679c753-68ff-47f1-9a1b-f4cc04d88fea.png">

### Product detail page

<img width="675" alt="Screenshot 2022-07-24 at 10 53 17 AM" src="https://user-images.githubusercontent.com/52570524/180701655-7c3d3120-ff81-445a-81d9-b2152db8a776.png">

### Cart page

<img width="1415" alt="Screenshot 2022-07-24 at 10 50 18 AM" src="https://user-images.githubusercontent.com/52570524/180701661-a587033d-4616-40f8-9260-dfd3e8b97152.png">

<img width="1472" alt="Screenshot 2022-07-24 at 10 51 16 AM" src="https://user-images.githubusercontent.com/52570524/180701674-31c7e11c-56b3-4f24-83c4-e9d582c4b3f8.png">

## API Usage

API can be launched using npm run server.
| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| /users | Lists all available users |
| /products | Lists all available products |
| /orders | Lists all available orders  
| /favourites | Lists all available favourites

More info about API usage can be found at the [Postman Collection](https://www.getpostman.com/collections/9f28d57ae334429e1f1f)

## Bonus

- Feel free to add functionality (not mandatory)
- Use redux/context for state management
- Well explained readme (screenshot etc)

---
<details>
