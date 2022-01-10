import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './problems-section.scss';

const ProblemsSection = () => (
  <Link smooth to="/problems#top" className="problems">
    <section className="text-center py-4">
      <h3>Problems with macOS Catalina?</h3>
      <p>Read more</p>
    </section>
  </Link>
);

export default ProblemsSection;
