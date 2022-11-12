const Container = ({ children, className }) => {
	return <div className={`px-5 md:px-20 ${className}`}>{children}</div>;
};

export default Container;
