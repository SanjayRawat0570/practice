import { useState } from 'react';


type login = {
    username: string,
    password: string
}
function User() {
    const [details, setDetails] = useState<any>([]);
    const [login, setlogin] = useState<login>({ username: '', password: '' });
    const handleclick = () => {
        details.push(login.username);
        details.push(login.password);
        setDetails([...details]);
        console.log(details);
    }
    return (
        <>
            <input  type="text" placeholder="enter username" onChange={(e) => setlogin({ ...login, username: e.target.value })} />
            <input type="text" placeholder="enter password" onChange={(e) => setlogin({ ...login, password: e.target.value })} />
            <button onClick={handleclick}>save</button>
            <ul>
                {details.length == 0 ? <li>no data</li> : details.map((item: string, index: string) => (
                    <li key={index}>{item} - {item}</li>
                ))}
            </ul>
        </>
    )
}

export default User