import "./AddSubscriber.css";
import Container from "../templates/Container";
import Button from "../templates/Button";
import { useState } from "react";
import ErrorModal from '../templates/ErrorModal'

const AddSubscriber = (props) => {
    const [name, setName] = useState("")
    const [pincode, setPincode] = useState("")
    const [error, setError] = useState()
    const onNameChange = (events) => {
        console.log(events.target.value)
        setName(events.target.value)
    }
    const onPincodeChange = (events) => {
        console.log(events.target.value)
        setPincode(events.target.value)
    }
    const onSubmitHandler = (events) => {
        events.preventDefault();
        if (name.trim().length === 0) {
            console.log("name is not valid")
            setError({ title: "invalid name", content: "name is mandatory to get your desired reasult." })
            return
        }
        if (pincode.trim().length === 0) {
            console.log("pincode is not valid")
            setError({ title: "invalid Pincode", content: "pincode is mandatory to get your desired reasult." })
            return
        }
        if (pincode.length < 5 || pincode < 0) {
            console.log("please ender valid pincode thad should be more than 4 digit")
            setError({ title: "invalid Pincode", content: "please ender valid pincode thad should be more than 4 digit" })
            return
        }
        console.log("updated value", name, pincode)
        props.onAddSubscriber(name, pincode)
        setName('')
        setPincode('')
    }
    const onCloseHandler=()=>{
        setError(null)
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} content={error.content} onClose={onCloseHandler}/>}

            <form onSubmit={onSubmitHandler}>
                <Container className="input">
                    <label htmlFor="name">Name</label>
                    <input value={name} id="name" type="text" onChange={onNameChange}></input>
                    <label htmlFor="pincode">Pincode</label>
                    <input value={pincode} id="pincode" type="number" onChange={onPincodeChange}></input>
                    <Button type="submit">Save</Button>
                </Container>
            </form>
        </div>
    )
}
export default AddSubscriber;