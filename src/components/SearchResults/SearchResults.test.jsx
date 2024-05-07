import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchResults from './SearchResults.jsx';
import { describe, it, expect, vi } from 'vitest';

describe('SearchResults Component', () => {
  const searchResultsArray = [
    { item: { name: 'result1', id: 1 }, refIndex: 1 },
    { item: { name: 'result2', id: 2 }, refIndex: 2 },
    { item: { name: 'result3', id: 3 }, refIndex: 3 },
  ];
  const onClickMock = vi.fn();

  it('should be visible', () => {
    const { container } = render(<SearchResults />);
    expect(container.querySelector('.search-results')).toBeInTheDocument();
  });
  it('should not display buttons if searchResults array is not passed', () => {
    const { container } = render(<SearchResults />);
    expect(container.querySelector('button')).not.toBeInTheDocument();
  });
  it('should not display buttons if searchResults array is empty', () => {
    const { container } = render(<SearchResults searchResults={[]} />);
    expect(container.querySelector('button')).not.toBeInTheDocument();
  });
  it('should display text "Type name above to see results." if searchResults&empty prop is not passed/is empty', () => {
    render(<SearchResults />);
    expect(
      screen.getByText('Type name above to see results.')
    ).toBeInTheDocument();
  });
  it('should display error equal to empty prop if searchResults array is not passed/is empty', () => {
    render(<SearchResults empty="test-error-message" />);
    expect(screen.getByText('test-error-message')).toBeInTheDocument();
  });
  it('should display buttons if searchResultsArray is passed', () => {
    const { container } = render(
      <SearchResults searchResults={searchResultsArray} />
    );
    expect(container.querySelectorAll('button').length > 0).toBeTruthy();
  });
  it('buttons count should be equal to searchResultsArray length', () => {
    const { container } = render(
      <SearchResults searchResults={searchResultsArray} />
    );
    expect(
      container.querySelectorAll('button').length === searchResultsArray.length
    ).toBeTruthy();
  });

  it('should call passed setResponse function on each button click', async () => {
    const { container } = render(
      <SearchResults
        searchResults={searchResultsArray}
        setResponse={onClickMock}
      />
    );
    fireEvent.click(container.querySelector('button'));
    await waitFor(() => expect(onClickMock).toHaveBeenCalledTimes(1));
  });
});
