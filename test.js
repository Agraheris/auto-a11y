// test.js - Test de la logique Button
console.log('=== TEST BUTTON LOGIC ===');

// 1. Test import de useId
function useRef(initial) {
  return { current: initial };
}

const compteur = { btn: null };

function useId(prefix) {
  const finalPrefix = prefix || "id";
  if (compteur[finalPrefix] === null) {
    compteur[finalPrefix] = 0;
  }
  compteur[finalPrefix] += 1;
  return finalPrefix + "-" + compteur[finalPrefix];
}

// 2. Test simulation Button
function simulateButton(children, variant, disabled) {
  const id = useId('btn');
  const type = "button";
  const className = variant || 'secondary';
  
  console.log('Button generated:');
  console.log('- ID:', id);
  console.log('- Children:', children);
  console.log('- Type:', type);
  console.log('- ClassName:', className);
  console.log('- Disabled:', disabled);
  console.log('---');
  
  return { id, children, type, className, disabled };
}

// 3. Tests
simulateButton('Save', 'primary', false);
simulateButton('Cancel', 'secondary', true);
simulateButton('Delete');