import React, {useState} from 'react';
import { Input, Button, Card} from 'antd';

/* export function Display(props)
{
    return (
        <div>
            <p>The username is {props.username}, and the password is {props.pwd}.</p>
        </div>
    )
}
 */
export default function NiceForm()
{
    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [blog, setblog] = useState([]);
    const [blogbody, setblogbody] = useState('');

    const updateUsername = (event) =>
    {
        setUsername(event.target.value);
    }

    const updatePwd = (event) =>
    {
        setPwd(event.target.value);
    }

    const updateBlog = () =>
    {
        setblog([...blog, <p>{blogbody}</p>]);
        setblogbody('');
    }

    const updateBlogBody = (event) =>
    {
        setblog(event.target.value);
    }

    //<Input/> is the same as <Input></Input> if no html syntax is needed
    return (
        <Card style = {cardStyle}>
            <h2>Sign In</h2>
            <Input
                style = {formItemStyle}
                placeholder = "username"
                size="small"
                onChange= {updateUsername}
            /> 
            <Input
                style = {formItemStyle}
                placeholder = "password"
                size = "small"
                onChange = {updatePwd}
            />
            <Input
                style = {formItemStyle}
                placeholder = "blog"
                size = "small"
                onChange = {updateBlog}
            />
            <Button
                size = "small"
                type = "primary"
                style = {buttonStyle}
                onClick = {updateBlogBody}
            >
                Submit
            </Button>
           {/*  <h3>The output</h3>
            <Display username={username} pwd = {pwd} /> */}
        </Card>
    )
}

const cardStyle = 
{
    width: "40%",
    marginLeft : "30%",
}

const formItemStyle = 
{
    marginBottom: "1.5%",
}

const buttonStyle = 
{
    width: "100%"
}

