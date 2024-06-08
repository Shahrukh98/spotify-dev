"use client";

import {
  ChevronRightRounded,
  ChevronLeftRounded,
  KeyboardArrowDown,
  Circle,
  PlayCircle,
  PauseCircle,
  FavoriteBorder,
  ArrowCircleDownRounded,
  MoreHorizRounded,
  Search,
  Favorite,
  SkipNext,
  SkipPrevious,
  Shuffle,
  Repeat,
  RepeatOne,
  VolumeDown,
  VolumeUp,
  VolumeOff,
  Menu,
  OpenInFull,
  DevicesOther,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import utils from "@/utils";

interface PlaybarProps {
  playing: boolean;
  artist: string;
  songTitle: string;
  liked: boolean;
  songDuration: number;
}

const Playbar = ({ playing, artist, songTitle, liked, songDuration }: PlaybarProps) => {
  const [repeat, setRepeat] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useState(100);
  const [lastVolume, setLastVolume] = useState(100);
  const [isLiked, setIsLiked] = useState(liked);

  const { convertSecondsToMinutesSeconds} = utils;

  const changeRepeat = () => {
    if (repeat == 0) {
      setRepeat(1);
    } else if (repeat == 1) {
      setRepeat(2);
    } else {
      setRepeat(0);
    }
  };
  const changeShuffle = () => {
    setShuffle(!shuffle);
  };

  const handlePause = () => {
    setPaused(!paused);
  };

  const handleMute = () => {
    if (volume == 0) {
      setVolume(lastVolume);
    } else {
      setVolume(0);
      setLastVolume(volume);
    }
  };

  const renderVolumeIcon = () => {
    if (volume == 0) {
      return <VolumeOff className="text-white" />;
    } else if (volume < 50) {
      return <VolumeDown className="text-white" />;
    } else {
      return <VolumeUp className="text-white" />;
    }
  };

  return (
    <div
      style={{ display: playing ? "flex" : "none", position: "sticky" }}
      className="flex flex-row w-full py-8 px-4 bg-[#181818] h-25"
    >
      <div className="flex flex-row flex-1 gap-5 items-center">
        <img
          src="https://cdns-images.dzcdn.net/images/cover/4508090cc8470e71e12480b7deeda0b4/350x350.jpg"
          height="90px"
          width="90px"
          className="bg-red-100"
        />
        <div className="flex flex-col justify-center align-left">
          <p className="text-md font-bold">{songTitle}</p>
          <p className="text-[16px]">{artist}</p>
        </div>
        <IconButton onClick={()=>{setIsLiked(!isLiked)}}>      
          { isLiked ? <Favorite className="text-primary" /> : <FavoriteBorder className="text-white"/>}
        </IconButton> 
      </div>
      <div className="flex flex-col flex-1 items-between">
        <div className="flex flex-row gap-3 justify-center">
          <IconButton onClick={changeShuffle}>
            <Shuffle
              className={
                shuffle ? "text-4xl text-white" : "text-4xl text-primary"
              }
            />
          </IconButton>

          <IconButton>
            <SkipPrevious className="text-4xl text-white" />
          </IconButton>

          <IconButton onClick={handlePause}>
            {paused ? (
              <PlayCircle className="text-5xl text-white" />
            ) : (
              <PauseCircle className="text-5xl text-white" />
            )}
          </IconButton>

          <IconButton>
            <SkipNext className="text-4xl text-white" />
          </IconButton>

          <IconButton onClick={changeRepeat}>
            {repeat == 0 && <Repeat className="text-4xl text-white" />}
            {repeat == 1 && <Repeat className="text-4xl text-primary" />}
            {repeat == 2 && <RepeatOne className="text-4xl text-primary" />}
          </IconButton>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center ">
          <div>00:00</div>
          <div className="h-1 w-full bg-primary self-center" />
          <div>{convertSecondsToMinutesSeconds(songDuration)}</div>
        </div>
      </div>
      <div className="flex flex-row flex-1 justify-end">
        <IconButton>
          <Menu className="text-white" />
        </IconButton>
        <IconButton>
          <DevicesOther className="text-white" />
        </IconButton>
        <IconButton onClick={handleMute}>{renderVolumeIcon()}</IconButton>

        <input
          type="range"
          min="1"
          max="100"
          value={volume}
          className="slider"
          id="myRange"
          className="cursor-pointer accent-primary"
          onChange={(e) => {
            setVolume(parseInt(e.target.value));
          }}
        />

        <IconButton>
          <OpenInFull className="text-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default Playbar;
