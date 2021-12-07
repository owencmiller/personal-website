import { post1 } from "./1"

function wrap(content){
    if (typeof(content) == 'string'){
        return <p>{content}</p>
    }
    return content
}

function build_post(post){
    return(
    <div>
        <h1>{post.title}</h1>
        <h3>{post.date}</h3>
        {post.content.map(x => (
            wrap(x)
        ))}
    </div>)

}

export const visible_posts = [
    build_post(post1)
]