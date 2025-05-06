export async function getUserDetails(username) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  return data;
}
