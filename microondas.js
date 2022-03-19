let pipoca = ('pipoca',10);
let macarrao = ('macarrao',8);
let carne = ('carne',15);
let feijao = ('feijao',12);
let brigadeiro = ('brigadeiro',8);

function microondas(comida, timer){
   
    let cardapio = prato1(comida, timer) || prato2(comida, timer) || prato3(comida,timer) || prato4(comida,timer)
    || prato5(comida,timer)||pratoinexistente()
    return cardapio
}

    function pratoinexistente(){
        return 'Prato Inexistente'
    }
    
    function prato1(comida,timer) {
    let original = 10;
        
        if (comida === 'pipoca' && timer == original) {
          return 'Prato pronto, bom apetite!!!';
    
        }else if (comida === 'pipoca' && (timer > original && timer < (original*2))) {
            return 'Prato pronto, bom apetite!!!';
    
        } else if (comida === 'pipoca' && (timer >= (original * 2) && timer < (original * 3))) {
          return 'A comida queimou \nPrato pronto, bom apetite!!!';
    
        } else if (comida === 'pipoca' && timer < original) {
          return 'Tempo insuficiente \nPrato pronto, bom apetite!!!';
        } else if (comida === 'pipoca' && (timer >= original * 3)) {
          return 'Kabumm \nPrato pronto, bom apetite!!!';
        }
    }
    

    function prato2(comida,timer) {
    let original = 8;
        
        if (comida === 'macarrao' && timer == original) {
          return 'Prato pronto, bom apetite!!!';
    
        }else if (comida === 'macarrao' && (timer > original && timer < (original*2))) {
            return 'Prato pronto, bom apetite!!!';
    
        } else if (comida === 'macarrao' && (timer >= (original * 2) && timer < (original * 3))) {
          return 'A comida queimou \nPrato pronto, bom apetite!!!';
    
        } else if (comida === 'macarrao' && timer < original) {
          return 'Tempo insuficiente \nPrato pronto, bom apetite!!!';
    
        } else if (comida === 'macarrao' && (timer >= original * 3)) {
          return 'Kabumm \nPrato pronto, bom apetite!!!';
        }
    }
    function prato3(comida,timer) {
        let original = 15;
            
            if (comida === 'carne' && timer == original) {
              return 'Prato pronto, bom apetite!!!';
        
            }else if (comida === 'carne' && (timer > original && timer < (original*2))) {
                return 'Prato pronto, bom apetite!!!';
        
            } else if (comida === 'carne' && (timer >= (original * 2) && timer < (original * 3))) {
              return 'A comida queimou \nPrato pronto, bom apetite!!!';
        
            } else if (comida === 'carne' && timer < original) {
              return 'Tempo insuficiente \nPrato pronto, bom apetite!!!';
        
            } else if (comida === 'carne' && (timer >= original * 3)) {
              return 'Kabumm \nPrato pronto, bom apetite!!!';
            }
        }
        function prato4(comida,timer) {
            let original = 12;
                
                if (comida === 'feijao' && timer == original) {
                  return 'Prato pronto, bom apetite!!!';
            
                }else if (comida === 'feijao' && (timer > original && timer < (original*2))) {
                    return 'Prato pronto, bom apetite!!!';
            
                } else if (comida === 'feijao' && (timer >= (original * 2) && timer < (original * 3))) {
                  return 'A comida queimou \nPrato pronto, bom apetite!!!';
            
                } else if (comida === 'feijao' && timer < original) {
                  return 'Tempo insuficiente \nPrato pronto, bom apetite!!!';
            
                } else if (comida === 'feijao' && (timer >= original * 3)) {
                  return 'Kabumm \nPrato pronto, bom apetite!!!';
                }
            }
            function prato5(comida,timer) {
                let original = 8;
                    
                    if (comida === 'brigadeiro' && timer == original) {
                      return 'Prato pronto, bom apetite!!!';
                
                    }else if (comida === 'brigadeiro' && (timer > original && timer < (original*2))) {
                        return 'Prato pronto, bom apetite!!!';
                
                    } else if (comida === 'brigadeiro' && (timer >= (original * 2) && timer < (original * 3))) {
                      return 'A comida queimou \nPrato pronto, bom apetite!!!';
                
                    } else if (comida === 'brigadeiro' && timer < original) {
                      return 'Tempo insuficiente \nPrato pronto, bom apetite!!!';
                
                    } else if (comida === 'brigadeiro' && (timer >= original * 3)) {
                      return 'Kabumm \nPrato pronto, bom apetite!!!';
                    }
                }
                
                  console.log(microondas('pipoca',10))
                
            
        
    