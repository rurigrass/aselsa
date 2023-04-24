import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full w-auto h-auto"
        height="50"
        width="50"
        src="https://www.aselsa.es/wp-content/uploads/2019/11/cropped-Screenshot-2019-11-29-at-14.25.34.png"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
