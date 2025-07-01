import { useRef } from "react";

const compteur: { [key: string]: number | null} = {
  btn: null,
  inp: null,
  mod: null,
  id: null
};

function useId(prefix?: string): string {
const finalprefix = prefix ? prefix : "id"

  const value = useRef<string | null>(null);
  
if (value.current === null) {

    if (compteur[finalprefix] === null) {
        compteur[finalprefix] = 0;
    }
    compteur[finalprefix] = compteur[finalprefix] + 1;
    

    value.current = finalprefix + "-" + compteur[finalprefix];
}
  console.log('Compteur:', compteur[finalprefix]);
  
  return value.current;
}