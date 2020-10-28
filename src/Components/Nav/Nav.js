import React, {useState} from 'react';
import { Menu } from 'semantic-ui-react';
import './Nav.css'

export default function Nav(){
    const [active, updateActive] = useState('calculator')

    return(
        <>
        <Menu color='teal' inverted className="nav-bar">
            <Menu.Item
            name='home'
            active={active==='home'}
            onClick={() => updateActive('home')}
            >
            The Financial Gym
            </Menu.Item>

            <Menu.Item
            name='calculator'
            active={active==='calculator'}
            onClick={() => updateActive('calculator')}
            >
            Calculator
            </Menu.Item>
        </Menu>
        </>
    )
}