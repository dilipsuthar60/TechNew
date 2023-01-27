import React from 'react'
import { useGlobalContext } from './Context';
const Story = () => {

    const { isLoading, hits,removepost} = useGlobalContext();
    if(hits.length===0)
    {
        return (
        <div className="main_container">
        <h2>No Post Are Present</h2>
      </div>);
    }
    return (
        <>
            {hits.map((element) => {
                const { title, author, objectID, url, num_comments } = element;
                return (
                    <div key={objectID} className="card">
                        <h2 className="title">{title}</h2>
                        <p>
                            By <span> {author} </span>|<span> {num_comments} </span> comments
                        </p>
                        <div className="card_button">
                            <a href={url} target="_black" className="read_more">Read More</a>
                            <a className="remove" onClick={()=>removepost(objectID)} > Remove</a>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Story