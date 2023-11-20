import profile from "../assets/profile.jpg";
const Header = () => {
  return (
    <div className="flex justify-between border-b border-[#00000014] bg-[#ebdfd7] py-4 px-10 items-center">
      <div className="text-2xl">Dashboard</div>
      <div className="flex">
        <input className="rounded-full w-[35vh] px-8" type="text" placeholder="Search for anything" />
        <div className=" h-14 w-14 mx-4 bg-white rounded-full "> {" "} </div>
        <div className="flex bg-white rounded-full p-1 items-center">
          <img className="h-12 w-12 object-cover rounded-full" src={profile} alt="" />
          <div className="flex flex-col mx-2">
            <div>Himanshu Patil</div>
            <div className="text-xs text-gray-400">Full Stack Developer</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
