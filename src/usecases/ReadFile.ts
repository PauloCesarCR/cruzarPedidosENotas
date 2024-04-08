import { IFileInterface } from '../interfaces/FileInterface'
import { INota } from '../interfaces/INota'
import { IPedido } from '../interfaces/IPedido'

export class ReadFile {
    constructor(readonly fileRepository: IFileInterface) {}

    async execute(diretorioPath: string): Promise<any> {
        return await this.fileRepository.getContent(diretorioPath)
    }
}
