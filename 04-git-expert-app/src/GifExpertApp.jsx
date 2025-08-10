import { useState } from "react"
import { AddCategories } from './components/AddCategories';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'One Punch', 'Dragon Ball' ] );

    const onAddCategory = ( newCategory ) => {
        
        // setCategories( [ ...categories, 'Valorant' ] )
        setCategories( cat => [ ...cat, newCategory ]);
    }

    return (

        <>
            <h1>GifExpertApp</h1>

            <AddCategories 
                // setCategories={ setCategories }
                onNewCategory = { value => onAddCategory( value ) }
            />

            {/* <button onClick={ onAddCategory }> Agregar </button> */}

            <ol>
                { categories.map( category => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>

        </>

    )

}