import React from 'react'
import './TopicBox.css'

export default function TopicBox() {
    const a=10;
    const b=20;
    const c=a+b;
  return (
    <div>
      <div className="topicBox">
        <span className="text">This is the topic {c}</span>
        <br />
        <span className="text1">
          Paragraphs are the building blocks of papers. Many students define
          paragraphs in terms of length: a paragraph is a group of at least five
          sentences, a paragraph is half a page long, etc. In reality, though,
          the unity and coherence of ideas among sentences is what constitutes a
          paragraph.
        </span>
      </div>
    </div>
  );
}
