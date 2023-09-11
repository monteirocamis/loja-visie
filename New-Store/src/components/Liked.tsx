import { useState } from "react";
import blackHeart from "../images/blackHeart.svg";
import whiteHeart from "../images/whiteHeart.svg";

export function Liked() {
    const [liked, setLiked] = useState(false);
    const like = liked ? blackHeart : whiteHeart;
    const onClickCurtida = () => {
      if (liked) {
        setLiked(!liked);
        // liked ? setShow(true) : setShow(false);
      } else {
        setLiked(!liked);
      }
    };
    return (
        <>
           <img alt={"Icone"} src={like} onClick={onClickCurtida} />
       
        </>
    )
}