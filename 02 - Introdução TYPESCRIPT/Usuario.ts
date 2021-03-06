import Endereco from "./Endereco";
import { Sexo } from "./Utils";

export default class Usuario {
  private _nome : string;
  private _cpf : number;
  private _rg : number;
  private _sexo : Sexo;
  private _endereco : Endereco;

  constructor (nome: string, cpf: number, rg: number, sexo: Sexo, endereco : Endereco) {
    this._nome = nome;
    this._cpf = cpf;
    this._rg = rg;
    this._sexo = sexo;
    this._endereco = endereco;
  }

  public get nome() : string{
    return this._nome;
  }
  
  public set nome(valor : string) {
    this.nome = valor;
  }

  public get cpf() : number {
    return this._cpf
  }
  
  public set cpf(valor : number) {
    this.cpf = valor;
  }
  
  public get rg() : number {
    return this._rg
  }

  public set rg(valor : number) {
    this.rg = valor;
  }

  public get sexo() : Sexo {
    return this._sexo
  }

  public set sexo(valor : Sexo) {
    this.sexo = valor;
  }

  public get endereco() : Endereco {
    return this._endereco;
  }

  public set endereco(valor : Endereco) {
    this.endereco = valor;
  }
}