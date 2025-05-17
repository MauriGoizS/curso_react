const { render } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Tests in <FirstApp />', () => {
    
    // test('Must match the snapshot', () => {
        
    //     const title = 'Hi, I am Goku'
    //     const { container } = render( <FirstApp title={ title }/>);

    //     expect( container ).toMatchSnapshot();
    // });
    
    test('Must display the title in a h1', () => {
        
        const title = 'Hi, I am Goku'
        const { container, getByText, getByTestId } = render( <FirstApp title={ title }/>);
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title );
        expect( getByTestId('test-title').innerHTML ).toContain( title );

    })
    
    test('Must match the subtitle send via props', () => {
    
        const title = 'Hi, I´m Goku';
        const subTitle = 'I´m subtitle';
        const { getAllByText } = render(
            <FirstApp 
            title={ title }
            subTitle= { subTitle }
            />
        );
        
        expect( getAllByText(subTitle).length ).toBe(2);

    })
    

});
