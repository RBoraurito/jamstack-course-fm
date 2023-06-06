const listRepos = async (username) => {
  const repos = await fetch(`https://api.github.com/users/${username}/repos?type=owner&sort=updated`)
    .then(res => res.json())
    .catch(error => console.error(error));

  const markup = repos.map(repo => `
    <li>
     <a href="${repo.html_url}">${repo.name}</a>
      (⭐️ ${repo.stargazers_count})
    </li>
  `).join('');

  const contend = document.getElementById('content');
  contend.innerHTML = `<ul>${markup}</ul>`;
}

listRepos('wesbos');