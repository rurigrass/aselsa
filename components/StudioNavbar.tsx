import Link from "next/link";

const StudioNavbar = (props: any) => {  
  return (
    <div className="">
      <div className="flex items-center justify-between p-3">
        <Link className="text-[#F7AB0A] flex items-center hover:underline" href="/">↩️ Link to main page</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
