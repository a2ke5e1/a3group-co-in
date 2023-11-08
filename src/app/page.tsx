import { getPostMetadata } from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A3 Group',
  description: 'A3 Group is a group of friends trying to make some apps.',
}


export default function Home() {

  const postMetadata = getPostMetadata();
  
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug.toString()} {...post} />
  ));

  return (
    <main>
      <div>
        {postPreviews}
      </div>
    </main>
  )
}
