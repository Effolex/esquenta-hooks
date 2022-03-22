const fetchAstronauts = async () => {
  const response = await fetch('http://api.open-notify.org/astros.json');
  const { people } = await response.json();
  return people;
};

export default fetchAstronauts;
