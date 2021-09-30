import { cleanup, render, screen } from '@testing-library/react';
import BtcCard from '../pages/landing/BtcCard';

afterAll(cleanup)

test('Render and check component text', () => {
  render(<BtcCard currPrice={'2000'} />);
  const testElemnt = screen.getByTestId('testbtcprice');

  //to use Snapshot
  // expect(testElemnt).toMatchSnapshot()

  //check is Price value displayed on screen by checking is DOM element empty
  expect(testElemnt).not.toBeEmptyDOMElement()

  //check is price value is the right value that assign to component
  // expect(testElemnt).toHaveTextContent('2,000')
});
