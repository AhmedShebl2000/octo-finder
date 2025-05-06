import { useDispatch } from "react-redux";
import { getUserRepos } from "../features/user/userSlice";

function UserCard({ eachRepo, setShowUsers }) {
  const { avatar_url: avatar, login: userName, type, score } = eachRepo;

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(getUserRepos(userName));
    setShowUsers(false);
  }

  return (
    <div className="border border-fuchsia-400 bg-gradient-to-br from-gray-900 to-purple-900 flex flex-col h-min-[450px] rounded-lg p-2 hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-900/30">
      <div className="flex flex-col justify-between">
        <img src={avatar} className="rounded-lg shadow-md" />
        <div className="p-4 overflow-hidden">
          <p className="text-2xl font-semibold text-fuchsia-300">
            Username: {userName}
          </p>
          <p className="text-xl text-gray-300">Account type: {type}</p>
          <p className="text-xl text-gray-300">Account score: {score}</p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded-md m-2 cursor-pointer transition-colors duration-300"
      >
        See Public Repos
      </button>
    </div>
  );
}

export default UserCard;
