const { render } = require("@testing-library/react")
const { FirstApp } = require("../src/FirstApp")

describe('Tests in <FirstApp />', () => {
    test('Must match the snapshot', () => {
        
        const title = 'Hi, I am Goku'
        const { container } = render( <FirstApp title={ title }/>);

        expect( container ).toMatchSnapshot();
    });
    
    test('Must display the title in a h1', () => {
        
        const title = 'Hi, I am Goku'
        const { container, getByText } = render( <FirstApp title={ title }/>);
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain( title );

    })
    

});
