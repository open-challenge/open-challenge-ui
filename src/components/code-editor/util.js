export const cleanCode = (code, logReplace, args) => {
  const allLines = code.split('\n');
  const response = [];
  for (let i = 0; i < allLines.length; i++) {
    const j = i;
    response.push(
      allLines[i].replace(/console.log\(/g, `${logReplace}(${j}, `)
    );
  }
  response.push(`test(${args.join(',')})`);
  return response.join('\n');
};
