import type { FC } from "react";

interface Props {
    searches: string[];

    onLabelClicked: (term: string) => void;
}


const PreviousSearches : FC<Props> = ( { searches, onLabelClicked } ) => {
    return (
        <div className="previous-searches" >
            <h2>Búsqueds previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((term) => (
                        <li key={term} 
                            onClick={ () => onLabelClicked(term)}> 
                            {term}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PreviousSearches
