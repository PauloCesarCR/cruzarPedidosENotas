import { FileRepository } from '../../repositories/FileRepository'
import { ReadFile } from '../../usecases/ReadFile'

describe('read', () => {
    test('read notas', async () => {
        //arrange
        const fileRepository = new FileRepository()
        const sut = new ReadFile(fileRepository)

        const output = await sut.execute(
            'C:\\Users\\paulo\\OneDrive\\Desktop\\Notas'
        )
        //assert

        expect(output).toBeDefined()
    })

    test('read pedidos', async () => {
        //arrange
        const fileRepository = new FileRepository()
        const sut = new ReadFile(fileRepository)
        //act
        const output = await sut.execute(
            'C:\\Users\\paulo\\OneDrive\\Desktop\\Pedidos'
        )
        //assert

        expect(output).toBeDefined()
    })
})
