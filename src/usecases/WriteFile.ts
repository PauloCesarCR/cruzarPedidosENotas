import { IFileInterface } from '../interfaces/FileInterface'

export class WriteFile {
    constructor(readonly fileRepository: IFileInterface) {}

    async execute(relatorio: any): Promise<any> {
        return await this.fileRepository.write(relatorio)
    }
}
