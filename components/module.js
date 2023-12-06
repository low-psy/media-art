const module = ({ children, className }) => {
  return <div className={`${className} absolute`}>{children}</div>;
};

export default module;
