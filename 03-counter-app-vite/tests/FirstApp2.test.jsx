const { render, screen } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Tests in <FirstApp />', () => {

    const title = 'Hi, I´m Goku';
    const subTitle = 'I´m subtitle';

    test('Must match the snapshot ', () => {
    
        const { container } =  render( <FirstApp title={ title }/>);
        expect( container ).toMatchSnapshot();

    })
    
    test('It should display the message "Hello, I am Goku"', () => {
    
        render( <FirstApp title={ title }/>);
        expect( screen.getByText( title ) ).toBeTruthy();

    })
    
    test('Must display the title in a h1', () => {
    
        render( <FirstApp title={ title }/>);
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );

    })

    test('Must match the subtitle send via props', () => {
    
        render(
            <FirstApp 
                title={ title }
                subTitle= { subTitle }
            />
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });
    
    

});
