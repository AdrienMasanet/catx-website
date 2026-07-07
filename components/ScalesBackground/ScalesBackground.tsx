"use client";

const ScalesBackground = () => {
  return (
    <div className="-z-10 absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[10000vh] h-[10000vh] [translate:-50%_-50%] rotate-20 bg-[url('/images/scale_tile.png')] bg-repeat bg-size-[7em] opacity-[0.025]"></div>
    </div>
  );
};

export default ScalesBackground;
