import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutPage from '../AboutPage/AboutPage';
import './App.css';

export default class App extends Component() {
    render() {
        return(
            return (
              <div className="App">
                  <header>
                      <h1>App Title</h1>
                  </header>
                  <nav>
                      Tortor consequat id porta nibh venenatis cras sed felis eget.
                  </nav>
                  <main className="main_content" role="main">
                        <Route exact path='/' component={AboutPage}/>
                      <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id cursus metus aliquam eleifend mi in nulla. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Sed risus pretium quam vulputate. Odio ut enim blandit volutpat. At tellus at urna condimentum mattis. Tellus pellentesque eu tincidunt tortor aliquam. In arcu cursus euismod quis viverra nibh cras. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tortor consequat id porta nibh venenatis cras sed felis eget. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Eget nulla facilisi etiam dignissim. Vestibulum lorem sed risus ultricies. Malesuada fames ac turpis egestas. Sed viverra tellus in hac. Id diam maecenas ultricies mi eget mauris pharetra et. Habitant morbi tristique senectus et netus et.
                      </p>
                      <div>
                          Morbi quis commodo
                      </div>
                  </main>
                  <footer>
                      <p>
                          Lectus urna duis convallis convallis tellus id interdum. Purus non enim praesent elementum facilisis.
                      </p>
                  </footer>
              </div>
            );
        )
    }
}

export default App;
