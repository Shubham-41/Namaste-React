- GitHub is a place to host git repositories.

# To Push our Code into Production We need to do this things

        - 1. Compress our file
        - 2. Bundle our code
        - 3. Remove our comments
        - 4. Minify files
        - 5. Optimize images
        - 6. Code Spliting
        - 7. Chunking
        - A lot of Things need to do to push the code on github.

- React is not making our app fast ; their are lot of packages/libraries/ which is making our app fast

# What is npm ?

**Solution** :- npm does not stand for node package manager.

- It is Standard Repository for all the packages. It is one of the Biggest Package Manager. Any Package that we need to include in our project we can use npm. All the packages/utilities/libaries are come from npm and npm basically manages that for u in our project.

- We will use jest for testing

# Package.json

- package.json is a configuration for npm

- This packages are also known as dependency. npm will take care of all those versions of packages. and it will take care of them in package.json

- The most important package in our project is Bundler

- The our code files must be minified, compressed before sending it to the production so a bundler helps us to do all this things.

- webpack, parcel and vit this three things are example of bundlers.

# Bundler :-

**Bundler Basically Bundles our app; It packages our app properly so that it can be shipped to the production.**

- When we use Create React app it used webpack behind the scene to build thigs up.

- In our project we are going to use Parcel.

- Why Parcel ? :- Its my Choice.

- Pacrel comes as node package

- using npm we can install it.

- Command :- npm install -D parcel  
   -D :-

# There are 2 Types of Dependencies a App can have ?

        1. Dev Dependencies
                - It generally requires for our development of our app
        2. Normal Dependencies
                - used in our productions also

- We will install parcel as -D (dev dependencies).

- parcel": "^2.13.3 What does this mean ?
  We can also put ~2.13.3 here

# Diff between ~ and ^ (caret) in package.json ?

**Solution**
^ (caret) :- - When there are minor upgrades in parcel if we use caret it will upgrade our app to that version. - It is safe to use. - it is safe to upgrade to minor updates than the major updates.

~(tilde) :- - When there are major upgrades in parcel if we use tilde it will upgrade our app to that version. - it is not safe to use ; beacause of major updates it can crash our app.

- package.lock.json keeps the record of exat dependencies of exat versions.

# node_modules :- it fetched all the code of parcel and put it in node_modules.

- node_modules :- it is basically a database of (contains actual data) of all the packages that our project needs.

- Our project has a dependency parcel, parcel has its own dependencies and those dependencies can have their own dependencies and this dependencies is known as transitive dependencies.

# Should I put all the node_modules file on github or production ?

- The best practise is to put our node_modules file in gitignore

# Should I put all the package.json and package-lock.json file on github ?

- Yes beacause; package.json contains notes of all the dependencies that our project needs.
- It is very imp to both this files on github.

# If I have my package.json and package-lock.json I can Recreate our all node-modules Even if I delete all my node_modules.

- I just have to execute command **npm install** It will Recreate all the node_modules.

- Whatever u can regenerate do not put on git

# Command :-

        Building our app using parcel

**npx pacrel source_file**

- This command executes the parcel

```JS
Server running at http://localhost:57003
```

- Parcel has build a server for us and our app is now available at localhost:57003 and it took 528ms to build it.

- it is hoisting our app on 57003 port

- **npx is used to execute to packages.**

- parcel buils a development build for our app and host it on localserver

---

# Another Way to Get React in our app

- First way was Using CDN

- We can also do it using npm

- using cdn is not a preferred way to get react and react-dom in our project

- fetching from cdn is a costliest operation

- we don't need to do another network call to unpkg.com

- If I already have react in our node_modules how easy it will become to get react in our app.

- and it will become easy to manage react as another dependency.

```js
// Command to execute to install react

npm install react

npm i react-dom

// i stands for install

// here i am installing as -D beacause i want to install react as normal dependency and not as dev dependency.

```

---

```JS

import React from "react"; // this react refers from node_modules react

import ReactDOM from "react-dom"

```

- Before using react in our project we need to import it.

- But after importing using import statement we will get this error as "Browser scripts cannot have imports or exports."

- In our html we are injecting app.js so it treats that script as browser scripts but (it treats it as normal js file but it is not normal js file); it is not browser scripts

- so we need to tell our browser its not a normal js file we need to specify type="module" and not it will not consider as noraml js file it will consider it as module.

```Javascript

import React from "react"; // this react refers from node_modules react

import ReactDOM from "react-dom/client"

// ReactDOM is used to come from react-dom but now it comes from

```

# Parcel

- Dev Build

- Creating Local Server for us

- HMR - Hot Module Replacement
  i.e. It is Refreshing a page also

- It is Reading all our files using File Watching Algorithm - This algorithm written in c++

- Caching - Faster Builds

  - when we install parcel, when we build our project ; parcel quickly sneaked into our project
  - this parcel cache is basically caching everything we do.

- Image Optimization

- Minification of files in production build

- Bundling

- Compress our files

- Consistent Hashing

- Code Splitting

- Differential Bundling - Supports older browser

- Diagnostic - Show Beautiful Errors

- Error Handling

- Host on HTPPS

- Tree Shaking Algorithm - Will Remove unused code for us

# Interview Question

        1. What makes our React app Faster ?
        2. What makes our React performant ?
        3. What makes Your development exeperience better ?

- Different dev and production bundler

        - Prudction build takes more time than dev build.

        - less optimization on dev build and more optimization on production build.

# How to create a broad build

```JS

npx parcel build React.html

// We will get this error as soon as i run this command bcoz inside of package.json has our main file as app.js (this is the way to tell npm that is a entry point of our app) and when we use parcel we give entry point like this React.html so conflicts with that and gives error

// so remove it using package.json

```

# When we build production ready app where does that build goes up ?

        - when we do npx parcel build React.html it will bundle it will minify and it will put all this files inside dist folder.
        - this dist contains developement or productions build
        - This files contains production ready app

- Any code that is automatically generated it no need to put it on github

# Browser Lits

- Used to compatible our app with different versions of browsers.

- we have to tell our project that what what all browser should our app supported in ?

- we have to specify in package.json

```JS

  "browserslist": [
    "last 2 Chrome version",
    "last 2 Firefox version"
  ]

//  it will support last 2 chrome and firefox versions

```

- IF we do it for all the browsers compatible then it will create diff bundles, it will add some extra code to suppose diff browsers.

- so it depends on use cases

- Suppose our app is Goverment website ; then Goverment website should work on all types of browsers.

# RESOURCES

- [Browser List](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

- Go to query composition here it will take on github so we can get country specific

- suppose our app is majorly used in USA so we have to use such browsers should be compatible acc to that.

- [Parcel Documentation](https://parceljs.org/)

- 