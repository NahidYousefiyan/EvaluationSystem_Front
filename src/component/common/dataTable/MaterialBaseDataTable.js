import React, {forwardRef, Component} from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from "material-table";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


class MaterialCustomTable extends Component {

    render() {
        const {data, columns, label, ...props} = this.props

        const dataPure = data.map(o => ({...o}));//this query is for data not extensible it cuse some problem to show data more info go to link: https://stackoverflow.com/questions/59648434/material-table-typeerror-cannot-add-property-tabledata-object-is-not-extensibl
        console.log("dataPure",dataPure,columns)
        return (

            <div className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded" style={{minWidth: "100%"}} dir="rtl">
                <MaterialTable
                    icons={tableIcons}
                    columns={this.props.columns}
                    data={dataPure}
                    title={this.props.label}

                    {...props}
                    options={{
                        actionsColumnIndex: -1
                    }}
                    localization={
                        {
                        pagination: {
                            labelDisplayedRows: '{from}-{to} از {count}'
                        },
                        toolbar: {
                            nRowsSelected: '{0} سطر(s) انتخاب شده',
                           searchPlaceholder:"جستجو"

                        },
                        header: {
                            actions: 'اقدامات'
                        },
                        body: {
                            emptyDataSourceMessage: 'هیچ اطلاعاتی یافت نشد',
                            filterRow: {
                                filterTooltip: 'فیلتر'
                            }
                        }
                    }}

                />
            </div>

        );
    }
}

export default MaterialCustomTable

