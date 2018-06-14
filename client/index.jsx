import React from 'react';
import ReactDOM from 'react-dom';
import {HamburgerNavbar} from './components/HamburgerNavbar.jsx';
import {FooterElement} from './components/FooterElement.jsx';
import {PageJumbotron} from './views/PageJumbotron.jsx';
import {About} from './views/About.jsx';
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';

const App = () =>
    <Container fluid={true} className='no-padding no-margin'>
        <header>
            <HamburgerNavbar />
        </header>

        <main className='pt-3'>
            <PageJumbotron />
            <About />
        </main>

        <footer className="footer">
            <FooterElement />
        </footer>
    </Container>;

ReactDOM.render(<App/>, document.getElementById('root'));
