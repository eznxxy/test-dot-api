class TextGenerator {
    username() {
        var wordList = ["aaberg", "aachen", "aalborg", "aalesund", "aalii", "aalst", "aalto", "aam", "aara", "aarau", "aardvark", "aardwolf", "aaren", "aargau", "aarhus", "aarika", "aaron", "aaronaaronic", "aaronson", "ab", "aba", "abaca", "abacist", "aback", "abacus", "abad", "abadan", "abaddon", "abaft", "abagael", "abagail", "abalone", "abamp", "abampere", "abana", "abandon", "abandoned", "abarca", "abase", "abash", "abate", "abatement", "abatis", "abattoir", "abaxial", "abb", "abba", "abbacy", "abbasid", "abbate", "abbatial", "abbe", "abbess", "abbevillian", "abbey", "abbeyabbi", "abbie", "abbieabbot", "abbotsen", "abbotson", "abbotsun", "abbott", "abbottson", "abbreviate", "abbreviated", "abbreviation", "abby", "abbyabbye", "abc", "abcoulomb", "abdel", "abdella", "abdias", "abdicate", "abdication", "abdomen", "abdominal", "abdominous", "abdu", "abduce", "abducent", "abduct", "abduction", "abductor", "abdul", "abdulabdulla", "abdullah", "abe", "abeabeam", "abebi", "abecedarian", "abecedarium", "abecedary", "abed", "abednego", "abel", "abelabelard", "abele", "abell", "abelmosk", "abeokuta", "abercrombie", "abercromby", "aberdare", "aberdeen", "abernathy", "abernethy", "abernon", "aberrant", "aberration", "abert", "abessive", "abet", "abettor", "abeu", "abey", "abeyance", "abeyant", "abeyta", "abfarad", "abhenry", "abhor", "abhorrence", "abhorrent", "abib", "abide", "abiding", "abidjan", "abie", "abigael", "abigail", "abigailabigale", "abijah", "abilene", "ability", "abingdon", "abiogenesis", "abiogenetic", "abiosis", "abiotic", "abirritant", "abirritate", "abisha", "abisia", "abixah", "abject", "abjuration", "abjure", "ablate", "ablation", "ablative", "ablaut", "ablaze", "able", "ablebodied", "ablepsia", "ables", "abloom", "ablution", "ably", "abm", "abmho", "abnaki", "abnegate", "abner", "abney", "abnormal", "abnormality", "abnormity", "aboard", "abode", "abohm", "abolish", "abolition", "abomasum", "abomb", "abominable", "abominate", "abomination", "aboral", "aboriginal", "aborigine", "aborn", "aborning", "abort", "aborticide", "abortifacient", "abortion", "abortionist", "abortive", "abott", "aboulia", "abound", "about", "aboutface", "aboutship"]
        var chooseWord = wordList[Math.floor(Math.random() * wordList.length)];
        var randomNumber = Math.floor((Math.random() * 1000) + 1);
        return chooseWord + randomNumber;
    }

    password(length) {
        let result = '';
        const characters = '!@#$%^&*()_+?\~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}

module.exports = new TextGenerator()