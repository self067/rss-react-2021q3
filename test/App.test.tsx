import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
// import { unmountComponentAtNode } from 'react-dom';

import store from '../src/redux/store';
import { render, fireEvent, screen, getByRole } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import { createMemoryHistory } from 'history';

import App from '../src/components/App'; //components/App';

import Input from '../src/components/Input';
import PagingPanel from '../src/components/PagingPanel';
import SearchBar from '../src/components/SearchBar';
describe('Empty Test', () => {
  it('Test test', () => {
    expect(true).toBeTruthy();
  });
});

test('App H1', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElem = getByText('RSS React 2021Q3');
  expect(linkElem).toBeInTheDocument();
});

test('App Menu link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElem = getByText('Home');
  expect(linkElem).toBeInTheDocument();
});

describe('hooks test', () => {
  const onChange = jest.fn();
  let wrapper;
  let value = 'qaz';
  beforeEach(() => {
    wrapper = render(
      <Input
        inputName="firstName"
        inputType="text"
        label="Name"
        value={value}
        onChange={onChange}
      />
    );
  });
  test('inputs test', () => {
    expect(wrapper).not.toBeNull();
  });
});

describe('Paging test', () => {
  const setPageLimit = jest.fn();
  const setPageNum = jest.fn();
  const limit = 30,
    page = 5,
    pages = 33,
    total = 700;

  const paging = render(
    <PagingPanel
      limit={limit}
      setPageLimit={setPageLimit}
      page={page}
      setPageNum={setPageNum}
      pages={pages}
      total={total}
    />
  );
  // screen.debug();
  // expect(screen.getByText('33')).toBeInTheDocument();
  // it('test cards per page', () => {
  //   expect(paging.getByText('30')).toBeInTheDocument();
  // });
  it('test Total cards ', () => {
    expect(paging.queryByText('Total 700 cards in 33 pages')).toBeInTheDocument();
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
