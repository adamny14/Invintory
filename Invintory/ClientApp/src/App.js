import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { AddItem } from './components/AddItem';
import { Search } from './components/Search';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/additem' component={AddItem} />
                <Route path='/fetchdata' component={FetchData} />
                <Route path='/search' component={Search} />
            </Layout>
        );
    }
}
