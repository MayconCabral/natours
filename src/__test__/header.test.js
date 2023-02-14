import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';


describe('HEADER', () => {    
    test('A heading "outdoors is where life happens" must be visible.',() => {
        render(<App/>)
        const heading = screen.getByRole('heading', {  name: 'Outdoors is where life happens'})

        expect(heading).toBeVisible()
    })

    test('A button "discouver our tours" must be visible.', () => { 
        render(<App/>)      
        const header = screen.getByRole('link', {  name: 'Discouver our tours'})

        expect(header).toBeVisible()
    })

    test('After clicking on hamburguer menu, five option must be visible',  () => {
        const {container} = render(<App/>)
        const menu = container.querySelector('#root > div:nth-child(1) > label')
        userEvent.click(menu)
        const list = screen.getByTestId('nav')
        const { getAllByRole } = within(list)
        const item = getAllByRole('listitem')

        expect(list).toBeVisible()
        expect(item).toHaveLength(5)
    })
})
