export function validarId(id: number): void{
    if(!(typeof(id) === 'number')){
        throw new Error('Tipo de id inválido');
    }
}