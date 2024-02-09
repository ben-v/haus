import { memo, useEffect } from "react";
import SingleBlog from "../src/components/SingleBlog";
const BlogPostDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);

  return <SingleBlog dark />;
};
export default memo(BlogPostDark);
