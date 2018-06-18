import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import {ChartIcon} from '../components/SvgIcons.jsx';

const ProjectCard = (props) =>
    <Col md='6' className='mb-3 mt-3'>
        <a href={props.link}>
            <img
                src={`images/${props.name}.jpg`}
                alt={`${props.name} project`}
                className='mx-auto d-block img-fluid project-logo project-card'
                title={props.name || 'project'}
            />
        </a>
    </Col>;

export const Projects = (props) => {
    const projects = new Map([
        ['beStar', 'https://ndv66.github.io/beStarOnline/#/'],
        ['subtle', 'https://subtlesoftwaresolutions.github.io/']
    ]);
    projects.forEach((link, key) => projects.set(key, <ProjectCard name={key} link={link}/>));
    const projectsLogos = projects.values();

    return <div className='mt-3 active-color-section pb-3'>
        <Container>
            <Row>
                <Col md='12' className='text-center mb-3' id='projects'>
                    <ChartIcon />
                    <h2>My github projects</h2>
                </Col>
                {projectsLogos}
            </Row>
        </Container>
    </div>;
};
