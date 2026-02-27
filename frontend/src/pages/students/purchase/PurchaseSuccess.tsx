import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { verifyPaymentApi } from '@/api/student'

const PurchaseSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get("session_id");
  const orderId = queryParams.get("orderId");

  const [status, setStatus] = useState<'verifying' | 'success' | 'failed'>('verifying');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const hasVerified = useRef(false);

  useEffect(() => {
    console.log('PurchaseSuccess URL params:', location.search);
    console.log('sessionId:', sessionId, '| orderId:', orderId);

    if (!sessionId || !orderId) {
      setErrorMsg(`Missing params — session_id: ${sessionId ?? 'MISSING'}, orderId: ${orderId ?? 'MISSING'}`);
      setStatus('failed');
      return;
    }

    if (hasVerified.current) return;
    hasVerified.current = true;

    const verify = async () => {
      try {
        await verifyPaymentApi(sessionId, orderId);
        setStatus('success');
      } catch (error: any) {
        const msg = error?.message || error?.error || JSON.stringify(error);
        console.error('Payment verification error:', error);
        setErrorMsg(msg);
        setStatus('failed');
      }
    };

    verify();
  }, [sessionId, orderId]);

  if (status === 'verifying') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-md">
          <div className="text-blue-500 text-5xl mb-4">⏳</div>
          <h1 className="text-xl font-semibold">Verifying your payment...</h1>
          <p className="text-gray-500 mt-2">Please wait a moment.</p>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-md">
          <div className="text-red-500 text-6xl mb-4">❌</div>
          <h1 className="text-2xl font-bold mb-2">Payment Verification Failed</h1>
          <p className="text-gray-600 mb-2">
            We could not verify your payment. Please contact support if your payment was deducted.
          </p>
          {/* DEBUG INFO — remove after fixing */}
          <div className="text-xs text-left bg-gray-100 rounded p-2 mb-4 break-all space-y-1">
            <p><strong>Error:</strong> {errorMsg || 'Unknown error'}</p>
            <p><strong>session_id:</strong> {sessionId ?? '❌ MISSING'}</p>
            <p><strong>orderId:</strong> {orderId ?? '❌ MISSING'}</p>
            <p><strong>Full URL:</strong> {location.search}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center w-full max-w-md">
        <div className="text-green-500 text-6xl mb-4">✔️</div>
        <h1 className="text-2xl font-bold mb-2">Thank you for your purchase!</h1>
        <p className="text-gray-600 mb-4">
          Your order has been successfully placed.
        </p>
        <div className="text-sm text-gray-500 mb-6">
          <strong>Order ID:</strong> {orderId}
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="/profile/courses"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
          >
            Go to My courses
          </a>
          <a
            href="/"
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-full transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

export default PurchaseSuccess