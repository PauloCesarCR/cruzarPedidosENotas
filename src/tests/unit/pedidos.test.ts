import { ItemFaltando } from '../../usecases/pedidos/ItemFaltando'
import { VerificarItensRepetidos } from '../../usecases/pedidos/VerificarItensRepetidos'
import { IPedido } from '../../interfaces/IPedido'

describe('verificações do pedido', () => {
    test('Verificar itens repetidos, nesse caso contem um item repetido', () => {
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
                        numero_item: 3,
                        código_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitário_produto: '10,20',
                    },
                ],
                '2': [
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
        //act
        const sut = new VerificarItensRepetidos()
        const output = sut.execute(pedidos)
        //assert
        expect(output).toBe('O pedido 1 contém itens repetidos.')
    })

    test('Verificar itens repetidos, nesse caso não contém um item repetido', () => {
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
                '2': [
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
                ],
            },
        ]
        //act
        const sut = new VerificarItensRepetidos()
        const output = sut.execute(pedidos)
        //assert
        expect(output).toBe('Todos os pedidos estão corretos.')
    })

    test('Verificar item faltando no pedido, nesse caso tem um item faltando', () => {
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
                        numero_item: 4,
                        código_produto: 'kbp4',
                        quantidade_produto: 10,
                        valor_unitário_produto: '10,20',
                    },
                ],
            },
        ]

        //act
        const sut = new ItemFaltando()
        const output = sut.execute(pedidos)

        //assert
        expect(output).toBe('Está faltando algum produto nesse pedido 1.')
    })

    test('Verificar item faltando no pedido, nesse caso não tem nenhum item faltando', () => {
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

        //act
        const sut = new ItemFaltando()
        const output = sut.execute(pedidos)

        //assert
        expect(output).toBe('Este pedido está correto.')
    })
})
