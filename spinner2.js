let timer = 100;
let characters = ["|", "/", "-", "\\"];

for (let i = 0; i < 9; i++) {
  let index = i % 4;
  setTimeout(() => {
    process.stdout.write(`\r${characters[index]}`);
  }, timer);
  timer += 200;
}