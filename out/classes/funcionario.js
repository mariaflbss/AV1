"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NivelPermissao = void 0;
var NivelPermissao;
(function (NivelPermissao) {
    NivelPermissao["ADMINISTRADOR"] = "ADMINISTRADOR";
    NivelPermissao["ENGENHEIRO"] = "ENGENHEIRO";
    NivelPermissao["OPERADOR"] = "OPERADOR";
})(NivelPermissao || (exports.NivelPermissao = NivelPermissao = {}));
var Funcionario = /** @class */ (function () {
    function Funcionario(id, nome, telefone, endereco, usuario, senha, nivelPermissao) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.usuario = usuario;
        this.senha = senha;
        this.nivelPermissao = nivelPermissao;
    }
    Object.defineProperty(Funcionario.prototype, "getId", {
        // Getters
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "getTelefone", {
        get: function () {
            return this.telefone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "getEndereco", {
        get: function () {
            return this.endereco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "getUsuario", {
        get: function () {
            return this.usuario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "getNivelPermissao", {
        get: function () {
            return this.nivelPermissao;
        },
        enumerable: false,
        configurable: true
    });
    // Autenticação 
    Funcionario.prototype.autenticar = function (usuario, senha) {
        return this.usuario === usuario && this.senha === senha;
    };
    Funcionario.prototype.salvar = function () {
        var obj = {
            id: this.id,
            nome: this.nome,
            telefone: this.telefone,
            endereco: this.endereco,
            usuario: this.usuario,
            senha: this.senha,
            nivelPermissao: this.nivelPermissao,
        };
        return JSON.stringify(obj);
    };
    Funcionario.prototype.carregar = function (linha) {
        try {
            var obj = JSON.parse(linha);
            this.id = obj.id;
            this.nome = obj.nome;
            this.telefone = obj.telefone;
            this.endereco = obj.endereco;
            this.usuario = obj.usuario;
            this.senha = obj.senha;
            this.nivelPermissao = obj.nivelPermissao;
        }
        catch (err) {
            console.error("Falha ao carregar Funcionário:", err);
        }
    };
    return Funcionario;
}());
exports.default = Funcionario;
