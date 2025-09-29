"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoAeronave = void 0;
var TipoAeronave;
(function (TipoAeronave) {
    TipoAeronave["COMERCIAL"] = "COMERCIAL";
    TipoAeronave["MILITAR"] = "MILITAR";
})(TipoAeronave || (exports.TipoAeronave = TipoAeronave = {}));
var Aeronave = /** @class */ (function () {
    function Aeronave(codigo, modelo, tipo, capacidade, alcance) {
        this.codigo = codigo;
        this.modelo = modelo;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.alcance = alcance;
    }
    Object.defineProperty(Aeronave.prototype, "getCodigo", {
        // Getters
        get: function () {
            return this.codigo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aeronave.prototype, "getModelo", {
        get: function () {
            return this.modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aeronave.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aeronave.prototype, "getCapacidade", {
        get: function () {
            return this.capacidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aeronave.prototype, "getAlcance", {
        get: function () {
            return this.alcance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aeronave.prototype, "setModelo", {
        // Setters
        set: function (novoModelo) {
            this.modelo = novoModelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aeronave.prototype, "setCapacidade", {
        set: function (novaCapacidade) {
            this.capacidade = novaCapacidade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aeronave.prototype, "setAlcance", {
        set: function (novoAlcance) {
            this.alcance = novoAlcance;
        },
        enumerable: false,
        configurable: true
    });
    // Métodos
    Aeronave.prototype.detalhes = function () {
        console.log("\nDetalhes da Aeronave ".concat(this.getCodigo, ":\n  - C\u00F3digo: ").concat(this.getCodigo, "\n  - Modelo: ").concat(this.getModelo, "\n  - Tipo: ").concat(this.getTipo, "\n  - Capacidade: ").concat(this.getCapacidade, "\n  - Alcance: ").concat(this.getAlcance));
    };
    Aeronave.prototype.salvar = function () {
        // retorna uma string serializada para salvar em arquivo
        var obj = {
            codigo: this.codigo,
            modelo: this.modelo,
            tipo: this.tipo,
            capacidade: this.capacidade,
            alcance: this.alcance,
        };
        return JSON.stringify(obj);
    };
    Aeronave.prototype.carregar = function (linha) {
        try {
            var obj = JSON.parse(linha);
            this.codigo = obj.codigo;
            this.modelo = obj.modelo;
            this.tipo = obj.tipo;
            this.capacidade = obj.capacidade;
            this.alcance = obj.alcance;
        }
        catch (err) {
            console.error("Falha ao carregar Aeronave:", err);
        }
    };
    return Aeronave;
}());
exports.default = Aeronave;
