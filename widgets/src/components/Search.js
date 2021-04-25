import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Search = () => {

    const [searchTerm, setSearchTerm] = useState('bitcoin');
    const [result, setResult] = useState({search: []});
    const [debounceTerm, setDebounceTerm] = useState(searchTerm);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebounceTerm(searchTerm);
        }, 1000);
        return () => {
            clearTimeout(timeOutId);
        }
    }, [searchTerm])

    useEffect(() => {
        const searchWiki = async () => {
            const {data: {query}} = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debounceTerm
                }
            })
            setResult(query);
        };
        if(debounceTerm)searchWiki();
    },[debounceTerm]);

    const renderedSearchResults = result.search.map((data,index) => {
        return (
            <div key={index} className='item'>
                <div className='right floated content'>
                    <a 
                        className='ui button'
                        href={`https://en.wikipedia.org?curid=${data.pageid}`}>Go</a>
                </div>
                <div className='item'>
                    <div className='content'>
                        <div className='header'>
                            {data.title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: data.snippet}}></span>
                    </div>
                </div>
            </div>

        )
    })
    return (
        <div>
            <div className = 'ui form'>
                <div className = 'field'>
                    <input className='input' 
                        placeholder='bitcoin'
                        onChange = {(e) => setSearchTerm(e.target.value)}/>
                </div>
                <div className='ui celled list'>
                    {renderedSearchResults}                
                </div>
            </div>
        </div>
    );
}

export default Search;