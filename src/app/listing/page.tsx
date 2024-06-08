"use client";

import {useState} from 'react';
import {
  KeyboardArrowDown,
  Circle,
  PlayCircle,
  FavoriteBorder,
  ArrowCircleDownRounded,
  MoreHorizRounded,
  Search,
  Favorite,
} from "@mui/icons-material";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import constants from "@/constants";
import utils from "@/utils";
import TopBar from "@/components/TopBar";

interface MixBoxInterface {
  title: string;
  imageUrl: string;
  color: string;
}

const getAllArtist = (songs: object[]) => {
  const res = songs
    .map((item: any) => item.writer.split(","))
    .reduce((a, b) => [...a, ...b], []);
  const unique = new Set();
  res.map((item) => unique.add(item.trim()));
  const uniqueList = Array.from(unique);
  // console.log(res.length)
  // .reduce((i, j)=> [...i, ...j] ,[])
  return uniqueList.join(", ");
};

const MixBox = ({ title, imageUrl, color }: MixBoxInterface) => {
  return (
    <div className="relative rounded-s-lg overflow-clip">
      <img src={imageUrl} className="w-full" />
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-end">
        <div className="flex flex-row pt-4 pb-4 gap-5 items-center justify-start w-full">
          <div className="h-12 w-2" style={{ backgroundColor: color }}></div>
          <p className="font-bold lg:text-2xl md:text-lg sm:text-xs">{title}</p>
        </div>
        <div className="h-2 w-full" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
};

const MixCard = ({ title, imageUrl, color }: MixBoxInterface) => {
  return (
    <div className="bg-[#00000040] rounded-s-lg rounded-e-lg overflow-clip max-h-24  ">
      <div className="flex flex-row items-start items-center gap-10 justify-start h-full">
        <img src={imageUrl} className="h-full" />
        <p className="font-bold lg:text-2xl md:text-lg sm:text-xs">{title}</p>
      </div>
    </div>
  );
};

export default function Listing() {
  const [isAlbumLiked, SetIsAlbumLiked] = useState(false)

  const { songs, mixes}  = constants;
  const { convertSecondsToMinutesSeconds, convertTimeToHoursMinutes} = utils;


  const rows = songs.map((item) => {
    return {
      cover:
        "https://cdns-images.dzcdn.net/images/cover/4508090cc8470e71e12480b7deeda0b4/350x350.jpg",
      title: item.name,
      album: item.album,
      writer: item.writer,
      liked: item.is_liked,
      duration: convertSecondsToMinutesSeconds(item.duration),
    };
  });

  return (
    <main className="flex min-h-screen flex-col items-center gap-10  bg-gradient-to-b from-[#78041D] to-[#121212]">
      <TopBar/>
      <div className="flex flex-row p-12 w-full gap-10 ">
        <div>
          <MixBox
            title={mixes[0].title}
            imageUrl={mixes[0].imageUrl}
            color={mixes[0].color}
          />
        </div>
        <div className="flex flex-4 flex-col justify-between">
          <div className="flex flex-1 flex-col justify-end">
            <p className="text-2xl uppercase">
              {mixes[0]?.public ? "Public Playlist" : "Private Playlist"}
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="text-9xl font-bold">{mixes[0]?.title}</p>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="text-ellipsis line-clamp-1">{getAllArtist(songs)}</p>
            <div className="flex flex-row gap-2">
              <p>
                Made for <strong>Shahrukh</strong>
              </p>
              <Circle className="text-[8px] self-center" />
              <p>{`${songs.length} Songs, ${convertTimeToHoursMinutes(
                songs.map((item) => item.duration).reduce((i, j) => i + j, 0)
              )}`}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00000080] p-12 w-full">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-5 items-center">
            <IconButton>
              <PlayCircle className="text-8xl text-primary" />
            </IconButton>
            <IconButton onClick={()=>SetIsAlbumLiked(!isAlbumLiked)}>
              {isAlbumLiked ? <Favorite className="text-5xl text-primary" /> : <FavoriteBorder className="text-5xl text-white" />}
              
            </IconButton>
            <IconButton>
              <ArrowCircleDownRounded className="text-5xl text-white" />
            </IconButton>
            <IconButton>
              <MoreHorizRounded className="text-5xl text-white" />
            </IconButton>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Search className="text-2xl" />
            <p>Custom Order</p>
            <IconButton size="large">
              <KeyboardArrowDown className="font-bold" />
            </IconButton>
          </div>
        </div>

        <div>
          <TableContainer component={Paper} className="bg-transparent">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Album</TableCell>
                  <TableCell>Liked</TableCell>
                  <TableCell>Duration</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={`song${index}`}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => console.log(index)}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-row gap-4">
                        <img src={row.cover} className="size-20" />
                        <div className="flex flex-col">
                          <div className="flex flex-1 font-bold text-lg items-end">
                            {row.title}
                          </div>
                          <div className="flex flex-1 text-lg items-start">
                            {row.writer}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{row.album}</TableCell>
                    <TableCell>
                      {row.liked ? (
                        <FavoriteBorder />
                      ) : (
                        <Favorite className="text-primary" />
                      )}
                    </TableCell>
                    <TableCell>{row.duration}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </main>
  );
}
