#!/usr/bin/env node

import CliApplication from './app/cli-application.js';
import HelpCommand from './cli-command/help-command.js';
import VersionCommand from './cli-command/version-command.js';
import ImportCommand from './cli-command/import-command.js';
import { CliCommandInterface } from './cli-command/cli-command.interface.js';

const manager = new CliApplication();

const commands: CliCommandInterface[] = [new VersionCommand(), new HelpCommand(), new ImportCommand()];
manager.registerCommands(commands);
manager.processCommand(process.argv);