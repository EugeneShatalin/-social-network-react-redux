import React from "react";
import styles from "./FormsControls.module.css";

//FormControl - общий каркас для отрисовки элементов формы
//input и meta приходят в пропсах из Field компоненты
//{input, meta, child, ...props}  диструкторизация данных,в ...props остаеться все кроме
// педыдущих перечисленых данных
const FormControl  = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error; //meta.touched и meta.error данные из обьекта meta
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}



export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}