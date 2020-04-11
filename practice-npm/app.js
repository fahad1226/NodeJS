const validator = require('validator')
const chalk = require('chalk')
console.log(validator.isEmail('fahad@gmail.com'));
console.log(validator.isEmpty("  ",{ ignore_whitespace:true }));
console.log(chalk.blue(validator.isURL('www.kjds/com')));


const log = console.log;
log(chalk.red('Hello world!'));
log(chalk.red.bgRed.bold('Hello world!'));
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
log(chalk.hex("#DEADED").bold('Fahad Bin Munir'))

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
log(error('Error!'));
log(warning('Warning!'));

console.log(chalk.magenta("this is magenta color"));
console.log(chalk.cyan("this is cyan color"));
console.log(chalk.yellowBright("yellow bright color"));
console.log(chalk.bgBlackBright("Fahad Bin Munir"));
log(chalk.bgHex('#DEADED').underline('Hello, world!'))
console.log(chalk.bold.green("Green Text"));