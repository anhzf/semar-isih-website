import React from 'react';
import { IoLogoLinkedin } from 'react-icons/io';

const JuryCard = ({
  name,
  imgSrc,
  desc,
  linkedinLink,
  className,
  ...props
}) => (
  <article className={`judge-card ${className}`} {...props}>
    <img
      src={imgSrc}
      alt={name}
      className="w-40 h-40 rounded-full ring-4 ring-blue-500 ring-opacity-80 ring-offset-2 ring-offset-white object-cover"
    />

    <h5 className="my-4 font-medium text-2xl text-center text-purple-500">{name}</h5>

    <blockquote className="px-4 pt-2 pb-4 text-center italic">
      {desc}
    </blockquote>

    <div className="p-4 flex flex-row gap-x-4">
      <a href={linkedinLink} target="_blank">
        <IoLogoLinkedin className="w-10 h-10 text-blue-200 hover:text-blue-500" />
      </a>
    </div>
  </article>
);

export default React.memo(JuryCard);