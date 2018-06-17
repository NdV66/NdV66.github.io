import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {ChartIconWerid} from '../components/SvgIcons.jsx';

const TechLogo = (props) => <Col md='3' className='mb-3 mt-3'>
    <img
        src={`./../images/${props.name}.png`}
        alt={`${props.name} logo`}
        className='mx-auto d-block img-fluid tech-logo'
        title={props.name || 'logo'}
    />
</Col>;

export const About = (props) => {
    const logos = ['webpack', 'react', 'scss', 'less', 'jquery', 'bootstrap', 'js', 'css3', 'html5', 'express', 'nodejs', 'mocha','chaijs', 'git'];
    const techLogos = logos.map(tmp => <TechLogo name={tmp} key={tmp}/>);

    return <Container>
        <Row id='technologies'>
            <Col md='12' className='text-center'>
                <ChartIconWerid />
                <h2>What I like to use</h2>
            </Col>
            {techLogos}
        </Row>
    </Container>;
};
