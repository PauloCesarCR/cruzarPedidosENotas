import { IPedido } from '../../interfaces/IPedido'

export class ItemFaltando {
    execute(pedidos: any) {
        const keys = Object.keys(pedidos[0])
        let mensagensDeErro: string[] = []

        for (let i = 1; i < keys.length + 1; i++) {
            const it: IPedido[] = pedidos[0][i]

            const nItens = it.map((it) => it.numero_item).sort((a, b) => a - b)

            const sumAritmeticaTamanhoDoArray = this.sumAritMetica(it.length)
            const sumAritmeticaItensId = this.sumAritMetica(
                nItens[nItens.length - 1]
            )

            if (sumAritmeticaTamanhoDoArray != sumAritmeticaItensId) {
                mensagensDeErro.push(
                    `Está faltando algum produto nesse pedido ${i}.`
                )
            }
        }

        if (mensagensDeErro.length > 0) {
            return mensagensDeErro.join(' ')
        }

        return 'Este pedido está correto.'
    }

    private sumAritMetica(n: number) {
        return (n * (n + 1)) / 2
    }
}
