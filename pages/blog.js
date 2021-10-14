import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { posts } from "../service/profile";

const PostCard = ({ post }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="overflow">
          <img src={post.image} className="card-img-top" />
        </div>
        <div className="card-body">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
            <button className="btn btn-light">Read</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <Layout>
      <div className="row">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
};

export default Blog;
