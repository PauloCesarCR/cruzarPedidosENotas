import { IPedido } from "../../interfaces/IPedido";

export class VerificarItensRepetidos {

    constructor(){}

    execute(pedidos: any): string{

        let mensagensDeErro: string[] = [];
        const keys = Object.keys(pedidos[0]);

        for(let i = 1; i < keys.length + 1; i++){

            const it: IPedido[] = pedidos[0][i]
            
            if(this.temNumerosIguais(it.map((it: IPedido)=> it.numero_item))){
                mensagensDeErro.push(`O pedido ${i} contém itens repetidos.`);
            }
        }


   
        if(mensagensDeErro.length > 0){
            // Junta todas as mensagens de erro em uma única string para retorno
            return mensagensDeErro.join(' ');
        }

        return 'Todos os pedidos estão corretos.';

    }

    private temNumerosIguais(array) {
        return new Set(array).size !== array.length;
    }
}