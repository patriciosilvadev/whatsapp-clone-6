import React from 'react';

const Message = ({message}) => {
    //console.log(message.from)

    return(
        <div style = {message.from === "me" ? styles.sent : styles.received}>
            <div>{message.content}</div>        
        </div>
    )
};

export default Message;




const container = {
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 12,
    marginBottom: 6,
    marginTop: 6,
    marginRight: 12,
    marginLeft:12,
    color: '#FFF',
    width:'80%',
};

const styles = {
    sent: {
        ...container,
        alignSelf:'flex-end',
    },
    received:{
        ...container,
    },
};