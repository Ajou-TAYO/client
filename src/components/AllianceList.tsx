import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useEffect, useMemo, useState } from "react";

export default function (){
  const [list, setList] = useState(true);

  function set(){
    setList(!list);
  }
}