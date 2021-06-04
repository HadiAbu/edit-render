import "./Renderer.css";

const RenderedComponent = ({comp}) => {
    if(comp.type === 'h'){
        return <div key={comp.id}>
            <h1>{comp.display}</h1>
        </div>;
    }
    if(comp.type === 'p'){
        return <div key={comp.id}>
            <p>{comp.display}</p>
        </div>;
    }
    return null;
}

const Renderer = ({componentsToRender}) =>{

    let list = [...componentsToRender];

    return (
        <div className='renderer'>
            Renderer
            <div>
                {list.map(comp => {
                    return <RenderedComponent key={comp.id} comp={comp}/>;
                })}
            </div>
        </div>
    );
}

export default Renderer;