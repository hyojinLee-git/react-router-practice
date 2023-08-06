import { Link } from "react-router-dom";

const Post = () => {
    const posts = [
        { id: 1, name: "post1" },
        { id: 2, name: "post2" },
        { id: 3, name: "post3" },
    ];
    return (
        <div>
            <h1>posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Post;
