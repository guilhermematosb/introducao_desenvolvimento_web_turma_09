// Elementos
const input = document.querySelector('input')
const lista = document.querySelector('ul')

// Funções
function handleKeyUp(e){
    if (e.key === 'Enter'){
        // Add elemento li na lista
        const novoLi = document.createElement('li')
        novoLi.innerHTML = input.value
        lista.appendChild(novoLi)

        // Limpar o campo de input
        input.value = ''
    }
}

input.addEventListener('keyup', handleKeyUp)