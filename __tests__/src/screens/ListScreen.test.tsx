import {render} from '@testing-library/react-native';
import ListScreen from 'src/screens/ListScreen';

describe('ListScreen test', () => {
  it('Check render of ListScreen', () => {
    render(<ListScreen />);
  });
});
