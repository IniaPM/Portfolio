import React, { Component } from 'react'; //Since we're writing real code, a prerequisite is that we import the react library from the react module. 
//Since we're creating a component, we're going to import a second variable from the react module: the Component class (this class is not the default export of the module). In order to grab the Component class, you specify it as an optional import with a comma and pair of curly braces after the main react import. 
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from './assets/profile.png';

/*Lesson 10 Add-on examples below (not necessay for App):
class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);
//Lesson 10 Add-ons above: //By updating the values for these inner properties and calling the methods in the component class instance, React knows how to update the application based on its components.*/

class App extends Component { //A React component is defined by declaring a JS class with the class keyword. This class is called 'App' since by convention a react component has the same name as its file. The curly braces open up a class body. The 'extends' keyword' extends the Component class from react. By extending the Component class, we're making this App class a subclass of the react component. The effect is that this App class as a react component will now have a bunch of methods and properties that were originally declared in the react component class. 
  state = { displayBio: false }; //This line is equivalent to the code that is in the constructor (below).
  
//     constructor() {
//     super();
//     this.state = {displayBio: false}; //DisplayBio is going to be a value which controls whether or not we should show this new section within the react application.

//     console.log('Component this', this);

//     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
// } 

toggleDisplayBio = () => { //This line allows us to remove the entire constructor section (commented out above).
    this.setState({displayBio: !this.state.displayBio }); // We can call this.setState. It's going to change the value of displayBio and make it the opposite of this.state.displayBio using the bang operator. In other words, if displayBio is currently false, this will flip it to true, and if it's true, it's going to flip it to false. Replaces the need for show more/show less states.
}
   //It's tempting to directly modify the component state object by using: this.state.displayBio = true; 
   //However, this is a huge bad practice in React. Instead of doing this, React attaches a helper method to the component called setState specifically for updating the values in the state object. The setState method is used by calling this.setState and its input is an object. The keys in this object are whatever we want to update in the state.
    render () { //render method is added to the app component. In the render method, we define the structure of the component itself. The structure of a component is defined through JSX, except a component does not have to be just one element - it can consisit of many elements nested together. 
        return ( //It's very import to have the return keyword with parentheses. It's a common mistake to be missing the return statement in the render method and then get confused by why the react app isn't showing anything.
            <div>
                <img src={profile} alt='profile' className='profile' />
                <h1>Hello!</h1>
                <p>My name is Paige Inia.</p>
                <Title />
                <p>I love learning new things, especially in the field of tech, and I always look forward to working on meaningful projects.</p>
                {
                    this.state.displayBio ? (  //bio is now equal to the entire div with all of its inner content. 
                    <div>          
                        <p>I live in Hawkes Bay, NZ, and I like to code every day.</p>
                        <p>My favourite languages are Python, JavaScript and Go, and learning the React.js framework alongside these languages is an awesome and fun experience.</p>
                        <p>Besides coding, I also really enjoy hacking (ethically off course) and outside of tech, Astrology is my biggest passion in life.</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button> 
                    </div> //button tags add dynamic functionality to allow the user to flip this boolean in the state. That way the bio section can reappear.
                )           //The key is making the method -readMore - fire when the button is clicked in react: we can use an onClick property for an element that references a method to fire and under the hood in the react js engine code, react will know to trigger the method when the element is actually clicked.   
                } 
                <hr />
                <Projects />
                <hr />
                <SocialProfiles/>
             </div> //A ternary expression is a one line if statement that will check a boolean value and set a variable to one of two values. A ternary expression can remove the need for an if condition and make the code cleaner. A question mark starts the ternary expression.
         )           //When react sees a null value within the JSX, it decides to skip over that it won't render anything. //Bio inside of curly braces allows you to render variables within the actual JSX and display them.
    }
}

export default App; //This line makes sure that other files can now use this new component. It shares this component with other files in the codebase. 
//By declaring this App component as the default export of the file, other files will be able to import the app just like we imported react without the curly braces from the react module. 

//Distinction between an element and a component: an element is that smallest block, so one div, one paragraph element, or one header. Where as the component can be many of these elements together, in order to structure an entire piece of UI. 

/*Lesson 11: State
The state is an updateable structure that contains the data for a component.
A component state can change for the lifetime of that component in the web app e.g., a componet may want to track how many times a user has clicked on it. So it can have a key like clickedCount in its state object and every time the user clicks on the component, it will increment that clickedCount variable in the state by 1.
Remeber, it's a rule to never modify the state directly within React.
You should call setState to handle situations where you want values in the state to change.
You should always supply new objects as values to replace the current values in the state.*/ 

/*Lesson 13:
NEVER directly modify the component state if your intention is for changes to occur in the render method based on updated state values.

Bad Practice - Example of directly modifying the state:
this.state.displayBio = !this.state.displayBio;

The way to properly do the above:
this.setState({ displayBio: !this.state.displayBio });

Bad Practice - Example of directly modifying the state:
this.state.text = this.state.text+'...';

Correct way:
this.setState({ text:this.state.text+'...'})

Why is it a rule to never directly modify the state?
The reason is that react recalls the render method after changes have been made to the state through the setState method, 
so setState is called, and the relevant values in the component state change and once that's done setState triggers the render method, calling it again.  
This is important because a render method that is returning different text based on the value of something in the state now has a chance to return something new.
Based on the updated values in the state, it can control what should appear in the react app itself within the rendered methods JSX,
but this doesn't work when the state is modified directly. It won't re-trigger the render and doesn't do anything beyond changing the values. 
Even though the values in the state object would be different, the render method won't notice this,
therefore the application appearance won't update based on the logic in your render method. 

The rule to never directly modify a state relates to another slightly confusing aspect of react: this has to do with how we set up the onClick handlers.
Why are we referring to only the method name itself within the onClick handler, rather than calling it?
By giving the onClick handlers only the function name, the react engine under the hood knows that it should invoke the method only when the onClick is fired and not when it's actually crossed in the render method. 

Summary:
1. You should use setState instead of a direct modification.
2. Handlers like onClick should be given function names because of the very fact that setState triggers a render call. 
*/

/*Lesson 14 - Class Properties and Initializers:
It's best practice in React to set up the state and our methods using this syntax within the component.
The reason we didn't start with this syntax is that it's less intuitive of what's going on under the hood, when you start out.
However, now that we know how the state is actually set up, now class methods need to have this object bound to them.
We're now free to explore the cleaner way of how to do this.
Primarily, the class property and initializer syntax is a way to attach properties and methods to the 'this' object of a class without having to use a constructor.

Again, when you're first exploring React it's better to have to go through the manual process of creating the constructor,
attaching the state object to 'this', and binding 'this' to helper methods. 
That way you know what's going on under the hood, but now we've done that, moving forward,
the class property and initializer syntax is what we'll be using when it's attaching state and methods to components, 
since it's a lot quicker to write and cleaner to read. 
*/