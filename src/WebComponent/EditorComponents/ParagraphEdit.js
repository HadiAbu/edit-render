import {useState} from 'react';

const ParagraphEdit = ({mapToRender}) => {
    const[inputText, setParagraph] = useState('');
    
    return (<>
        <input type='text' onChange={ (e) => setParagraph(e.target.value)}/>
    </>);
}

export default ParagraphEdit;