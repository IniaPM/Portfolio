import React from 'react'; //React is the library; react is the module. The effect is that this line reaches into the React library that is installed in the node_modules library and it loads in the globally-declared react variables and methods that are within the React library.
import ReactDOM from 'react-dom'; //Insertion into ReactDOM. Most React files will only need to import the first React library, but we need the ReactDOM library in this case, because this file is going to do the insertion with the core document. 
import App from './App'; //Imports the app component from its local location a ./app.
import './index.css';

//ReactDOM.render takes two arguments. First we provide a component or an element to render.
ReactDOM.render(<App />, document.getElementById('root')); //In the public/index.html file, in the body section there is a div with the Id of root. So the effect is that our React element should end up being inserted within this root when you run the application in the browser.  
//A React element is the smallest object within a React application, that basically copies html elements. Div tags, h1 tags, image tags etc. are all simple elements, and a react element is very much the same.
//In React, elements are represented with a syntax called JSX, meaning JavaScript (JS) and XML-like syntax (X).
//XML is another markup language like html which is based off the pattern of using arrow-like tags. 
//End: We wrote the entire src directory from scratch using the index.js file to import react and react-dom library, and then insert a react element into the document.

/*class Animal {
    constructor(name, age) {
        this.name =name;
        this.age = age;
    }

    speak() {
        console.log('I am', this.name, 'and I am', this.age, 'years old');
    }
}

const animal1 = new Animal('Simba', 3);
animal1.speak();

console.log(animal1);

class Lion extends Animal {
    constructor(name, age, furColour, speed) {
        super(name, age);
        this.furColour = furColour;
        this.speed = speed;
    }

    roar() {
        console.log(
            'ROOOOAR! I have',
            this.furColour,
            'fur, and I can run',
            this.speed,
            'miles an hour!'
        );
    }
}  

const lion1 = new Lion('Mufasa', 20, 'golden', 25);
lion1.speak();
lion1.roar();
console.log(Lion);
*/

/*Changes were made after the creation of App.js:
Instead of rendering this react element that we have in ReactDOM, we can render the entire app component.
We do this by using its class name directly as a pair of JSX tags, i.e. we remove <div>React element</div> from the ReactDOM.render argument and replace it with <App></App> instead.

More changes made: 
On the render line the app component doesn't have any children meaning there isn't any inner JSX within the app tags.
In this situation, we can use a cleaner syntax i.e. use a self-enclosing tag to shorten down our code, so instead of a pair of tags we have a forwrd slash (/) and then the inside directly within one tag.
*/ 

//Creating a component is a pretty big step because components are one of the key innovations of React.
//Components are like Lego bricks - they're reusable pieces of the user interface in your application. By piecing together these components, eventually you end up with an entire lego house which is the React application itself.

/*
Episode 9: Classes

In JavaScript, classes define interfaces for objects.
An interface is a collection of properties and methods.
Every new object that is based on the class is going to have those same methods and properties.
For example, if we have an animal class - the animal class can come with properties, such as Name and Age, and it may also have a method(s), such as Speak()
Overall, the interface for the animal class is the 'name' and 'age' properties, and the 'speak()' method.
The cool thing about classes is that they come with an inheritance pattern. Through inheritance, we can create new classes that are based on other existing classes.
For example: there can be a Lion class that is based on the animal class. 
The Lion class bases itself on the animal class by using the 'extends' keyword.
Even though the Lion extends the Animal class, it is definitely still its own class!
It can also have its own properties, such as 'fur colour' and 'speed', as well as its own method(s), such as 'Roar()'.
Note: Since the Lion class is inheriting from the Animal class, it will also have access to the same properties and methods that were originally declared in the Animal class.
Classes themselves aren't the actual objects. Rather, they're representations of what an object based on this class will contain. 
The objects themselves based on these classes are the instances of the class. 
Each instance is going to be unique based on what value it sets for itself for those base-level class properties.
The cool thing is that there can be many of these instances of the same class.    
For example:
One instance of the Lion class could have its own unique properties of Fur Colour: Golden and Speed:10
Another instance of the Lion class could have a different unique set of properties of Fur Colour: Red and Speed:7
So both objects are instances of the Lion class, but they have their own unique values for those base-level Lion properties. 

Since components are made by inheriting from the components class, it's critical to get a good grasp of these concepts, in order to understand how React Components work.
*/