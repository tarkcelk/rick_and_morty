import {render, screen} from '@testing-library/react-native';
import ListHeader from 'src/components/ListHeader';

describe('ListHeader component test', () => {
  it('Check render of ListHeader component', () => {
    render(<ListHeader />);
  });

  it('Check ListHeader components', () => {
    render(<ListHeader />);
    screen.getByTestId('bar_icon');
    screen.getByTestId('bell_icon');
    screen.getByTestId('badge');
  });
});
