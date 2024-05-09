import { IFileInterface } from '../interfaces/FileInterface'

export class ReadFile {
    constructor(readonly fileRepository: IFileInterface) {}

    async execute(diretorioPath: string): Promise<any> {
        return await this.fileRepository.getContent(diretorioPath)
    }
}
