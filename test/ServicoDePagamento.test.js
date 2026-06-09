
const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', function () {

  it('deve realizar um pagamento categoria cara', function () {
    const servico = new ServicoDePagamento();

    servico.pagar('0987-7656-3475', 'Samar', 156.87);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '0987-7656-3475');
    assert.strictEqual(ultimoPagamento.empresa, 'Samar');
    assert.strictEqual(ultimoPagamento.valor, 156.87);
    assert.strictEqual(ultimoPagamento.categoria, 'cara');
  });

  it('deve realizar um pagamento categoria padrão', function () {
    const servico = new ServicoDePagamento();

    servico.pagar('1234-5678', 'Enel', 80);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.categoria, 'padrão');
  });

  it('deve consultar o último pagamento', function () {
    const servico = new ServicoDePagamento();

    servico.pagar('1111', 'Empresa A', 50);
    servico.pagar('2222', 'Empresa B', 200);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '2222');
  });

});
