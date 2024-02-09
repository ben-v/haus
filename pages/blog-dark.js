import { memo, useEffect } from "react";
import BlogContent from "../src/components/BlogContent";
const BlogDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);
  return <BlogContent dark />;
};
export default memo(BlogDark);
