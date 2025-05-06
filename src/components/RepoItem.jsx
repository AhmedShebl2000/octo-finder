function RepoItem({ repo }) {
  const {
    name,
    language,
    stargazers_count,
    forks_count,
    open_issues_count,
    created_at,
    updated_at,
    description,
    license,
    html_url,
  } = repo;

  const formatDate = (date) => new Date(date).toLocaleDateString();

  return (
    <div className="border border-fuchsia-500/30 bg-gradient-to-r from-gray-900 to-purple-950 p-5 rounded-lg shadow-lg lg:w-2/3 lg:m-auto my-4 hover:shadow-fuchsia-500/20 hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-semibold mb-2 text-fuchsia-300">
        Repository name:
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline text-fuchsia-400 ml-2"
        >
          {name}
        </a>
      </h3>
      <p className="text-lg text-gray-300 mb-4">
        Description: {description || "No description available"}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-gray-300">
        <div className="bg-gray-800/50 p-2 rounded-md">
          Language: {language || "N/A"}
        </div>
        <div className="bg-gray-800/50 p-2 rounded-md">
          ⭐ Stars: {stargazers_count}
        </div>
        <div className="bg-gray-800/50 p-2 rounded-md">
          🍴 Forks: {forks_count}
        </div>
        <div className="bg-gray-800/50 p-2 rounded-md">
          ⚠️ Issues: {open_issues_count}
        </div>
        <div className="bg-gray-800/50 p-2 rounded-md">
          📅 Created: {formatDate(created_at)}
        </div>
        <div className="bg-gray-800/50 p-2 rounded-md">
          🔄 Updated: {formatDate(updated_at)}
        </div>
        <div className="bg-gray-800/50 p-2 rounded-md col-span-2">
          📜 License: {license?.name || "No License"}
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
