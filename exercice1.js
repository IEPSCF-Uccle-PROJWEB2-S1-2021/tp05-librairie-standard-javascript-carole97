function chuckNorris(msg) {
  
  let codeBinaire = "";

  for (i in msg) {
    codeBinaire += msg[i].charCodeAt(0).toString([2]) + " ";
  }

  let codeUnaire = "";
  let tab = codeBinaire.split("");

  if (tab[0] === '1') {
    codeUnaire += "0 0";
  } else {
    codeUnaire += "00 0";
  }

  for (let a = 1; a < tab.length; a++) {
    if (tab[a] === tab[(a - 1)]) {
      codeUnaire += "0";
    } else {
      if (tab[a] === '1') {
        codeUnaire += " 0 0";
      } else {
        codeUnaire += " 00 0";
      }
    }
  }
  return codeUnaire;
}

console.log(chuckNorris("C"));
console.log(chuckNorris("CC"));
}
