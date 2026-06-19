function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const forca = document.getElementById("forcaSenha");

  let nivel = 0;

  if (senha.length >= 6) nivel++;
  if (senha.length >= 10) nivel++;
  if (/[A-Z]/.test(senha)) nivel++;
  if (/[0-9]/.test(senha)) nivel++;
  if (/[^A-Za-z0-9]/.test(senha)) nivel++;

  if (senha.length === 0) {
    forca.textContent = "Força da senha: -";
    forca.style.color = "black";
  } else if (nivel <= 2) {
    forca.textContent = "Força da senha: FRACA";
    forca.style.color = "red";
  } else if (nivel <= 4) {
    forca.textContent = "Força da senha: MÉDIA";
    forca.style.color = "orange";
  } else {
    forca.textContent = "Força da senha: FORTE";
    forca.style.color = "green";
  }
}