import { useReducer } from "react";
import { blogReducer, initialBlogPosts } from "../reducers/BlogReducer";

export function BlogList (props){
    const [state, dispatch] = useReducer(blogReducer, initialBlogPosts)
    return(
        <div>
            {state.map((blogPost) => {
                return(
                    <div>
                        <h1>{blogPost.title}</h1>
                        <p>{blogPost.content}</p>
                        <button onClick={() => {dispatch({type:"delete", newData:{id: blogPost.id}})}}>
                            Delete
                        </button>
                    </div>
                )
            })}
        </div>
    )
}