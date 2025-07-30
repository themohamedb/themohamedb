import { useState } from 'react';

export default function Book() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('male');
  const [tier, setTier] = useState('normal');
  const [status, setStatus] = useState('');

  const handlePay = async () => {
    setStatus('Waiting for payment...');
    // TODO: integrate EVC payment
    setTimeout(() => {
      setStatus('Payment failed. Try again.');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#FEF9EF] p-4">
      <header className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold text-[#1A2140]">Nasiye</div>
        <button className="text-[#1A2140]">Events</button>
      </header>
      <h1 className="text-2xl font-semibold text-[#1A2140] mb-2">Event Title</h1>
      <p className="text-[#1A2140] mb-4">Date · Time · Venue</p>
      <div className="space-y-2">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="w-full border-b outline-none bg-transparent" />
        <input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone" className="w-full border-b outline-none bg-transparent" />
        <div>
          <label className="mr-2">
            <input type="radio" value="male" checked={gender==='male'} onChange={e=>setGender(e.target.value)} /> Male
          </label>
          <label>
            <input type="radio" value="female" checked={gender==='female'} onChange={e=>setGender(e.target.value)} /> Female
          </label>
        </div>
        <div className="flex space-x-2">
          <button onClick={()=>setTier('normal')} className={`px-4 py-2 rounded-md ${tier==='normal' ? 'bg-[#1A2140] text-white' : 'border border-[#1A2140]'}`}>$5 Normal</button>
          <button onClick={()=>setTier('vip')} className={`px-4 py-2 rounded-md ${tier==='vip' ? 'bg-[#1A2140] text-white' : 'border border-[#1A2140]'}`}>$10 VIP</button>
        </div>
        <button onClick={handlePay} className="w-full bg-black text-white py-3 rounded-md">Pay Now</button>
        {status && <p className="text-red-600">{status}</p>}
      </div>
    </div>
  );
}
