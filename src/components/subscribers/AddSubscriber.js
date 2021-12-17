import "./AddSubscriber.css";
import Container from "../templates/Container";
import Button from "../templates/Button";
import { useState } from "react";
const AddSubscriber = () => {
    const [name, setName] = useState("")
    const [pincode, setPincode] = useState("")
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
        console.log("updated value", name, pincode)
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <Container className="input">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={onNameChange}></input>
                    <label htmlFor="pincode">Pincode</label>
                    <input id="pincode" type="number" onChange={onPincodeChange}></input>
                    <Button type="submit">Save</Button>
                </Container>
            </form>
        </div>
    )
}
export default AddSubscriber;