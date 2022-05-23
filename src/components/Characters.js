import {useQuery} from "react-query";
import {getCharacters} from "../utils";
import {useState} from "react";
import Character from "./Character";

const Characters = () => {
    const [page, setPage] = useState(1)
    const {data, status} = useQuery(['characters', page], getCharacters)

    if (status === 'loading')
        return <h1> Loading </h1>

    if (status === 'error')
        return <h1> Issue loading data </h1>

    return (<>
        <div className={"grid grid-cols-5 gap-3"}>
            {data.results.map(character => <Character key={character.id} {...character}/>)}
        </div>
        <div className={"flex mt-2 justify-around"}>
            <button
                className={"inline-block outline-0 py-2 px-4  bg-blue-500 text-white mr-1 rounded-md disabled:opacity-50"}
                onClick={() => setPage(prev => prev - 1)}
                disabled={!data.info.prev}
            >
                Previous
            </button>
            <button
                className={"inline-block outline-0 py-2 px-4  bg-blue-500 text-white mr-1 rounded-md disabled:opacity-50"}
                onClick={() => setPage(prev => prev + 1)}
                disabled={!data.info.next}
            >
                Next
            </button>
        </div>
    </>)

}
export default Characters
