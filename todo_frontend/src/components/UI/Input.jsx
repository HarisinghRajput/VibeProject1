const Input = ({
    label,
    error,
    type = 'text',
    className = '',
    ...props
}) => {
    return (
        <div className="form-group">
            {label && <label className="form-label">{label}</label>}
            <input
                type={type}
                className={`form-input ${error ? 'error' : ''} ${className}`.trim()}
                {...props}
            />
            {error && <span className="form-error">{error}</span>}
        </div>
    );
};

export default Input;
