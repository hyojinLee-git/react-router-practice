import { useParams } from "react-router-dom";

const Post = () => {
    const param = useParams();
    return <h1>{`post ${param.id}`}</h1>;
};

export default Post;
