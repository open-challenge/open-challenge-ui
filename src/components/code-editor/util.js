export const cleanCode = (code, logReplace, args) => {
  const allLines = code.split('\n');
  const response = [];
  for (let i = 0; i < allLines.length; i++) {
    const j = i;
    response.push(
      allLines[i].replace(/console.log\(/g, `${logReplace}(${j}, `),
    );
  }
  if (args?.length > 0) {
    response.push(`test(${args.join(',')})`);
  }
  response.push(`test()`);
  return response.join('\n');
};
