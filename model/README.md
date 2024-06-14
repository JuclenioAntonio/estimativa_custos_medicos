## Projeto - Custos médicos individuais
### Modelo de aprendizado de máquina 
Modelo de aprendizado de máquina para cálculo de gastos com saúde


## 

Predição de Custos Médicos

Descrição do Projeto

Este projecto tem como objectivo desenvolver um modelo preditivo para estimar os custos médicos individuais com base em características demográficas e de saúde dos beneficiários. O projeto inclui uma análise exploratória dos dados, o treinamento de um modelo de regressão, a avaliação das métricas do modelo, a criação de uma interface de usuário (UI) para simular os custos médicos e a integração dessa aplicação via API.

Conteúdo do Dataset

O dataset utilizado contém as seguintes colunas:

age: Idade do beneficiário principal.

sex: Gênero do contratante do seguro, feminino ou masculino.

bmi: Índice de Massa Corporal, fornecendo uma compreensão do peso corporal em relação à altura (kg/m²), idealmente entre 18.5 e 24.9.

children: Número de filhos cobertos pelo seguro de saúde / Número de dependentes.

smoker: Status de fumante.

region: Área residencial do beneficiário nos EUA (nordeste, sudeste, sudoeste, noroeste).

charges: Custos médicos individuais faturados pelo seguro de saúde.

Etapas do Projeto

1. Análise Exploratória de Dados (EDA)

A análise exploratória de dados (EDA) envolve o exame das características dos dados, a verificação de padrões, a identificação de valores ausentes ou outliers, e a visualização das relações entre as variáveis.

Descritiva Estatística: Calcular estatísticas descritivas (média, mediana, desvio padrão, etc.) para entender a distribuição dos dados.

Visualização de Dados: Utilizar gráficos como histogramas, box plots e scatter plots para visualizar a distribuição das variáveis e suas relações.

Análise de Correlação: Calcular a matriz de correlação para identificar relações entre as variáveis.

2. Pré-processamento dos Dados

3.

Tratamento de Valores Ausentes: Verificar e tratar quaisquer valores ausentes.

Codificação de Variáveis Categóricas: Converter variáveis categóricas (sex, smoker, region) em variáveis numéricas utilizando técnicas como One-Hot Encoding.

Normalização: Normalizar as variáveis numéricas, se necessário, para melhorar o desempenho do modelo.

3. Treinamento do Modelo

Divisão do Dataset: Dividir o dataset em conjuntos de treinamento e teste.

Seleção do Modelo: Selecionar um modelo de regressão apropriado.

Treinamento: Treinar o modelo com os dados de treinamento.

Validação Cruzada: Utilizar validação cruzada para avaliar a robustez do modelo.

4. Avaliação do Modelo

Métricas de Desempenho: Avaliar o modelo utilizando métricas como RMSE (Root Mean Squared Error), MAE (Mean Absolute Error) e R² (coeficiente de determinação).

Análise Residual: Verificar os resíduos do modelo para garantir que não há padrões não explicados pelos dados.

5. Salvamento do Modelo

Serialização: Salvar o modelo treinado utilizando técnicas de serialização (por exemplo, biblioteca pickle em Python) para uso posterior.

6. Criação de uma Interface de Usuário (UI)

Desenvolvimento da UI: Criar uma interface de usuário para permitir que os usuários insiram dados e simulem os custos médicos.

7. Integração via API

Criar uma API para a comunicação entre a UI e a app do modelo preditivo.

Nota: o projecto vale 14V da Prova de frequência e será apresentado no dia da defesa do grupo.