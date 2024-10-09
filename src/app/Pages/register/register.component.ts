import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  buscarEndereco(e: any) {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            (document.getElementById('logradouroEmissao') as HTMLInputElement).value =
              data.logradouro;
            (document.getElementById('bairroEmissao') as HTMLInputElement).value =
              data.bairro;
          } else {
            Swal.fire({
              title: 'Erro',
              text: 'CEP não encontrado!',
              icon: 'error',

            })
          }
        })
    }
  }

  buscarEnderecoEntrega(e: any) {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          if (!data.erro) {
            (document.getElementById('logradouroEntrega') as HTMLInputElement).value =
              data.logradouro;
            (document.getElementById('bairroEntrega') as HTMLInputElement).value =
              data.bairro;
          } else {
            Swal.fire({
              title: 'Erro',
              text: 'CEP não encontrado!',
              icon: 'error',
              confirmButtonText: 'Ok',
            })
          }
        })
    }
  }
}