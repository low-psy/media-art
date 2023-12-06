import { useState } from "react";
import Item from "./Item";

const Home = () => {
  const [type, setType] = useState({ type: "", count: null });
  const clickHandler = (item) => {
    setType(item);
  };
  let title = "다음 콘텐츠들 중 하나를 선택하세요";
  if (type.count === 1) {
    title = `${type.type}와 관련된 것 중에서 선택해 주세요`;
  } else if (type.count === 2) {
    title = `${type.type}에서 선택하세요`;
  } else if (type.count >= 3) {
    title = `그냥 이걸 보세요`;
  }
  return (
    <div className="mx-auto mt-8 w-1/2 space-y-4 ">
      <div className="bg-red-300 p-8 text-center">
        <h1>{title}</h1>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4  p-4">
        <Item onTitle={clickHandler} />
      </div>
    </div>
  );
};

export default Home;
