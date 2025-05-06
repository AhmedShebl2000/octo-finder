export async function getRepos(query) {
  const res = await fetch(`https://api.github.com/search/users?q=${query}`);
  const data = await res.json();
  return data.items;
}
