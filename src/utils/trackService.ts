import api from "./api";
import { SearchBar } from "../interfaces";
import { DeezerTrack } from "@/interfaces";

const LOCAL_STORAGE_KEY = "favoriteTracks";

const searchTracks = async (
  searchBar: SearchBar
): Promise<Array<DeezerTrack>> => {
  const { content, order } = searchBar;
  const res = await api.get(`/search?q=${content}&order=${order}_DESC`);
  return res.data.data;
};

const loadFavorites = (): Array<DeezerTrack> => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) return [];
  const favorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!);
  return favorites;
};

const setFavorites = (tracks: Array<DeezerTrack>): void => {
  const json = JSON.stringify(tracks);
  localStorage.setItem(LOCAL_STORAGE_KEY, json);
};

const addFavorite = (track: DeezerTrack): void => {
  const favorites = loadFavorites();
  favorites.push(track);
  setFavorites(favorites);
};

const isFavorite = (track: DeezerTrack): boolean => {
  const favorites = loadFavorites();
  const filtered = favorites.filter(
    favoriteTrack => favoriteTrack.id === track.id
  );
  return filtered.length > 0;
};

const removeFavorite = (track: DeezerTrack): void => {
  const favorites = loadFavorites();
  const updatedFavorites = favorites.filter(
    favoriteTrack => favoriteTrack.id !== track.id
  );
  setFavorites(updatedFavorites);
};

const getRandomFavoriteTrack = (): DeezerTrack => {
  const favorites = loadFavorites();
  const randomTrack = favorites[Math.floor(Math.random() * favorites.length)];
  return randomTrack;
};

export {
  searchTracks,
  loadFavorites,
  addFavorite,
  setFavorites,
  removeFavorite,
  isFavorite,
  getRandomFavoriteTrack
};
