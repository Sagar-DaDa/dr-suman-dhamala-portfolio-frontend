import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/state";
import { boxShadowPrimary, dashboardRootDivStyle, formStyle } from "../../utils/StyleUtils";
import { blogPosts } from "../../assets/dummyData/blogData";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../Loading";


export default function BlogManagement() {
  const dispatch = useDispatch();
  const { titleOnDashboard } = bindActionCreators(actionCreators, dispatch);
  const [visibleBlogPosts, setVisibleBlogPosts] = useState([]);
  const [visiblePostCategory, setVisiblePostCategory] = useState("all");
  const [page, setPage] = useState(1);
  const [hasMorePost, setHasMorePost] = useState(false);
  const initialPostCount = 20;

  useEffect(() => {
    titleOnDashboard("Blog Management");
    setVisibleBlogPosts(blogPosts);
  }, []);

  useEffect(() => {
    checkHasMore();
  }, [visibleBlogPosts]);

  useEffect(() => {
    handleVisiblePost();
  }, [visiblePostCategory, page]);

  const handleVisiblePost = () => {
    if (visiblePostCategory === "all")
      setVisibleBlogPosts(blogPosts.slice(0, initialPostCount * page));
    else
    setVisibleBlogPosts(
        blogPosts
          .filter((post) => post.category === visiblePostCategory)
          .slice(0, initialPostCount * page)
      );
  };

  const handleNext = () => {
    setPage((prevState) => prevState + 1);
  };

  const checkHasMore = () => {
    if (visiblePostCategory === "all")
      blogPosts.length > visibleBlogPosts.length
        ? setHasMorePost(true)
        : setHasMorePost(false);
    else {
      blogPosts.filter((post) => post.category === visiblePostCategory).length >
      visibleBlogPosts.length
        ? setHasMorePost(true)
        : setHasMorePost(false);
    }
  };
  return (
    <div className={dashboardRootDivStyle}>
      <p className="text-xl text-primary font-bold">
        <i className="fa-regular fa-newspaper w-8"></i>Blog Posts
      </p>
      <div className={formStyle}>
        <div>
        <InfiniteScroll
                className={`space-y-5 p-2`}
                dataLength={visibleBlogPosts.length}
                next={handleNext}
                hasMore={hasMorePost}
                loader={<Loading />}
                endMessage={
                  <div className="flex justify-center items-center gap-3">
                    <span className="font-bold">It was the last post.</span>
                  </div>
                }
              >
                {visibleBlogPosts.map(
                  (post, index) =>
                    post.urlToImage && (
                      <div
                        key={index}
                        className={`rounded-xl overflow-hidden ${boxShadowPrimary}`}
                      >
                        <img
                          className="object-cover"
                          src={post.urlToImage}
                          alt={post.title}
                        />
                        <div className="p-3 md:p-5 space-y-2 ">
                          <p className="bg-primary text-center text-custom-light-high text-sm inline-block py-1 px-5 rounded-xl">
                            {post.category.toUpperCase()}
                          </p>
                          <div
                            className="cursor-pointer space-y-2"
                            onClick={() => handlePostView(post.id)}
                          >
                            <p className="text-2xl font-medium text-primary hover:underline">
                              {post.title}
                            </p>
                            <p>{post.description}</p>
                            <p className="hover:underline">Read more...</p>
                          </div>

                          <div className="flex items-center">
                            <div className="flex-1">
                              <p className="text-custom-light-low text-sm font-medium">
                                <i className="fa-solid fa-up-right-from-square"></i>
                                &nbsp; {post.source.name}
                              </p>
                            </div>
                            <div className="flex-1 text-right">
                              <i className="fa-solid fa-share-nodes text-xl"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}
