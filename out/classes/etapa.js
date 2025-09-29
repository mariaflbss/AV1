"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEtapa = void 0;
var StatusEtapa;
(function (StatusEtapa) {
    StatusEtapa["PENDENTE"] = "PENDENTE";
    StatusEtapa["ANDAMENTO"] = "ANDAMENTO";
    StatusEtapa["CONCLUIDA"] = "CONCLUIDA";
})(StatusEtapa || (exports.StatusEtapa = StatusEtapa = {}));
var Etapa = /** @class */ (function () {
    function Etapa(nome, prazo, status, funcionarios) {
        if (status === void 0) { status = StatusEtapa.PENDENTE; }
        if (funcionarios === void 0) { funcionarios = []; }
        this.nome = nome;
        this.prazo = prazo;
        this.status = status;
        this.funcionarios = funcionarios;
    }
    Object.defineProperty(Etapa.prototype, "getNome", {
        // Getters
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etapa.prototype, "getPrazo", {
        get: function () {
            return this.prazo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etapa.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etapa.prototype, "getFuncionarios", {
        get: function () {
            return this.funcionarios;
        },
        enumerable: false,
        configurable: true
    });
    // Métodos
    Etapa.prototype.iniciar = function () {
        if (this.status === StatusEtapa.PENDENTE) {
            this.status = StatusEtapa.ANDAMENTO;
        }
        else {
            console.warn("Não pode iniciar etapa que não está em PENDENTE.");
        }
    };
    Etapa.prototype.finalizar = function () {
        if (this.status === StatusEtapa.ANDAMENTO) {
            this.status = StatusEtapa.CONCLUIDA;
        }
        else {
            console.warn("Não pode finalizar etapa que não está em ANDAMENTO.");
        }
    };
    Etapa.prototype.associarFuncionario = function (f) {
        // para evitar duplicatas
        var jáExiste = this.funcionarios.some(function (func) { return func.getId === f.getId; });
        if (!jáExiste) {
            this.funcionarios.push(f);
        }
        else {
            console.warn("Funcion\u00E1rio ".concat(f.getId, " j\u00E1 est\u00E1 associado \u00E0 etapa ").concat(this.nome, "."));
        }
    };
    Etapa.prototype.listarFuncionarios = function () {
        return this.funcionarios;
    };
    return Etapa;
}());
exports.default = Etapa;
