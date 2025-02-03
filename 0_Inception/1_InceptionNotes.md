# How does the browser understand index.html files ?

- Browser has js engine it, which executes scripts file

- But browser do not understand react code

- what we have to do is ;

# What is CDN ?

- content delivery network, where react is hoisted

# 01 Way - Using CDN Links

```Javascript

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>

    // Above file is the core of React
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    // This is the React DOM to load, It is like a bridge between The React and Browsers.

    // Their are 2 files bcoz, Bcoz React also used for mobile developement (React Native)


```

- Now we injected react code into our project

---

# What is CrossOrigin ?

# Most costly operation in Browser ?

- When we do something ; when the webpage is interactive so the most imp operation is the browser takes is when the
- When dom not needs to be manipulated.

- when we perform some event and something changes; what is happening the dom trees are gettting changed. That is the most costly operation. Putting some node on the tree or removing something.

- So react follow the philosphy that whenever u want to do something do it using JavaScript.

- that is why react gives helper functions so that this can happening in a very performant way.

# Order of Files Is Important or not ?

- React cdn files are must be before the our js file bcoz our files are using react code.

# Diff between cdn links of development and Productions cdn links
    