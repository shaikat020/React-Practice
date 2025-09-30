// function App() {
//     return <></>
// }

import { Fragment } from "react";
import H1 from "./components/h1";
import { About } from "./components/about";
import Level from "./components/level";
import { Skill } from "./components/skill";

const App = () =>{
    return (
    <div>
        <H1 name = "Md Tahsin Azad"/>
        <H1 name= "Shaikat"></H1>
        <Fragment>
            <H1 name = "Md Tahsin Azad(using Fragment)"/>
            <H1 name= "Shaikat"></H1>
        </Fragment>
        <>
            <H1 name = "Md Tahsin Azad(using <>)"/>
            <H1 name= "Shaikat"></H1>
            
        </>
        <About></About>
        <Level level= "4" term= "I"></Level>
        <Skill skills = "HTML, CSS, JS, React, Python, Django, PostGreSQL, MySQL"></Skill>
    </div>
    
    )
}

export default App;

//or can do export const App = () =>{ ....