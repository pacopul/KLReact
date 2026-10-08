export const obtenerTeams = async () => {
  const response = await fetch('https://pacopul.github.io/json/kl/teams.json');
  const data = await response.json();
  console.log(data.teams);
  return data.teams;
};