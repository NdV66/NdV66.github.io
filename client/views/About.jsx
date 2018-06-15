import React from 'react';
import {Row, Col} from 'reactstrap';

const iconHeight = 110;
const iconWidth = 130;

const ChartIcon = () =>
    <svg width={`${iconWidth}`} height={`${iconHeight}`}>
        <polyline
            points="0,100 30,100 30,50 40,50 40,100 50,100 50,30 60,30 60,100 70,100, 70,60 80,60 80,100 90,100 90,90 100,90, 100,100 130,100"
            className='animation-icon icon-lines'
        />
    </svg>;

const ChartIconWerid = () =>
<svg width={`${iconWidth}`} height={`${iconHeight}`}>
    <polyline
        points="0,50 30,50 30,80 40,80 40,20 50,20 50,100 60,100 60,50 70,50 70,90 80,90 80,30, 90,30 90,70 130,70"
        className='animation-icon icon-lines'
    />
</svg>;

const ChartIconMirror = () =>
<svg width={`${iconWidth}`} height={`${iconHeight}`}>
    <polyline
        points="0,50 30,50 30,80 40,80 40,100 50,100 50,60 60,60 60,100 70,100, 70,30 80,30 80,100 90,100 90,80 100,80, 100,100 130,100"
        className='animation-icon icon-lines'
    />
</svg>;

const TechLogo = (props) => <Col md='3' className='mb-3 mt-3'>
    <img
        src={`./../images/${props.name}.png`}
        alt={`${props.name} logo`}
        className='mx-auto d-block img-fluid tech-logo'
        title={props.name || 'logo'}
    />
</Col>;

export const About = (props) => {
    const logos = ['webpack', 'react', 'scss', 'less', 'jquery', 'bootstrap', 'js', 'css3', 'html5', 'express', 'nodejs', 'git'];
    const techLogos = logos.map(tmp => <TechLogo name={tmp} key={tmp}/>);

    return <React.Fragment>
        <Row>
            <Col md='12' className='text-center'>
                <ChartIconWerid />
                <h2>What I like</h2>
            </Col>
            {techLogos}
        </Row>
    </React.Fragment>;
};
