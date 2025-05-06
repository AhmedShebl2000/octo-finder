import { useSelector } from "react-redux";
import UserCard from "./UserCard";

function UsersList({ setShowUsers }) {
  //Store configurations
  const { reposData, error, status } = useSelector((state) => state.repo);

  return (
    <div className="flex flex-wrap gap-2">
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" &&
        reposData &&
        reposData.length > 0 &&
        reposData.map((eachRepo) => (
          <div key={eachRepo.login} className=" w-3/10  p-4 m-auto">
            <UserCard eachRepo={eachRepo} setShowUsers={setShowUsers} />
          </div>
        ))}
    </div>
  );
}

export default UsersList;
