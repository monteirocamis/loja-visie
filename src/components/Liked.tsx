import { useState } from "react";
import blackHeart from "../images/blackHeart.svg";
import whiteHeart from "../images/whiteHeart.svg";

export default function Liked() {
  const [liked, setLiked] = useState(false);
  const like = liked ? blackHeart : whiteHeart;
  const onClickCurtida = () => {
    if (liked) {
      setLiked(!liked);
    } else {
      setLiked(!liked);
    }
  };
  return (
    <>
      <img alt={"Icone"} src={like} onClick={onClickCurtida} />
    </>
  );
}
