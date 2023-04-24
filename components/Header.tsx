import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 border-b-2 border-black">
      <Link href={"/"}>
        <h1 className="text-4xl mt-1">Aselsa</h1>
      </Link>
      <button className="text-white bg-green-600 px-2 rounded-full">Contact us</button>
    </div>
  );
};

export default Header;
