export default class Client{
    clients(){
        return new Promise((resolve) => {
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8080/Concierge01/rest/client");
            request.onreadystatechange = () => {
                let raw = request.responseText;
                let objectified = JSON.parse(JSON.stringify(raw));
                resolve(objectified);
            }
            request.send();
        });
    }

}