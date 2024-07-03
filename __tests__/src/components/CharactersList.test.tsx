import {fireEvent, render, screen} from '@testing-library/react-native';
import CharactersList from 'src/components/CharactersList';
import mockCharacters from '__tests__/mocks/characters.json';

const defaultProps = {
  characters: [],
  favoriteCharacterIds: [],
  numOfColumns: 1,
  onCharacterSetToFavorites: jest.fn(),
  onEndReached: jest.fn(),
  onPress: jest.fn(),
};

describe('CharactersList component test', () => {
  it('Check render of CharactersList component', () => {
    render(<CharactersList {...defaultProps} />);
  });

  it('Check with characters', () => {
    render(
      <CharactersList {...defaultProps} characters={mockCharacters.results} />,
    );
  });

  it('Check filter button', () => {
    render(
      <CharactersList {...defaultProps} characters={mockCharacters.results} />,
    );
    let filterButtonText = screen.getByTestId('filter_button_text');
    expect(filterButtonText).toHaveTextContent('Filter +');
    const filterButton = screen.getByTestId('filter_button');
    fireEvent.press(filterButton);
    filterButtonText = screen.getByTestId('filter_button_text');
    expect(filterButtonText).toHaveTextContent('Filter -');
  });
});
