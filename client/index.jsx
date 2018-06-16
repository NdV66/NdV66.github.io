import React from 'react';
import ReactDOM from 'react-dom';
import {HamburgerNavbar} from './components/HamburgerNavbar.jsx';
import {FooterElement} from './components/FooterElement.jsx';
import {PageJumbotron} from './views/PageJumbotron.jsx';
import {About} from './views/About.jsx';
import {Projects} from './views/Projects.jsx';
import {Container, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/style.scss';

const App = () =>
<React.Fragment>

    <Container fluid={true} className='no-padding no-margin'>
        <header>
            <HamburgerNavbar />
        </header>
    </Container>

    <main className='pt-3'>
        <Container fluid={true} className='no-padding no-margin'>
            <PageJumbotron />
            <About />
            <Projects />
        </Container>
    </main>

    <Container fluid={true} className='no-padding no-margin'>
        <footer className='footer'>
            <FooterElement />
        </footer>
    </Container>

</React.Fragment>;

ReactDOM.render(<App/>, document.getElementById('root'));
