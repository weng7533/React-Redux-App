import React from 'react';

import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';



it('renders "all about kittens" text', () => {
  const wrapper = rtl.render(<App />);
  const hasKittensText = wrapper.getByText(/About/i);
  expect(hasKittensText).toBeInTheDocument();
  // expect(wrapper.queryByText(/all about kittens/i));
});








// afterEach(rtl.cleanup);

// it('renders without crashing', () => {
//   const wrapper = rtl.render(
//     <span className="greet">hello world</span>
//   );

//   // console.log(wrapper.debug())
//   const element = wrapper.queryByText(/hello/i);
//   const true_element = true;
//   expect(element).toBeTruthy();
//   expect(true_element).toBeTruthy();



// });






















// const help = require('./setupTests');

// describe('sum function', () => {
//   it('sums two integers', () => {
//     const expected = 6;
//     const actual = help.sum(1, 5);
//     expect(actual).toBe(expected); // .toBe() looks for strict equality!
//   });

//   it('less than the actual', () => {
//     const a = 5000;
//     const actual = help.sum(1, 5);
//     expect(actual).toBeLessThan(a); // .toBe() looks for strict equality!
//   });

//   it('not.toBe', () => {
//     const a = 5000;
//     const actual = help.sum(1, 5);
//     expect(actual).not.toBe(a); // .toBe() looks for strict equality!
//   });
// });


