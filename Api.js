import axios from "axios";

export const getTopAnime = async (page, option = "airing") => {
  return await axios(
    `https://jikan1.p.rapidapi.com/top/anime/${page}/${option}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "aba384b7a2msh648cf264a7a7170p1ea372jsn5160bbb518bb",
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
        useQueryString: true,
      },
    }
  )
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const RandomWaifu = async () => {
  return await axios("https://animu.p.rapidapi.com/waifus", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aba384b7a2msh648cf264a7a7170p1ea372jsn5160bbb518bb",
      "x-rapidapi-host": "animu.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const RandomFact = async () => {
  return await axios("https://animu.p.rapidapi.com/fact", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aba384b7a2msh648cf264a7a7170p1ea372jsn5160bbb518bb",
      "x-rapidapi-host": "animu.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const SearchAnime = async (anime) => {
  return await axios("https://jikan1.p.rapidapi.com/search/anime?q=" + anime, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aba384b7a2msh648cf264a7a7170p1ea372jsn5160bbb518bb",
      "x-rapidapi-host": "jikan1.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const GetAnimeDetails = async (id, what) => {
  return await axios(`https://jikan1.p.rapidapi.com/anime/${id}/${what}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aba384b7a2msh648cf264a7a7170p1ea372jsn5160bbb518bb",
      "x-rapidapi-host": "jikan1.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

export const CharacterPics = async (id) => {
  return await axios(`https://jikan1.p.rapidapi.com/character/${id}/pictures`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "aba384b7a2msh648cf264a7a7170p1ea372jsn5160bbb518bb",
      "x-rapidapi-host": "jikan1.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};
