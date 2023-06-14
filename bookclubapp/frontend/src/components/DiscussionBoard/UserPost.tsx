import { Post } from "../../models/Post";



export function UserPost(props: {post: Post}) {
    return(
        <div className="post">
            <h3>{props.post.userName}</h3>
            <p>{props.post.thought}</p>
        </div>
    )
}