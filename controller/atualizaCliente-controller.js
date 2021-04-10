import { clienteService } from '../service/cliente-service.js';


    const getUrl = new URL(window.location)
    const id = getUrl.searchParams.get('id');
    
    
    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');
    
    const detailClient = async () => {
        try{
            const resposta= await clienteService.detalhaCliente(id)
               inputNome.value = resposta.nome;
               inputEmail.value = resposta.email;
        }catch(err){
            console.log(err);
            window.location.href = '../telas/erro.html'
        }
    
    }
    
    const formulario = document.querySelector('[data-form]');
    
    formulario.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        
        try{
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = '../telas/edicao_concluida.html';
        }catch(err){
            console.log(err);
            window.location.href = '../telas/erro.html'
        }
            
    })

    detailClient()
    
    