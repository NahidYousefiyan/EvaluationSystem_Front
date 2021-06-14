import React from "react";

const InputType2 = ({name, label, error, ...rest}) => {
    return (
        <div className="form-group">

            <div className="form-group row fv-plugins-icon-container">
                <label htmlFor={name} className="col-xl-3 col-lg-3 col-form-label">
                    {label}
                </label>
                <div className="col-lg-12 col-xl-12">
                    <input {...rest}
                           className="form-control form-control-lg form-control-solid"
                           name={name} id={name}/>
                    <div className="fv-plugins-message-container">
                        {error && <div className="alert alert-danger">{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputType2;
