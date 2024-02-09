import Link from "next/link";
import { memo, useContext, useEffect } from "react";
import { Context } from "../context/context";
import Layout from "../layout/Layout";
const SingleBlog = ({ dark }) => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog");
  }, []);
  const { closeSection } = useContext(Context);
  return (
    <Layout>
      <div className="container page-title center-align">
        <h2 className="center-align">
          <span>My </span>
          <span>blog</span>
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
                <picture>
                  <img
                    className="responsive-img"
                    src="images/blog/blog-post-1.jpg"
                    alt=""
                  />
                </picture>
              </figure>
              {/* Figure Ends */}
              {/* Excerpt Starts */}
              <div className="blog-excerpt second-font">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
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
                      <a>18</a>
                    </Link>
                  </span>
                  <span>
                    <i className="fa-solid fa-tags" /> js, php, html
                  </span>
                  <span className="permalink">
                    <i className="fa-solid fa-link" />{" "}
                    <Link href={`/blog-post-dark`}>
                      <a>permalink</a>
                    </Link>
                  </span>
                </div>
                {/* Meta Ends */}
              </div>
              {/* Excerpt Ends */}
              {/* Comments Starts */}
              <div className="comments">
                <h3 className="comments-heading uppercase">17 Comments</h3>
                <ul className="comments-list">
                  <li>
                    {/* Comment Starts */}
                    <div className="comment">
                      <picture>
                        <img
                          className="comment-avatar pull-left"
                          alt=""
                          src="images/blog/user1.jpg"
                        />
                      </picture>
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Dalel Boubaker</span>
                          <span className="comment-date pull-right second-font">
                            January 17, 2022
                          </span>
                        </div>
                        <div className="comment-content">
                          <p className="second-font">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehen.
                          </p>
                        </div>
                        <div>
                          <a className="comment-reply" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Comment Ends */}
                    <ul className="comments-reply">
                      <li>
                        {/* Comment Starts */}
                        <div className="comment">
                          <picture>
                            <img
                              className="comment-avatar pull-left"
                              alt=""
                              src="images/blog/user2.jpg"
                            />
                          </picture>
                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">
                                Lina Marzouki
                              </span>
                              <span className="comment-date pull-right second-font">
                                January 17, 2022
                              </span>
                            </div>
                            <div className="comment-content">
                              <p className="second-font">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehen.
                              </p>
                            </div>
                            <div>
                              <a className="comment-reply" href="#">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* Comment Ends */}
                      </li>
                    </ul>
                    {/* Comment Starts */}
                    <div className="comment last">
                      <picture>
                        <img
                          className="comment-avatar pull-left"
                          alt=""
                          src="images/blog/user3.jpg"
                        />
                      </picture>
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Slim Hamdi</span>
                          <span className="comment-date pull-right second-font">
                            January 17, 2022
                          </span>
                        </div>
                        <div className="comment-content">
                          <p className="second-font">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehen.
                          </p>
                        </div>
                        <div>
                          <a className="comment-reply" href="#">
                            Reply
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Comment Ends */}
                  </li>
                </ul>
                <h3 className="comments-heading uppercase add-comment">
                  Add a comment
                </h3>
                {/* Comments Form Starts */}
                <div className="comments-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    {/* Name Field Starts */}
                    <div className="input-field second-font">
                      <i className="fa-solid fa-user prefix" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="validate"
                        required=""
                      />
                      <label className="font-weight-400" htmlFor="name">
                        Your Name
                      </label>
                    </div>
                    {/* Name Field Ends */}
                    {/* Email Field Starts */}
                    <div className="input-field second-font">
                      <i className="fa-solid fa-envelope prefix" />
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="validate"
                        required=""
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                    {/* Email Field Ends */}
                    {/* Comment Textarea Starts */}
                    <div className="input-field second-font">
                      <i className="fa-solid fa-comments prefix" />
                      <textarea
                        id="comment"
                        name="comment"
                        className="materialize-textarea"
                        required=""
                        defaultValue={""}
                      />
                      <label htmlFor="comment">Your comment</label>
                    </div>
                    {/* Comment Textarea Ends */}
                    {/* Submit Form Button Starts */}
                    <div className="col s12 m12 l6 xl6 submit-form">
                      <button
                        className="btn font-weight-700"
                        type="submit"
                        name="send"
                      >
                        Add comment <i className="fa-solid fa-comment" />
                      </button>
                    </div>
                    {/* Submit Form Button Ends */}
                  </form>
                </div>
                {/* Comments Form Ends */}
              </div>
            </article>
            {/* Article Ends */}
          </div>
          {/* Sidebar Starts */}
          <div className="sidebar col s12 m4 l4 xl4">
            <div className="row">
              <div className="col s6 m6 l6 xl6">
                <Link href={`/blog-dark`}>
                  <a className="btn back">
                    <i className="fa-solid fa-arrow-left" />
                  </a>
                </Link>
              </div>
              <div className="col s6 m6 l6 xl6">
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
                      <a>
                        <picture>
                          <img
                            alt="img"
                            src="images/blog/blog-post-small-1.jpg"
                          />
                        </picture>
                      </a>
                    </Link>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <Link href={`/blog-post-dark`}>
                        <a>Why Themeforest is the best</a>
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
                      <a>
                        <picture>
                          <img
                            alt="img"
                            src="images/blog/blog-post-small-2.jpg"
                          />
                        </picture>
                      </a>
                    </Link>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <Link href={`/blog-post-dark`}>
                        <a>Collaborating with envato</a>
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
                      <a>
                        <picture>
                          <img
                            alt="img"
                            src="images/blog/blog-post-small-3.jpg"
                          />
                        </picture>
                      </a>
                    </Link>
                  </div>
                  <div className="post-info">
                    <h4 className="entry-title">
                      <Link href={`/blog-post-dark`}>
                        <a>How to be a successful freelancer</a>
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
export default memo(SingleBlog);
