import {render} from '@testing-library/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DetailScreen from 'src/screens/DetailScreen';

describe('DetailScreen test', () => {
  it('Check render of DetailScreen', () => {
    render(
      <SafeAreaProvider>
        <DetailScreen />
      </SafeAreaProvider>,
    );
  });
});
