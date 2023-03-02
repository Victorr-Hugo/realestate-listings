import { createContext, useContext, useEffect, useState } from "react";
import { getAllHouses, getHouseById, searchHouses } from "../api/Listings";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getAllHouses();
      setPosts(res);
    })();
  }, []);

  const getPost = async (id) => {
    try {
      const res = await getHouseById(id);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const queryPosts = async (query) => {
    try {
      const res = await searchHouses(query);
      setPosts(res);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <postContext.Provider value={{ posts, getPost, queryPosts }}>
      {children}
    </postContext.Provider>
  );
};
