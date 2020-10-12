function analyzeTemperature(quantity, data) {
  const tabData = data.split(' '); let verif = false;
  if (quantity <= 0) {
    return 0;
  } else {
    if (quantity <= 10000 && tabData.length === quantity) {
      let i = 0;
      while (i < tabData.length && verif === false) {
        let element = parseInt(tabData[i]);
        if (-273 > element || element > 5526)
          verif = true;
        if (Math.abs(element) <= Temperature) {
          Temperature = element;
        }
        ++i;
      } if (verif === true) {
        Temperature =    " les temperatures doivent être comprisent entre -273 à 5526. ";
      }
    } else {
      Temperature = "la quantité ne correspond pas ";
    }
  }
  return Temperature;
}
}
