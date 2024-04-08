import { IFileInterface } from "../interfaces/FileInterface";
import { promises as fs } from 'fs';
import { IPedido } from "../interfaces/IPedido";
import { INota } from "../interfaces/INota";
const path = require("path")

export class FileRepository implements IFileInterface {
    constructor() {}

    async getContent(diretorio: string): Promise<any> {
        const files = await this.filesPorDiretorio(diretorio);
        let content = []

        for(let file of files){

            let id = file.replace(/\D/g, '');           
            content.push({[id]: await this.read(path.join(diretorio, file))});
        }

        return content;
    }

    async read(path:string): Promise<any> {
        const content =  await fs.readFile(path, {encoding: 'utf8'});

        const linhas = content.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().split('\n');

        return linhas.map(jsonString => JSON.parse(jsonString));


    }
    async write(pedidosRelatorio: any){
        const relatorio = []

        for(let pedido of pedidosRelatorio){

            relatorio.push(`Pedido: ${pedido.idPedido}\nTotal Pedido: ${pedido.totalPedido.toFixed(2)}\nSaldo do Valor: ${pedido.saldoValor.toFixed(2)}\nItens Pendentes:\n` +
            pedido.itensPendentes.map(item => `Número Item: ${item.numero_item}, Quantidade Pendente: ${item.quantidade_pendente}, Valor Pendente: ${item.valor_pendente.toFixed(2)}`).join('\n') + '\n');
        }
            
        await fs.writeFile('relatorio_itens_pendentes.txt', relatorio.join('\n'))

        return "Arquivo gerado com sucesso"
    }

    

    private async filesPorDiretorio(diretorio: string): Promise<any> {
        return await fs.readdir(diretorio);
    }

}