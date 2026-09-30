export const obtenerTeams = async () => {
  const response = await fetch('http://www.ies-azarquiel.es/paco/apikl/team');
  const data = await response.json();
  console.log(data.teams);
  return data.teams;
};