#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .arguments("<file>")
  .option("-o --output <string>", "Specifies an output path", ".")
  .action(function (file: string) {
    const options = program.opts();
    const { output } = options;
    console.log({ file, output });
  })
  .parse(process.argv);
