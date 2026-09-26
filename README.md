SIte que simula emprésimos e parcelamentos utilizando o sistema de amortização price.
As variáveis V1, V2 e tax recebem o .value das caixinhas (inputs)
e a variável result contém a fórmula de juros compostos e apenas subistitui os dados.
Tudo isso ocorre na ação submit do botão simular (ou enter) e também coloquei preventDefault() na função para impedir que a página atualize
Os resultados da variável result é jogado através do getElementById nos h2 da última faixa em formato do real utilizando toLocaleString("pt-br")