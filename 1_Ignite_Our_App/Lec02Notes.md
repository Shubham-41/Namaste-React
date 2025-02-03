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
                - It generally requires for our developmen of our app
        2. Normal Dependencies
                - used in our productions also

- We will install parcel as -D (dev dependencies).

- parcel": "^2.13.3 What does this mean ?
  We can also put ~2.13.3 here

# Diff between ~ and ^ (caret) in package.json ?

**Solution**
^ (caret) :- - When their are minor upgrades in parcel if we use caret it will upgrade our app to that version. - It is safe to use. - it is safe to upgrade to minor updates than the major updates.

~(tilde) :- - When their are major upgrades in parcel if we use tilde it will upgrade our app to that version. - it is not safe to use ; beacause of major updates it can crash our app.

- package.lock.json keeps the record of exat dependies of exat versions.

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
