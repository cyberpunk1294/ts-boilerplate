void (async (): Promise<void> => {
  let code = 0;

  try {
    await new Promise((resolve) => {
	console.log('Hello World!')

	resolve()
    });
  } catch (err) {
    console.error(err);

    code = 1;
  }

  process.exit(code);
})();

