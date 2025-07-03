"use client";

import OrderOnlineSystem from '@/components/order-online-system';
import Head from 'next/head';

export default function OrderOnline() {
  return (
    <>
      <Head>
        <title>Order Online - COCO Tapas & Bar</title>
        <meta name="description" content="Order online from COCO Tapas & Bar. Coming soon! Leave your details and we'll notify you when online ordering is available." />
      </Head>
      <OrderOnlineSystem />
    </>
  );
}