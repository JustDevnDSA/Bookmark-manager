import { Link } from "react-router-dom";
import { AddBookmarkButton } from "./Buttons";
import Logo from "./Logo";

const Navbar = () => {
  return (
   <>
     <div className="flex w-[80%] mt-3 mx-auto  py-2 items-center justify-between">
      <Logo />
      <div>
        <Link to={"/addBookmark"}>
        <AddBookmarkButton />
        </Link>
      </div>
    </div>
    <hr className="w-[90%] mx-auto mt-3 opacity-15"/>
   </>
  );
};

export default Navbar;
