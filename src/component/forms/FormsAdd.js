import React from 'react'
import Form from "../common/form";
import Joi from "joi-browser";
import {toast} from "react-toastify";
import {getNavBarForms, getNavBarFormsById, postFormsAnswers} from "../service/evaluationForm";
import RadioButtonsGroup from "./radioButton";
import BlockUi from 'react-block-ui';

class FormsAdd extends Form {


    state = {
        data: {
            name: "",
        },
        fromData: {},
        fromQuestions: [],
        answersResponse: {},
        parameter: null,
        registerDate: null,
        indexTitle: '',
        formTitle: '',
        errors: {
            name: "",
            expected_bandwidth: 0,
            upstream_port: 0,
            upstream_address: null,
            upstream_password: null,
            upstream_username: null,
        },


    };
    schema = {
        name: Joi.allow(),
    };
    doSubmit = async () => {
        const {match: {params}} = this.props
        const ans = this.state.answersResponse
        const postData = {
            formId: params.id,
            questionAnswer: ans
        }
        console.log("postData", postData, Object.entries(ans).length, this.state.fromQuestions.length)
        if (this.state.registerDate !== null) {
            toast.error("شما این فرم را قبلا پر کرده‌اید قادر به تغییر نیستید")
            return
        }

        if (Object.entries(ans).length !== this.state.fromQuestions.length) {
            toast.error("شما به همه سوالات پاسخ نداده‌اید")

        } else {
            const {data} = await postFormsAnswers(postData)
            console.log(data)
            if (data) {
                toast.success("ذخیره شد");
                this.setState({answersResponse: {}})
            } else {
                toast.error("خطا در ویرایش دپارتمان")
            }
        }


    };

    componentWillReceiveProps = async (nextProps, nextContext) => {
        console.log("change", nextProps, nextContext)
        console.log("change", nextProps, nextContext)
        if (nextProps.match.params.id !== this.state.parameter) {

            this.setState({parameter: nextProps.match.params.id, loading: true})

            const {data: allForms} = await getNavBarForms()
            console.log("allForms", allForms)
            if (!allForms.isSuccess) {
                toast.error("شما دسترسی به این فرم ندارید")
                this.setState({loading: false})

                return


            }

            // console.log("allForms", allForms.result,allForms.result.filter(m => m.id === parseInt(nextProps.match.params.id)),nextProps.match.params.id)
            // if (allForms.result.filter(m => m.id === nextProps.match.params.id).length < 1) {
            //     toast.error("شما دسترسی به این فرم نداریدSSS")
            //     this.setState({loading: false})
            //
            //     return
            // }


            const {data} = await getNavBarFormsById(nextProps.match.params.id)
            if (data.isSuccess) {


                this.setState({
                    formTitle: data.result.formTitle,
                    indexTitle: data.result.indexTitle,
                    fromQuestions: data.result.questions,
                    registerDate: data.result.registerDate

                })
            } else {
                toast.error(data.errorMessage)
            }

            this.setState({parameter: nextProps.match.params.id, loading: false})
            // console.log("froms", params, data)
        }
        if (this.state.registerDate !== null) {
            toast.error("شما این فرم را قبلا پر کرده‌اید قادر به تغییر نیستید")
        }


    }


    handleAnswerChange = (questionId, answerId) => {
        console.log("handle", questionId, answerId)
        let answersResponse = this.state.answersResponse
        answersResponse[questionId] = answerId
        this.setState({answersResponse: answersResponse})
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     return false
    // }


    componentDidMount = async () => {
        const {match: {params}} = this.props


        const {data: allForms} = await getNavBarForms()
        console.log("allForms", allForms)
        if (!allForms.isSuccess) {
            toast.error("شما دسترسی به این فرم ندارید")
            return


        }


        if (allForms.result.filter(m => m.id === parseInt(params.id)).length < 1) {
            toast.error("شما دسترسی به این فرم ندارید")
            return
        }
        const {data} = await getNavBarFormsById(params.id)
        if (data.isSuccess) {
            this.setState({
                formTitle: data.result.formTitle,
                indexTitle: data.result.indexTitle,
                fromQuestions: data.result.questions,
                registerDate: data.result.registerDate
            })
        } else {
            toast.error(data.errorMessage)
        }

        this.setState({parameter: params.id})
        if (this.state.registerDate !== null) {
            toast.error("شما این فرم را قبلا پر کرده‌اید قادر به تغییر نیستید")
        }
        console.log("froms", params, data)

    }

    render() {
        const {formTitle, indexTitle, fromQuestions} = this.state
        return (
            <BlockUi tag="div" blocking={this.state.loading} message="لطفا منتظر بمانید"
                     keepInView={true}>
                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">

                    <div className="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">

                        <div className="col-xl-12 col-xxl-12">

                            <div className="form fv-plugins-bootstrap fv-plugins-framework" id="kt_contact_add_form">
                                {/*<ApexChart data={data}/>*/}
                                <div>
                                    <div className="card-header">
                                        <h3 className="card-title">{formTitle}</h3>
                                        <div className="card-toolbar">
                                            <div className="example-tools justify-content-center">

                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="card-body">

                                            <div className="pb-5" data-wizard-type="step-content"
                                                 data-wizard-state="current">
                                            </div>
                                            <h3 className="mb-10 font-weight-bold text-dark">
                                                {indexTitle}
                                            </h3>

                                            {fromQuestions.map(m => (
                                                <div className="row">
                                                    <div className="col-xl-6">
                                                        <RadioButtonsGroup answers={m.answers} question={m}
                                                                           changes={this.handleAnswerChange}/>

                                                    </div>

                                                </div>
                                            ))}

                                            {this.state.registerDate===null && this.renderButton("ذخیره")}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </BlockUi>

        );
    }
}

export default FormsAdd;