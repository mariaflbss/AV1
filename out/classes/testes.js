"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultadoTeste = exports.TipoTeste = void 0;
var TipoTeste;
(function (TipoTeste) {
    TipoTeste["ELETRICO"] = "ELETRICO";
    TipoTeste["HIDRAULICO"] = "HIDRAULICO";
    TipoTeste["AERODINAMICO"] = "AERODINAMICO";
})(TipoTeste || (exports.TipoTeste = TipoTeste = {}));
var ResultadoTeste;
(function (ResultadoTeste) {
    ResultadoTeste["APROVADO"] = "APROVADO";
    ResultadoTeste["REPROVADO"] = "REPROVADO";
})(ResultadoTeste || (exports.ResultadoTeste = ResultadoTeste = {}));
var Teste = /** @class */ (function () {
    function Teste(tipo, resultado) {
        this.tipo = tipo;
        this.resultado = resultado;
    }
    Object.defineProperty(Teste.prototype, "getTipo", {
        get: function () {
            return this.tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teste.prototype, "getResultado", {
        get: function () {
            return this.resultado;
        },
        enumerable: false,
        configurable: true
    });
    Teste.prototype.salvar = function () {
        var obj = {
            tipo: this.tipo,
            resultado: this.resultado,
        };
        return JSON.stringify(obj);
    };
    Teste.prototype.carregar = function (linha) {
        try {
            var obj = JSON.parse(linha);
            this.tipo = obj.tipo;
            this.resultado = obj.resultado;
        }
        catch (err) {
            console.error("Falha ao carregar Teste:", err);
        }
    };
    return Teste;
}());
exports.default = Teste;
