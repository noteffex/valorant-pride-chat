const readline = require('readline-sync');
const clipboardy = require('clipboardy');
const colors = ['<enemy>', '<team>', '<self>', '<notification>', '<warning>']
const random_colors = false;

while (true) {
    var to_say = '';
    var text = readline.question("[+] Enter pride text: ");

    for (var i = 0; i < text.length; i++) {
        if (text[i] == '') {
            to_say += text[i];
        } else {
            to_say += colors[random_colors ? Math.floor(Math.random() * 5) : i % 5] + text[i] + '</>';
        }
    }
    console.log("[*] Copied!");
    clipboardy.writeSync(to_say);
}