import React, { Fragment, Component } from 'react';
import axios from 'axios';
import {
    createStyles,
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import "../styles/ContactMeForm.css"

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& label.MuiInput-input': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiInputBase-input': {
            color: 'white'
        },
        '& .MuiButton-fullWidth': {
            width: '8em'
        },
        '& .MuiInputLabel-formControl': {
            color: 'grey'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        }
    },
})(TextField);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '4em'
        },
        margin: {
            margin: theme.spacing(1),
        },
        width: {
            width: '75%'
        },
        input: {
            color: "white"
        },
        button: {
            width: '8rem'
        }
    }),
);

class ContactMeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                email: "",
                phoneNumber: "",
                message: ""
            },
            errors: {
                emailOrPhone: false,
                email: false,
                phone: false
            }
        }
    }

    componentDidMount() {
        if (this.props.editMode) {
            let entryProps = this.props.inputEntry;
            this.setState({
                form: {
                    ...this.state.form,
                    ...entryProps
                }
            });
        } else {
            this.setState({
                form: {
                    ...this.state.form,
                    username: this.props.username
                }
            })
        }
    }

    addEntry = () => {
        if (!this.props.editMode) {
            axios.post(`${axios.defaults.baseURL}/api/whitelist`, this.state.form)
                .then(res => {
                    this.props.addEntry(res.data);
                })
                .catch(err => {
                    this.props.createToast({ type: "error", message: `error adding entry` })
                })
        } else {
            axios.put(`${axios.defaults.baseURL}/api/whitelist`, this.state.form)
                .then(res => {
                    this.props.updateEntry(res.data);
                })
                .catch(() => {
                    this.props.createToast({ type: "error", message: `Failed to update ${this.state.form.username}` })
                })
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            errors: {
                emailOrPhone: false,
                email: false,
                phone: false 
            }
        })

        // phone number and email are blank
        if(this.state.form.email === "" && this.state.form.phoneNumber === "") {
            this.setState({
                errors: {
                    ...this.state.errors,
                    emailOrPhone: true
                }
            })
        } 

        // non blank phone number check
        if(this.state.form.phoneNumber !== "") {
            if (!/\(\d{3}\)\-\d{3}\-\d{4}/.test(this.state.form.phoneNumber)) {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        phone: true
                    }
                })
            }
        }

        // non blank email check
        if(this.state.form.email !== "") {
            if (!/\w+@\w+\.\w+/.test(this.state.form.email)) {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        email: true
                    }
                })
            }
        }
    }

    handleFieldChange = (event) => {
        switch (event.target.id) {
            case "name": {
                const inName = event.target.value;
                this.setState(prevState => ({
                    form: {
                        ...prevState.form,
                        name: inName
                    }
                }))
                break;
            }
            case "email": {
                const inEmail = event.target.value;
                this.setState(prevState => ({
                    form: {
                        ...prevState.form,
                        email: inEmail
                    }
                }))
                break;
            }
            case "phoneNumber": {
                const inPhoneNumber = event.target.value;
                if(inPhoneNumber.length < this.state.form.phoneNumber.length) {
                    if(inPhoneNumber.length === 10) {
                        this.setState(prevState => ({
                            form: {
                                ...prevState.form,
                                phoneNumber: inPhoneNumber.slice(0, 9)
                            }
                        }))
                    } else if(inPhoneNumber.length === 6) {
                        this.setState(prevState => ({
                            form: {
                                ...prevState.form,
                                phoneNumber: inPhoneNumber.slice(1, 4)
                            }
                        }))
                    } else {
                        this.setState(prevState => ({
                            form: {
                                ...prevState.form,
                                phoneNumber: inPhoneNumber
                            }
                        }))
                    }
                } else {
                    if (inPhoneNumber === "" || Number(inPhoneNumber[inPhoneNumber.length - 1]) || inPhoneNumber[inPhoneNumber.length - 1] === "0") {
                        if (inPhoneNumber.length === 15) {
                            return;
                        }
                        if (inPhoneNumber.length === 4) {
                            this.setState(prevState => ({
                                form: {
                                    ...prevState.form,
                                    phoneNumber: "(" + inPhoneNumber.slice(0,3) + ")-" + inPhoneNumber[inPhoneNumber.length-1]
                                }
                            }))
                        } else if (inPhoneNumber.length === 10) {
                            this.setState(prevState => ({
                                form: {
                                    ...prevState.form,
                                    phoneNumber: inPhoneNumber.slice(0, inPhoneNumber.length-1) + "-" + inPhoneNumber[inPhoneNumber.length-1]
                                }
                            }))
                        } else {
                            this.setState(prevState => ({
                                form: {
                                    ...prevState.form,
                                    phoneNumber: inPhoneNumber
                                }
                            }))
                        }
                    }
                }
                break;
            }
            case "message": {
                const inMessage = event.target.value;
                this.setState(prevState => ({
                    form: {
                        ...prevState.form,
                        message: inMessage
                    }
                }))
                break;
            }
            default: {
                break;
            }
        }
    }

    getEmailError() {
        if(this.state.errors.email) {
            return "Invalid email address"
        } else if(this.state.errors.emailOrPhone) {
            return "Email or # required"
        } else {
            return ""
        }
    }

    render() {
        return (
            <Fragment>
                <div className={"form-spacer-top"} />
                <form autoComplete={"chrome-off"} className={"new-entry-form"} onSubmit={(e) => this.handleSubmit(e)}>
                    <CssTextField
                        onChange={(event) => this.handleFieldChange(event)}
                        autoComplete={"off"}
                        role="presentation"
                        label="Name"
                        variant="outlined"
                        value={this.state.form.name}
                        id="name"
                    />
                    <CssTextField
                        onChange={(event) => this.handleFieldChange(event)}
                        autoComplete={"off"}
                        role="presentation"
                        label="Email Address"
                        variant="outlined"
                        error={this.state.errors.email || this.state.errors.emailOrPhone}
                        helperText={this.getEmailError()}
                        value={this.state.form.email}
                        id="email"
                    />
                    <CssTextField
                        onChange={(event) => this.handleFieldChange(event)}
                        autoComplete={"off"}
                        role="presentation"
                        label="Phone Number"
                        variant="outlined"
                        error={this.state.errors.phone || this.state.errors.emailOrPhone}
                        helperText={this.state.errors.phone ? "Invalid phone number" : ""}
                        value={this.state.form.phoneNumber}
                        id="phoneNumber"
                    />
                    <CssTextField
                        onChange={(event) => this.handleFieldChange(event)}
                        autoComplete={"off"}
                        role="presentation"
                        className={"cm-message-form"}
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={10}
                        value={this.state.form.message}
                        id="message"
                    />
                    <Button type="submit" variant="contained" className={useStyles.button} >
                        Submit
                    </Button>
                </form>
            </Fragment>
        );
    }
}

export default ContactMeForm;