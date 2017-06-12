5 Day Weather Forecast using [OpenWeatherMap API](http://openweathermap.org/forecast5).

![Mockup](http://xavifuentes.io.bysh.me/weather_app.png)

## Quick start

1. Clone the app `git clone https://github.com/xavifuefer/weather-app.git`
2. Install its dependencies `npm install`

## Table of Contents

- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [npm start](#npm-start)
- [npm test](#npm-test)
- [npm build](#npm-run-build)

## Sending Feedback

We are always open to [your feedback](https://github.com/xavifuefer/weather-app/issues).

## Folder Structure

After [starting the app](#quick-start) the folder structure should look like this.

```
weather-app/
  README.md // This file
  node_modules/ // node dependencies
  package.json // project package definition
  public/
    index.html
    favicon.ico
  src/ // where the magic happens
    index.js // Invokes the redux store config method and instantiates the app in the dom
```

## npm start

Use `npm start` in the project directory, to run the app in development mode.<br>
If it doesn't automatically, open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## npm test

Use `npm test` in the project directory, to launch the tests runner in the interactive mode

## npm run build

Use `npm build` in the project directory, to build the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
The app is ready to be deployed!

## Future additions

- Restructure and clean the state + data flow
- use momentjs
- Improve the docs
- Use FlowType
- Add tests for sagas
- Add loading page/spinner
- Add tests for backend
- Improve error handling
- Allow users to change the city manually

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
