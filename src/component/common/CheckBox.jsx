import React from "react";

const CheckBox = ({name, label, error, ...rest}) => {
    return (
        <div className="form-group row">
            {/*<label htmlFor={name} className="col-3 col-form-label">{label}</label>*/}
            <div className="col-12 col-form-label">
                <div className="checkbox-inline">
                    <label className="checkbox checkbox-success">
                        <input {...rest} name={name} id={name} type="checkbox"/>
                        <span></span>
                        {label}
                    </label>
                </div>
                <span className="form-text text-muted">
                                                     {error && <div className="alert alert-danger">{error}</div>}
                                                </span>
            </div>
        </div>

    );
};

export default CheckBox;
