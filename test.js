function useRef(initial) {
  return { current: initial };
}

const compteur = {
  btn: null,
  inp: null,
  mod: null,
  id: null
};

function useId(prefix) {
const finalprefix = prefix ? prefix : "id"

  const value = useRef(null);
  
if (value.current === null) {
    // 1. D'abord gérer le compteur
    if (compteur[finalprefix] === null) {
        compteur[finalprefix] = 0;  // Première fois pour ce prefix
    }
    compteur[finalprefix] = compteur[finalprefix] + 1;  // Incrémenter
    
    // 2. Puis créer l'ID pour cette instance
    value.current = finalprefix + "-" + compteur[finalprefix];
}
  console.log('Compteur:', compteur[finalprefix]);
  
  return value.current;
}

// TESTS
console.log('=== TESTS ===');
console.log('Test 1:', useId('btn'));
console.log('Test 2:', useId('btn'));
console.log('Test 3:', useId('inp'));  // Nouveau prefix
console.log('Test 4:', useId('inp'));  // Même prefix
console.log('Test 5:', useId('btn'));  // Retour au btn
console.log('Test 6:', useId());      // Sans paramètre
console.log('Test 7:', useId(null));  // Avec null