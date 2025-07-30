import { useRouter } from 'next/router';

export default function Ticket() {
  const router = useRouter();
  const { id } = router.query;
  // TODO: fetch ticket data using id
  return (
    <div className="min-h-screen bg-[#FEF9EF] flex items-center justify-center p-4">
      <div className="bg-white p-4 rounded-md w-full max-w-md shadow">
        <h1 className="text-xl font-semibold text-[#1A2140] text-center mb-2">Event Title</h1>
        <p className="text-center text-[#1A2140] mb-2">Date · Time · Venue</p>
        <hr className="my-2" />
        <div className="mb-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Name</span>
            <span className="font-semibold text-[#1A2140]">Guest Name</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Ticket ID</span>
            <span className="font-semibold text-[#1A2140]">{id}</span>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Seat</span>
            <span className="font-semibold text-[#1A2140]">A1</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Price</span>
            <span className="font-semibold text-[#1A2140]">$5</span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded" style={{ width: 260, height: 260 }}>
            {/* TODO: QR code */}
          </div>
        </div>
        <p className="text-center text-[#1A2140] mt-2">Thank you for choosing Nasiye</p>
      </div>
    </div>
  );
}
