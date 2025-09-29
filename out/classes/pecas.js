"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPeca = exports.TipoPeca = void 0;
var TipoPeca;
(function (TipoPeca) {
    TipoPeca["NACIONAL"] = "NACIONAL";
    TipoPeca["IMPORTADA"] = "IMPORTADA";
})(TipoPeca || (exports.TipoPeca = TipoPeca = {}));
var StatusPeca;
(function (StatusPeca) {
    StatusPeca["EM_PRODUCAO"] = "EM_PRODUCAO";
    StatusPeca["EM_TRANSPORTE"] = "EM_TRANSPORTE";
    StatusPeca["PRONTA"] = "PRONTA";
})(StatusPeca || (exports.StatusPeca = StatusPeca = {}));
var Peca = /** @class */ (function () {
    function Peca(nome, tipo, fornecedor, status) {
        this.nome = nome;
        this.tipo = tipo;
        this.fornecedor = fornecedor;
        this.status = status;
    }
    Object.defineProperty(Peca.prototype, "getNome", {
        // Getters
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Peca.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Peca.prototype, "getFornecedor", {
        get: function () {
            return this.fornecedor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Peca.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: false,
        configurable: true
    });
    Peca.prototype.atualizarStatus = function (novoStatus) {
        this.status = novoStatus;
    };
    Peca.prototype.salvar = function () {
        var obj = {
            nome: this.nome,
            tipo: this.tipo,
            fornecedor: this.fornecedor,
            status: this.status,
        };
        return JSON.stringify(obj);
    };
    Peca.prototype.carregar = function (linha) {
        try {
            var obj = JSON.parse(linha);
            this.nome = obj.nome;
            this.tipo = obj.tipo;
            this.fornecedor = obj.fornecedor;
            this.status = obj.status;
        }
        catch (err) {
            console.error("Falha ao carregar Peça:", err);
        }
    };
    return Peca;
}());
exports.default = Peca;
