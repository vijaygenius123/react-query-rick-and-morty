import {useQuery} from "react-query";
import {getCharacters} from "../utils";

const Characters = () => {
    const {data, status} = useQuery('characters', getCharacters)

    if (status === 'loading')
        return <h1> Loading </h1>

    if (status === 'error')
        return <h1> Issue loading data </h1>

    return (<>
        {data.results.map(character => <li>{character.name}</li>)}
    </>)

}
export default Characters
