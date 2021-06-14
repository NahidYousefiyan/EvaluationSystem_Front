import React, {useEffect, useState} from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {Calendar} from "react-modern-calendar-datepicker";

const MaterialDatePickerRange = ({onClickHandle}) => {
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });
    // useEffect(() => {
    //     console.log("effect", selectedDayRange)
    // });


    return (
        <React.Fragment>

            <div className="row"
            >


                <div className="col-lg-10">

                    <DatePicker
                        value={selectedDayRange}
                        onChange={setSelectedDayRange}
                        inputPlaceholder="بازه زمانی را انتخاب کنید"
                        shouldHighlightWeekends

                        locale="fa"
                    />


                </div>
                <div className="col-lg-2">

                    <button onClick={() => onClickHandle(selectedDayRange)} className="btn btn-primary">
                     <span className="fa fa-safari" style={{color:"red"}}></span>
                    </button>

                </div>
            </div>

        </React.Fragment>

    );
    // const [selectedDayRange, setSelectedDayRange] = useState({
    //     from: null,
    //     to: null
    // });
    // return (
    //     <React.Fragment>
    //
    //         <DatePicker
    //             value={selectedDayRange}
    //             onChange={setSelectedDayRange}
    //             shouldHighlightWeekends
    //              locale="fa"
    //
    //         />
    //         <button onClick={()=>onClickHandle(selectedDayRange)} className="btn btn-primary">جستجو</button>
    //
    //     </React.Fragment>
    //
    // );
};


export default MaterialDatePickerRange;