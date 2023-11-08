import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from '@/components/postmetadata';

export const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), "src/posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((file) => {
    const fileContents = fs.readFileSync(`${folder}/${file}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: file.replace(".md", "")
    };
  });

  return posts;
};
