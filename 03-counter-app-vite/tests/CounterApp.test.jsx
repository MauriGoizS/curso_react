const { render, screen, fireEvent } = require("@testing-library/react")
const { CounterApp } = require("../src/CounterApp")

describe('Test in <CounterApp /> ', () => {

    const initialValue = 100;

    test('Must match the snapshot', () => {

        const { container } = render( <CounterApp value={ initialValue }/> )
        expect( container ).toMatchSnapshot();

    });
    
    test('Should show the initial value of 100 <CounterApp value={ 100 }/>', () => {
        
        render(<CounterApp value={ initialValue }/>);        
        expect(screen.getByText("100")).toBeTruthy();

    })
    
    test('Must be increased with the +1 button', () => {
    
        render(<CounterApp value={ initialValue }/>);        
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('101') ).toBeTruthy();

    });

    test('Must be decremented with the -1 button', () => {
    
        render(<CounterApp value={ initialValue }/>);        
        fireEvent.click( screen.getByText('-1') );
        expect( screen.getByText('99') ).toBeTruthy();

    });

    test('The reset button should work.', () => {
        
        render(<CounterApp value={ 355 }/>); 
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('reset') );
        fireEvent.click( screen.getByRole( 'button', { name: 'btn-reset' } ) );

        // expect( screen.getByText( 355 ) ).toBeTruthy();

    })
    
    

});
