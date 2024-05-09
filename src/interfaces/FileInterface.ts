export interface IFileInterface {
    read(path: string): Promise<any>
    getContent(diretorioPath: string): Promise<any>
    write(relatorio: any): Promise<any>
}
