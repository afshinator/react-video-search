# Video Search

Fun little browser app using 
- React JS, hooks
- Chakra UI
- and soon converted to TypeScript


==> To get it running, you need to supply your own credentials.   At this point I'm using RapidAPI to get YouTube and Bing information, and the Vimeo API itself.  Your credentials.js file needs to hold your secrets: 

```javascript
const creds = {
  youtube: "...",
  bing: "...",
  vimeo: {
    accessToken: '...',
    clientId: "...",
    clientSecret: "...",
  }
};
```

--- 

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

--- 

## Notes

* Issue with Recharts 2.0.0, had to use beta.8

https://github.com/recharts/recharts/issues/2360


* I added a lot of packages thoughtlessly to dependencies insted of devDependencies.  Fix later.

