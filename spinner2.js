let timer = 100;
const spinnerChars = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timer);
  timer += 200;
}
setTimeout(() => process.stdout.write('\n'), timer);