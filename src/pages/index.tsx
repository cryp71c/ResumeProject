import React from "react"
import Head from 'next/head'
import { Nav } from "@/components/nav"
import { Content } from "@/components/content";


//bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
export default function Home() {
  return (
    <>
    <Nav />
    <Content />
    </>
  );
}
