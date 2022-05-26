import BlogList from "./BlogList";
import useFetch from "./useFetch";
import {url} from './config'

const Home = () => {
  const { error, isPending, data: blogs } = useFetch(
    url
  );

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
