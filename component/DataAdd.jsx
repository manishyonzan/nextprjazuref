"use client"


const DataAdd = () => {
   
   
    const addthedata = async(e) => {
        const today = new Date();
        const currentTime = today.toLocaleTimeString();
        const contact = {
            "firstName": "manisha",
            "lastName": currentTime,
            "email": "manish@gamail.com",
            "avatar": "lll.pngaka"
        };
        e.preventDefault();
        const response = await fetch('/api/database', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(contact)
        });

        if (!response.ok) {
            console.log("some error");
        }
        window.alert("done");
        return await response.json();
    }


    return (
        <div>
            <form onSubmit={addthedata}>
                <input type="text" name="file" />
                <input type="submit" value="upload" />
            </form>
        </div>
    )
}

export default DataAdd