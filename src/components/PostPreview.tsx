import Link from "next/link";
import { PostMetadata } from "./postmetadata";

const PostPreview = (props: PostMetadata) => {
    return <div className="container mt-2 p-2 bg-slate-100 ">
        <Link href={`/posts/${props.slug}`} className="text-xl font-bold text-blue-600">
            <h2>{props.title}</h2>
        </Link>
        <p className="text-gray-600">{props.subtitle}</p>
        <p className="text-gray-600 text-sm">{props.date}</p>
    </div>
}

export default PostPreview; 