import React, {Component} from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import InputType2 from "./inputType2";
import CheckBox from "./CheckBox";
import _ from "lodash";

class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    validate = () => {
        const options = {abortEarly: false};
        const {error} = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        console.log(errors)
        return errors;

    };

    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name]};
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("sss")
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;

        this.doSubmit(e);
    };

    handleChange = ({currentTarget: input}) => {
        console.log('input', input)

        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;

        this.setState({data, errors});
    };
    handleChangeSelected = (input, action, name, func = null) => {
        console.log('inputss', input, action, name)

        const data = {...this.state.data};
        data[name] = input.value;
        if (func !== null) {
            func(input)
        }

        this.setState({data});

    };
    handleCheckBoxChange = ({currentTarget: input}) => {
        console.log("ssssss", input)
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = {...this.state.data};
        console.log(data[input.name], input.name)
        data[input.name] = !data[input.name]
        // data[input.name] = input.value;

        this.setState({data, errors});
    };

    renderButton(label) {
        return (

            <button disabled={this.validate()}
                    className="btn btn-primary btn-shadow-hover font-weight-bolder w-100 py-3">
                {label}
            </button>
        );
    }

    renderSelect(name, label, options) {
        const {data, errors} = this.state;

        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderInput(name, label, type = "text") {
        const {data, errors} = this.state;

        return (
            <Input
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }

    renderInputType2(name, label, type = "text") {
        const {data, errors} = this.state;

        return (
            <InputType2
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    }
    renderInputWithOnChange(name, label, onChange, baseType, type = "text") {
        const {data, errors} = this.state;
        const val = _.get(data, `${baseType}.${name}`)
        return (
            <InputType2
                type={type}
                name={name}
                label={label}
                value={val}
                onChange={onChange}
                error={errors[name]}
            />
        );

    }

    renderCheckBox(name, label, type = "text") {
        const {data, errors} = this.state;

        return (
            <CheckBox
                type={type}
                name={name}
                checked={data[name]}
                label={label}
                onChange={this.handleCheckBoxChange}
                error={errors[name]}
            />
        );
    }
}

export default Form;
