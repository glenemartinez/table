
           // escreve a coluna inicial
         let x = [];
            for (let i = 0; i <= 10; i++ ) {
            x[i] = [];
              for( let o = 0; o <= 10; o++ ){
                x[i].push(o*[i]);
              }
            }
           console.table(x);
           // TODO: escrever dois loops aninhados para desenhar o array bidimencional e monstar o restante da tabela no console.
  //  for ( let i = 0; i <= 10; i ++ ){
  //    x.push(i);
  //    }

  function tabla(n){
     let y = [];
       for (let i = 0; i <= n; i ++ ){
         y[i]=[];
         for (let j = 0; j <= n; j++){
           y[i].push (j*[i])
         }
       }
     console.table(y);
     } 
    tabla();
