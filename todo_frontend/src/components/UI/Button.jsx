const Button = ({
    children,
    variant = 'primary',
    size = 'default',
    loading = false,
    disabled = false,
    onClick,
    type = 'button',
    className = '',
    ...props
}) => {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const sizeClass = size === 'sm' ? 'btn-sm' : '';
    const fullClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

    return (
        <button
            type={type}
            className={fullClass}
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <span className="spinner" />}
            {children}
        </button>
    );
};

export default Button;
