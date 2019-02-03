# React native real estate app

Develop an application with react-native and redux, for fetching real estate data from laravel backend.

The requirement for the app:

    + display a list of all real estate entries (4 points)
    + add support for filtering the real estate entries (4 points)
    + display details page of one specific real estate entry (4 points)
    + add support for adding a new real estate entry (4 points)

    + bonus 1: collapsable filter panel (2 points)
    + bonus 2: improve overall styling of the app from the video (2 points)
    + bonus 3: add validation to the form of adding items (2 points)

You can get 22 points in total including the bonus points.

The `service/realestate.js` is by default fetching the data from heroku laravel backend.

All backend routes:

```
api/lists -> getting all real estate entries
api/cities -> get cities collection
api/developers -> get developer collection
api/estate/filter?cityId=1&lessThen=1200&onSale=1 -> get all filtered realestates
api/estate/add -> post new realestate entry
    cityId -> number;
    developerId -> number;
    name -> string;
    onSale -> string, possible values: "all", "0" or "1";
    price -> number;
api/estate/{id} -> get realestate by id
```

See the running application we expect you to build here:
[https://youtu.be/JgZh9hDvqe8](https://youtu.be/JgZh9hDvqe8)

**It's critical that you provide clear instructions on running the code, so we can test it. If that's at all different from the instructions below**

## Prerequisities

### Expo

For app development on android or ios install the expo app on mobile.
[Expor app](https://expo.io/)

### NodeJS

You will need NodeJS with NPM. We've used [nvm](https://github.com/creationix/nvm) and Node 11 for the development. There's an `.nvmrc` file in the root directory for convenience.
There's a [Windows version of NVM](https://github.com/coreybutler/nvm-windows) too.

### Yarn

Install Yarn:
https://yarnpkg.com/en/

### Install before running app

```
npm install -g expo-cli
yarn
```

### Run

```
yarn start
```

### Extra

If you want to test with development backend version then change the URL path
in file `service/realestate.js` (ENV variables not working with expo app)
