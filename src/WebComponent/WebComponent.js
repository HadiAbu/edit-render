import {useState} from 'react';

const WebComponent = ({type='p'}) =>{
    const[inputText, setInput] = useState('');
    if(type === 'p'){
        return (
            <div className=''>
                
            </div>
        );
    }
    return null;
}

export default WebComponent;