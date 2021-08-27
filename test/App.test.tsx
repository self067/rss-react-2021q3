import React from 'react';
import { Provider } from 'react-redux';
<<<<<<< HEAD
// import { Router } from 'react-router-dom';
// import { unmountComponentAtNode } from 'react-dom';

import store from '../src/redux/store';
import { render, fireEvent, screen, getByText } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
// import { createMemoryHistory } from 'history';
=======
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getByLabelText, logRoles } from '@testing-library/dom';

import store from '../src/redux/store';
import { createMemoryHistory } from 'history';
>>>>>>> 3c5405b9d273e530065f51d6d9e9852485591d06

import App from '../src/components/App'; //components/App';

import Input from '../src/components/Input';
import PagingPanel from '../src/components/PagingPanel';
import SearchBar from '../src/components/SearchBar';
<<<<<<< HEAD
=======

describe('Empty Test', () => {
  it('Test test', () => {
    expect(true).toBeTruthy();
  });
});
>>>>>>> 3c5405b9d273e530065f51d6d9e9852485591d06

// describe('Empty Test', () => {
//   it('Test test', () => {
//     expect(true).toBeTruthy();
//   });
// });

// test('App H1', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   const linkElem = getByText('RSS React 2021Q3');
//   expect(linkElem).toBeInTheDocument();
// });

// test('App Menu link', () => {
//   const { getByText } = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
//   const linkElem = getByText('Home');
//   expect(linkElem).toBeInTheDocument();
// });

<<<<<<< HEAD
describe('hooks test', () => {
  const onChange = jest.fn();
  let wrapper;
  let value = 'qaz';
  // beforeEach(() => {
  wrapper = render(
    <Input inputName="firstName" inputType="text" label="Name" value={value} onChange={onChange} />
  );
  screen.debug();
  let items = null;
  test('inputs', async () => {
    items = await screen.findAllByRole('input');
    expect(items).toHaveLength(2);
  });
  // });
  // getByText(wrapper, 'qaz');

  test('inputs test', () => {
    expect(getByText(items[0], 'qaz')).toBeInTheDocument();
  });
  // test('inputs test2', () => {
  //   expect(wrapper.getByRole('input')).not.toBeNull();
  // });

  // fireEvent.change(screen.getByRole('input'), {
  //   target: { value: '444' },
  // });

  // fireEvent.change(wrapper.getByRole('input'), {
  //   target: { value: '477' },
  // });
  screen.debug();
});

// describe('Paging test', () => {
//   const setPageLimit = jest.fn();
//   const setPageNum = jest.fn();
//   const limit = 31,
//     page = 71,
//     pages = 133,
//     total = 777;

//   const paging = render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//     // <PagingPanel
//     //   limit={limit}
//     //   setPageLimit={setPageLimit}
//     //   page={page}
//     //   setPageNum={setPageNum}
//     //   pages={pages}
//     //   total={total}
//     // />
//   );
//   it('test Total cards ', async () => {
//     expect(await screen.findByText(/^Total/)).toBeInTheDocument();
//     //  700 cards in 33 pages'
//   });

//   it('test Cards per page ', async () => {
//     expect(await paging.findByText(/^Cards per page/)).toBeVisible();
//   });
//   screen.debug();
//   it('get inputs ', async () => {
//     screen.debug();

//     (await screen.findAllByRole('input')).map(item => {
//       fireEvent.change(item, {
//         target: { value: '4' },
//       });
//     });

//     (await screen.findAllByRole('spinbutton')).map(item => {
//       expect(item).toBeVisible();
//     });

//     fireEvent.change(await screen.findByRole('spinbutton'), {
//       target: { value: '7' },
//     });

//     screen.debug();

//     // expect(await paging.getByRole('').toBeInTheDocument();
//     //  700 cards in 33 pages'
//   });

//   screen.debug();

//   it('get label', () => {
//     expect(screen.getByLabelText(/Select order field/i)).toBeInTheDocument();
//   });
// });

//  expect(container.querySelector("[data-testid='email']").getAttribute('href')).toEqual(
//    'mailto:test@example.com'
//  );
=======
test('as Fr', () => {
  const ren = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // logRoles(ren.container);
  expect(ren.container).toBeInTheDocument();
});

///@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

describe('Paging test', () => {
  const setPageLimit = jest.fn();
  const setPageNum = jest.fn();
  const limit = 31,
    page = 71,
    pages = 133,
    total = 777;

  const paging = render(
    // <Provider store={store}>
    //   <App />
    // </Provider>
    <PagingPanel
      limit={limit}
      setPageLimit={setPageLimit}
      page={page}
      setPageNum={setPageNum}
      pages={pages}
      total={total}
    />
  );
  it('test Total cards ', () => {
    screen.debug();
    paging.debug();
    expect(getByText(paging.container, /Total \d+ cards in \d+ pages/)).toBeInTheDocument();
    //  700 cards in 33 pages'
  });

  it('test Cards per page ', () => {
    expect(getByText(paging.container, /^Cards per page/)).toBeVisible();
  });

  const items = paging.getAllByRole('spinbutton');

  test('pages inputs', () => {
    expect(items).toHaveLength(2);
  });

  it('get inputs ', async () => {
    (await screen.findAllByRole('spinbutton')).map(item => {
      fireEvent.change(item, {
        target: { value: '4' },
      });
    });

    (await screen.findAllByRole('spinbutton')).map(item => {
      expect(item).toBeVisible();
    });

    fireEvent.change(await screen.findByRole('spinbutton'), {
      target: { value: '7' },
    });

    // expect(await paging.getByRole('').toBeInTheDocument();
    //  700 cards in 33 pages'
  });
  ////####################################################################################
  ////####################################################################################
  ////####################################################################################
  // <SearchBar doSearch={setSearchStringComplete} />
  // <SortPanel
  //   orderField={orderField}
  //   orderDir={orderDir}
  //   setOrderField={setOrderField}
  //   setOrderDir={setOrderDir}
  // />
  // <PagingPanel
  //   limit={limit}
  //   setPageLimit={setPageLimit}
  //   page={page}
  //   setPageNum={setPageNum}
  //   pages={searchResults.pages}
  //   total={searchResults.total}
  // />

  //   it('get label', () => {
  //     expect(screen.getByLabelText(/Select order field/i)).toBeInTheDocument();
  //   });
});

describe('hooks test', () => {
  const onChange = jest.fn();
  let value = 'qaz';
  const wrapper = render(
    <Input inputName="firstName" inputType="text" label="Name" value={value} onChange={onChange} />
  );
  // logRoles(wrapper);
  // screen.debug();
  let items = screen.getAllByRole('textbox');

  test('search input', () => {
    expect(items).toHaveLength(1);
  });

  test('inputs test', () => {
    wrapper.debug();
    expect(getByLabelText(wrapper.container, /Name/i)).toBeInTheDocument();
  });

  // test('inputs test2', () => {
  //   expect(wrapper.getByRole('input')).not.toBeNull();
  // });

  // fireEvent.change(screen.getByRole('spinbutton'), {
  //   target: { value: '444' },
  // });

  // fireEvent.change(wrapper.getByRole('textbox'), {
  //   target: { value: '477' },
  // });
});

// expect(container.querySelector("[data-testid='email']").getAttribute('href')).toEqual(
//   'mailto:test@example.com'
// );
>>>>>>> 3c5405b9d273e530065f51d6d9e9852485591d06
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

// test('rendering a component that uses useLocation', () => {
//   const history = createMemoryHistory();
//   const route = '/some-route';
//   history.push(route);
//   render(<Router history={history}>{/* <LocationDisplay /> */}</Router>);

//   expect(screen.getByTestId('location-display')).toHaveTextContent(route);
// });
