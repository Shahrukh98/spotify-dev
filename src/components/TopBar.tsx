import {
  ChevronRightRounded,
  ChevronLeftRounded,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const TopBar = ({}) => {
  return (
    <div className="flex flex-row items-center p-12 justify-between w-full">
      <div className="flex flex-row gap-5">
        <IconButton className="bg-black size-16" size="large">
          <ChevronLeftRounded className="text-5xl text-white" />
        </IconButton>
        <IconButton className="bg-black size-16" size="large">
          <ChevronRightRounded className="text-5xl text-white" />
        </IconButton>
      </div>
      <div className="flex flex-row items-center gap-3 bg-black rounded-3xl h-max p-0 overflow-clip">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocLhwD2U8oMAep676PKfJgChKgTsym3FZUUBqOJdfVXwMZt_CyTj=s360-c-no"
          className="size-12 rounded-3xl"
        />
        <p className="font-bold"> Shahrukh</p>
        <IconButton size="large">
          <KeyboardArrowDown className="text-white font-bold" />
        </IconButton>
      </div>
    </div>
  );
};

export default TopBar;
