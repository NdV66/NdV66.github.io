import React from 'react';
import { Jumbotron } from 'reactstrap';

export const PageJumbotron = (props) =>
    <div>
      <Jumbotron className='jumbotron text-center'>
        <img src='../images/user.jpg' className='d-inline-block mt-3' />
        <h1 className='mt-2'>NdV66</h1>
      </Jumbotron>
    </div>;
