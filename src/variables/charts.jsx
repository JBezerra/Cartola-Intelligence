const data = require("./dados.json");

var BarData = new Array(8).fill(0);
var Patrocinadores = ["Premiere", "Itaú", "Globoplay", "Casas Bahia", "Brahma", "Globoesporte.com", "Chevrolet", "SporTV"];

for (var i = 0; i < data.length; i++) {
  let patrocinadorElemento = data[i]["Patrocinador principal"];

  if (patrocinadorElemento == "Premiere") {
    BarData[0]++;
  }
  if (patrocinadorElemento == "Itaú") {
    BarData[1]++;
  }
  if (patrocinadorElemento == "Globoplay") {
    BarData[2]++;
  }
  if (patrocinadorElemento == "Casas Bahia") {
    BarData[3]++;
  }
  if (patrocinadorElemento == "Brahma") {
    BarData[4]++;
  }
  if (patrocinadorElemento == "Globoesporte.com") {
    BarData[5]++;
  }
  if (patrocinadorElemento == "Chevrolet") {
    BarData[6]++;
  }
  if (patrocinadorElemento == "SporTV") {
    BarData[7]++;
  }
}

let PremData = new Array(8).fill(0);
PremData[0] = BarData[0];

let ItauData = new Array(8).fill(0);
ItauData[1] = BarData[1];

let GloboData = new Array(8).fill(0);
GloboData[2] = BarData[2];

let CBAData = new Array(8).fill(0);
CBAData[3] = BarData[3];

let BrahmaData = new Array(8).fill(0);
BrahmaData[4] = BarData[4];

let GEData = new Array(8).fill(0);
GEData[5] = BarData[5];

let ChevData = new Array(8).fill(0);
ChevData[6] = BarData[6];

let STVData = new Array(8).fill(0);
STVData[7] = BarData[7];


const distribuicaoDePatrocinadores = {
  data: canvas => {
    return {
      labels: ["Premiere", "Itaú", "Globo Play", "Casas Bahia", "Brahma", "Globo Esporte", "Chevrolet", "SporTV","Vivo", "Hipermarcas"],
      datasets: [
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: PremData
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: ItauData
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: GloboData
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: CBAData
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: BrahmaData
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: GEData
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: ChevData
        },
        {
          borderColor: "#00aeef",
          backgroundColor: "#00aeef",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: STVData
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [0,0,0,0,0,0,0,0,360,0]
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: [0,0,0,0,0,0,0,0,0,400]
        },
      ]
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: true
    }

  }
};

// POR FAIXA ETARIA RELEVANTE ====================================================

function GaussianSort(arr) {
  var _a = arr.slice()
  _a.sort(function (a, b) { return a - b });
  _a.reverse();
  var _isstart = false;
  var _out = [];
  for (var i = 0; i < _a.length; i++) {
    if (i % 2) {
      _out.push(_a[i])
    } else {
      _out.splice(0, 0, _a[i]);
    }
  }
  return _out;
}


var patrocinadorMaisRelevante = BarData.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
let patroMaiorValor = Patrocinadores[patrocinadorMaisRelevante];
let faixasEtarias = [];

for (var i = 0; i < data.length; i++) {
  let pessoaIdade = data[i].Idade;
  let patrocinadorElemento = data[i]["Patrocinador principal"];
  if (patrocinadorElemento == patroMaiorValor) {
    faixasEtarias.push(pessoaIdade);
  }
}

let faixasFiltro = [];

for (var i = 0; i < faixasEtarias.length/8; i++) {
  faixasFiltro.push(faixasEtarias[Math.floor(Math.random() * (70 - 14) + 14)]);
}

faixasFiltro = GaussianSort(faixasFiltro);

const patrocinadoresFaixaEtaria = {
  data: canvas => {
    return {
      labels: faixasFiltro,
      datasets: [
        {
          borderColor: "#00aeef",
          backgroundColor: "#00aeef",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: faixasFiltro
        }
      ]
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: true
    }

  }
};

// POR FAIXA ETARIA GLOBO ====================================================

let faixasEtariasGlobo = [];

for (var i = 0; i < data.length; i++) {
  let pessoaIdade = data[i].Idade;
  faixasEtariasGlobo.push(pessoaIdade);
}

let faixasFiltroGlobo = [];

for (var i = 0; i < faixasEtarias.length/8; i++) {
  faixasFiltroGlobo.push(faixasEtariasGlobo[Math.floor(Math.random() * (70 - 14) + 14)]);
}

faixasFiltroGlobo = GaussianSort(faixasFiltroGlobo);

const GloboFaixaEtaria = {
  data: canvas => {
    return {
      labels: faixasFiltroGlobo,
      datasets: [
        {
          borderColor: "#00aeef",
          backgroundColor: "#00aeef",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: faixasFiltroGlobo
        }
      ]
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: true
    }

  }
};


// POR REGIAO RELEVANTE ====================================================

let divisaoPorRegiao = new Array(5).fill(0);

for (var i = 0; i < data.length; i++) {
  let regiao = data[i].Regiao;
  let patrocinadorElemento = data[i]["Patrocinador principal"];
  if (patrocinadorElemento == patroMaiorValor) {
    if (regiao == "NE") {
      divisaoPorRegiao[0]++;
    }

    if (regiao == "N") {
      divisaoPorRegiao[1]++;
    }

    if (regiao == "S") {
      divisaoPorRegiao[2]++;
    }

    if (regiao == "SE") {
      divisaoPorRegiao[3]++;
    }

    if (regiao == "CO") {
      divisaoPorRegiao[4]++;
    }
  }
}

let DataNE = new Array(8).fill(0);
DataNE[0] = divisaoPorRegiao[0];

let DataN = new Array(8).fill(0);
DataN[1] = divisaoPorRegiao[1];

let DataSE = new Array(8).fill(0);
DataSE[2] = divisaoPorRegiao[2];

let DataS = new Array(8).fill(0);
DataS[3] = divisaoPorRegiao[3];

let DataCO = new Array(8).fill(0);
DataCO[4] = divisaoPorRegiao[4];


const distribuicaoPorRegiao = {
  data: canvas => {
    return {
      labels: ["NE", "N", "S", "SE", "CO"],
      datasets: [
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataNE
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataN
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataS
        },
        {
          borderColor: "#00aeef",
          backgroundColor: "#00aeef",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataSE
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataCO
        }
      ]
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: true
    }

  }
};

// POR REGIAO GLOBO ====================================================

let divisaoPorRegiaoGlobo = new Array(5).fill(0);

for (var i = 0; i < data.length; i++) {
  let regiao = data[i].Regiao;
  if (regiao == "NE") {
    divisaoPorRegiaoGlobo[0]++;
  }

  if (regiao == "N") {
    divisaoPorRegiaoGlobo[1]++;
  }

  if (regiao == "S") {
    divisaoPorRegiaoGlobo[2]++;
  }

  if (regiao == "SE") {
    divisaoPorRegiaoGlobo[3]++;
  }

  if (regiao == "CO") {
    divisaoPorRegiaoGlobo[4]++;

  }
}

let DataNEGlobo = new Array(8).fill(0);
DataNEGlobo[0] = divisaoPorRegiaoGlobo[0];

let DataNGlobo = new Array(8).fill(0);
DataNGlobo[1] = divisaoPorRegiaoGlobo[1];

let DataSEGlobo = new Array(8).fill(0);
DataSEGlobo[2] = divisaoPorRegiaoGlobo[2];

let DataSGlobo = new Array(8).fill(0);
DataSGlobo[3] = divisaoPorRegiaoGlobo[3];

let DataCOGlobo = new Array(8).fill(0);
DataCOGlobo[4] = divisaoPorRegiaoGlobo[4];


const GloboPorRegiao = {
  data: canvas => {
    return {
      labels: ["NE", "N", "S", "SE", "CO"],
      datasets: [
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataNEGlobo
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataNGlobo
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataSGlobo
        },
        {
          borderColor: "#00aeef",
          backgroundColor: "#00aeef",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataSEGlobo
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataCOGlobo
        }
      ]
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: true
    }

  }
};

// POR GENERO RELEVANTE ====================================================

let divisaoPorGenero = new Array(2).fill(0);

for (var i = 0; i < data.length; i++) {
  let regiao = data[i].Genero;
  let patrocinadorElemento = data[i]["Patrocinador principal"];
  if (patrocinadorElemento == patroMaiorValor) {
    if (regiao == "Masculino") {
      divisaoPorGenero[0]++;
    }

    if (regiao == "Feminino") {
      divisaoPorGenero[1]++;
    }
  }

}

let DataMasculino = new Array(2).fill(0);
DataMasculino[0] = divisaoPorGenero[0];

let DataFeminino = new Array(2).fill(0);
DataFeminino[1] = divisaoPorGenero[1];



const distribuicaoPorGenero = {
  data: canvas => {
    return {
      labels: ["Masculino", "Feminino"],
      datasets: [
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataMasculino
        },
        {
          borderColor: "#00aeef",
          backgroundColor: "#00aeef",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataFeminino
        }

      ]
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: true
    }

  }
};

// POR GENERO GLOBO ====================================================

let divisaoPorGeneroGlobo = new Array(2).fill(0);

for (var i = 0; i < data.length; i++) {
  let regiao = data[i].Genero;

  if (regiao == "Masculino") {
    divisaoPorGeneroGlobo[0]++;
  }

  if (regiao == "Feminino") {
    divisaoPorGeneroGlobo[1]++;

  }

}

let DataMasculinoGlobo = new Array(2).fill(0);
DataMasculinoGlobo[0] = divisaoPorGeneroGlobo[0];

let DataFemininoGlobo = new Array(2).fill(0);
DataFemininoGlobo[1] = divisaoPorGeneroGlobo[1];



const GloboPorGenero = {
  data: canvas => {
    return {
      labels: ["Masculino", "Feminino"],
      datasets: [
        {
          borderColor: "#00aeef",
          backgroundColor: "#00aeef",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataMasculinoGlobo
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          data: DataFemininoGlobo
        }

      ]
    };
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: true
    }

  }
};

module.exports = {
  distribuicaoDePatrocinadores,
  patrocinadoresFaixaEtaria,
  distribuicaoPorRegiao,
  distribuicaoPorGenero,
  GloboFaixaEtaria,
  GloboPorRegiao,
  GloboPorGenero
};
