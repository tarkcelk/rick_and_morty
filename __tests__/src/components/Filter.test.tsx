import {fireEvent, render, screen} from '@testing-library/react-native';
import Filter from 'src/components/Filter';

describe('Filter component test', () => {
  it('Check render of filter component', () => {
    render(<Filter />);
  });

  it('Check filter components', () => {
    render(<Filter />);
    const filterName = screen.getByTestId('filter_name');
    const filterStatus = screen.getByTestId('filter_status');
    const clearButton = screen.getByTestId('clear_button');
    fireEvent.changeText(filterName, 'Rick');
    fireEvent.changeText(filterStatus, 'Dead');
    fireEvent.press(clearButton);
  });
});
