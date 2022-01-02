function write(name: string, value: string) {
  if (value) {
    localStorage.setItem(name, value);
  } else {
    localStorage.removeItem(name);
  }
}

function writeJSON(name: string, value: object) {
  write(name, JSON.stringify(value));
}

function read(name: string, defaultValue: any) {
  return localStorage.hasOwnProperty(name) ? localStorage.getItem(name) : defaultValue;
}

function readJSON(name: string, defaultValue: any) {
  const result = read(name, defaultValue);
  return typeof result === 'string' ? JSON.parse(result) : result;
}

export default {
  write,
  writeJSON,
  read,
  readJSON,
};
