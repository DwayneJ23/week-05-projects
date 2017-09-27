# Week 05 Projects

## Project 01: Data Modeling Exercise

### Movie Reviews

We are building a simple web application that allows users (_movie viewers_) to sign up for an account on our web app which allows them to write movie reviews. We want to support the following user actions.

- The user can post a review for the movies they have seen. 
- Users can also browse all movies and see other users reviews of the movie
- Users can browse all other user's movie reviews
    + and they can filter the reviews by the movies genre, the year the movie was released, or the date the review was posted.

### Tasks

- Design the Entities and Relations for this application
- For each entity, only add the attributes necessary to achieve the features described above.

## Project 02: Super Simple Blog

The `simple-blog` folder contains code for a very simple blog implementation that uses a MVC structure and Sequelize.js for models. Your task for this project is to install postgres and get the project running, as instructed below. Then explore the code and ask your instructors for clarifications for components you don't understand.

- [Install Postgres](https://github.com/CUNYTechPrep/ctp2017/blob/master/guides/installing-postgresql.md)
- Clone this repository
- Create a postgres user named: `ctp_user` with password `ctp_user`
```$ createuser -P -s -e ctp_user```

- Create a database named: `blog_development`
```$ createdb -h localhost -U ctp_user blog_development```

- `cd simple-blog`
- `npm install`
- `npm start`
- visit: http://localhost:8000/

