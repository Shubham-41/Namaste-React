# Foundation of React

# Way to run our program :-

    npx parcel source_file

- This will create a development build for us and will host on our localserver.

# IT is not good to run the project everytime using this command so instead of it we create script to run our project.

```json

  "scripts": {
    "start":"parcel React.html",
    "build":"parcel build React.html",
    "test": "jest"
  },


// Now we do not have to run our code using npx

//   This is industry standard

// Supose u dont know how to run this project then go the package.json, find the scripts and we will find the exat command to run our scripts.

// To run this now

// use command

```

```Javascript

npm run start

// OR

npm start

// This is how we will start our project

// To Build our project

npm run build

// This command will build our project for the production

```

# React Element

- Equivalent to DOM elements

- suppose i want to see a h1 tag in browser we can do it using

```js
const heading = React.createElement(
  "h1",
  { /*Contains Attributes*/ id: "heading" },
  "Namaste React"
);

// - React Element is not html element

// This basically creates an object

// React Element at the end of the day is object

// When we render react element on to  the dom then it becomes html element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// When we did root.render() takes this object and converts into html and push it into the browser (It will rewrite the root element completely)
```

---

- This is clumpsy so we use jsx to write react code like HTML

# JSX

- JavaScript Syntax Which is Easier to Create React Elements

- JSX Is not part of React

- I can build all the big applications without JSX but JSX makes our life easier.

# Creation of H1 Tag Using JSX

- **JSX is HTML like or XML-like syntax**

- JSX is not HTML in JavaScript

```JS

const jsxheading = <h1 id="heading">Namaste React Using JSX</h1>;

// here jsxheading is a React Element (object)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);

```

```JS

const jsxheading = <h1 id="heading">Namaste React Using JSX</h1>;

// This is not pure Javascript

// JS Engine will not understand this jsx code.

// Bcoz js engine understand es6 ( ECMAScript 06)

// Browser will not understand this JSX Code ; bcoz it is not valid js code

// Pacrel is doing the job behind the scene :-


```

- When we write this code, Even before this code goes to js Engine, it is **transpiled** before it goes to js engine, and then js engine receives the code which browser can understand

- Transpiles :- this code converted to the code which React / Browser can understand

- Who is **Transpiling** this Code ?

  - It is Done by **Parcel** but not completely by parcel, it gives this job to **babel**
  - Its **babel** job of transpiling

# Babel

- Transpiler or js compiler

- converts jsx code to the code which will be understandable to browser or react

- Some browser do not understand es6 js code so babel transforms the code into a way that older browsers will also understand.

- Babel does a lot of transpilation

- Parcel is a manager of babel

- IF we have to give class to the html elememt in html file then we can use **class** keyword but ; to give class name in JSX we use **className** as a keyword

- In JSX if we have to give attributes we have to use CamelCase syntax.

- If the JSX is in sigle line then it perfectly valid JSX

```JSX

<h1 id="heading" className="root">Namaste React Using JSX</h1>;

```

- But If we have to write in multiple lines we have to write it in parenthesis.

```JSX

<h1
id="heading"
className="root">
Namaste React Using JSX
</h1>;

```

# React Components

- Everything is a component in a react

- header,title,search bar,list of cards, everything in react is component.

-

# Types of Components

    1. Class Based Components -- Old Way to write code
    2. Functional Components -- New way to write code

---

# Functional Components :-

- Just a normal Javascript Function

- It is Normal JS Function Which returns some piece of JSX elements.

- JSX is a React Element.

- Functional Component is also called it as JavaScript Function which returns a React Element.

- **Whenever u will create a any react component name with a capital letter otherwise u will get an error, its a react way to understand that it is a component.**

- Rendering Functional Component

```JS
root.render(<HeadingComponent/>);
```

- Bcoz of this Babel understands the functional component.

## Component Composition

```JS

const Title = () => {
  return <h1 className="head" tabIndex="5">
    Namaste React Usign JSX (From Title Functional Component)
  </h1>;
};

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title/>
      <h1>Namaste react Functional Component</h1>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponent />); // rendering functioanl component


```

- **If we want to write any Javascript expression inside a JSX we can write it in {curly braces}.**

```JS

const number = 10000;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      {number /* Writing JS Expression */}
      <h3>{number} JS Expression</h3>
      <h1>Namaste react Functional Component</h1>
    </div>
  );
};

// We can also add functional component in following way

//  <Title> </Title>

```

# Put a React Element Inside a React Component

```JS

// here title2 is a normal js variable
const title2 = (
  <h1 className="head" tabIndex="5">
    Nmaste React Using JSX Title2
  </h1>
);

const Title = () => {
  return <h1 className="head" tabIndex="5">
    Namaste React Usign JSX (From Title Functional Component)
  </h1>;
};

const element = <span>React Element</span>;

const HeadingComponent3 = () => {
  return (
    <div id="container">
      {Title()}
      {title2}
      {element}
      <h1 className="heading">Writing React Element Inside a JSX</h1>
    </div>
  );
};

root.render(<HeadingComponent3 />); // rendering functioanl component


```

---

---

# Cross-site Scripting Attack (XSS)

- Suppose we do an api call and it is malicious api beacause of this attack attacker will execute its some code in user browser can fetch some informations

- but

- **JSX takes care of such injection attacks, JSX will escape this**

---

---

---

# Homework

- Explore various tags inside jsx
