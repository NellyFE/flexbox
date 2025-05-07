export const Home = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap mx-auto p-6 w-full h-[100vh] gap-8 justify-between">
      {/* main div 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  grid-row-2 gap-2 grow-2">

        <div className="w-full h-72  ">
          <img
            src="./src/assets/parfait.jpg"
            alt="img1"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-72  ">
          <img
            src="./src/assets/parfait.jpg"
            alt="img2"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-72  ">
          <img
            src="./src/assets/parfait.jpg"
            alt="img3"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full h-72  ">
          <img
            src="./src/assets/parfait.jpg"
            alt="img4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

{/* main div 2 */}
<div className="flex grow  items-stretch h-full">
  <div className="w-full h-full  ">
    <img
      src="./src/assets/parfait.jpg"
      alt="img5"
      className="w-full h-full object-cover"
    />
  </div>
</div>

    </div>
  );
};
