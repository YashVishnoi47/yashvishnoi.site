import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "blogContent/blogs");

export function getAllBlogs() {
  const files = fs.readdirSync(blogsDirectory);

  const blogs = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(blogsDirectory, file);

      const fileContent = fs.readFileSync(filePath, "utf8");

      const { data } = matter(fileContent);

      const slug = file.replace(/\.mdx$/, "");

      return {
        slug,
        ...data,
      };
    });

  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogBySlug(slug) {
  const filePath = path.join(blogsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  return {
    slug,
    ...data,
    content,
  };
}
