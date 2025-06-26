import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import './PaymentsHistory.css';

const PaymentsHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5001/api/payments/history', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (!response.ok) throw new Error('Failed to fetch payments');
        const data = await response.json();
        setPayments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, []);

  return (
    <Layout>
      <div className="payments-history-page">
        <h1 className="payments-title">Payments History</h1>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          payments.length === 0 ? (
            <p>No payments found.</p>
          ) : (
            <div className="payments-table-wrapper">
              <table className="payments-table modern">
                <thead>
                  <tr>
                    <th>Scholarship</th>
                    <th>Amount (LKR)</th>
                    <th>Date</th>
                    <th>Method</th>
                    <th>Transaction ID</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment.payment_id}>
                      <td>{payment.application?.scholarship?.name || '-'}</td>
                      <td>{Number(payment.amount).toLocaleString()}</td>
                      <td>{new Date(payment.payment_date).toLocaleDateString()}</td>
                      <td>{payment.payment_method}</td>
                      <td>{payment.transaction_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default PaymentsHistory; 