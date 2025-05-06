import UsersList from "../components/UsersList";
import { fetchAllRepos } from "../features/repos/repoSlice";
import SearchBar from "../UI/SearchBar";
import { useDispatch } from "react-redux";

function HomePage() {
  //Store configurations
  const dispatch = useDispatch();

  //Get search query from child.
  function handleSearch(searchQuery) {
    console.log(searchQuery);
    if (searchQuery.length > 2) {
      dispatch(fetchAllRepos(searchQuery));
    }
  }

  return (
    <div className="w-full flex flex-col gap-10 p-3">
      <div className="w-1/3 m-auto">
        <SearchBar onSearch={handleSearch} />
      </div>
      <UsersList />
    </div>
  );
}

export default HomePage;
