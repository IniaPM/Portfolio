import React, {Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component { //We can declare the project component in the same Project.js file.
  render() {
    console.log('this.props', this.props);

    const { title, image, description, link } = this.props.project;

    return ( //{this.props.project.title} was removed from return divs and replaced with what you now see below.
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}> 
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{ width: 200, height: 120}} />
            <p>{description}</p>
            <a href={link}>{link}</a>
        </div>
    )
  } 
}

class Projects extends Component {
    render() {
        return (
        <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
            PROJECTS.map(PROJECT => {
            return (
                <Project key={PROJECT.id} project={PROJECT} />
                );
             })
            }
            </div>
        </div>
        )
    }
}

export default Projects;

/*Lesson 16:
In React, props is a way for parent components to pass down data to child components. 
render methods are needed in all React components.
Don't forget the return below the render method.
In order for the props to work, you need a value with the same exact name.
*/
