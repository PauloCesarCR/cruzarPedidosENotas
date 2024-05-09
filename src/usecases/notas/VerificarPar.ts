import { INota } from '../../interfaces/INota'
import { IPedido } from '../../interfaces/IPedido'

export class VerificarPar {
    constructor() {}

    execute(pedidos: IPedido[], notas: INota[]) {
        const keysNota = Object.keys(notas[0])
        let ParOk = false
        let msgs = []
        for (let i = 1; i < keysNota.length + 1; i++) {
            const itensNota: INota[] = notas[0][i]

            for (let item of itensNota) {
                const pedido = pedidos[0][item.id_pedido]
                if (
                    pedido.some(
                        (pd: IPedido) => pd.numero_item == item.numero_item
                    )
                ) {
                    ParOk = true
                } else {
                    ParOk = false
                }
            }

            if (ParOk) {
                msgs.push(`Nota ${i} OK`)
            } else {
                msgs.push(`Nota ${i} não está OK`)
            }
        }

        return msgs.join(' ')
    }
}
