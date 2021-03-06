'use strict';

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-Xss-Protection', '1; mode=block');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Pagination', '{"total_entries":11,"total_pages":1,"previous_page":null,"current_page":1,"next_page":null}');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Etag', '"b9b2cb7d7ca22ba6c4178463069e7eac"');
  res.setHeader('Cache-Control', 'max-age=0, private, must-revalidate');
  res.setHeader('X-Request-Id', '6010ee23-10b6-466a-a177-1349366c8fa2');
  res.setHeader('X-Runtime', '0.100741');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Date', 'Tue, 22 Mar 2016 20:00:30 GMT');
  res.setHeader('Connection', 'close');

  res.write(new Buffer(JSON.stringify({
    "transactions": [{
      "id": 1,
      "external_id": "1-1591-2222222233-201509302128",
      "biller_id": 1591,
      "account_number": "2222222233",
      "bill_amount": 2.0,
      "bill_amount_currency": "USD",
      "fx_rate": 16.6048,
      "bill_amount_usd": 2.0,
      "bill_amount_chain_currency": 2.0,
      "payment_transaction_fee": 0.0,
      "payment_total_usd": 2.0,
      "payment_total_chain_currency": 2.0,
      "chain_earned": 0.5,
      "chain_paid": 1.5,
      "starting_balance": -602.1,
      "ending_balance": -603.6,
      "hours_to_fulfill": 0,
      "discount": 0.0,
      "sms_text": null,
      "created_at": "2015-09-30T21:28:08Z",
      "payment_status": "sent",
      "bill_amount_local_currency": 20.0,
      "local_currency": "MXN"
    }]
  })));
  res.end();

  return __filename;
};
