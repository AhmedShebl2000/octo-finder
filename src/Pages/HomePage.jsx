import { useState } from "react";
import ReposBox from "../components/ReposBox";
import UsersList from "../components/UsersList";
import { fetchAllRepos } from "../features/repos/repoSlice";
import SearchBar from "../UI/SearchBar";
import Loader from "../UI/Loader";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  //Store configurations
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user.status);
  const repoStatus = useSelector((state) => state.repo.status);

  const [showUsers, setShowUsers] = useState(true);

  //Get search query from child.
  function handleSearch(searchQuery) {
    console.log(searchQuery);
    if (searchQuery.length > 2) {
      dispatch(fetchAllRepos(searchQuery));
    }
  }

  return (
    <div className="w-full flex flex-col gap-10 p-3">
      {/* Show search bar when we're not viewing user repos */}
      {showUsers && (
        <div className="w-1/3 m-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      )}

      {/* Show loading state with centered spinner */}
      {(repoStatus === "loading" || userStatus === "loading") && <Loader />}

      {/* Show users list when in search mode */}
      {showUsers && repoStatus === "succeeded" && (
        <UsersList setShowUsers={setShowUsers} />
      )}

      {/* Show repos when user is selected */}
      {!showUsers && userStatus === "succeeded" && (
        <ReposBox showUsers={showUsers} setShowUsers={setShowUsers} />
      )}
    </div>
  );
}

export default HomePage;
