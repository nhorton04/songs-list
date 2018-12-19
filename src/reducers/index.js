import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "hello", duration: "4:20"},
    { title: "whats up", duration: "6:09"}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
