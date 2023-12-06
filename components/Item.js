import { useState } from "react";
import {
  animation,
  dance,
  first,
  marvle,
  netflix,
  rest,
  romance,
  thrill,
} from "../data";

let count = 0;

const Item = ({ onTitle }) => {
  let array = [];
  const [itemArray, setItemArray] = useState(first);
  const onClick = (e) => {
    let dance_array = [];
    let rest_array = [];
    let romance_array = [];
    let netflix_array = [];
    let thrill_array = [];
    let marvle_array = [];
    let animation_array = [];

    let most = 3;
    let sub = 3;
    let low = 3;

    switch (e.target.childNodes[0].innerText) {
      case "dance":
        count++;
        if (count === 2) {
          most = 5;
          sub = 2;
          low = 2;
        }
        if (count === 3) {
          most = 9;
          sub = 0;
          low = 0;
        }
        dance_array = dance.slice(0, most);
        rest_array = rest.slice(0, low);
        romance_array = romance.slice(0, sub);

        romance.sort(() => Math.random() - 0.5);
        rest.sort(() => Math.random() - 0.5);
        dance.sort(() => Math.random() - 0.5);

        array = [...dance_array, ...rest_array, ...romance_array];

        break;
      case "netflix":
        count++;
        netflix_array = netflix.slice(0, most);
        thrill_array = thrill.slice(0, sub);
        marvle_array = marvle.slice(0, low);

        thrill.sort(() => Math.random() - 0.5);
        marvle.sort(() => Math.random() - 0.5);
        netflix.sort(() => Math.random() - 0.5);

        array = [...netflix_array, ...thrill_array, ...marvle_array];

        break;
      case "thrill":
        count++;
        netflix_array = netflix.slice(0, sub);
        thrill_array = thrill.slice(0, most);
        marvle_array = marvle.slice(0, low);

        thrill.sort(() => Math.random() - 0.5);
        marvle.sort(() => Math.random() - 0.5);
        netflix.sort(() => Math.random() - 0.5);

        array = [...netflix_array, ...thrill_array, ...marvle_array];

        break;
      case "romance":
        count++;
        dance_array = dance.slice(0, sub);
        rest_array = rest.slice(0, low);
        romance_array = romance.slice(0, most);

        romance.sort(() => Math.random() - 0.5);
        rest.sort(() => Math.random() - 0.5);
        dance.sort(() => Math.random() - 0.5);

        array = [...dance_array, ...rest_array, ...romance_array];

        break;
      case "rest":
        count++;
        dance_array = dance.slice(0, sub);
        rest_array = rest.slice(0, most);
        romance_array = romance.slice(0, low);

        romance.sort(() => Math.random() - 0.5);
        rest.sort(() => Math.random() - 0.5);
        dance.sort(() => Math.random() - 0.5);

        array = [...dance_array, ...rest_array, ...romance_array];

        break;
      case "animation":
        count++;
        animation_array = dance.slice(0, most);
        marvle_array = rest.slice(0, sub);
        netflix_array = marvle.slice(0, low);

        animation.sort(() => Math.random() - 0.5);
        marvle.sort(() => Math.random() - 0.5);
        netflix.sort(() => Math.random() - 0.5);

        array = [...animation_array, ...marvle_array, ...netflix_array];

        break;
      case "marvle":
        count++;
        animation_array = dance.slice(0, sub);
        marvle_array = rest.slice(0, most);
        netflix_array = marvle.slice(0, low);

        animation.sort(() => Math.random() - 0.5);
        marvle.sort(() => Math.random() - 0.5);
        netflix.sort(() => Math.random() - 0.5);

        array = [...animation_array, ...marvle_array, ...netflix_array];

        break;
    }
    if (count >= 3) {
      array = Array.from({ length: 9 }, () => {
        return {
          type: e.target.childNodes[0].innerText,
          data: e.target.childNodes[1].data,
        };
      });
    }
    setItemArray(array);
    onTitle({ type: e.target.childNodes[0].innerText, count: count });
  };
  return (
    <>
      {itemArray.map((value) => {
        return (
          <div
            className="hover: flex aspect-square cursor-pointer items-center justify-center rounded-lg  bg-slate-50 drop-shadow-xl hover:bg-pink-100 active:bg-red-600"
            onClick={onClick}
          >
            <span className="hidden">{value.type}</span>
            {value.data}
          </div>
        );
      })}
    </>
  );
};
export default Item;
