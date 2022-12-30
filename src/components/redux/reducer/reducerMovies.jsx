import * as types from "../store/types";

const initialState = {
  NetFlixOriginals: null,
  TrendingMovies: null,
  ActionsMovies: null,
  ComedyMovies: null,
  HorrorMovies: null,
  RomanceMovies: null,
  Documentaries: null,
  TopratedMovies: null,
  MovieDetail: null,
  SearchMovies: null,
};

const reducerMovies = (state = initialState, aciton) => {
  switch (aciton.type) {
    case types.GET_NETFLIX_ORIGINALS:
      return { ...state, NetFlixOriginals: aciton.payload };

    case types.GET_ACTIONS_MOVIES:
      return { ...state, ActionsMovies: aciton.payload };

    case types.GET_TRENDING_MOVIES:
      return { ...state, TrendingMovies: aciton.payload };

    case types.GET_TOPRATED_MOVIES:
      return { ...state, TopratedMovies: aciton.payload };

    case types.GET_COMEDY_MOVIES:
      return { ...state, ComedyMovies: aciton.payload };

    case types.GET_HORROR_MOVIES:
      return { ...state, HorrorMovies: aciton.payload };

    case types.GET_ROMANCE_MOVIES:
      return { ...state, RomanceMovies: aciton.payload };

    case types.GET_DOCUMENTARIES_MOVIES:
      return { ...state, Documentaries: aciton.payload };

    case types.SET_MOVIES_DETAIL:
      return { ...state, MovieDetail: aciton.payload };

    case types.GET_SEARCH_MOVIES:
      return { ...state, SearchMovies: aciton.payload };
    default:
      return state;
  }
};

export default reducerMovies;
