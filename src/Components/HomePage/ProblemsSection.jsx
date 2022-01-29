import React from 'react';
import Link from "next/link";
// import { HashLink as Link } from 'react-router-hash-link';
import './problems-section.module.scss';

const ProblemsSection = () => (
  <Link smooth href="/problems#top" className="problems">
    <section className="text-center py-4">
      <h3>Problems with macOS Catalina?</h3>
      <p>Read more</p>
    </section>
  </Link>
);

export default ProblemsSection;
