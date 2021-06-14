import React from "react";

const Select = ({name, label, options, error, ...rest}) => {
    return (
        <div className="form-group">

            <div className="form-group row fv-plugins-icon-container">
                <label htmlFor={name} className="col-xl-3 col-lg-3 col-form-label">
                    {label}
                </label>
                <div className="col-lg-9 col-xl-9">
                    <select name={name} id={name} {...rest} className="form-control form-control-solid">
                        <option value=""/>
                        {options.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        </div>
    );
};

export default Select;
