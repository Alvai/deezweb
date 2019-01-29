import Artist from "./Artist.interface";
import Album from "./Album.interface";
import Type from "./Type.enum";

interface Track {
  id: number;
  readable: boolean;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_lyrics: boolean;
  preview: string;
  artist: Artist;
  album: Album;
  type: Type;
}

export default Track;
