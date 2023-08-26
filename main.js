const jokeContainer = document.getElementById("joke");
const getJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();

  return data;
};

const generateNewJoke = async () => {
  const joke = await getJoke();
  jokeContainer.textContent = joke.joke;
};
generateNewJoke();
