import axios from "axios";
import * as types from "../types";

const API_KEY = "c61cac86e498606f7dbdfe7063b127c6";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNetFlixOriginals = () => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213 `
    );
    dispath({
      type: types.GET_NETFLIX_ORIGINALS,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("get API error", error);
  }
};

export const getTrendingMovies = () => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us `
    );
    dispath({
      type: types.GET_TRENDING_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("get Trending API error", error);
  }
};

export const getTopRatedMovies = () => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated/?api_key=${API_KEY}&language=us `
    );
    dispath({
      type: types.GET_TOPRATED_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("get TopRated API error", error);
  }
};

export const getActionsMovies = () => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28 `
    );
    dispath({
      type: types.GET_ACTIONS_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("get Actions API error", error);
  }
};

export const getComedyMovies = () => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispath({
      type: types.GET_COMEDY_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("get Comedy API error", error);
  }
};

export const getHorrorMovies = () => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispath({
      type: types.GET_HORROR_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("get Horror API error", error);
  }
};

export const getRomanceMovies = () => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispath({
      type: types.GET_ROMANCE_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("get Romance API error", error);
  }
};

export const getDocumenetariesMovies = () => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispath({
      type: types.GET_DOCUMENTARIES_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("get Documentaries API error", error);
  }
};

export const setMoviesDetail = (movie) => (dispath) => {
  dispath({ type: types.SET_MOVIES_DETAIL, payload: movie });
};

export const getSearchMovies = (keywords) => async (dispath) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
    );
    dispath({ type: types.GET_SEARCH_MOVIES, payload: result.data.results });
  } catch (error) {
    console.log("get SearchMovies", error);
  }
};
