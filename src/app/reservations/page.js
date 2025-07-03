"use client";

import ReservationSystem from '@/components/reservation-system';
import Head from 'next/head';

export default function Reservations() {
  return (
    <>
      <Head>
        <title>Reservations - COCO Tapas & Bar</title>
        <meta name="description" content="Make a reservation at COCO Tapas & Bar. Book your table online and enjoy authentic tapas with special early bird discounts." />
      </Head>
      <ReservationSystem />
    </>
  );
}