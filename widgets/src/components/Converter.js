import React, {useState, useEffect} from 'react';
import axios from 'axios';

const key = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
const Converter = ({language, text}) => {

    const [result, setResult] = useState([]);
    const [debounceText, setDebounceText] = useState(text);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
           setDebounceText(text); 
        }, 500);
        return () => {
        clearTimeout(timeOutId);
        }
    }, [text])

    useEffect(()=>{
        const convertText = async() =>  {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: key
            }
        })
        setResult(data.data.translations[0].translatedText);
    }
    if(debounceText) convertText();
        
    },[language, debounceText])
    return(
        <div>
        <div className='ui header' style={{color:'red'}}>Translated Text: </div>
            <br/>
            {result ? result : ''}
        </div>
    )
}

export default Converter;
