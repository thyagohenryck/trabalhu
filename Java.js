function verificarSenha() {
  const senha = document.getElementById("senha").value;

  let pontos = 0;

  if (senha.length >= 8) pontos++;
  if (/[A-Z]/.test(senha)) pontos++;
  if (/[0-9]/.test(senha)) pontos++;
  if (/[^A-Za-z0-9]/.test(senha)) pontos++;

  let resultado = "";

  if (pontos <= 1) {
    resultado = "Senha fraca ❌";
  } else if (pontos === 2 || pontos === 3) {
    resultado = "Senha média ⚠️";
  } else {
    resultado = "Senha forte 🔐";
  }

  document.getElementById("resultado").innerText = resultado;
}