import { IPedido } from '../../interfaces/IPedido'
import { INota } from '../../interfaces/INota'

export interface ISaldo {
    totalPedido: number
    saldoValor: number
    itensPendentes: any[]
}

export class ItensPendentes {
    constructor() {}

    execute(pedidos: any, notas: any) {
        const saldos = {}

        const keysPedido = Object.keys(pedidos)
        const keysNota = Object.keys(notas)

        for (let i = 1; i <= keysPedido.length; i++) {
            saldos[i] = {
                idPedido: i,
                totalPedido: 0,
                saldoValor: 0,
                itensPendentes: [],
            }

            pedidos[i - 1][i].forEach((item) => {
                const valorUnitario = parseFloat(
                    item.valor_unitario_produto.replace(',', '.')
                )
                const totalItem = valorUnitario * item.quantidade_produto
                saldos[i].totalPedido += totalItem
                saldos[i].itensPendentes.push({
                    numero_item: item.numero_item,
                    quantidade_pendente: item.quantidade_produto,
                    valor_pendente: totalItem,
                })
            })
        }

        for (let i = 1; i <= keysPedido.length; i++) {
            const nota = notas[i - 1][i]
            for (let nt of nota) {
                const item = saldos[i].itensPendentes.find(
                    (i) => i.numero_item === nt.numero_item
                )

                if (item && nt) {
                    item.quantidade_pendente -= nt.quantidade_produto
                    const pedido = pedidos.find((p) => p[i])
                    const valorUnitario = parseFloat(
                        pedido[i]
                            .find((p) => p.numero_item === item.numero_item)
                            .valor_unitario_produto.replace(',', '.')
                    )
                    item.valor_pendente -= nt.quantidade_produto * valorUnitario
                }
            }
        }

        Object.keys(saldos).forEach((idPedido) => {
            saldos[idPedido].itensPendentes = saldos[
                idPedido
            ].itensPendentes.filter((item) => item.quantidade_pendente > 0)
            saldos[idPedido].saldoValor = saldos[
                idPedido
            ].itensPendentes.reduce((acc, item) => acc + item.valor_pendente, 0)
        })

        const pedidoRelatorio = Object.keys(saldos).map((idPedido) => {
            return saldos[idPedido]
        })

        return pedidoRelatorio
    }
}
