import React from 'react';

interface SectionType {
  title: string;
  value: string | number;
}

export default function Section(section: SectionType): JSX.Element {
  const { title, value } = section;

  return (
    <section>
      <h3>{title}</h3>
      <p>{value}</p>
    </section>
  );
}
