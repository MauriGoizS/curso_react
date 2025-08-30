
import useCounter from '../hooks/useCounter';

const MyCounterApp = () => {

    const { counter, handleReset, handleSubtract, handleAdd } = useCounter(5);

    return (
        <div style={ { display: 'flex', flexDirection: 'column', alignItems:'center' }} 
        >
            <h1> Counter: {counter} </h1>   
            <div style={ { display:'flex', gap:'5px' } }>
                <button onClick={ handleAdd }>+1</button>
                <button onClick={ handleReset }>Reset</button>
                <button onClick={ handleSubtract }>-1</button>
            </div>
        </div>
    )
}

export default MyCounterApp
