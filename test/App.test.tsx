import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';

import '@testing-library/jest-dom';

import App from '../src/components/App'; //components/App';
import { unmountComponentAtNode } from 'react-dom';

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('react', () => {
  act(() => {
    let el = render(App());
    console.log(el);
    let inn = el.getByTestId('app-router');
    console.log(inn);
    expect(inn.textContent).toBe('qwe');
  });
});

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
