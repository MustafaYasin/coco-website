import Head from 'next/head';
import ReservationSystem from '@/components/reservation-system';

export default function Reservations() {
  return (
    <>
      <Head>
        <title>Reservations - COCO Tapas & Bar</title>
        <meta name="description" content="Make a reservation at COCO Tapas & Bar. Book your table online and enjoy authentic tapas with special early bird discounts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ReservationSystem />
    </>
  );
}