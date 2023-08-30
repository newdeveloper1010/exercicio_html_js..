
	function adicionarLinha() {
	  var nome = document.getElementById("nome").value;
	  var telefone = document.getElementById("telefone").value;

      var tabela = document.getElementById("tabela");
	  var linha = tabela.insertRow(-1);
	  var coluna1 = linha.insertCell(0);
	  var coluna2 = linha.insertCell(1);
	  coluna1.innerHTML = nome;
	  coluna2.innerHTML = telefone;
	}