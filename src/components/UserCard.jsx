function UserCard({ eachRepo }) {
  const { avatar_url: avatar, login: userName, type, Score: score } = eachRepo;

  return (
    <div className="border border-2-white flex flex-col h-[400px] rounded-md p-0.5 hover:scale-105 cursor-pointer">
      <img src={avatar} />
      <div className="p-3">
        <p className="text-2xl">Username: {userName}</p>
        <p className="text-2xl">Account type: {type}</p>
        <p className="text-2xl">Account score: {score}</p>
      </div>
    </div>
  );
}

export default UserCard;
