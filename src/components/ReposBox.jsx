import { useSelector } from "react-redux";
import RepoItem from "./RepoItem";

function ReposBox({ showUsers, setShowUsers }) {
  const { userData, status, error } = useSelector((state) => state.user);

  console.log(userData);

  return (
    <div className="flex flex-col gap-8">
      {!showUsers && (
        <button
          onClick={() => {
            setShowUsers(true);
          }}
          className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold py-2 px-6 rounded-full mx-auto flex items-center gap-2 transition-colors duration-300 shadow-md"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Go Back
        </button>
      )}
      <div className="flex flex-col gap-3">
        {status === "loading" && <p>Loading...</p>}
        {status === "error" && <p>{error}</p>}
        {status === "succeeded" && !userData.length && (
          <p>No Repositories Found!</p>
        )}
        {status === "succeeded" &&
          userData &&
          userData.length > 0 &&
          !showUsers &&
          userData.map((repo) => <RepoItem key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
}

export default ReposBox;
