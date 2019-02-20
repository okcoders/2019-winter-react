# Class 1 - ES6 and an Intro to React

## ES6

A few ES6 features we will need. You can find explanations of each [here](https://github.com/lukehoban/es6features).

* arrow functions
* classes*
* object literals
* template strings
* object and array destructuring
* default, rest, and spread operators
* `let` and `const` declarations
* ES Modules (`import`/`export`)

## Classes

[Here are the MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

For our purposes, we need to know about

* constructor (and new)
* properties
* methods
* super and extension

## Intro to React

### Why React?



### Key topics we'll be covering

* create-react-app
* functional components
* jsx
* Props
* class components
* events, conditional rendering, arrays and collections, and forms

### Create React App

Setting up a new react project can be a pain, and most people don't actually set this up themselves. In this course, I want to get us started as quickly as possible. The react team created a package, [`create-react-app`](https://github.com/facebook/create-react-app), for bootstraping an application as quickly as possible. To get started, run the following commands

```bash
npx create-react-app my-app
cd my-app
npm start

# OR

yarn create react-app my-app
cd my-app
yarn start
```

Once everything is done installing and you've startd the app, you can view the app at `http://localhost:3000`. `Create-react-app` has added a lot of stuff to our project for us. Our main concern will be with the `src` folder. 

### Function Components

These will be our main method for creating components. In the past, these were referred to as `stateless functional components` but that isn't really the case anymore. We'' refer to them as `function components` in this course. 

```javascript
const Hello = () => <h1>Hello, World</h1>;
```

That's as basic as it gets. 

### JSX

JSX was created by the React team as a way to make writing react components easier. In the 0.14 days, a react component was written like so:

```javascript
const Hello = React.createElement('h1', {}, 'Hello World');
```

Today, we can simply write the above,

```javascript
const Hello = () => <h1>Hello, World</h1>;
```

JSX has 2 stipulations:

1. Built in components, `div`, `h1`, `p`, etc. must be lower case. 
2. User created components, should be upper case

React has a built in component for every HTML element you can think of. If it doesn't, it simply interprets this as an HTML element. You can create your own component, which is what we've done above.

Here's how we would use our component from above:

```javascript
const App = () => <Hello />;
```

### Props 

Props are like HTML attributes and used like them. Suppose we wanted to display the user's name in our `Hello` component.

```javascript
const Hello = (props) => {
  return (
    <h1>Hello, {props.name}!</h1>
  )
};

// and we use it like so

const App = () => <Hello name="Carson"/>
```

Individual props can be of any type. Props are passed into the component as an object, where each key is the name of the attribute you've used. In this case, our props looks like this:

```javascript
props = {
  name: 'Carson'
}
```

