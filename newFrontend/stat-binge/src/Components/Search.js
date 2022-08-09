export function SearchCardContents(props){


    if(props.advancedSearch){
        return null;
    }

    return (
        <div>
            <input type="text"></input>
        </div>
    );
}