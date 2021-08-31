import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen, getByText } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getByLabelText, logRoles } from '@testing-library/dom';

import store from '../src/redux/store';
import { createMemoryHistory } from 'history';

import App from '../src/components/App'; //components/App';

import Input from '../src/components/Input';
import PagingPanel from '../src/components/PagingPanel';
import SearchBar from '../src/components/SearchBar';
import Details from '../src/pages/Details';

describe('Common App tests', () => {
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

  test('as Fr', () => {
    const ren = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // logRoles(ren.container);
    expect(ren.container).toBeInTheDocument();
  });
});
///@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
///@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
///@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

describe('Paging test', () => {
  const setPageLimit = jest.fn();
  const setPageNum = jest.fn();
  const limit = 31,
    page = 71,
    pages = 133,
    total = 777;

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

  const t = paging.getByText(/Total/);
  it('test Total cards ', () => {
    expect(t).toBeValid();
    //  700 cards in 33 pages'
  });

  const cards_per_page = paging.getByText(/Cards per page/gi);
  it('test Cards per page ', () => {
    expect(cards_per_page).toBeValid();
  });

  const items = paging.getAllByRole('spinbutton');

  test('pages inputs', () => {
    expect(items).toHaveLength(2);
  });

  items.map(item => {
    fireEvent.change(item, {
      target: { value: '4' },
    });
  });
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

describe('Input component test', () => {
  const onChange = jest.fn();
  let value = 'qaz';
  const wrapper = render(
    <Input inputName="firstName" inputType="text" label="Name" value={value} onChange={onChange} />
  );
  //   // logRoles(wrapper);
  let items = screen.getAllByRole('textbox');

  test('search input', () => {
    expect(items).toHaveLength(1);
  });

  test('inputs test', () => {
    expect(screen.queryByText(/Search/)).toBeNull();
  });

  test('inputs test2', async () => {
    const setSearchStringComplete = jest.fn();
    render(<SearchBar doSearch={setSearchStringComplete} />);
    expect(await screen.findByPlaceholderText(/Search/gi)).toBeInTheDocument();
  });
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
describe('SearchBar test', () => {
  const setSearchStringComplete = jest.fn();
  const ren = render(<SearchBar doSearch={setSearchStringComplete} />);
  userEvent.keyboard('Gendalf');

  test('SearchBar test2', async () => {
    render(<SearchBar doSearch={setSearchStringComplete} />);

    fireEvent.change(await screen.findByPlaceholderText(/Search/gi), {
      target: { value: 'Gendalf' },
    });

    expect(await screen.findByDisplayValue(/Gendalf/)).toBeInTheDocument();
  });
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
describe('events', () => {
  it('checkbox click', () => {
    const handleChange = jest.fn();
    const { container } = render(<input type="checkbox" onChange={handleChange} />);
    const checkbox = container.firstChild;
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(checkbox).toBeChecked();
  });

  it('input focus', () => {
    const { getByTestId } = render(<input type="text" data-testid="simple-input" />);
    const input = getByTestId('simple-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
describe('Details page test', () => {
  test('Details test', async () => {
    render(<Details />);
    expect(await screen.findByText(/Person/)).toBeInTheDocument();
  });

  screen.debug();
});

////######################################################################
////######################################################################
////######################################################################

// ??@@??@@??@@??@@??@@??????????????????????????
// describe('hooks test', () => {
//   const onChange = jest.fn();
//   let value = 'qaz';
//   const wrapper = render(
//     <Input inputName="firstName" inputType="text" label="Name" value={value} onChange={onChange} />
//   );
//   // logRoles(wrapper);
//   // screen.debug();
//   let items = screen.getAllByRole('textbox');

//   test('search input', () => {
//     expect(items).toHaveLength(1);
//   });

//   test('inputs test', () => {
//     wrapper.debug();
//     expect(getByLabelText(wrapper.container, /Name/i)).toBeInTheDocument();
//   });

//   // test('inputs test2', () => {
//   //   expect(wrapper.getByRole('input')).not.toBeNull();
//   // });

//   // fireEvent.change(screen.getByRole('spinbutton'), {
//   //   target: { value: '444' },
//   // });

//   // fireEvent.change(wrapper.getByRole('textbox'), {
//   //   target: { value: '477' },
//   // });
// });

// expect(container.querySelector("[data-testid='email']").getAttribute('href')).toEqual(
//   'mailto:test@example.com'
// );
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
