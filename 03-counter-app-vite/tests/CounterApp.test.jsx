const { render, screen } = require("@testing-library/react")
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
    

});
