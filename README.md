## Cruzar de pedidos e notas

Ler todos os pedidos e lançar exceção informando o problema caso:
- Algum valor não corresponda ao tipo descrito
- Haja repetição de algum número_item de um mesmo pedido
- Falte algum número_item (deve haver todos os números consecutivos de 1 ao maior
número de item daquele pedido);
Ler todas as notas e lançar exceção informando o problema caso:
- Algum valor não corresponda ao tipo descrito
- Seja informado algum par de id_pedido e número_item que não exista;
- A soma das quantidades informadas para um item ultrapassar a quantidade do item
do pedido.
Gerar de listagem de itens pendentes
Percorrer as notas e identificar os itens pendentes para cada pedido. Um item está
pendente se não teve toda a sua quantidade atendida pela soma das quantidades
informadas para esse item nas notas lidas.
Gravar um arquivo de tipo texto com a listagem dos pedidos pendentes. Para cada pedido
pendente, informar: o valor total do pedido (soma dos valores totais dos seus itens), o saldo
do valor (soma dos valores correspondentes ao saldo de quantidade de cada item
pendentes) e uma lista dos itens pendentes, na qual cada item pendente exibe o número do
item e o saldo da quantidade (quanto faltou de quantidade do produto para que o item não
ficasse pendente).