const Primary = ({ className, ...props }) => (
  <button className={`primary click ${className}`} type="button" {...props} />
);

export default Primary;
