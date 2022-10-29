import { HubConnectionBuilder } from '@microsoft/signalr';

export const initWSConnection = (pathSuscription = '') => {
  const connection = new HubConnectionBuilder()
    .withUrl(`https://sockethackday.azurewebsites.net/hubs/${pathSuscription}`)
    .withAutomaticReconnect()
    .build();

  return connection;
}

export const getData = (connection, method, setData) => {
  if (connection) {
    connection.start()
      .then(result => {
        console.log('WS New Connected!');

        connection.on(method, value => {
          /*const data = [...latestUser.current];
          data.push(value);*/

          console.log(value);

          setData(value);
        })
      })
      .catch(e => console.log('WS Connection failed: ', e));
  }
}
