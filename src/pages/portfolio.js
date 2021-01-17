import React from 'react';
import { Link } from 'react-router-dom';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const portfolio = (props) => {
  return (
    <div>
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            My first HTTP Page - Fan Page
          </ToastHeader>
          <ToastBody>
            <Link>https://lucianne302.github.io/FanPage/index.html"</Link>
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a gridded background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-primary my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a primary background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-secondary my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a secondary background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-success my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a success background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-danger my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a danger background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-warning my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a warning background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-info my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on an info background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 bg-dark my-2 rounded">
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a dark background — check it out!
          </ToastBody>
        </Toast>
      </div>
      <div className="p-3 my-2 rounded" style={{ background: 'black' }}>
        <Toast>
          <ToastHeader>
            Reactstrap
          </ToastHeader>
          <ToastBody>
            This is a toast on a black background — check it out!
          </ToastBody>
        </Toast>
      </div>
    </div>
  );
};

// function contact () {
//     return (
//         <h1>test Portfolio</h1>
//     )
// }

export default portfolio;