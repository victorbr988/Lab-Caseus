export function generateToken() {
  let token = "";
  for (let index = 0; index < 16; index += 1) {
    token += Math.floor(Math.random() * 10);
  }
  return token;
}
