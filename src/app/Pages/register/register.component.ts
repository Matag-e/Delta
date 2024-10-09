import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user = {
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    estadual: '',
    ccm: '',
    codigo: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    tel: '',
    area: '',
    cepEmissao: '',
    logradouroEmissao: '',
    numeroEmissao: '',
    complementoEmissao: '',
    bairroEmissao: '',
    cepEntrega: '',
    logradouroEntrega: '',
    numeroEntrega: '',
    complementoEntrega: '',
    bairroEntrega: '',
  };

  constructor(private http: HttpClient) {}

  buscarEndereco(e: any) {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
        (data: any) => {
          if (!data.erro) {
            this.user.logradouroEmissao = data.logradouro;
            this.user.bairroEmissao = data.bairro;
          } else {
            Swal.fire({
              title: 'Erro',
              text: 'CEP não encontrado!',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        },
        (error) => {
          console.error('Erro ao buscar o CEP:', error);
          Swal.fire({
            title: 'Erro',
            text: 'Erro ao buscar o CEP.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      );
    }
  }

  buscarEnderecoEntrega(e: any) {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
      this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(
        (data: any) => {
          if (!data.erro) {
            this.user.logradouroEntrega = data.logradouro;
            this.user.bairroEntrega = data.bairro;
          } else {
            Swal.fire({
              title: 'Erro',
              text: 'CEP não encontrado!',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        },
        (error) => {
          console.error('Erro ao buscar o CEP:', error);
          Swal.fire({
            title: 'Erro',
            text: 'Erro ao buscar o CEP.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      );
    }
  }
  checkEmptyFields() {
    const emptyFields: string[] = []; // Array de strings para armazenar os campos vazios

    Object.keys(this.user).forEach((key) => {
      if (!this.user[key as keyof typeof this.user]) {
        // Fazendo o cast para 'keyof typeof this.user'
        emptyFields.push(key);
      }
    });

    if (emptyFields.length > 0) {
      Swal.fire({
        title: 'Erro',
        text: 'Preencha todos os campos obrigatórios!',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return false; // Retorna falso se houver campos vazios
    }
    return true; // Retorna verdadeiro se todos os campos estão preenchidos
  }

  onSubmit() {
    if (!this.checkEmptyFields()) {
      return;
    }

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post('http://localhost:3000/register', this.user, {
        headers,
        responseType: 'text',
      })
      .subscribe(
        (response) => {
          console.log('Usuario Cadastrado com sucesso!', response);
          Swal.fire({
            title: 'Sucesso',
            text: 'Usuário cadastrado com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
        },
        (error) => {
          console.error('Erro ao cadastrar o usuário:', error);
          Swal.fire({
            title: 'Erro',
            text: 'Erro ao cadastrar o usuário.',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      );
  }
}
