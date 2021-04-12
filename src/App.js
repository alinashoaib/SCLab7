import React, { Component } from 'react';
import './App.css';
import './App.css'
import Validation from './Components/Validation.js'
import Char from './Components/Char.js'

class App extends Component {
    render() {
        return ( <
            div className = "App" >
            <
            ol >
            <
            li > Create an input field( in App component) with a change listener which outputs the length of the entered text below it(e.g.in a paragraph). < /li> <
            li > Create a new component( => ValidationComponent) which receives the text length as a prop < /li> <
            li > Inside the ValidationComponent, either output "Text too short"
            or "Text long enough"
            depending on the text length(e.g.take 5 as a minimum length) < /li> <
            li > Create another component( => CharComponent) and style it as an inline box( => display: inline - block, padding: 16 px, text - align: center, margin: 16 px, border: 1 px solid black). < /li> <
            li > Render a list of CharComponents where each CharComponent receives a different letter of the entered text( in the initial input field) as a prop. < /li> <
            li > When you click a CharComponent, it should be removed from the entered text. < /li> < /
            ol > <
            p > Hint: Keep in mind that JavaScript strings are basically arrays! < /p> < /
            div >
        );
    }
    state = {
        userInput: ''
    }
    textLengthHandler = event => {
        this.setState({ userInput: event.target.value })
    }

    deleteCharHandler = index => {
        const text = this.state.userInput.split('')
        text.splice(index, 1)
        const splicedText = text.join('')
        this.setState({ userInput: splicedText })
    }

    render() {

        const charList = this.state.userInput
            .split('')
            .map((char, index) => ( <
                Char character = { char }
                key = { char + Math.floor(Math.random() * 100000) }
                handleClick = {
                    () => this.deleteCharHandler(index)
                }
                />
            ))

        let textLength = this.state.userInput.length

        return ( <
            div className = 'App' >
            <
            ol >
            <
            li > Create an input field( in App component) with a change listener which outputs the length of the entered text below it(e.g.in a paragraph). < /li> <
            li > Create a new component( => ValidationComponent) which receives the text length as a prop < /li> <
            li > Inside the ValidationComponent, either output "Text too short"
            or "Text long enough"
            depending on the text length(e.g.take 5 as a minimum length) < /li> <
            li > Create another component( => CharComponent) and style it as an inline box( => display: inline - block, padding: 16 px, text - align: center, margin: 16 px, border: 1 px solid black). < /li> <
            li > Render a list of CharComponents where each CharComponent receives a different letter of the entered text( in the initial input field) as a prop. < /li> <
            li > When you click a CharComponent, it should be removed from the entered text. < /li> < /
            ol > <
            p > Hint: Keep in mind that JavaScript strings are basically arrays! <
            /p > <
            input type = 'text'
            onChange = { this.textLengthHandler }
            value = { this.state.userInput }
            style = {
                { padding: "5px" }
            } >
            <
            /input> <
            p > { this.state.userInput } < br / > Text length: { textLength } <
            /p> <
            br / >
            <
            Validation textLength = { textLength }
            /> { charList } < /
            div >
        )
    }

}

export default App;