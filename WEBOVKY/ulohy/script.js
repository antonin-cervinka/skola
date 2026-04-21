/* -----------------------------------------------------------
 * Úloha 70: Validace e-mailu
 * Napiš regulární výraz pro validaci e-mailové adresy.
 * Implementuj funkci validateEmail(email), která vrátí true/false
 * podle toho, zda je e-mail validní.
 *
 * Procvičuje: základní regex, escapování teček, testování pomocí test()
 * ----------------------------------------------------------- */

function validateEmail(email) {
    // Vylepšený regex pro validaci e-mailu
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

document.getElementById("run70").addEventListener("click", function() {
    const email = document.getElementById("Input70").value;
    const output = document.getElementById("Output70");

    if (validateEmail(email)) {
        output.textContent = "E-mail je platný!";
        output.classList.remove("bg-red-200");
        output.classList.add("bg-green-200");
    } else {
        output.textContent = "E-mail není platný!";
        output.classList.remove("bg-green-200");
        output.classList.add("bg-red-200");
    }
});

/* -----------------------------------------------------------
 * Úloha 71: Hledání čísel v textu
 * Vytvoř regulární výraz, který najde všechna čísla v textu.
 * Implementuj funkci findNumbers(text), která vrátí pole čísel.
 *
 * Procvičuje: kvantifikátory +, globální modifikátor g, match()
 * ----------------------------------------------------------- */

function findNumbers(text) {
    const regex = /\d+/g;
    return text.match(regex);
}

document.getElementById("run71").addEventListener("click", function() {
    const text = document.getElementById("Input71").value;
    const numbers = findNumbers(text);
    const output = document.getElementById("Output71");

    if (numbers) {
        output.textContent = "Našli jsme následující čísla: " + numbers.join(", ");
    } else {
        output.textContent = "V textu žádná čísla nenalezena.";
    }
});

/* -----------------------------------------------------------
 * Úloha 72: Formátování data
 * Napiš regex, který zachytí datum ve formátu DD.MM.YYYY a převede
 * ho pomocí replace() na formát YYYY-MM-DD.
 *
 * Procvičuje: skupiny (), backreference $1-$3, replace()
 * ----------------------------------------------------------- */

function runTask72() {
    const date = document.getElementById("dateInput").value;
    const output = document.getElementById("Output72");

    const regex = /(\d{2})\.(\d{2})\.(\d{4})/;
    const formattedDate = date.replace(regex, '$3-$2-$1');
    output.textContent = `Formátované datum: ${formattedDate}`;
}


/* -----------------------------------------------------------
 * Úloha 73: Validace hesla
 * Napiš regex, který ověří, že heslo obsahuje:
 * - min. 8 znaků
 * - velké písmeno
 * - malé písmeno
 * - číslici
 * - speciální znak
 *
 * Procvičuje: lookaheads, kombinace skupin, komplexní validace
 * ----------------------------------------------------------- */

function runTask73() {
    const password = document.getElementById("passwordInput").value;
    const output = document.getElementById("Output73");

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (regex.test(password)) {
        output.textContent = "Heslo je platné!";
        output.classList.remove("bg-red-200");
        output.classList.add("bg-green-200");
    } else {
        output.textContent = "Heslo není platné!";
        output.classList.remove("bg-green-200");
        output.classList.add("bg-red-200");
    }
}


/* -----------------------------------------------------------
 * Úloha 74: Extrakce HTML tagů
 * Pomocí regexu vyber všechny HTML tagy včetně jejich obsahu.
 * Implementuj funkci extractTags(html), která vrátí pole tagů.
 *
 * Procvičuje: nežravé kvantifikátory *?, globální match
 * ----------------------------------------------------------- */

function runTask74() {
    const html = document.getElementById("htmlInput").value;
    const output = document.getElementById("Output74");

    const regex = /<\/?([a-zA-Z0-9]+)([^>]*)>/g;
    const tags = html.match(regex);
    if (tags) {
        output.textContent = "Našli jsme následující tagy: " + tags.join(", ");
    } else {
        output.textContent = "Žádné tagy nebyly nalezeny.";
    }
}


/* -----------------------------------------------------------
 * Úloha 75: Čištění textu
 * Vytvoř dva regexy:
 * 1. pro nahrazení vícenásobných mezer jednou
 * 2. pro odstranění speciálních znaků
 *
 * Implementuj funkci cleanText(text).
 *
 * Procvičuje: skupiny znaků [], řetězení replace()
 * ----------------------------------------------------------- */

function runTask75() {
    const text = document.getElementById("cleanInput").value;
    const output = document.getElementById("Output75");

    const regex1 = /\s+/g;
    const regex2 = /[^a-zA-Z0-9\s]/g;
    const cleanedText = text.replace(regex1, ' ').replace(regex2, '');
    output.textContent = "Vyčištěný text: " + cleanedText;
}


/* -----------------------------------------------------------
 * Úloha 76: Parsování CSV
 * Pomocí regexu rozparsuj CSV s hodnotami v uvozovkách.
 * Cílem je vrátit strukturovaná data.
 *
 * Procvičuje: matchování textu s ohledem na uvozovky, skupiny (), g
 * ----------------------------------------------------------- */

function runTask76() {
    const csvText = document.getElementById("csvInput").value;
    const output = document.getElementById("Output76");

    const regex = /"(.*?)"/g;
    const parsedData = csvText.match(regex);
    if (parsedData) {
        output.textContent = "Parsované hodnoty: " + parsedData.join(", ");
    } else {
        output.textContent = "Neplatný CSV formát.";
    }
}

/* -----------------------------------------------------------
 * Úloha 77: Validace kreditní karty
 * Napiš regex pro validaci čísel kreditních karet (Visa, MasterCard).
 * Ignoruj mezery ve vstupu.
 *
 * Procvičuje: alternativy, různé délky, escapování mezer
 * ----------------------------------------------------------- */

function runTask77() {
    const cardNumber = document.getElementById("cardInput").value;
    const output = document.getElementById("Output77");

    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
    if (regex.test(cardNumber.replace(/\s/g, ''))) {
        output.textContent = "Číslo karty je platné!";
        output.classList.remove("bg-red-200");
        output.classList.add("bg-green-200");
    } else {
        output.textContent = "Číslo karty není platné!";
        output.classList.remove("bg-green-200");
        output.classList.add("bg-red-200");
    }
}


/* -----------------------------------------------------------
 * Úloha 78: Minifikace CSS
 * Implementuj funkci minifyCSS(css), která:
 * 1. odstraní CSS komentáře
 * 2. odstraní zbytečné mezery
 *
 * Procvičuje: použití regexu pro odstranění bloků, whitespace cleanup
 * ----------------------------------------------------------- */

function runTask78() {
    const css = document.getElementById("cssInput").value;
    const output = document.getElementById("Output78");

    const regex1 = /\/\*[\s\S]*?\*\//g; // komentáře
    const regex2 = /\s+/g; // odstraní vícenásobné mezery
    const minifiedCSS = css.replace(regex1, '').replace(regex2, ' ').trim();
    output.textContent = "Minifikovaný CSS: " + minifiedCSS;
}


/* -----------------------------------------------------------
 * Úloha 79: Analyzátor logů
 * Pomocí regexu extrahuj logy ve formátu:
 * [TIMESTAMP] LEVEL: MESSAGE
 *
 * Cílem je získat timestamp, úroveň a zprávu.
 *
 * Procvičuje: skupiny (), kapturní skupiny, match()
 * ----------------------------------------------------------- */

function runTask79() {
    const logs = document.getElementById("logsInput").value;
    const output = document.getElementById("Output79");

    const regex = /\[(.*?)\]\s(\w+):\s(.*)/g;
    const logsArray = logs.match(regex);
    if (logsArray) {
        output.textContent = "Nalezené logy: " + logsArray.join(", ");
    } else {
        output.textContent = "Žádné logy nenalezeny.";
    }
}


/* -----------------------------------------------------------
 * Úloha 80: Jednoduchý template engine
 * Napiš regex, který najde {{promenne}} a nahradí je hodnotami
 * z objektu data.
 *
 * Procvičuje: zachytávací skupiny, callback v replace()
 * ----------------------------------------------------------- */

function runTask80() {
    const template = document.getElementById("templateInput").value;
    const data = { name: "Petr", age: 25 }; // Můžete přidat další data podle potřeby
    const output = document.getElementById("Output80");

    const regex = /{{(\w+)}}/g;
    const renderedTemplate = template.replace(regex, (match, key) => data[key] || '');
    output.textContent = "Vykreslená šablona: " + renderedTemplate;
}


/* -----------------------------------------------------------
 * Úloha 81: Validace českého telefonního čísla
 * Podporované formáty:
 * - +420 123 456 789
 * - 123 456 789
 * - 604123456
 *
 * Procvičuje: nepovinný prefix, alternativy, čištění whitespace
 * ----------------------------------------------------------- */

function runTask81() {
    const phone = document.getElementById("phoneInput").value;
    const output = document.getElementById("Output81");

    const regex = /^(\+420\s?)?\d{3}\s?\d{3}\s?\d{3}$/;
    if (regex.test(phone.replace(/\s/g, ''))) {
        output.textContent = "Telefonní číslo je platné!";
        output.classList.remove("bg-red-200");
        output.classList.add("bg-green-200");
    } else {
        output.textContent = "Telefonní číslo není platné!";
        output.classList.remove("bg-green-200");
        output.classList.add("bg-red-200");
    }
}

/* -----------------------------------------------------------
 * Úloha 82: Rozdělení camelCase na slova
 * Napiš regex, který rozdělí camelCase text na slova.
 * Např. "camelCaseText" → "camel Case Text"
 *
 * Procvičuje: lookahead/lookbehind nebo skupiny, replace()
 * ----------------------------------------------------------- */

function runTask82() {
    const camelCase = document.getElementById("camelInput").value;
    const output = document.getElementById("Output82");

    const regex = /([a-z])([A-Z])/g;
    const splitText = camelCase.replace(regex, '$1 $2');
    output.textContent = "Rozdělený text: " + splitText;
}


// TEST
console.log(validateEmail("test@example.com"));
console.log(findNumbers("Mám 3 jablka a 15 hrušek"));
console.log(formatDate("25.12.2023"));
console.log(validatePassword("SilnéHeslo123!"));
console.log(extractTags('<div>Test</div><p>Ahoj</p>'));
console.log(cleanText("  Příliš    žluťoučký  kůň!  "));
console.log(validateCreditCard("4111 1111 1111 1111"));
console.log(minifyCSS("body { color: red; }"));
console.log(parseLogs(`[2023-01-01 10:00:00] INFO: Start`));
console.log(renderTemplate("Ahoj {{name}}", { name: "Petr" }));
console.log(validateCzechPhone("+420 604 123 456"));
console.log(camelCaseToWords("camelCaseText"));