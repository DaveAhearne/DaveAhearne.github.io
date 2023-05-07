import React from 'react';

export interface IContentSectionProps {
  title: string,
  id: string,
  content?: React.ReactNode,
}

function ContentSection(props: IContentSectionProps) {
  const { title, id, content } = props;
  return (
    <article id={id}>
      <h2>{title}</h2>
      {
        content ? content : <p>No content set</p>
      }
    </article>
  );
}

export default ContentSection;