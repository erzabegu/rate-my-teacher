import React from 'react'
import { ActionMeta, OnChangeValue } from 'react-select';
import Select from 'react-select'

interface Props {
    label?: string;
    type?: string;
    name: string;
    value: Array<any>;
    autoComplete?: string;
    options?: Array<any>;
    isSelect?: boolean;
    onChange: (newValue: OnChangeValue<any, any>, actionMeta: ActionMeta<any>) => void;
}

const CustomMultiselect = ({ label, type, name, value, autoComplete, options, isSelect, onChange }: Props) => {
    const customStyles = {
        menu: (provided: any, state: any) => ({
            ...provided,
        }),
        control: () => ({
            display: 'flex',
            background: 'transparent',
            paddingBlock: 2,
            minWidth: 200
        }),

    }

    const CustomOption = ({ data, innerProps, isDisabled }: any) => {
        if (!isDisabled) {
            return <div {...innerProps}>
                <div>{data.label}</div>
            </div>
        } else {
            return null
        }
    }

    return <div>
        <div>{label}</div>
        <Select
            styles={customStyles}
            onChange={onChange}
            value={value}
            placeholder={""}
            options={options}
            isMulti
            isClearable={true}
        />
    </div>

}

export default CustomMultiselect