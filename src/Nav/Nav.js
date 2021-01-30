import React from 'react';
import { Link } from 'react-router-dom';
import Content from '../content';
import './Nav.css';

export default class Nav extends React.Component {
    render() {
        return (
            <Content className="navigation">
                <Link to='/home'>
                    Home
                </Link>
                <Link to='/record'>
                    Record
                </Link>
            </Content>
        )
    }
}
