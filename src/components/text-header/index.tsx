import React from 'react';
import './index.scss';
export interface TextHeaderType {
  title: string;
  subtitle1: string;
  subtitle2: string;
}
const TextHeader = ({ title, subtitle1, subtitle2 }: TextHeaderType) => {
  return (
    <div>
      <div className="title-form">{title}</div>
      <div className="subtitle-form">
        {subtitle1} <a href="/">{subtitle2}</a>
      </div>
    </div>
  );
};

export default TextHeader;
