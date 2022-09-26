#!/usr/bin/env node

import { Command } from "commander";
import serve from "./serve.js";

const program = new Command("postbote");
program.showHelpAfterError().showSuggestionAfterError();

program
  .command("serve")
  .alias("dev")
  .description("Start development server")
  .action(serve);

program.parse(process.argv);
