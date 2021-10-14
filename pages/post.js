import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../service/profile";

const post = () => {
  const route = useRouter();
  const currentPost = posts.filter(
    (post) => post.title === route.query.title
  )[0];
  return (
    <Layout footer={false}>
      <div className="text-center">
        <h2 className="text-center">{currentPost.title}</h2>
        <img
          src={currentPost.image}
          alt={currentPost.title}
          className="img-fluid"
          style={{ width: "50%" }}
        />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default post;
