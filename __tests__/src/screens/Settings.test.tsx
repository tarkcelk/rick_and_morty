import {fireEvent, render, screen} from '@testing-library/react-native';
import Settings from 'src/screens/Settings';

describe('Settings screen test', () => {
  it('Check render of Settings screen', () => {
    render(<Settings />);
  });

  it('Check minus and plus buttons for num of columns', async () => {
    render(<Settings />);
    const minusButton = screen.getByTestId('num_of_columns_minus_button');
    const plusButton = screen.getByTestId('num_of_columns_plus_button');
    let numOfColumnsText = screen.getByTestId('num_of_columns');
    expect(numOfColumnsText).toHaveTextContent('1');
    fireEvent.press(plusButton);
    fireEvent.press(minusButton);
    expect(numOfColumnsText).toHaveTextContent('1');
  });
});
