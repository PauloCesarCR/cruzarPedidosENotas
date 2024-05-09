import { VerificarPar } from '../../usecases/notas/VerificarPar'
import { ItensPendentes } from '../../usecases/notas/ItensPendentes'
import { ISaldo } from '../../usecases/notas/ItensPendentes'
describe('notas', () => {
    test('verificar par id_pedido e número item', () => {
        //arrange
        const pedidos: any = [
            {
                '1': [
                    {
                        numero_item: 1,
                        código_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitário_produto: '10,20',
                    },
                    {
                        numero_item: 2,
                        código_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitário_produto: '10,20',
                    },
                    {
                        numero_item: 3,
                        código_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitário_produto: '10,20',
                    },

                    {
                        numero_item: 4,
                        código_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitário_produto: '10,20',
                    },
                ],
            },
        ]

        const notas: any = [
            {
                '1': [
                    {
                        id_pedido: 1,
                        numero_item: 4,
                        quantidade_produto: 4,
                    },
                    {
                        id_pedido: 1,
                        numero_item: 3,
                        quantidade_produto: 5,
                    },
                ],
            },
        ]

        const sut = new VerificarPar()
        //act
        const output = sut.execute(pedidos, notas)
        console.log(output)
        //assert
        expect(output).toBe('Nota 1 OK')
    })

    test('gerar listagem de itens pendentes', async () => {
        //arrange
        const pedidos: any = [
            {
                '1': [
                    {
                        numero_item: 1,
                        codigo_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitario_produto: '10,20',
                    },
                    {
                        numero_item: 2,
                        codigo_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitario_produto: '10,20',
                    },
                    {
                        numero_item: 3,
                        codigo_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitario_produto: '10,20',
                    },

                    {
                        numero_item: 4,
                        codigo_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitario_produto: '10,20',
                    },
                ],
                '2': [
                    {
                        numero_item: 1,
                        codigo_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitario_produto: '10,20',
                    },
                    {
                        numero_item: 2,
                        codigo_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitario_produto: '10,20',
                    },
                    {
                        numero_item: 3,
                        codigo_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitário_produto: '10,20',
                    },

                    {
                        numero_item: 4,
                        coigo_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitario_produto: '10,20',
                    },
                ],
            },
        ]

        const notas: any = [
            {
                '1': [
                    {
                        id_pedido: 1,
                        numero_item: 4,
                        quantidade_produto: 4,
                    },
                    {
                        id_pedido: 1,
                        numero_item: 3,
                        quantidade_produto: 5,
                    },
                ],
                '2': [
                    {
                        id_pedido: 2,
                        numero_item: 4,
                        quantidade_produto: 4,
                    },
                    {
                        id_pedido: 2,
                        numero_item: 3,
                        quantidade_produto: 5,
                    },
                ],
            },
        ]

        //act

        const sut = new ItensPendentes()
        const output = (await sut.execute(pedidos, notas)) as ISaldo[]
        console.log(output)
        //assert
        expect(output[0].totalPedido).toBe(408)
        expect(output[0].saldoValor).toBe(316.2)
    })
})
