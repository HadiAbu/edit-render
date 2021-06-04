import "./Editor.css";

const EditedComponent = ({comp}) => {
    if(comp.type === 'h'){
        return <div key={comp.id}>
            <input type='text' onChange={ (e) => comp.onchange(e.target.value)}/>
        </div>;
    }
    if(comp.type === 'p'){
        return <div key={comp.id}>
            <textarea type='text' onChange={ (e) => comp.onchange(e.target.value)}/>
        </div>;
    }
    return null;
}

const Editor = ({componentsToEdit}) =>{
    const list = [...componentsToEdit];
    return (
        <div className='editor'>
            Editor
            <div className="input-field">
                {list.map(comp => {
                    return <EditedComponent key={comp.id} comp={comp}/>;
                })}
            </div>
        </div>
    );
}

export default Editor;