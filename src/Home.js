import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch(
    "https://blogger-rolify-api.herokuapp.com/blogs"
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
      {/* blogs are beigng passed to bloglist using props */}
    </div>
  );
};

export default Home;
