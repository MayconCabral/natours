import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('SECTION TOURS', () => {
    test('It must have 3 cards.', () => {
        const {container} = render(<App />)
        const cards = container.querySelector('#section-tours > div:nth-child(2)')
        const { getAllByTestId } = within(cards)
        const cardList = getAllByTestId('cards')

        expect(cardList).toHaveLength(3)
    })

    test('Hover on the cards, cards backface must be shown.', () => {
        render(<App />)
        const cards = screen.getAllByTestId('cards')
        const cardsBackface = screen.getByTestId('backface')
        
        userEvent.hover(cards)
        expect(cardsBackface).toBeVisible()
    })

    test('After clicking cards backface "book now", must open an popup.', () => {
        const {container} = render(<App />)
        const popup = container.querySelector('#popup')
        const cards = screen.getAllByTestId('cards')
        const cardBackface = screen.getAllByRole('link', {  name: /book now!/i})
        
        userEvent.hover(cards)
        userEvent.click(cardBackface)
        expect(popup).toBeVisible()
    })
})