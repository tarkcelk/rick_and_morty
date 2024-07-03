import {render} from '@testing-library/react-native';
import App from 'App';

describe('App component test', () => {
  beforeEach(() => {
    jest.useFakeTimers({legacyFakeTimers: true});
  });

  it('Check render of App component', () => {
    render(<App />);
  });
});
