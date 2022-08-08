function openModal() {
  let modal = document.querySelector('.modal')

  modal.style.display = 'block'
}

function closeModal() {
  let modal = document.querySelector('.modal')

  modal.style.display = 'none'
}

const columns = [
  {
    visible: true,
    id: 'fonte_pagadora',
    label: 'Fonte pagadora',
  },
  {
    visible: true,
    id: 'vencidos',
    label: 'Vencidos'
  },
  {
    visible: true,
    id: 'a_vencer',
    label: 'A vencer'
  },
  {
    visible: true,
    id: 'contas_a_receber',
    label: 'Contas a receber'
  },
  {
    visible: true,
    id: 'tesouraria',
    label: 'Tesouraria'
  },
  {
    visible: true,
    id: 'diferenca',
    label: 'Diferença'
  },
  {
    visible: false,
    id: 'per_de_comissao',
    label: '% de comissão'
  },
  {
    visible: false,
    id: 'comissao',
    label: 'Comissão'
  },
  {
    visible: false,
    id: 'entregue_sem_ra',
    label: 'Entregue sem RA'
  },
  {
    visible: false,
    id: 'retido',
    label: 'Retido (MKTP + MM)'
  },
  {
    visible: false,
    id: 'boleto',
    label: 'Boleto'
  },
  {
    visible: false,
    id: 'nota_seller',
    label: 'Nota seller'
  },
  {
    visible: false,
    id: 'outros',
    label: 'Outros'
  },
  {
    visible: false,
    id: 'ra_em_aberto',
    label: 'RA em aberto'
  },
  {
    visible: false,
    id: 'nao_faturado',
    label: 'Não faturado'
  },
  {
    visible: false,
    id: 'total',
    label: 'Total'
  },
  {
    visible: false,
    id: 'recompra',
    label: 'Recompra'
  },
  {
    visible: false,
    id: 'cancelados',
    label: 'Cancelados'
  },
  {
    visible: false,
    id: 'extraviado_avariado',
    label: 'Extraviado/ Avariado'
  },
  {
    visible: false,
    id: 'entrega_com_saldo',
    label: 'Entrega com saldo + antigo'
  },
  {
    visible: false,
    id: 'remetidos',
    label: 'Remetidos'
  },
  {
    visible: false,
    id: 'compensacao',
    label: 'Compensação'
  },
  {
    visible: false,
    id: 'probl_arquivo',
    label: 'Probl. arquivo'
  },
  {
    visible: false,
    id: 'resultado',
    label: 'Resultado'
  }
]

const MOCK_DATA_MARKETPLACE = {
  total: {
    fonte_pagadora: 'Total',
    vencidos: '8,52',
    a_vencer: '156,81',
    contas_a_receber: '165,34',
    tesouraria: '105,15',
    diferenca: '-60,19',
    per_de_comissao: '',
    comissao: '-15,07',
    entregue_sem_ra: '-12,07',
    retido: '-17,54',
    boleto: '',
    nota_seller: '',
    outros: '',
    ra_em_aberto: '-5,11',
    nao_faturado: '15,82',
    total: '-26,22',
    recompra: '1,11',
    cancelados: '2,64',
    extraviado_avariado: '0,56',
    entrega_com_saldo: '3,82',
    remetidos: '10,45',
    compensacao: '0,00',
    probl_arquivo: '15,57',
    resultado: '7,91'
  },
  data: [
    {
      fonte_pagadora: 'Amazon',
      vencidos: '0,58',
      a_vencer: '3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '10%',
      comissao: '-0,43',
      entregue_sem_ra: '-0,66',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,06',
      nao_faturado: '0,01',
      total: '-0,02',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'B2W',
      vencidos: '0,58',
      a_vencer: '3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '10%',
      comissao: '-3,15',
      entregue_sem_ra: '-1,64',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,67',
      nao_faturado: '',
      total: '-0,06',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Carrefour',
      vencidos: '0,58',
      a_vencer: '3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Cnova',
      vencidos: '3,08',
      a_vencer: '9,36',
      contas_a_receber: '12,45',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'GPA',
      vencidos: '0,00',
      a_vencer: '0,01',
      contas_a_receber: '0,01',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Inter shop',
      vencidos: '0,04',
      a_vencer: '0,83',
      contas_a_receber: '0,88',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Magazine Luiza',
      vencidos: '2,18',
      a_vencer: '95,75',
      contas_a_receber: '97,93',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Mercado livre',
      vencidos: '0,77',
      a_vencer: '13,88',
      contas_a_receber: '14,64',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Ricardo eletro',
      vencidos: '0,00',
      a_vencer: '0,00',
      contas_a_receber: '0,01',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Zoom',
      vencidos: '0,02',
      a_vencer: '0,03',
      contas_a_receber: '0,05',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Walmart',
      vencidos: '0,07',
      a_vencer: '0,00',
      contas_a_receber: '0,07',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Web continental',
      vencidos: '0,03',
      a_vencer: '0,29',
      contas_a_receber: '0,26',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
    {
      fonte_pagadora: 'Leroy Merlin',
      vencidos: '0,07',
      a_vencer: '0,95',
      contas_a_receber: '1,02',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '12%',
      comissao: '-0,05',
      entregue_sem_ra: '-0,02',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,31',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: ''
    },
  ]
}

const MOCK_DATA_ADQUIRENTE = {
  total: {
    fonte_pagadora: 'Total',
    vencidos: '3,94',
    a_vencer: '361,52',
    contas_a_receber: '365,46',
    tesouraria: '4,32',
    diferenca: '-50,56',
    per_de_comissao: '',
    comissao: '0,00',
    entregue_sem_ra: '-7,84',
    retido: '0,00',
    boleto: '',
    nota_seller: '',
    outros: '',
    ra_em_aberto: '-15,94',
    nao_faturado: '19,21',
    total: '-45,99',
    recompra: '1,89',
    cancelados: '8,77',
    extraviado_avariado: '0,73',
    entrega_com_saldo: '0,79',
    remetidos: '0,00',
    compensacao: '0,00',
    probl_arquivo: '48,59',
    resultado: '14,77'
  },
  data: [
    {
      fonte_pagadora: 'Cielo',
      vencidos: '	0,00',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '0,00',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,06',
      nao_faturado: '4,38',
      total: '0,05',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,05'
    },
    {
      fonte_pagadora: 'Redecard',
      vencidos: '	0,58',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '-0,24',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-3,56',
      nao_faturado: '4,39',
      total: '-2,97',
      recompra: '0,38',
      cancelados: '2,26',
      extraviado_avariado: '0,17',
      entrega_com_saldo: '0,11',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '-0,05'
    },
    {
      fonte_pagadora: 'Adyen',
      vencidos: '0,58',
      a_vencer: '3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '-5,69',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,66',
      nao_faturado: '10,44',
      total: '-35,38',
      recompra: '0,62',
      cancelados: '1,36',
      extraviado_avariado: '0,13',
      entrega_com_saldo: '0,52',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '35,69',
      resultado: '7,21'
    },
    {
      fonte_pagadora: 'Getnet',
      vencidos: '1,37',
      a_vencer: '199,26',
      contas_a_receber: '200,63',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '-5,69',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,66',
      nao_faturado: '10,44',
      total: '-35,38',
      recompra: '0,62',
      cancelados: '1,36',
      extraviado_avariado: '0,13',
      entrega_com_saldo: '0,52',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '35,69',
      resultado: '7,21'
    },
    {
      fonte_pagadora: 'Outros',
      vencidos: '0,04',
      a_vencer: '0,04',
      contas_a_receber: '0,08',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '-5,69',
      retido: '0,00',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,66',
      nao_faturado: '10,44',
      total: '-35,38',
      recompra: '0,62',
      cancelados: '1,36',
      extraviado_avariado: '0,13',
      entrega_com_saldo: '0,52',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '35,69',
      resultado: '7,21'
    },
  ]
}

const MOCK_DATA_BANCO = {
  total: {
    fonte_pagadora: 'Total',
    vencidos: '1,10',
    a_vencer: '1,77',
    contas_a_receber: '2,87',
    tesouraria: '0,00',
    diferenca: '-2,87',
    per_de_comissao: '',
    comissao: '0,00',
    entregue_sem_ra: '0,00',
    retido: '0,00',
    boleto: '-2,87',
    nota_seller: '',
    outros: '',
    ra_em_aberto: '-3,79',
    nao_faturado: '4,32',
    total: '-3,41',
    recompra: '0,10',
    cancelados: '0,57',
    extraviado_avariado: '0,00',
    entrega_com_saldo: '0,15',
    remetidos: '0,00',
    compensacao: '0,00',
    probl_arquivo: '0,00',
    resultado: '-2,60'
  },
  data: [
    {
      fonte_pagadora: 'Pix',
      vencidos: '	0,00',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-1,91',
      nao_faturado: '3,64',
      total: '-3,78',
      recompra: '0,10',
      cancelados: '0,57',
      extraviado_avariado: '',
      entrega_com_saldo: '0,15',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '-2,97'
    },
    {
      fonte_pagadora: 'Bradesco',
      vencidos: '	0,58',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-1,10',
      nao_faturado: '0,02',
      total: '0,89',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,89'
    },
    {
      fonte_pagadora: 'Citibank',
      vencidos: '	0,58',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,38',
      nao_faturado: '',
      total: '0,37',
      recompra: '0,10',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,37'
    },
    {
      fonte_pagadora: 'Itaú',
      vencidos: '0,03',
      a_vencer: '3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,38',
      nao_faturado: '',
      total: '0,37',
      recompra: '0,10',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,37'
    },
    {
      fonte_pagadora: 'Ingenico',
      vencidos: '0,00',
      a_vencer: '0,00',
      contas_a_receber: '0,00',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,38',
      nao_faturado: '',
      total: '0,37',
      recompra: '0,10',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,37'
    },
    {
      fonte_pagadora: 'Outros (soma de outros boletos)',
      vencidos: '0,40',
      a_vencer: '0,16',
      contas_a_receber: '0,56',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '-0,38',
      nao_faturado: '',
      total: '0,37',
      recompra: '0,10',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,37'
    },
  ]
}

const MOCK_DATA_CDC = {
  total: {
    fonte_pagadora: 'Total',
    vencidos: '0,04',
    a_vencer: '0,16',
    contas_a_receber: '0,20',
    tesouraria: '0,00',
    diferenca: '-0,20',
    per_de_comissao: '',
    comissao: '0,00',
    entregue_sem_ra: '0,00',
    retido: '0,00',
    boleto: '',
    nota_seller: '',
    outros: '',
    ra_em_aberto: '-0,07',
    nao_faturado: '0,06',
    total: '-0,26',
    recompra: '0,00',
    cancelados: '0,00',
    extraviado_avariado: '0,00',
    entrega_com_saldo: '0,00',
    remetidos: '0,00',
    compensacao: '0,00',
    probl_arquivo: '0,00',
    resultado: '0,00'
  },
  data: [
    {
      fonte_pagadora: 'Banco Votorantim',
      vencidos: '	0,00',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '',
      nao_faturado: '',
      total: '-0,12',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '-0,12'
    },
    {
      fonte_pagadora: 'Rebel',
      vencidos: '	0,58',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '',
      nao_faturado: '',
      total: '0,00',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,00'
    },
    {
      fonte_pagadora: 'SB Crédito',
      vencidos: '	0,58',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '',
      nao_faturado: '0,00',
      total: '-0,02',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '-0,02'
    },
    {
      fonte_pagadora: 'Outros (vazios)',
      vencidos: '0,00',
      a_vencer: '0,06',
      contas_a_receber: '0,06',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '',
      nao_faturado: '0,00',
      total: '-0,02',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '-0,02'
    },
  ]
}

const MOCK_DATA_OUTROS = {
  total: {
    fonte_pagadora: 'Total',
    vencidos: '	2,62',
    a_vencer: '24,71',
    contas_a_receber: '27,33',
    tesouraria: '0,00',
    diferenca: '-27,33',
    per_de_comissao: '',
    comissao: '0,00',
    entregue_sem_ra: '0,00',
    retido: '0,00',
    boleto: '0,00',
    nota_seller: '-18,75',
    outros: '-8,71',
    ra_em_aberto: '0,00',
    nao_faturado: '0,08',
    total: '-8,79',
    recompra: '0,00',
    cancelados: '0,00',
    extraviado_avariado: '0,00',
    entrega_com_saldo: '0,00',
    remetidos: '0,00',
    compensacao: '0,00',
    probl_arquivo: '0,00',
    resultado: '0,00'
  },
  data: [
    {
      fonte_pagadora: 'NF comissão sellers',
      vencidos: '	0,00',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '',
      nao_faturado: '',
      total: '0,00',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,00'
    },
    {
      fonte_pagadora: 'Outros (verificar)',
      vencidos: '	0,58',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '0,00',
      nao_faturado: '0,08',
      total: '-0,88',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,00'
    },
    {
      fonte_pagadora: 'Inclusão manual',
      vencidos: '	0,58',
      a_vencer: '	3,74',
      contas_a_receber: '4,32',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '',
      nao_faturado: '0,08',
      total: '-4,33',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,00'
    },
    {
      fonte_pagadora: 'Complemento de venda',
      vencidos: '0,56',
      a_vencer: '1,05',
      contas_a_receber: '1,61',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '',
      nao_faturado: '0,08',
      total: '-4,33',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,00'
    },
    {
      fonte_pagadora: 'Uso crédito',
      vencidos: '0,94',
      a_vencer: '1,02',
      contas_a_receber: '1,97',
      tesouraria: '3,41',
      diferenca: '-0,91',
      per_de_comissao: '',
      comissao: '',
      entregue_sem_ra: '',
      retido: '',
      boleto: '',
      nota_seller: '',
      outros: '',
      ra_em_aberto: '',
      nao_faturado: '0,08',
      total: '-4,33',
      recompra: '',
      cancelados: '',
      extraviado_avariado: '',
      entrega_com_saldo: '',
      remetidos: '',
      compensacao: '',
      probl_arquivo: '',
      resultado: '0,00'
    },
  ]
}

const modalBody = document.getElementById('modalBody')
const tableHeaderRow = document.getElementById('tableHeaderRow')
const tableBody = document.getElementById('tableBody')

function createTableHeader() {
  const contentHeader = columns
    .map(column => {
      if (column.visible) {
        return `<th scope="col">${column.label}</th>`
      }

      return null
    })
    .join('')

  tableHeaderRow.innerHTML = `
      <th scope="col" colspan="2"></th>
      ${contentHeader}
    `
}

function createTableMarketplace() {
  let contentBody = MOCK_DATA_MARKETPLACE.data
    .map(
      (row, index) =>
        `<tr>
        ${
          index === 0
            ? `<td colspan="2" rowspan="${MOCK_DATA_MARKETPLACE.data.length+1}" class="marketplace-col">
                <p>MARKETPLACE</p>
              </td>`
            : ''
        }
        ${columns
          .filter(c => c.visible)
          .map(column => `<td>${row[column.id]}</td>`)
          .join('')}

          </tr>
          `
    )
    .join('')

    contentBody += `<tr>
    ${columns
      .filter(c => c.visible)
      .map(column => `<td class="total-row">${MOCK_DATA_MARKETPLACE.total[column.id]}</td>`)
      .join('')}
    </tr>`

    contentBody += `<tr>
    ${columns
      .filter(c => c.visible)
      .map(column => `<td colspan='${MOCK_DATA_ADQUIRENTE.data.length0}'></td>`)
      .join('')}
    </tr>`

  tableBody.innerHTML += contentBody
}

function createTableAdquirentes(){
  let contentBody = MOCK_DATA_ADQUIRENTE.data
    .map(
      (row, index) =>
        `<tr>
        ${
          index === 0
            ? `
              <td rowspan="${MOCK_DATA_ADQUIRENTE.data.length+4+MOCK_DATA_BANCO.data.length+MOCK_DATA_CDC.data.length+MOCK_DATA_OUTROS.data.length}" class="madeiramadeira-col">
                  <p>MadeiraMadeira</p>
                </td>
                <td rowspan="${MOCK_DATA_ADQUIRENTE.data.length+1}" class="fontes-col">Adquirente (Cartão)</td>`
            : ''
        }
        ${columns
          .filter(c => c.visible)
          .map(column => `<td>${row[column.id]}</td>`)
          .join('')}

          </tr>
          `
    )
    .join('')

    contentBody += `<tr>
    ${columns
      .filter(c => c.visible)
      .map(column => `<td class="total-row">${MOCK_DATA_MARKETPLACE.total[column.id]}</td>`)
      .join('')}
    </tr>`

    tableBody.innerHTML += contentBody   
}

function createTableBancos(){
  let contentBody = MOCK_DATA_BANCO.data
    .map(
      (row, index) =>
        `<tr>
        ${
          index === 0
            ? `
                <td rowspan="${MOCK_DATA_BANCO.data.length+1}" class="fontes-col">Banco (Boleto)</td>`
            : ''
        }
        ${columns
          .filter(c => c.visible)
          .map(column => `<td>${row[column.id]}</td>`)
          .join('')}

          </tr>
          `
    )
    .join('')

    contentBody += `<tr>
    ${columns
      .filter(c => c.visible)
      .map(column => `<td class="total-row">${MOCK_DATA_MARKETPLACE.total[column.id]}</td>`)
      .join('')}
    </tr>`

    tableBody.innerHTML += contentBody   
}

function createTableCDC(){
  let contentBody = MOCK_DATA_CDC.data
    .map(
      (row, index) =>
        `<tr>
        ${
          index === 0
            ? `
                <td rowspan="${MOCK_DATA_CDC.data.length+1}" class="fontes-col">CDC</td>`
            : ''
        }
        ${columns
          .filter(c => c.visible)
          .map(column => `<td>${row[column.id]}</td>`)
          .join('')}

          </tr>
          `
    )
    .join('')

    contentBody += `<tr>
    ${columns
      .filter(c => c.visible)
      .map(column => `<td class="total-row">${MOCK_DATA_CDC.total[column.id]}</td>`)
      .join('')}
    </tr>`

    tableBody.innerHTML += contentBody   
}

function createTableOutros(){
  let contentBody = MOCK_DATA_OUTROS.data
    .map(
      (row, index) =>
        `<tr>
        ${
          index === 0
            ? `
                <td rowspan="${MOCK_DATA_OUTROS.data.length+1}" class="fontes-col">Outros</td>`
            : ''
        }
        ${columns
          .filter(c => c.visible)
          .map(column => `<td>${row[column.id]}</td>`)
          .join('')}

          </tr>
          `
    )
    .join('')

    contentBody += `<tr>
    ${columns
      .filter(c => c.visible)
      .map(column => `<td class="total-row">${MOCK_DATA_OUTROS.total[column.id]}</td>`)
      .join('')}
    </tr>`

    tableBody.innerHTML += contentBody   
}

function updateTable(params) {
  createTableHeader()
  tableBody.innerHTML = ''
  createTableMarketplace()
  createTableAdquirentes()
  createTableBancos()
  createTableCDC()
  createTableOutros()
}

function createVisibleEvents() {
  columns.forEach(column => {
    const inputColumn = document.getElementById(column.id)

    if (inputColumn) {
      inputColumn.addEventListener('change', () => {
        column.visible = !column.visible
      })
    }
  })
}

function loadModalDataColumns() {
  const contentModal = columns
    .map(
      column => `
      <div class="box-checkbox">
        <input type="checkbox" id="${column.id}" name="${
          column.id
        }" class="checkbox" ${column.visible ? 'checked' : ''}>
      <label for="${column.id}" class="checkbox-label">${column.label}</label></div>
  `
    )
    .join('')

  modalBody.innerHTML = contentModal
  createVisibleEvents()
}



loadModalDataColumns()
updateTable()

// Selecionar todos / nenhum checkbox
let checkbox = document.querySelectorAll('.checkbox')
let btnSelectAll = document.querySelector('#btnSelectAll')
let btnSelectNone = document.querySelector('#btnSelectNone')
let btnSave= document.getElementById('btnSave')
let table = document.querySelector('.table')



btnSelectAll.addEventListener('click', () => {
  columns.forEach(element => {
    element.visible = true
  });
  for (let visible of checkbox) {
    visible.checked = true
  }
})

btnSelectNone.addEventListener('click', () => {
  columns.forEach(element => {
    element.visible = false
  });
  for (let visible of checkbox) {
    visible.checked = false
  }
  return (table.style.height = "1500px")
  
})

btnSave.addEventListener('click', () =>{
  updateTable()
  closeModal()
})


