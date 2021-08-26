const pessoa = {
  nome: "luiz",
  idade: 24,
};

const logaNomeDaPessoa = (param) => {
  param.nome = "luiz fernando";
  console.log(param.nome);
};

logaNomeDaPessoa(pessoa);
console.log(pessoa);

const hojeEhTerca = true;

const logaSeHojeEhTerca = (param) => {
  param = false;
  console.log(param);
};

logaSeHojeEhTerca(hojeEhTerca);
console.log(hojeEhTerca);

const luiz = () => {
  return {
    nome: "luiz",
  };
};


const luiz1 = (luiz().nome = "luiz fernando");


const luiz2 = (luiz().nome = "luizzz");

console.log(luiz1);
console.log(luiz2);
