import { IPedido } from "./interfaces/IPedido";
import { FileRepository } from "./repositories/FileRepository";
import { ReadFile } from "./usecases/ReadFile";
import { WriteFile } from "./usecases/WriteFile";
import { VerificarPar } from "./usecases/notas/VerificarPar";
import { ItensPendentes } from "./usecases/notas/ItensPendentes";
import { ItemFaltando } from "./usecases/pedidos/ItemFaltando";
import { VerificarItensRepetidos } from "./usecases/pedidos/VerificarItensRepetidos";

class Main {
    constructor() {  
    }

    async RunApp(){

        try {
            const fileRepository = new FileRepository()
            const read = new ReadFile(fileRepository)

            const pedidos= await read.execute("C:\\Users\\paulo\\OneDrive\\Desktop\\Pedidos");

            const notas = await read.execute("C:\\Users\\paulo\\OneDrive\\Desktop\\Notas");
 
            new ItemFaltando().execute(pedidos);
 
            new VerificarItensRepetidos().execute(pedidos);
  
            new VerificarPar().execute(pedidos, notas)

            const relatorio = new ItensPendentes().execute(pedidos, notas);
            
            return await new WriteFile(fileRepository).execute(relatorio)

        } catch (error) {
            console.log(error)
        }


    }


}

new Main().RunApp()