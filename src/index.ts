const main = (argc: number, argv: string[]): void => {
  console.log(`Hello World ${argc}, ${JSON.stringify(argv, undefined, 2)}`)

  console.info('Program executed with code 0.');
}

main(process.argv.length, process.argv);
