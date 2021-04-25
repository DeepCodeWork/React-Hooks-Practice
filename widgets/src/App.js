import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
    {
        title: 'What is react?',
        content: 'A frontend JS library'
    },
    {
        title: 'Why use react?', 
        content: 'My fav lib'
    },
    {
        title: 'How to use react',
        content: 'By making usable components'
    }
];

const colors = [
    {
        label: 'Green Color',
        value: 'green'
    },
    {
        label: 'Red Color',
        value: 'red'
    },
    {
        label: 'Blue color',
        value: 'blue'
    }
]

const App = () => {

    const [selectedColor, setColor] = useState(colors[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            <Route path='/'>
                <Accordion items = {items} /> 
            </Route>
            <Route path='/search'>
                <Search /> 
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                    label = 'Select a color'
                    options = {colors} 
                    selectedOption = {selectedColor}
                    setSelectedOption = {setColor} /> 
            </Route>
            <Route path='/translate'>
                <Translate/> 
            </Route> 
        </div>);
}

export default App;
