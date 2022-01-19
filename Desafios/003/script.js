function contar(){
    
    var txtincio = document.getElementById('inicio')
    var txtfim = document.getElementById('fim')
    var txtpasso = document.getElementById('passo')

    var inicio = Number(txtincio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)

    var cont = document.getElementById('contador')
    
    cont.innerText ="";
    
    if (passo == 0) {
        cont.innerText = 'Impossivel contar'
    } else {
        if(inicio > fim){
            for(var c = inicio; c >= fim; c -= passo){
                cont.innerText += c
            
                
                
                
            }
        } else{
            for(var c = inicio; c <= fim; c += passo){
                cont.innerText += c
                
                if (c < fim) {
                    cont.innerText += ", "
                } else {
                    
                }
            }
        }
    }

    
    
    
}