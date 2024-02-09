import Link from "next/link";
import { memo, useContext, useEffect } from "react";
import { Context } from "../context/context";
import Layout from "../layout/Layout";
const BlogContent = ({ dark }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog");
  }, []);
  const { closeSection } = useContext(Context);

  return (
    <Layout>
      <div className="container page-title center-align">
        <h2 className="center-align">
          <span>My </span> <span>blog</span>
        </h2>
      </div>
      {/* Divider Starts */}
      <div className="divider center-align">
        <span className="outer-line" />
        <span className="fa-solid fa-vcard" aria-hidden="true" />
        <span className="outer-line" />
      </div>
      {/* Divider Ends */}
      <div className="container">
        <div className="row">
          <div className="content col s12 m8 l8 xl8">
            {/* Article Starts */}
            <article>
              <Link href={`/blog-post-dark`}>
                <a>
                  <h4>How to be a successful freelancer</h4>
                </a>
              </Link>
              {/* Figure Starts */}
              <figure className="blog-figure">
                <Link href={`/blog-post-dark`}>
                  <a>
                    {" "}
                    <picture>
                      <img
                        className="responsive-img"
                        src="images/blog/blog-post-1.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                </Link>
              </figure>
              {/* Figure Ends */}
              {/* Excerpt Starts */}
              <div className="blog-excerpt">
                <p className="second-font">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  blandit massa vel mauris Lorem ipsum dolor sit amet Lorem
                  ipsum dol sit amet Lorem ipsum dol or sit amet, consectetur
                  adipiscing elit. Sed blandit massa vel mauris Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed blandit massa
                  vel mauris ...
                </p>
                <Link href={`/blog-post-dark`}>
                  <a className="col s12 m4 l4 xl4 waves-effect waves-light btn readmore font-weight-700">
                    Read more
                  </a>
                </Link>
                {/* Meta Starts */}
                <div className="meta second-font">
                  <span>
                    <i className="fa-solid fa-user" /> <a href="#">admin</a>
                  </span>
                  <span className="date">
                    <i className="fa-solid fa-calendar" /> 9 January 2022
                  </span>
                  <span>
                    <i className="fa-solid fa-commenting" />{" "}
                    <Link href={`/blog-post-dark`}>
                      18
                    </Link>
                  </span>
                  <span>
                    <i className="fa-solid fa-tags" /> js, php, html
                  </span>
                  <span className="permalink">
                    <i className="fa-solid fa-link" />{" "}
                    <Link href={`/blog-post-dark`}>
                      permalink
                    </Link>
                  </span>
                </div>
                {/* Meta Ends */}
              </div>
              {/* Excerpt Ends */}
            </article>
            {/* Article Ends */}
            {/* Article Starts */}
            <article>
              <Link href={`/blog-post-dark`}>
                <a>
                  <h4>Collaborating with envato</h4>
                </a>
              </Link>
              {/* Figure Starts */}
              <figure className="blog-figure">
                <Link href={`/blog-post-dark`}>
                  <a>
                    {" "}
                    <picture>
                      <img
                        className="responsive-img"
                        src="images/blog/blog-post-2.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                </Link>
              </figure>
              {/* Figure Ends */}
              {/* Excerpt Starts */}
              <div className="blog-excerpt">
                <p className="second-font">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  blandit massa vel mauris Lorem ipsum dolor sit amet Lorem
                  ipsum dol sit amet Lorem ipsum dol or sit amet, consectetur
                  adipiscing elit. Sed blandit massa vel mauris Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed blandit massa
                  vel mauris ...
                </p>
                <Link href={`/blog-post-dark`}>
                  <a className="col s12 m4 l4 xl4 waves-effect waves-light btn readmore font-weight-700">
                    Read more
                  </a>
                </Link>
                {/* Meta Starts */}
                <div className="meta second-font">
                  <span>
                    <i className="fa-solid fa-user" /> <a href="#">admin</a>
                  </span>
                  <span className="date">
                    <i className="fa-solid fa-calendar" /> 9 January 2022
                  </span>
                  <span>
                    <i className="fa-solid fa-commenting" />{" "}
                    <Link href={`/blog-post-dark`}>
                      18
                    </Link>
                  </span>
                  <span>
                    <i className="fa-solid fa-tags" /> js, php, html
                  </span>
                  <span className="permalink">
                    <i className="fa-solid fa-link" />{" "}
                    <Link href={`/blog-post-dark`}>
                      permalink
                    </Link>
                  </span>
                </div>
                {/* Meta Ends */}
              </div>
              {/* Excerpt Ends */}
            </article>
            {/* Article Ends */}
            {/* Article Starts */}
            <article>
              <Link href={`/blog-post-dark`}>
                <a>
                  <h4>Why Themeforest is the best</h4>
                </a>
              </Link>
              {/* Figure Starts */}
              <figure className="blog-figure">
                <Link href={`/blog-post-dark`}>
                  <a>
                    <picture>
                      <img
                        className="responsive-img"
                        src="images/blog/blog-post-3.jpg"
                        alt=""
                      />
                    </picture>
                  </a>
                </Link>
              </figure>
              {/* Figure Ends */}
              {/* Excerpt Starts */}
              <div className="blog-excerpt">
                <p className="second-font">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  blandit massa vel mauris Lorem ipsum dolor sit amet Lorem
                  ipsum dol sit amet Lorem ipsum dol or sit amet, consectetur
                  adipiscing elit. Sed blandit massa vel mauris Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed blandit massa
                  vel mauris ...
                </p>
                <Link href={`/blog-post-dark`}>
                  <a className="col s12 m4 l4 xl4 waves-effect waves-light btn readmore font-weight-500">
                    Read more
                  </a>
                </Link>
                {/* Meta Starts */}
                <div className="meta second-font">
                  <span>
                    <i className="fa-solid fa-user" /> <a href="#">admin</a>
                  </span>
                  <span className="date">
                    <i className="fa-solid fa-calendar" /> 9 January 2022
                  </span>
                  <span>
                    <i className="fa-solid fa-commenting" />{" "}
                    <Link href={`/blog-post-dark`}>
                      18
                    </Link>
                  </span>
                  <span>
                    <i className="fa-solid fa-tags" /> js, php, html
                  </span>
                  <span className="permalink">
                    <i className="fa-solid fa-link" />{" "}
                    <Link href={`/blog-post-dark`}>
                      permalink
                    </Link>
                  </span>
                </div>
                {/* Meta Ends */}
              </div>
              {/* Excerpt Ends */}
            </article>
            {/* Article Ends */}
            <ul className="pagination center-align">
              <li className="disabled">
                <a href="#!">
                  <i className="fa-solid fa-angle-left" />
                </a>
              </li>
              <li className="active">
                <a href="#!">1</a>
              </li>
              <li className="waves-effect">
                <a href="#!">2</a>
              </li>
              <li className="waves-effect">
                <a href="#!">3</a>
              </li>
              <li className="waves-effect">
                <a href="#!">4</a>
              </li>
              <li className="waves-effect">
                <a href="#!">5</a>
              </li>
              <li className="waves-effect">
                <a href="#!">
                  <i className="fa-solid fa-angle-right" />
                </a>
              </li>
            </ul>
          </div>
          {/* Sidebar Starts */}
          <div className="sidebar col s12 m4 l4 xl4">
            <div className="row">
              <div className="col s12 m12 l12 xl12">
                <Link href="/">
                  <a className="btn back" onClick={() => closeSection()}>
                    <i className="fa-solid fa-home" />
                  </a>
                </Link>
              </div>
            </div>
            {/* Search Widget Starts */}
            <div className="widget widget-search">
              <div>
                <input placeholder="Search in my blog ..." type="search" />
              </div>
            </div>
            {/* Search Widget Ends */}
            {/* Latest Posts Widget Ends */}
            <div className="widget recent-posts">
              <h3 className="widget-title">Recent Posts</h3>
              <ul className="unstyled clearfix">
                {/* Recent Post Widget Starts */}
                <li>
                  <div className="posts-thumb pull-left">
                    <Link href={`/blog-post-dark`}>
                      <picture>
                        <img
                          alt="img"
                          src="images/blog/blog-post-small-1.jpg"
                        />
                      </picture>
                    </Link>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <Link href={`/blog-post-dark`}>
                        Why Themeforest is the best
                      </Link>
                    </h4>
                    <p className="post-meta second-font">
                      <span className="post-date"> January 19, 2022</span>
                    </p>
                  </div>
                  <div className="clearfix" />
                </li>
                {/* Recent Post Widget Ends */}
                {/* Recent Post Widget Starts */}
                <li>
                  <div className="posts-thumb pull-left">
                    <Link href={`/blog-post-dark`}>
                      <picture>
                        <img
                          alt="img"
                          src="images/blog/blog-post-small-2.jpg"
                        />
                      </picture>
                    </Link>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <Link href={`/blog-post-dark`}>
                        Collaborating with envato
                      </Link>
                    </h4>
                    <p className="post-meta second-font">
                      <span className="post-date"> August 03, 2022</span>
                    </p>
                  </div>
                  <div className="clearfix" />
                </li>
                {/* Recent Post Widget Ends */}
                {/* Recent Post Widget Starts */}
                <li>
                  <div className="posts-thumb pull-left">
                    <Link href={`/blog-post-dark`}>
                      <picture>
                        <img
                          alt="img"
                          src="images/blog/blog-post-small-3.jpg"
                        />
                      </picture>
                    </Link>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <Link href={`/blog-post-dark`}>
                        How to be a successful freelancer
                      </Link>
                    </h4>
                    <p className="post-meta second-font">
                      <span className="post-date"> March 27, 2022</span>
                    </p>
                  </div>
                  <div className="clearfix" />
                </li>
                {/* Recent Post Widget Ends */}
              </ul>
            </div>
            {/* Latest Posts Widget Ends */}
            {/* Categories Widget Starts */}
            <div className="widget">
              <h3 className="widget-title">Categories</h3>
              <ul className="arrow nav nav-tabs second-font uppercase">
                <li>
                  <a href="#">Javascript</a>
                </li>
                <li>
                  <a href="#">Wordpress</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">CSS</a>
                </li>
                <li>
                  <a href="#">jQuery</a>
                </li>
              </ul>
            </div>
            {/* Categories Widget Ends */}
            {/* Archives Widget Starts */}
            <div className="widget">
              <h3 className="widget-title">Archives</h3>
              <ul className="arrow nav nav-tabs second-font uppercase">
                <li>
                  <a href="#">January 2023</a>
                </li>
                <li>
                  <a href="#">December 2022</a>
                </li>
                <li>
                  <a href="#">November 2022</a>
                </li>
                <li>
                  <a href="#">October 2022</a>
                </li>
                <li>
                  <a href="#">September 2022</a>
                </li>
              </ul>
            </div>
            {/* Archives Widget Ends */}
            {/* Tags Widget Starts */}
            <div className="widget widget-tags">
              <h3 className="widget-title">Popular Tags </h3>
              <ul className="unstyled clearfix">
                <li>
                  <a href="#">php</a>
                </li>
                <li>
                  <a href="#">javascript</a>
                </li>
                <li>
                  <a href="#">html</a>
                </li>
                <li>
                  <a href="#">xml</a>
                </li>
                <li>
                  <a href="#">envato</a>
                </li>
              </ul>
            </div>
            {/* Tags Widget Ends */}
          </div>
          {/* Sidebar Ends */}
        </div>
      </div>
    </Layout>
  );
};
export default memo(BlogContent);
