import React, {FC} from 'react';

interface LinkButtonProps {
  className: string;
  style?: React.CSSProperties;
  icon: JSX.Element;
  label: string;
  link: string;
}

const LinkButton: FC<LinkButtonProps> = (props) => {
  return (
    <a
      style={props.style}
      className={props.className}
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      {props.icon}
      <span style={{marginLeft: 10}}>{`${props.label}`}</span>
    </a>
  );
};

export {LinkButton};
