import {render, screen} from '@testing-library/react-native';
import Tag from 'src/components/Tag';

const defaultProps = {
  tag: 'Male',
};
describe('Tag component test', () => {
  it('Check render of Tag component', () => {
    render(<Tag {...defaultProps} />);
  });

  it('Check Tag components', () => {
    render(<Tag {...defaultProps} />);
    screen.getByTestId('tag_container');
    const tagText = screen.getByTestId('tag_text');
    expect(tagText).toHaveTextContent(defaultProps.tag);
  });
});
