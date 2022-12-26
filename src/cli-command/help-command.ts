import { CliCommandInterface } from './cli-command.interface.js';
import chalk from 'chalk';

export default class HelpCommand implements CliCommandInterface {
  public readonly name = '--help';

  execute() {
    console.log(`
      Программа для подготовки данных для REST API сервера.

      Пример: cli.js --<command> [--arguments]

      ${chalk.blue('Команды:')}

      ${chalk.green('--version:')}                   # выводит номер версии
      ${chalk.green('--help:')}                      # печатает этот текст
      ${chalk.green('--import <path>:')}             # импортирует данные из TSV
      ${chalk.green('--generate <n> <path> <url>')}  # генерирует произвольное количество тестовых данных
    `);
  }
}
