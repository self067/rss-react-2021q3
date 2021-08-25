import React from 'react';
import { Provider } from 'react-redux';
// import { act } from 'react-dom/test-utils';
import { Router } from 'react-router-dom';
import { unmountComponentAtNode } from 'react-dom';

import store from '../src/redux/store';
import fetch from 'node-fetch';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

// import '@testing-library/jest-dom';

import App from '../src/components/App'; //components/App';

describe('App', () => {
  // let container = null;

  // beforeEach(() => {
  //   container = document.createElement('div');
  //   document.body.appendChild(container);
  // });
  // afterEach(() => {
  //   unmountComponentAtNode(container);
  //   container.remove();
  //   container = null;
  // });

  it('react', () => {
    let el = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // console.log(el);
    let inn = el.getByTestId('app-router');
    //   // console.log('inn=', inn);
    expect(inn.textContent).toBe(
      'HomeAboutRSS React 2021Q3Select order field:unsortedby nameby birthby deathby genderby hairby heightby raceSort Direction:AscDescCards per pageCurrent PageTotal 0 cards in 0 pages'
    );
  });
});

// test('landing on a bad page', () => {
//   const history = createMemoryHistory();
//   history.push('/some/bad/route');
//   render(
//     <Provider store={store}>
//       <Router history={history}>
//         <App />
//       </Router>
//     </Provider>
//   );

//   expect(screen.getByText(/no match/i)).toBeInTheDocument();
// });

// test('full app rendering/navigating', () => {

//   render(<App />);
//   // verify page content for expected route
//   // often you'd use a data-testid or role query, but this is also possible
//   expect(screen.getByText(/you are home/i)).toBeInTheDocument();

//   const leftClick = { button: 0 };
//   userEvent.click(screen.getByText(/about/i), leftClick);

//   // check that the content changed to the new page
//   expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
// });

// test('landing on a bad page', () => {
//   const history = createMemoryHistory();
//   history.push('/some/bad/route');
//   render(
//     <Router history={history}>
//       <App />
//     </Router>
//   );

//   expect(screen.getByText(/no match/i)).toBeInTheDocument();
// });

// test('rendering a component that uses useLocation', () => {
//   const history = createMemoryHistory();
//   const route = '/some-route';
//   history.push(route);
//   render(<Router history={history}>{/* <LocationDisplay /> */}</Router>);

//   expect(screen.getByTestId('location-display')).toHaveTextContent(route);
// });
