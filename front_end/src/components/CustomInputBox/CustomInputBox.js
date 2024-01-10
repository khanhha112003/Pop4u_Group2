import { Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import "./style.css";

export const CustomInputBox = ({ data = {
    regex: {
        checker: undefined,
        message: ''
    },
    placeholder: '',
    type: 'text',
    isRequired: false,
    icon: undefined
    },
    onSuccess = (value) => { },
    checkErrorMessage = (value) => { return '' } }) => {

    const [errorMsg, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTextChange = (value) => {
        const newErrMsg = checkErrorMessage(value);
        if (newErrMsg !== '') {
            setError(newErrMsg);
            return
        } 
        if (data.regex !== undefined && data.regex.checker !== undefined) {
            if (!data.regex.checker.test(value)) {
                setError(data.regex.message);
                return
            }
        }
        if (errorMsg !== '') {
            setError('');
        }
        onSuccess(value);
    }

    const inputType = (data.type === 'password' && !showPassword) ? 'password' : 'text';

    return (
        <Row>
            <Col sm={10} md={8} lg={6} xl={4} xs={10} className="mx-auto">
                {/* <div className='col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xs-10 mx-auto'> */}
                <div className='custom-input sign-in-input text-center'>
                    <input
                        className='custom-input body-small sign-in-field'
                        type={inputType}
                        placeholder={data.placeholder}
                        required={data.isRequired || false}
                        style={{ 
                            background: `url(${data.icon}) 1em`,
                            backgroundRepeat: 'no-repeat',
                        }}
                        onChange={(e) => { handleTextChange(e.target.value) }}
                    />

                    <p className="error-message body-small">{errorMsg}</p>
                </div>
            </Col>
        </Row>
    );
}