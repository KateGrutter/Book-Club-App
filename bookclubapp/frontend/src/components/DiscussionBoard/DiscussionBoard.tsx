import { useState } from "react"
import { Post } from "../../models/Post"
import { PostForm } from "./PostForm"
import { UserPost } from "./UserPost"


export function DiscussionBoard() {
    const [posts, setPosts] = useState<Post[]>([])
    
    
    return (
        
        <div className="discussion-posts">
            <div className="post-container">
                {
                    posts.map((post, i) => <UserPost post={post} key={i}></UserPost>)
                }
            </div>
            <PostForm onSubmitForm={(newPost: Post) => setPosts([...posts, newPost])}></PostForm>
        </div>
    )
}