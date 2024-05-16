const geneticCode = {
    "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine",
    "AGU": "Sérine", "AGC": "Sérine",
    "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
    "UUA": "Leucine", "UUG": "Leucine",
    "UUU": "Phénylalanine", "UUC": "Phénylalanine",
    "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine",
    "AGA": "Arginine", "AGG": "Arginine",
    "UAU": "Tyrosine", "UAC": "Tyrosine"
};

function translateRNAtoProteins(rna) {
    const codonLength = 3;
    let proteins = [];

    for (let i = 0; i < rna.length; i += codonLength) {
        const codon = rna.slice(i, i + codonLength);
        if (geneticCode[codon]) {
            proteins.push(geneticCode[codon]);
        } else {
            proteins.push("Unknown");
        }
    }

    return proteins.join("-");
}

function afficherTraductionARN() {
    const rna1 = "CCGUCGUUGCGCUACAGC";
    const rna2 = "CCUCGCCGGUACUUCUCG";

    const resultatARN1 = translateRNAtoProteins(rna1);
    const resultatARN2 = translateRNAtoProteins(rna2);

    document.getElementById('resultat_arn1').innerText = "ARN 1 : " + resultatARN1;
    document.getElementById('resultat_arn2').innerText = "ARN 2 : " + resultatARN2;
}