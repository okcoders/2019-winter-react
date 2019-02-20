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

These will be our main method for creating components. In the past, these were referred to as `stateless functional components` but that isn't really the case anymore (spoilers!). We'll refer to them as `function components` in this course. 

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

Props are like HTML attributes and used like them. Suppose we wanted to display the user's name in our `Hello` component. We can interpolate values in our JSX using curly braces.

```javascript
const Hello = (props) => {
  return (
    <h1>Hello, {props.name}!</h1>
  );
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

Anything that isn't a string, needs to be wrapped in curly braces, `{}`. 

```javascript
const App = () => <Question answer={42} />;
```

### Children and arrays

Children is a special property in every component. Children are the components or HTML that are passed as a direct child to a component. In our `Hello` component, this would be the phrase "Hello, World" inside of the `<h1>` tag. Children can be a string or any component. 

Imagine we have a list, we can allow it to accept list items by using children

```javascript
const MyList = (props) => {
  return (
    <ul>
      { props.children }
    </ul>
  );
} 

// and it is used like this

const App = () => (
  <MyList>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </MyList>
);
```

What if we want to generate those items inside the component itself? We can also pass an array of react components as the child of any component.

```javascript
const App = () => {
  const items = [1,2,3,4 ];

  return (
    <MyList>
      { items.map(i => <li>Item {i}</li>)}
    </MyList>
  );
}
```

### Class Components

Class based components are another way to create components in react. They add some functionality on top of a normal component. To use them we need to extend the `React.Component` class. In order for us to have properly created a class based component, we need to create a `render` method on our class. If we don't using our component will result in an error. Here's our example from before, but using a class based component.

```javascript
class Hello extends React.Component {
  // we need to always implement this method
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
```

Props are accessed using `this.props` now instead of simply `props`.  

### Component State and form controls

React allows us to also include a concept of state in our components. This state is 100% scoped to our component and can be passed to child components. In our example, we're going to build a simple form component.

```javascript
class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Carson'
    }
  }

  render() {
    return (
      <form>
        <input value={this.state.name} />
      </form>
    );
  }
}
```

We can create a state object on our component inside of the constructor. Another way to do this is to simply create a class property:

```javascript
class MyForm extends React.Component {
  state = {
    name: 'Carson'
  }
  ...
}
```

We can set our state, using the `this.setState` method. This takes an object which is then shallowly merged into the existing state. 

```javascript
class MyForm extends React.Component {
  state = {
    name: ''
  }

  componentDidMount() {
    this.setState({
      name: 'Carson'
    });

    // this will change state.name to 'Carson'
  }
  ...
}
```

(Ignore what `componentDidMount` does for now, we will talk about that next time)

We can use this to handle changes in our input. 

```javascript
class MyForm extends React.component {
  ...
  render() {
    return (
      <form>
        <input value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
      </form>
    )
  }
}
```

We can even move this function into a class method. If we do that, we can write our full component as such

```javascript
class MyForm extends React.Component {
  state = {
    name: ''
  }

  handleChange = (e) => this.setState({ name: e.target.name })

  render() {
    return (
      <form>
        <input value={this.state.name} onChange={this.handleChange} />
      </form>
    );
  }
}
