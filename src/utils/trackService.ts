import api from "./api";
import { SearchBar } from "../interfaces";
import { DeezerTrack } from '@/interfaces';

const searchTracks = async (searchBar: SearchBar): Promise<Array<DeezerTrack>> => {
  const { content, order } = searchBar;
  const res = await api.get(`/search?q=${content}&order=${order}_DESC`);
  return res.data.data;
};

export { searchTracks };
